import json
from os import listdir
from os.path import isfile, join

from . import db, import_path


class AutocommitBatch():
    def __init__(self, db, autocommit_len = 500):
        self.db = db
        # Max number of changes before autocommit
        self.autocommit_len = autocommit_len

        self._init_batch()

    def _init_batch(self):
        # Create new batch and set entries to 0
        self.batch = self.db.batch()
        self.num_batch = 0

    def _before_method(self):
        # Commit if max number of changes is reached
        if self.num_batch >= self.autocommit_len:
            self.commit()
            self._init_batch()

        # Add to batch
        self.num_batch += 1

    def create(self, *args, **kwargs):
        self._before_method()
        self.batch.create(*args, **kwargs)

    def set(self, *args, **kwargs):
        self._before_method()
        self.batch.set(*args, **kwargs)
    
    def update(self, *args, **kwargs):
        self._before_method()
        self.batch.update(*args, **kwargs)
    
    def delete(self, *args, **kwargs):
        self._before_method()
        self.batch.delete(*args, **kwargs)

    def commit(self):
        # Commit and reset batch number
        self.batch.commit()
        self.num_batch = 0

def get_filenames(path):
    return (f for f in listdir(path) if isfile(join(path, f)))

def batch_for_collections(base_doc, col_func):
    batch = AutocommitBatch(db)

    for filename in get_filenames(import_path):
        fpath = join(import_path, filename)

        with open(fpath) as f:
            # Load collection data 
            data = json.load(f)

            # Collection will share the same name as its json file
            col_name = filename.split('.')[0]
            col_ref = base_doc.collection(col_name)

            # Make change to collection
            col_func(col_ref, batch, data)

    # Commit changes for all collections
    batch.commit()

def _export_col_batch(col_ref, batch, data):
    # Add or update each item from json file
    for doc_id, val in data.items():
        doc_ref = col_ref.document(doc_id)
        batch.set(doc_ref, val)

def _delete_col_batch(col_ref, batch, _data):
    # Delete everything from the collection
    for doc in col_ref.stream():
        batch.delete(doc.reference)

def _reset_col_batch(col_ref, batch, data):
    for doc in col_ref.stream():
        doc_dict = data.pop(doc.id, None)

        # Update items from json file and delete the others
        if doc_dict:
            batch.update(doc.reference, doc_dict)
        else:
            batch.delete(doc.reference)

    _export_col_batch(col_ref, batch, data)

def export_to_db(base_doc):
    batch_for_collections(base_doc, _export_col_batch)

def delete_db(base_doc):
    batch_for_collections(base_doc, _delete_col_batch)

def reset_db(base_doc):
    batch_for_collections(base_doc, _reset_col_batch)

def import_from_db(base_doc):
    for collection in base_doc.collections():
        # Get all data from collection organized as dict
        data = {doc.id: doc.to_dict() for doc in collection.stream()}

        # Write data to corresponding json file
        with open(join(import_path, f'{collection.id}.json'), 'w') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
