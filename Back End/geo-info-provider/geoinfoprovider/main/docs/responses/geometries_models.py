from flask_restplus import Namespace, fields

from .fields import name_field, shapefile_field, geometry_field


api = Namespace('Geometries', description='Fetch the relevant geometries for an address')

geometries_model = api.model('Geometries', {
    'layers': fields.List(fields.Nested(api.model('Single Layer', {
        'name': name_field,
        'shapefiles': fields.List(fields.Nested(api.model('Single Shapefile', {
            'shapefile': shapefile_field,
            'geometries': fields.List(fields.Nested(
                api.model('Single Geometry', geometry_field)
            ))
        })))
    })))
})
