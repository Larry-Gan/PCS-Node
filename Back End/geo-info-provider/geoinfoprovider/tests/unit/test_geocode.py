import pytest
import mock

from geoinfoprovider.main.lib.geocode import Geocode


# Test variables
get_intersection_test_params = 'requests_get_return_value,expected_result'
get_intersection_test_values = [
    # no results
    ({'results': []}, (None, None)),
    # multiple results
    ({'results': [
        {'geometry': {'location': {'lat': 1, 'lng': 1}}},
        {'geometry': {'location': {'lat': 2, 'lng': 2}}},
        {'geometry': {'location': {'lat': 3, 'lng': 3}}}
    ]}, (1, 1))
]
get_intersection_test_ids = ('no results', 'multiple results')


# Test fixtures
@pytest.fixture
def requests_get_mock(requests_get_return_value):
    with mock.patch(
        'geoinfoprovider.main.lib.geocode.requests.get'
    ) as mocked_function:
        mocked_return_value = mock.Mock()
        mocked_return_value.json.return_value = requests_get_return_value

        mocked_function.return_value = mocked_return_value
        yield mocked_function


# Unit tests
@pytest.mark.parametrize(
    get_intersection_test_params,
    get_intersection_test_values,
    ids=get_intersection_test_ids
)
def test_get_intersection(expected_result, requests_get_mock, app):
    # Initialize variables
    geocode = Geocode()

    # Call function
    result = geocode.geocode('test')

    # Check results
    assert result == expected_result
