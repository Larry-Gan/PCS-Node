terraform {
  backend "gcs" {
    bucket  = "node-terraform-backend"
    prefix  = "terraform/state"
    credentials = "./creds/backend-sa.json"
  }
}