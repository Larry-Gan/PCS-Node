resource "google_project_service" "geocoding" {
  project = var.gcp_project
  service = "geocoding-backend.googleapis.com"

  disable_dependent_services = true
}

resource "google_project_service" "places" {
  project = var.gcp_project
  service = "places-backend.googleapis.com"

  disable_dependent_services = true
}

