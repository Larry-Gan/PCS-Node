variable "gcp_region" {
    description = "GCP region for the project."
}

variable "gcp_project" {
    description = "GCP project."
}

variable "project_name" {
    description = "Name of the project."
}

variable "gke_username_dev" {
    default = "admin"
    sensitive = true
}

variable "gke_password_dev" {
    sensitive = true
}

variable "gke_username_prod" {
    default = "admin"
    sensitive = true
}

variable "gke_password_prod" {
    sensitive = true
}

variable "postgis_password_dev" {
    sensitive = true
}