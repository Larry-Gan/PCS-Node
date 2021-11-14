resource "google_compute_network" "vpc" {
  name                    = "${var.project_name}-vpc-${var.env}"
  auto_create_subnetworks = false
}