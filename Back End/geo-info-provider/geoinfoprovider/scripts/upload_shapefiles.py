import subprocess

from geoinfoprovider.main.lib.postgis import PostGIS


'''
Fill the folder at SHAPEFILE_PATH with US Census data for:
 - Congressional districts
 - School districts (elementary, secondary, and unified)
 - Counties
 - States
 - State legislative districts (upper and lower)

And any other relevant shapefiles
'''
SHAPEFILE_PATH = 'shapefiles'


def create_table(conn, shapefile, dbname, host, user, password):
    print(f'Deleting old table for {shapefile} if it exists...')
    with conn:
        with conn.cursor() as cursor:
            cursor.execute(f'DROP TABLE IF EXISTS public.{shapefile};')

    print(f'Creating table from {shapefile}...')
    subprocess.call([
        'ogr2ogr',
        '-f',
        'PostgreSQL',
        f'PG:host={host} dbname={dbname} user={user} password={password}',
        f'{SHAPEFILE_PATH}/{shapefile}/{shapefile}.shp',
        '-nlt',
        'PROMOTE_TO_MULTI'
    ])


def main():
    postgis = PostGIS()

    # Get all shapefiles in SHAPEFILE_PATH
    shapefiles = subprocess.check_output(['ls', SHAPEFILE_PATH]).decode('utf-8').split('\n')

    with postgis.connect() as conn:
        for shapefile in shapefiles:
            if not shapefile:
                continue

            create_table(conn, shapefile, **postgis.creds)

    print('Done')


if __name__ == '__main__':
    main()
