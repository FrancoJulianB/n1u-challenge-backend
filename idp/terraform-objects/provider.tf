terraform {
  required_providers {
    keycloak = {
      source  = "mrparkers/keycloak"
    }
  }
}

provider "keycloak" {
  client_id     = "admin-cli"
  username      = "n1uadmin"
  password      = "n1u2024"
  url           = "http://localhost:8080"
  base_path     = "" 
}