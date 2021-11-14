module "network_dev" {
    source             = "../../modules/network"
    env                = "dev"
    project_name       = var.project_name
    gcp_region         = var.gcp_region
}

module "gke_dev" {
    source             = "../../modules/gke"
    env                = "dev"
    project_name       = var.project_name
    gcp_project        = var.gcp_project
    gcp_region         = var.gcp_region
    initial_node_count = 1
    vpc_name           = module.network_dev.vpc_name
    subnet_name        = module.network_dev.subnet_name
    username           = var.gke_username_dev
    password           = var.gke_password_dev
}

module "postgis_dev" {
    source                = "../../modules/postgis"
    env                  = "dev"
    project_name         = var.project_name
    gcp_project          = var.gcp_project
    gcp_region           = var.gcp_region
    master_instance_size = "db-f1-micro"
    password             = var.postgis_password_dev
}
