import json
import requests


class Geocode:
    base_url = 'https://maps.googleapis.com/maps/api/geocode/json'

    def __init__(self):
        # Load Google Maps API key from secure file
        with open('creds/geocode-key.json', 'r') as f:
            self.key = json.load(f)['key']

    def geocode(self, address):
        # Search address in Google Maps API
        res = requests.get(f'{self.base_url}?key={self.key}&address={address}')
        res.raise_for_status()

        data = res.json()

        if data.get('results'):
            # Use the first (best) result if there are multiple
            loc = data['results'][0]['geometry']['location']
            return loc['lat'], loc['lng']
        else:
            return None, None
