from flask_restplus import fields


geometry_field = {
    'geoid': fields.String(description='The geoid of the geometry'),
    'name': fields.String(description='The name of the geometry')
}

shapefile_field = fields.String(description='The name of the relevant shapefile')

name_field = fields.String(description='The name of the relevant census layer')
