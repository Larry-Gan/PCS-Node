import pytest
import mock

from geoinfoprovider.main.lib.geometries_logic import (
    get_geometries,
    get_intersection,
    GEOM_TABLES
)


# Test variables
get_intersection_test_params = 'query_result,expected_result'
get_intersection_test_values = [
    # no results
    ([], []),
    # multiple results
    (
        [('12345', 'Corvallis') for _ in range(3)],
        [{'geoid': '04000US12345', 'name': 'Corvallis'} for _ in range(3)]
    )
]
get_intersection_test_ids = ('no results', 'multiple results')

get_geometries_test_params = 'lat,lng,get_intersection_return_value,expected_result'
get_geometries_test_values = [
    # no intersections
    (0, 0, None, [{'name': table['name'], 'shapefiles': []} for table in GEOM_TABLES]),
    # multiple intersections
    (
        0, 0, {'geoid': '04000US12345', 'name': 'Corvallis'},
        [{'name': table['name'], 'shapefiles': [
            {
                'shapefile': shapefile['name'],
                'geometries': {'geoid': '04000US12345', 'name': 'Corvallis'}
             } for shapefile in table['tables']
        ]} for table in GEOM_TABLES]
    ),
    # no lat lng
    (None, None, None, [])
]
get_geometries_test_ids = ('no intersections', 'multiple intersections', 'no lat lng')


# Test fixtures
@pytest.fixture
def get_intersection_mock(get_intersection_return_value):
    with mock.patch(
        'geoinfoprovider.main.lib.geometries_logic.get_intersection'
    ) as mocked_function:
        mocked_function.return_value = get_intersection_return_value
        yield mocked_function


# Unit tests
@pytest.mark.parametrize(
    get_intersection_test_params,
    get_intersection_test_values,
    ids=get_intersection_test_ids
)
def test_get_intersection(query_result, expected_result, app):
    # Init values
    shapefile_table = {'name': 'table', 'summarylvl': '040'}

    # Create mocks
    mock_cursor = mock.Mock()
    mock_cursor.fetchall.return_value = query_result

    # Call function
    result = get_intersection(mock_cursor, shapefile_table, 'name_field', 0, 0)

    # Check results
    assert all([res == expected for res, expected in zip(result, expected_result)])


@pytest.mark.parametrize(
    get_geometries_test_params,
    get_geometries_test_values,
    ids=get_geometries_test_ids
)
def test_get_geometries(lat, lng, get_intersection_mock, expected_result, app):
    # Create mocks
    mock_geocode = mock.Mock()
    mock_geocode.geocode.return_value = (lat, lng)

    mock_transaction = mock.MagicMock()
    mock_transaction.__enter__.return_value = mock.Mock()

    mock_postgis = mock.Mock()
    mock_postgis.transaction.return_value = mock_transaction

    app.geocode = mock_geocode
    app.postgis = mock_postgis

    # Call function
    result = get_geometries(app, 'address')['layers']

    # Check results
    assert all([res == expected for res, expected in zip(result, expected_result)])
