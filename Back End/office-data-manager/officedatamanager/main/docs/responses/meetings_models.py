from flask_restplus import Namespace, fields

from .fields import (
    geoid_field,
    website_field,
    virtual_location_field,
    address_field,
    time_field,
    timezone_field,
    week_field,
    day_field,
    frequency_field,
    first_date
)


api = Namespace('Meetings', description='Fetch data about each meeting')

meetings_model = api.model('Meetings', {
    'meetings': fields.List(fields.List(fields.Nested(api.model('Single Meeting', {
        'geoid': geoid_field,
        'website': website_field,
        'location': fields.Nested(api.model('Meeting Location', {
            'virtual': virtual_location_field,
            'address': fields.Nested(api.model('Meeting Address', address_field))
        })),
        'schedule': fields.List(fields.Nested(api.model('Meeting Schedule', {
            'timezone': timezone_field,
            'time': fields.Nested(api.model('Meeting Time', time_field)),
            'week': week_field,
            'day': day_field,
            'frequency': frequency_field,
            'firstDate': first_date
        })))
    }))))
})
