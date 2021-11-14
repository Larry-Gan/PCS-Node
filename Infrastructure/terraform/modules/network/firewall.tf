resource "google_compute_firewall" "allow-http" {
  name = "${var.project_name}-fw-allow-http-${var.env}"
  network = google_compute_network.vpc.name
  allow {
    protocol    = "tcp"
    ports       = ["80"]
  }
  target_tags   = ["http"]
  source_ranges = ["0.0.0.0/0"]
}

resource "google_compute_firewall" "allow-https" {
  name = "${var.project_name}-fw-allow-https-${var.env}"
  network = google_compute_network.vpc.name
  allow {
    protocol    = "tcp"
    ports       = ["443"]
  }
  target_tags   = ["https"]
  source_ranges = ["0.0.0.0/0"]
}

resource "google_compute_firewall" "allow-ssh" {
  name = "${var.project_name}-fw-allow-ssh-${var.env}"
  network = google_compute_network.vpc.name
  allow {
    protocol  = "tcp"
    ports     = ["22"]
  }
  target_tags = ["ssh"]
}
