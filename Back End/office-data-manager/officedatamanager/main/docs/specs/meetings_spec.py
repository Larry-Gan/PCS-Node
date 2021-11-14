from .parameters import geoids_parameter
from ..responses.meetings_models import api, meetings_model


class GeoidSpec:
    api = api
    params = [geoids_parameter]
    responses = {
        200: meetings_model
    }
