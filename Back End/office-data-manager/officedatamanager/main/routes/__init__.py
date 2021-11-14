from flask_restplus import Api
from flask import Blueprint

from .offices import offices
from .meetings import meetings


blueprint = Blueprint('api', __name__, url_prefix='/api')

api = Api(
    blueprint,
    title='Office Data Manager',
    description='Manages and provides data about each office, meeting, and suggested changes.',
    version='1.0',
    doc='/doc'
)

api.add_namespace(offices, path='/v1/offices')
api.add_namespace(meetings, path='/v1/meetings')
