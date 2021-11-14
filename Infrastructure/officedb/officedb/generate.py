import json
import random
import string
from os.path import join
from datetime import datetime

from . import import_path


# Possible characters for ID
ID_CHARS = string.ascii_uppercase + string.ascii_lowercase + string.digits
# Length of ID
ID_LEN = 20
# Number of offices and meetings to generate
NUM_OFFICES = 30
NUM_MEETINGS = 7
# Geoids will range from 0 to NUM_GEOID
NUM_GEOID = 5

def generate_docs(col_name, num, generate_func):
    docs = {}

    for i in range(num):
        # Randomize ID
        doc_id = ''.join(random.choices(ID_CHARS, k=ID_LEN)) + str(i)
        
        # Generate document for ID
        docs[doc_id] = generate_func(i + 1)

    # Write to json file
    with open(join(import_path, f'{col_name}.json'), 'w') as f:
        json.dump(docs, f, ensure_ascii=False, indent=4)

    return docs

def generate_office_doc(num):
    return {
        'title': f'Office #{num}',
        'website': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'timestamp': datetime.now().timestamp(),
        'state': 'OR',
        'filingWindow': {
            'start': datetime(2020, 3, 1).timestamp(),
            'end': datetime(2020, 8, 1).timestamp()
        },
        'term': {
            'start': datetime(2021, 1, 1).timestamp(),
            'end': datetime(2023, 1, 1).timestamp()
        },
        'contact': {
            'email': f'politician{num}@gmail.com',
            'phone': {
                'country': '1',
                'area': '503',
                'office': f'{num}{num}{num}',
                'line': f'{num}{num}{num}{num}'
            }
        },
        'officeholder': {
            'gender': random.choice(('MALE', 'FEMALE', 'NONBINARY', 'UNKNOWN')),
            'termEnd': datetime(2023, 1, 1).timestamp(),
            'name': {
                'first': 'Politician',
                'last': f'#{num}'
            },
            'socialMedia': {
                'facebook': 'fblink',
                'twitter': 'twitterlink',
                'instagram': 'instalink'
            }
        }
    }

def generate_office_location_doc(num, offices_iter):
    # Match officeId and office info to an existing office
    office_id, office = next(offices_iter)

    return {
        'officeId': office_id,
        'geoid': f'{num % NUM_GEOID}',
        'title': office['title'],
        'officeholder': {
            'name': office['officeholder']['name']
        }
    }

def generate_meeting_doc(num):
    return {
        'geoid': f'{num % NUM_GEOID}',
        'website': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'location': {
            'virtual': 'zoomlink',
            'address': {
                'street': '2531 NW Monroe Ave',
                'city': 'Corvallis',
                'state': 'OR',
                'zip': '97330'
            }
        },
        'schedule': [
            {
                'timezone': 8,
                'time': {
                    'hour': num % 24,
                    'minute': 0
                },
                'week': num % 5 + 1,
                'day': num % 7 + 1,
                'frequency': num % 5,
                'firstDate': datetime(2021, 1, 1).timestamp()
            }
        ]
    }

def generate():
    # Create offices first
    offices = generate_docs('offices', NUM_OFFICES, generate_office_doc)

    # Create office locations from existing offies
    offices_iter = offices.items().__iter__()
    generate_docs(
        'officeLocations',
        NUM_OFFICES,
        lambda num: generate_office_location_doc(num, offices_iter)
    )
    
    # Create meetings
    generate_docs('meetings', NUM_MEETINGS, generate_meeting_doc)
