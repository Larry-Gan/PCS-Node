module "network_prod" {
    source = "../../modules/network"
    env                = "prod"
    project_name       = var.project_name
    gcp_region         = var.gcp_region
}

module "gke_prod" {
    source             = "../../modules/gke"
    env                = "prod"
    project_name       = var.project_name
    gcp_project        = var.gcp_project
    gcp_region         = var.gcp_region
    initial_node_count = 1
    vpc_name           = module.network_prod.vpc_name
    subnet_name        = module.network_prod.subnet_name
    username           = var.gke_username_prod
    password           = var.gke_password_prod
}