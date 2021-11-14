provider "google" {
    credentials = file("./creds/terraform-sa.json")
    project     = var.gcp_project
    region      = var.gcp_region
}
