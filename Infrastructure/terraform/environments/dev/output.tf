output "client_certificate" {
  value     = module.gke_dev.client_certificate
  sensitive = true
}

output "client_key" {
  value     = module.gke_dev.client_key
  sensitive = true
}

output "cluster_ca_certificate" {
  value     = module.gke_dev.cluster_ca_certificate
  sensitive = true
}

output "host" {
  value     = module.gke_dev.host
  sensitive = true
}