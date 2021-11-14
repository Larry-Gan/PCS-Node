from flask_restplus import Resource
from flask import current_app

from officedatamanager.main.utils.swagger import documented_endpoint
from officedatamanager.main.docs.specs.meetings_spec import GeoidSpec
from officedatamanager.main.lib.meetings_logic import geoids_search

meetings = GeoidSpec.api


@meetings.route('/geoids')
class MeetingsByGeoid(Resource):

    @documented_endpoint(GeoidSpec)
    def post(self, geoids):
        return geoids_search(current_app, geoids)
