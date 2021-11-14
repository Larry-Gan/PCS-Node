import firebase_admin
from firebase_admin import credentials


# Use a service account
fb_cred = credentials.Certificate('./creds/firebase-sa.json')
firebase_admin.initialize_app(fb_cred)
