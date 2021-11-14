from .parameters import address_parameter
from ..responses.geometries_models import api, geometries_model


class GeometriesSpec:
    api = api
    params = [address_parameter]
    responses = {
        200: geometries_model
    }
