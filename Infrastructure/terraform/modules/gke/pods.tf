resource "kubernetes_deployment" "office-data-manager" {
  metadata {
    name = "office-data-manager"

    labels = {
      app  = "office-data-manager"
      tier = "backend"
    }
  }

  spec {
    replicas = 3

    selector {
      match_labels = {
        app  = "office-data-manager"
        tier = "backend"
      }
    }

    template {
      metadata {
        labels = {
          app  = "office-data-manager"
          tier = "backend"
        }
      }

      spec {
        container {
          image = "gcr.io/${var.gcp_project}/node-capstone/back-end/office-data-manager:master-latest"
          name  = "office-data-manager"
  
          port {
            container_port = 8080
          }
  
          resources {
            requests = {
              cpu    = "100m"
              memory = "100Mi"
            }
          }
        }
      }
    }
  }
}

resource "kubernetes_deployment" "geo-info-provider" {
  metadata {
    name = "geo-info-provider"

    labels = {
      app  = "geo-info-provider"
      tier = "backend"
    }
  }

  spec {
    replicas = 3

    selector {
      match_labels = {
        app  = "geo-info-provider"
        tier = "backend"
      }
    }

    template {
      metadata {
        labels = {
          app  = "geo-info-provider"
          tier = "backend"
        }
      }

      spec {
        container {
          image = "gcr.io/${var.gcp_project}/node-capstone/back-end/geo-info-provider:master-latest"
          name  = "geo-info-provider"
  
          port {
            container_port = 8081
          }
  
          resources {
            requests = {
              cpu    = "100m"
              memory = "100Mi"
            }
          }
        }
      }
    }
  }
}

resource "kubernetes_deployment" "graphql-data-service" {
  metadata {
    name = "graphql-data-service"

    labels = {
      app  = "graphql-data-service"
      tier = "frontend"
    }
  }

  spec {
    replicas = 3

    selector {
      match_labels = {
        app  = "graphql-data-service"
        tier = "frontend"
      }
    }

    template {
      metadata {
        labels = {
          app  = "graphql-data-service"
          tier = "frontend"
        }
      }

      spec {
        container {
          image = "gcr.io/${var.gcp_project}/node-capstone/front-end/graphql-data-service:master-latest"
          name  = "graphql-data-service"
  
          port {
            container_port = 5000
          }
  
          resources {
            requests = {
              cpu    = "100m"
              memory = "100Mi"
            }
          }
        }
      }
    }
  }
}

resource "kubernetes_deployment" "node-web" {
  metadata {
    name = "node-web"

    labels = {
      app  = "node-web"
      tier = "frontend"
    }
  }

  spec {
    replicas = 3

    selector {
      match_labels = {
        app  = "node-web"
        tier = "frontend"
      }
    }

    template {
      metadata {
        labels = {
          app  = "node-web"
          tier = "frontend"
        }
      }

      spec {
        container {
          image = "gcr.io/${var.gcp_project}/node-capstone/front-end/node-web:master-latest"
          name  = "node-web"
  
          port {
            container_port = 3000
          }
  
          resources {
            requests = {
              cpu    = "100m"
              memory = "100Mi"
            }
          }
        }
      }
    }
  }
}