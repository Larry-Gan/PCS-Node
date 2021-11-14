import os
from flask import Flask
from firebase_admin import firestore

from .config import config_by_name
from .routes import blueprint


def create_app(config_name=None):
    app = Flask(__name__)
    config = config_by_name[config_name or 'dev']

    app.config.from_object(config)
    app.register_blueprint(blueprint)

    env = 'prod' if os.environ.get('ENV') == 'prod' else 'dev'

    app.firestore = firestore.client()
    app.officedb = app.firestore.collection(env).document('officedb')

    return app
