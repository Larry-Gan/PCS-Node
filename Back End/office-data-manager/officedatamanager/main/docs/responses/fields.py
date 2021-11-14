from flask_restplus import fields


name_field = {
    'first': fields.String(description='The first name of the person'),
    'last': fields.String(description='The last name of the person')
}

geoid_field = fields.String(description='The geoid of the corresponding location')

office_id_field = fields.String(description='The ID of the office')

title_field = fields.String(description='The name of the office')

website_field = fields.String(description='A website URL with more information')

timestamp_field = fields.Float(description='The timestamp of the last update to the data')

state_field = fields.String(description='The relevant state')

time_range_field = {
    'start': fields.Float(description='The start timestamp of the range'),
    'end': fields.Float(description='The end timestamp of the range')
}

email_field = fields.String(description='The contact email')

phone_field = {
    'country': fields.String(description='The country code'),
    'area': fields.String(description='The area code'),
    'office': fields.String(description='The office number'),
    'line': fields.String(description='The line number')
}

gender_field = fields.String(description='Gender as MALE, FEMALE, NONBINARY, or UNKNOWN')

term_end_field = fields.String(description='The timestamp of the end of the current term')

social_media_link_field = fields.String(description='The URL of a relevant social media profile')

virtual_location_field = fields.String(description='The virtual link to an event')

address_field = {
    'street': fields.String(description='The street of the address'),
    'city': fields.String(description='The city of the location'),
    'state': fields.String(description='The state of the location'),
    'zip': fields.String(description='The zip code of the location')
}

time_field = {
    'hour': fields.Integer(description='The hour of the time'),
    'minute': fields.Integer(description='The minute of the time')
}

timezone_field = fields.Float(description='The timezone number')

week_field = fields.Integer(description='The week of the month an event occurs')

day_field = fields.Integer(description='The day of the week an event occurs')

frequency_field = fields.Integer(description='How often the event is repeated')

first_date = fields.Float(description='The first date of the event as a timestamp')
