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
    description = "GCP region for the cluster."
}

variable "initial_node_count" {
    description = "Starting node count for the cluster."
}

variable "vpc_name" {
    description = "Name of cluster vpc."
}

variable "subnet_name" {
    description = "Name of cluster subnet."
}

variable "username" {
    sensitive = true
}

variable "password" {
    sensitive = true
}