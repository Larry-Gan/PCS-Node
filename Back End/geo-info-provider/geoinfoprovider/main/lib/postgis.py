import json
import psycopg2
import contextlib


class PostGIS:
    def __init__(self):
        # Load PostgresSQL connection from secure file
        with open('creds/postgis-conn-dev.json', 'r') as f:
            self.creds = json.load(f)

    @contextlib.contextmanager
    def connect(self):
        conn = psycopg2.connect(**self.creds)

        yield conn

        conn.close()

    @contextlib.contextmanager
    def transaction(self):
        # Connect and create cursor for a single transaction
        with self.connect() as conn:
            with conn:
                with conn.cursor() as cursor:
                    yield cursor
