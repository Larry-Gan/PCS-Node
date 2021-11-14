resource "google_container_cluster" "gke_main" {
    name                     = "${var.project_name}-gke-main-${var.env}"
    location                 = var.gcp_region
    initial_node_count       = var.initial_node_count
    network                  = var.vpc_name
    subnetwork               = var.subnet_name

    master_auth {
      username = var.username
      password = var.password
    }
}
