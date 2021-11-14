resource "google_compute_subnetwork" "subnet" {
  name          = "${var.project_name}-subnet-${var.gcp_region}-${var.env}"
  ip_cidr_range = "10.138.0.0/20"
  region        = var.gcp_region
  network       = google_compute_network.vpc.name
}