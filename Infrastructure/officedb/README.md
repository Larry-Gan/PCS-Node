# OfficeDB

Stores configuration for NODE offices database

## Setup

This project assumes that Python 3.8 is used. To create a virtual env and install dependencies use the `run` script.

```bash
./run configure
```

## Commands

This project can be used to generate, import, export, reset, and delete data in officedb. To generate a new dataset (stored in JSON files within officedb/collection) use the below command:

```bash
./run generate
```

To export the local json files to the database, use the export command:

```bash
./run export
```

To import changes from the database to the local file system, use the import command:

```bash
./run import
```

To reset the database to match the local file system, use the reset command:

```bash
./run reset
```

To delete all of the data in the database, use the delete command:

```bash
./run delete
```

## Contributing

#### Adding Packages

If you need to add any new packages, add them to requirements.txt.

The easiest way to update packages is through the use of `pip freeze`. An example of this is shown below:

```bash
# Remove your venv to make sure no extra packages are added
# (only deactivate if currently in venv)
deactivate
git clean -dxf

# Create and configure venv while switching your source to the venv
. ./run configure

# Install your package
pip3 install YOUR_PACKAGE

# Update requirements.txt
pip3 freeze > requirements.txt
```

#### Pipeline

When you push a commit, the pipeline will first install all required packages. If this succeeds, it will move on to a manual "reset" step which allows the database reset script to be run via the CI/CD pipeline.

## Usage

This project should be used to manage the data stored in the development sever, generating new data or resetting invalid data. It should only be used for managing small test datasets in development. For production or larger workloads, this should be expanded to connect with Google Cloud Storage and have stricter permissions and security.
