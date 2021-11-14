from flask_restplus import Api
from flask import Blueprint

from .geometries import geometries


blueprint = Blueprint('api', __name__, url_prefix='/api')

api = Api(
    blueprint,
    title='Geo Info Provider',
    description='Uses Google Maps API and GIS to provide relevant geographical information for an address or area.',
    version='1.0',
    doc='/doc'
)

api.add_namespace(geometries, path='/v1/geometries')
