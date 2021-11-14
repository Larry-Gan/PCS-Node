provider "google" {
    credentials = file("./creds/terraform-sa.json")
    project     = var.gcp_project
    region      = var.gcp_region
}

provider "kubernetes" {
  host     = module.gke_prod.host
  username = var.gke_username_prod
  password = var.gke_password_prod

  client_certificate     = base64decode(module.gke_prod.client_certificate)
  client_key             = base64decode(module.gke_prod.client_key)
  cluster_ca_certificate = base64decode(module.gke_prod.cluster_ca_certificate)
}
