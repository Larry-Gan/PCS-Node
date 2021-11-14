from flask_restplus import Resource
from flask import current_app

from officedatamanager.main.utils.swagger import documented_endpoint
from officedatamanager.main.docs.specs.offices_spec import GeoidSpec, OfficeIDSpec
from officedatamanager.main.lib.offices_logic import geoids_search, office_ids_search

offices = GeoidSpec.api


@offices.route('/geoids')
class OfficesByGeoid(Resource):

    @documented_endpoint(GeoidSpec)
    def post(self, geoids):
        return geoids_search(current_app, geoids)


@offices.route('/office_ids')
class OfficesByID(Resource):

    @documented_endpoint(OfficeIDSpec)
    def post(self, office_ids):
        return office_ids_search(current_app, office_ids)
