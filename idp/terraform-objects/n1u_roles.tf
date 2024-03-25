resource "keycloak_role" "custom_n1u_role" {
  realm_id  = keycloak_realm.n1u.id
  name      = "custom_n1u_role"
  client_id = keycloak_openid_client.n1u_client.id
  depends_on = [ keycloak_realm.n1u ]
}

