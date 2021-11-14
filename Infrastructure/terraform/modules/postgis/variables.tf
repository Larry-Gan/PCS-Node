variable "env" {
    description = "env: dev or prod"
}

variable "project_name" {
    description = "Name of the project."
}

variable "gcp_project" {
    description = "GCP project."
}

variable "gcp_region" {
    description = "GCP region for the database."
}

variable "master_instance_size" {
    description = "Size of the master instance."
}

variable "password" {
    sensitive = true
}