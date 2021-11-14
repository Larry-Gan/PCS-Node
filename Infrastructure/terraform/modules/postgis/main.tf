resource "google_sql_database_instance" "master" {
    name             = "${var.project_name}-postgis-master-instance-${var.env}"
    region           = var.gcp_region
    database_version = "POSTGRES_11"

    settings {
        tier = var.master_instance_size

        backup_configuration {
            enabled = true
        }
    }
}

resource "google_sql_database" "database" {
    name = "${var.project_name}-postgis-database-${var.env}"
    instance = google_sql_database_instance.master.name
    charset = "utf8"
}

resource "google_sql_user" "user" {
    name = "root_${var.env}"
    instance = google_sql_database_instance.master.name
    password = var.password
}
