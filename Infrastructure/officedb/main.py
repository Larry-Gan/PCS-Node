import sys

from officedb import db
from officedb.database import import_from_db, export_to_db, reset_db, delete_db
from officedb.generate import generate


def main():
    if len(sys.argv) != 2:
        print('valid operations: import, export, reset, delete, or generate')
        return 1

    env = 'dev'
    base_doc_name = 'officedb'
    base_doc = db.collection(env).document(base_doc_name)

    if sys.argv[1] == 'import':
        import_from_db(base_doc)
    elif sys.argv[1] == 'export':
        export_to_db(base_doc)
    elif sys.argv[1] == 'reset':
        reset_db(base_doc)
    elif sys.argv[1] == 'delete':
        delete_db(base_doc)
    elif sys.argv[1] == 'generate':
        generate()


if __name__ == '__main__':
    main()
