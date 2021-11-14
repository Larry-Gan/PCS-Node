resource "kubernetes_service" "office-data-manager" {
  metadata {
    name = "office-data-manager"

    labels = {
      app  = "office-data-manager"
      tier = "backend"
    }
  }

  spec {
    selector = {
      app  = "office-data-manager"
      tier = "backend"
    }

    type = var.env == "dev" ? "LoadBalancer" : "ClusterIP"

    port {
      port = 8080
    }
  }
}

resource "kubernetes_service" "geo-info-provider" {
  metadata {
    name = "geo-info-provider"

    labels = {
      app  = "geo-info-provider"
      tier = "backend"
    }
  }

  spec {
    selector = {
      app  = "geo-info-provider"
      tier = "backend"
    }

    type = var.env == "dev" ? "LoadBalancer" : "ClusterIP"

    port {
      port = 8081
    }
  }
}

resource "kubernetes_service" "graphql-data-service" {
  metadata {
    name = "graphql-data-service"

    labels = {
      app  = "graphql-data-service"
      tier = "frontend"
    }
  }

  spec {
    selector = {
      app  = "graphql-data-service"
      tier = "frontend"
    }

    type = var.env == "dev" ? "LoadBalancer" : "ClusterIP"

    port {
      port = 5000
    }
  }
}

resource "kubernetes_service" "node-web" {
  metadata {
    name = "node-web"

    labels = {
      app  = "node-web"
      tier = "frontend"
    }
  }

  spec {
    selector = {
      app  = "node-web"
      tier = "frontend"
    }

    type = "LoadBalancer"

    port {
      port = 80
      target_port = 3000
    }
  }
}
