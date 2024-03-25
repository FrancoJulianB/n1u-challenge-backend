resource "keycloak_realm" "n1u" {
  realm        = "n1u"
  enabled      = true
  display_name = "n1u realm"

  remember_me                          = true
  registration_allowed                 = true
  registration_email_as_username       = true
  edit_username_allowed                = false
  reset_password_allowed               = true
  login_with_email_allowed             = true
  duplicate_emails_allowed             = false

  security_defenses {
    headers {
      content_security_policy_report_only = ""
      x_content_type_options              = "nosniff"
      x_robots_tag                        = "none"
      x_xss_protection                    = "1; mode=block"
      strict_transport_security           = "max-age=31536000; includeSubDomains"
    }
    brute_force_detection {
      permanent_lockout                   = false
      max_login_failures                  = 10
      wait_increment_seconds              = 3600
      quick_login_check_milli_seconds     = 1000
      minimum_quick_login_wait_seconds    = 300
      max_failure_wait_seconds            = 7200
      failure_reset_time_seconds          = 21600
    }
  }
}


resource "keycloak_openid_client" "n1u_client" {
    realm_id             = keycloak_realm.n1u.id
    client_id            = "n1u_client"
    access_type          = "CONFIDENTIAL"
    client_secret        = "n1u_secret"
    direct_access_grants_enabled = true
    service_accounts_enabled = true
    standard_flow_enabled = true
    web_origins = ["*"]
    valid_redirect_uris = [
        "http://localhost/restaurants?auth_callback=1",
        "http://localhost/products?auth_callback=1",
    ]
}