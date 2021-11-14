import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


# Use a service account to access firestore
cred = credentials.Certificate('./creds/firebase-sa.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

# Path to json data files
import_path = 'officedb/collections'
