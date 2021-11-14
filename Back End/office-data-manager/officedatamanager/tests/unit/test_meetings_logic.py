import pytest
import mock

from officedatamanager.main.lib.meetings_logic import (
    geoids_search
)


geoid_search_test_params = 'geoids,expected_result'
geoid_search_test_values = [
    # no results
    ([], []),
    # multiple results
    (['geoid'] * 3, [[{'meeting': 'test'}] for _ in range(3)])
]
geoid_search_test_ids = ('no results', 'multiple results')


@pytest.mark.parametrize(
    geoid_search_test_params,
    geoid_search_test_values,
    ids=geoid_search_test_ids
)
def test_geoid_search(geoids, expected_result, app):
    # Create mocks
    doc_mock = mock.Mock()
    doc_mock.to_dict.return_value = {'meeting': 'test'}

    stream_mock = mock.Mock()
    stream_mock.stream.return_value = [doc_mock]

    col_ref_mock = mock.Mock()
    col_ref_mock.where.return_value = stream_mock

    officedb_mock = mock.Mock()
    officedb_mock.collection.return_value = col_ref_mock
    app.officedb = officedb_mock

    # Call function
    result = geoids_search(app, geoids)

    # Check results
    assert all([res == expected for res, expected in zip(result['meetings'], expected_result)])
