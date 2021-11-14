resource "google_container_registry" "registry" {
    location = "US"
}

resource "google_service_account" "service_account" {
    account_id   = "container-registry"
    display_name = "Container Registry Service Account"
}

resource "google_project_iam_binding" "admin_sa_iam" {
    role    = "roles/storage.admin"
  
    members = [
        "serviceAccount:${google_service_account.service_account.email}",
    ]
}