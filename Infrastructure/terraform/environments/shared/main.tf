module "gcr_shared" {
    source = "../../modules/gcr"
}

module "maps_shared" {
    source      = "../../modules/maps"
    gcp_project = var.gcp_project
}