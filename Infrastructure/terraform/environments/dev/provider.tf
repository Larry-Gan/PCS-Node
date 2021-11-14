provider "google" {
    credentials = file("./creds/terraform-sa.json")
    project     = var.gcp_project
    region      = var.gcp_region
}

provider "kubernetes" {
  host     = module.gke_dev.host
  username = var.gke_username_dev
  password = var.gke_password_dev

  client_certificate     = base64decode(module.gke_dev.client_certificate)
  client_key             = base64decode(module.gke_dev.client_key)
  cluster_ca_certificate = base64decode(module.gke_dev.cluster_ca_certificate)
}
