import pytest

from geoinfoprovider.main.app import create_app


@pytest.fixture
def app():
    flask_app = create_app('test')
    test_client = flask_app.test_client()

    context = flask_app.app_context()
    context.push()

    yield test_client

    context.pop()
