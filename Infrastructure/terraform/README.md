# Terraform

Stores configuration for NODE cloud resources managed with Terraform

## Setup

This project assumes that Terraform 0.14.8 is used. To configure a given environment, use one of the following commands.

```bash
./taskfile configure dev
./taskfile configure prod
./taskfile configure shared
```

This configure step should also be run when the credentials, backend, variables, versions, or terraform.tfvars are changed to keep each environment up to date.\

## Commands

To validate your Terraform configuration in a given environment, use:

```bash
./taskfile validate ENV
```

To make a Terraform plan for an environment, use: 

```bash
./taskfile plan ENV
```

To apply the plan for an environment, use:

```bash
./taskfile apply ENV
```

## Contributing

#### Pipeline

When you push a commit, the pipeline will first validate your Terraform configuration for each environment. Next, it will create a plan for each environment. Lastly, manually triggered steps allow you to apply each of these plans in the order of shared, dev, then prod. Changes for the prod environment can only be applied from the master branch.

#### Folder Structure

###### ./environments

The cloud of this project is divided into dev, prod, and shared resources. Dev and prod should be entirely isolated from eachother, while the shared environment can contain modules used by both (for instance, the Google Maps Geocoding API). 

###### ./modules

Modules for each resource managed by Terraform. Each module can be imported within an environment to be used in the project. 

## Usage

This project should be used to manage cloud resources for the project. Any new cloud resources should be added via Terraform, and changes to existing resources should be applied with Terraform instead of the cloud console. Note that Firebase has poor Terraform support so it is excluded from this configuration. 
