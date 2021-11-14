import pytest
import mock

from officedatamanager.main.lib.offices_logic import (
    geoids_search,
    office_ids_search
)


geoid_search_test_params = 'geoids,expected_result'
geoid_search_test_values = [
    # no results
    ([], []),
    # multiple results
    (['geoid'] * 3, [[{'officeholder': 'test'}] for _ in range(3)])
]
geoid_search_test_ids = ('no results', 'multiple results')

office_ids_test_params = 'office_ids,expected_result'
office_ids_test_values = [
    # no results
    ([], []),
    # multiple results
    (['officeid'] * 3, [{'officeholder': 'test'} for _ in range(3)])
]
office_ids_test_ids = ('no results', 'multiple results')


@pytest.mark.parametrize(
    geoid_search_test_params,
    geoid_search_test_values,
    ids=geoid_search_test_ids
)
def test_geoid_search(geoids, expected_result, app):
    # Create mocks
    doc_mock = mock.Mock()
    doc_mock.to_dict.return_value = {'officeholder': 'test'}

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
    assert all([res == expected for res, expected in zip(result['offices'], expected_result)])


@pytest.mark.parametrize(
    office_ids_test_params,
    office_ids_test_values,
    ids=office_ids_test_ids
)
def test_office_ids_search(office_ids, expected_result, app):
    # Create mocks
    doc_mock = mock.Mock()
    doc_mock.to_dict.return_value = {'officeholder': 'test'}

    document_mock = mock.Mock()
    document_mock.get.return_value = doc_mock

    col_ref_mock = mock.Mock()
    col_ref_mock.document.return_value = document_mock

    officedb_mock = mock.Mock()
    officedb_mock.collection.return_value = col_ref_mock
    app.officedb = officedb_mock

    # Call function
    result = office_ids_search(app, office_ids)

    # Check results
    assert all([res == expected for res, expected in zip(result['offices'], expected_result)])
