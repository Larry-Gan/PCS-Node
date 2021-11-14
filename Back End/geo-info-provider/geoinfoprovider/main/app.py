from flask import Flask

from .config import config_by_name
from .routes import blueprint
from geoinfoprovider.main.lib.postgis import PostGIS
from geoinfoprovider.main.lib.geocode import Geocode


def create_app(config_name=None):
    app = Flask(__name__)
    config = config_by_name[config_name or 'dev']

    app.config.from_object(config)
    app.register_blueprint(blueprint)

    app.postgis = PostGIS()
    app.geocode = Geocode()

    return app
