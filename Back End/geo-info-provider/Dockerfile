# BUILDER
FROM python:3.8.1-slim-buster as builder

WORKDIR /usr/src/app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y --no-install-recommends gcc

COPY ./requirements.txt .
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /usr/src/app/wheels -r requirements.txt


# FINAL
FROM python:3.8.1-slim-buster

RUN mkdir -p /home/app
RUN addgroup --system app && adduser --system app --ingroup app

ENV HOME=/home/app
ENV APP_HOME=/home/app/web
WORKDIR ${APP_HOME}

RUN apt-get update && apt-get install -y --no-install-recommends netcat
COPY --from=builder /usr/src/app/wheels /wheels
COPY --from=builder /usr/src/app/requirements.txt .
RUN pip install --upgrade pip
RUN pip install --no-cache /wheels/*

RUN mkdir -p geoinfoprovider/main
COPY ./geoinfoprovider/main geoinfoprovider/main
COPY ./geoinfoprovider/__init__.py geoinfoprovider
COPY ./creds creds
COPY ./run .

RUN chown -R app:app ${APP_HOME}
USER app

ENV PORT=8081

CMD ["./run", "prod", "--no-venv"]
