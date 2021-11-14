# Geo Info Provider

Uses Google Maps API and GIS to provide relevant geographical information for an address or area.

## Setup

This project assumes that Python 3.8 is used. To create a virtual env and install all dependencies (prod and dev) use the `run` script.

```bash
./run configure dev
```

## Development

To run this project in development mode use the below command.

```bash
./run dev
```

You should then be able to view the swagger documentation at [http://localhost:8081/api/doc](http://localhost:8081/api/doc).

## Testing

To run tests and linting, the below commands are used.

```bash
./run test
./run lint
```

## Contributing

#### Adding Packages

If you need to add any new packages, add them to requirements.txt or requirements-dev.txt. Any packages not needed in production should be added to requirements-dev.txt. If a package is needed in production you only need to add it to requirements.txt, as both are installed for development.

The easiest way to update packages is through the use of `pip freeze`. Examples of this for dev and prod are shown below.

For production:
```bash
# Remove your venv to make sure no extra packages are added
# (only deactivate if currently in venv)
deactivate
git clean -dxf

# Create and configure venv for prod while switching your source to the venv
. ./run configure

# Install your package
pip3 install YOUR_PACKAGE

# Update requirements.txt
pip3 freeze > requirements.txt
```

For development:

```bash
# Don't need to remove venv for dev, but do be careful of adding too many
# dev packages (this will slow down the pipeline)

# Make sure all dev dependencies are installed and switch source to venv
. ./run configure dev

# Install your package
pip3 install YOUR_PACKAGE

# Update requirements-dev.txt
pip3 freeze > requirements-dev.txt
```

#### Adding Scripts

To add a new script, create it in the `geoinfoprovider/scripts` directory and put its functionality in a "main" function. Import this main method in `run_script.py` and map it to a command line argument that corresponds to your script's name. This will allow you to use any code within the geoinfoprovider package in your script. For an example of how this is implemented, view the `upload_shapefiles.py` script.

#### Pipeline

When you push a commit, the pipeline will first run tests and linting. If both steps pass, it will build a docker image using the Dockerfile and publish it to the repository's container registry. Find the most recent docker image for your feature branch by looking for the image tagged with `FEATURE_BRANCH-latest`. You can also look up the image for a specific commit by using that commit's SHA.

These images can then be deployed to a test environment by running the depoy_dev pipeline step. Only images made from the master branch (tagged with `master-latest`) should be used in production, and these can be deployed via the deploy_prod step.

#### Folder Structure

###### ./geoinfoprovider/main/docs

This folder stores the Swagger API documentation used for each route. This includes models for each response and parameters for each request.

###### ./geoinfoprovider/main/lib

This folder houses business logic for each route as well as shared code such as API or database clients.

###### ./geoinfoprovider/main/routes

This folder houses routes of the REST API, connecting them with business logic from the `lib` folder and documentation from the `docs` folder.

###### ./geoinfoprovider/main/utils

This folder contains small helper functions and classes that don't relate to business logic and don't otherwise fit into the `lib` folder.

###### ./geoinfoprovider/scripts

This folder contains scripts to automate common processes related to the set up and usage of the API.

###### ./geoinfoprovider/tests

This folder has all of the tests for the applications. Unit tests cover the business logic in the `./geoinfoprovider/main/lib` folder.

## Usage

The primary way this project should be used is via the docker images created and deployed from its pipeline. It can also be run in a production mode using the `run` script as shown below.

```bash
# Set the port via the PORT environment variable
export PORT=8081
./run prod
```

## Scripts

#### Upload Shapefiles

This script will upload all of the shapefiles in the `shapefiles` directory to the PostGIS PostreSQL development server. To use it, create a `shapefiles` directory and copy over the shapefile folders you downloaded from the US census website (these should all contain a .shp file in the naming convention `shapefiles/shapefile_name/shapefile_name.shp`). 

Before running the script, you will need the `ogr2ogr` command line tool installed. To install this tool, download the GDAL translator library via [their downloads page](https://gdal.org/download.html) or your operating system's package manager. 

The script can be run using the `run` script as shown below.

```bash
./run script upload_shapefiles
```

The script will print progress messages as it uploads each shapefile, then will exit when it is done.
