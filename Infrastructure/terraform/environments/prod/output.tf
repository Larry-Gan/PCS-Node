output "client_certificate" {
  value     = module.gke_prod.client_certificate
  sensitive = true
}

output "client_key" {
  value     = module.gke_prod.client_key
  sensitive = true
}

output "cluster_ca_certificate" {
  value     = module.gke_prod.cluster_ca_certificate
  sensitive = true
}

output "host" {
  value     = module.gke_prod.host
  sensitive = true
}