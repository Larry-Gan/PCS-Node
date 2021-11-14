GEOM_TABLES = [
    {
        'name': 'Congressional District',
        'tables': [
            {
                'name': 'tl_2020_us_cd116',
                'summarylvl': '500'
            }
        ],
        'name_field': 'namelsad'
    },
    {
        'name': 'School District',
        'tables': [
            {
                'name': 'tl_2020_41_elsd',
                'summarylvl': '950'
            },
            {
                'name': 'tl_2020_41_scsd',
                'summarylvl': '960'
            },
            {
                'name': 'tl_2020_41_unsd',
                'summarylvl': '970'
            }
        ],
        'name_field': 'name'
    },
    {
        'name': 'Counties',
        'tables': [
            {
                'name': 'tl_2020_us_county',
                'summarylvl': '050'
            }
        ],
        'name_field': 'namelsad'
    },
    {
        'name': 'Places',
        'tables': [
            {
                'name': 'tl_2020_41_place',
                'summarylvl': '160'
            }
        ],
        'name_field': 'namelsad'
    },
    {
        'name': 'States',
        'tables': [
            {
                'name': 'tl_2020_us_state',
                'summarylvl': '040'
            }
        ],
        'name_field': 'name'
    },
    {
        'name': 'State Legislative District',
        'tables': [
            {
                'name': 'tl_2020_41_sldl',
                'summarylvl': '620'
            },
            {
                'name': 'tl_2020_41_sldu',
                'summarylvl': '610'
            }
        ],
        'name_field': 'namelsad'
    }
]


def get_intersection(cursor, table, name_field, lat, lng):
    query = f'''
        SELECT g.geoid, g.{name_field} FROM public.{table['name']} AS g
        WHERE ST_Contains(
            g.wkb_geometry,
            ST_SetSRID(ST_POINT(%s, %s), 4269)
        )
    '''
    cursor.execute(query, (lng, lat))
    return [
        {'geoid': f'{table["summarylvl"]}00US{geoid}', 'name': name}
        for geoid, name in cursor.fetchall()
    ]


def get_geometries(app, address):
    res = []
    lat, lng = app.geocode.geocode(address)

    # Must have both latitude and longitude
    if lat is not None and lng is not None:
        with app.postgis.transaction() as cursor:
            # Loop through each geometry type (Counties, States, etc)
            for geom_type in GEOM_TABLES:
                # Get the relevant geometries for each shapefile within the geometry type
                shapefiles = map(
                    lambda geom_table: {
                        'shapefile': geom_table['name'],
                        'geometries': get_intersection(
                            cursor, geom_table, geom_type['name_field'], lat, lng
                        )
                    },
                    geom_type['tables']
                )

                # Add each shapefile that has relevant geometries
                res.append({
                    'name': geom_type['name'],
                    'shapefiles': [shp for shp in shapefiles if shp['geometries']]
                })

    return {
        'layers': res
    }
