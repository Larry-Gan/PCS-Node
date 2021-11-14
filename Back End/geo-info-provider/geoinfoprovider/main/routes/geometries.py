from flask_restplus import Resource
from flask import current_app

from geoinfoprovider.main.utils.swagger import documented_endpoint
from geoinfoprovider.main.docs.specs.geometries_spec import GeometriesSpec
from geoinfoprovider.main.lib.geometries_logic import get_geometries

geometries = GeometriesSpec.api


@geometries.route('/')
class Geometries(Resource):

    @documented_endpoint(GeometriesSpec)
    def get(self, address):
        result = get_geometries(current_app, address)
        return result, 200
