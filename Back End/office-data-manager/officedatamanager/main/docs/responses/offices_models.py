from flask_restplus import Namespace, fields

from .fields import (
    name_field,
    geoid_field,
    office_id_field,
    title_field,
    website_field,
    timestamp_field,
    state_field,
    time_range_field,
    email_field,
    phone_field,
    gender_field,
    term_end_field,
    social_media_link_field
)


api = Namespace('Offices', description='Fetch data about each office')

offices_preview_model = api.model('Offices Preview', {
    'offices': fields.List(fields.List(fields.Nested(api.model('Single Office Preview', {
        'officeholder': fields.Nested(api.model('Officeholder Preview', {
            'name': fields.Nested(api.model('Officeholder Name', name_field))
        })),
        'geoid': geoid_field,
        'officeId': office_id_field,
        'title': title_field
    }))))
})

offices_full_model = api.model('Offices Full', {
    'offices': fields.List(fields.Nested(api.model('Single Office Full', {
        'title': title_field,
        'website': website_field,
        'timestamp': timestamp_field,
        'state': state_field,
        'filingWindow': fields.Nested(api.model('Office Filing Window', time_range_field)),
        'term': fields.Nested(api.model('Office Term', time_range_field)),
        'contact': fields.Nested(api.model('Office Contact', {
            'email': email_field,
            'phone': fields.Nested(api.model('Office Contact Phone', phone_field))
        })),
        'officeholder': fields.Nested(api.model('Officeholder', {
            'gender': gender_field,
            'termEnd': term_end_field,
            'name': fields.Nested(api.model('Officeholder Name', name_field)),
            'socialMedia': fields.Nested(api.model('Officeholder Social Media', {
                'facebook': social_media_link_field,
                'twitter': social_media_link_field,
                'instagram': social_media_link_field
            }))
        }))
    })))
})
