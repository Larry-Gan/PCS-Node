from flask_restplus import reqparse, marshal


def documented_endpoint(spec):
    def inner(endpoint):
        api = spec.api
        parser = create_parser(spec.params)

        @api.expect(parser)
        def wrapped_endpoint(*args, **kwargs):
            parser_args = parser.parse_args()
            response = endpoint(*args, **kwargs, **parser_args)

            data, status = response if type(response) == tuple else (response, 200)
            model = spec.responses.get(status)

            if model:
                return marshal(data, model), status
            else:
                return data, status

        for code, model in spec.responses.items():
            response = api.response(code, str(code), model)
            wrapped_endpoint = response(wrapped_endpoint)

        return wrapped_endpoint

    return inner


def create_parser(request_params):
    parser = reqparse.RequestParser()

    for param, kwargs in request_params:
        parser.add_argument(param, **kwargs)

    return parser
