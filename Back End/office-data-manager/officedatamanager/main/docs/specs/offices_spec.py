from .parameters import (
    geoids_parameter,
    office_id_parameter
)
from ..responses.offices_models import (
    api,
    offices_preview_model,
    offices_full_model
)


class GeoidSpec:
    api = api
    params = [geoids_parameter]
    responses = {
        200: offices_preview_model
    }


class OfficeIDSpec:
    api = api
    params = [office_id_parameter]
    responses = {
        200: offices_full_model
    }
