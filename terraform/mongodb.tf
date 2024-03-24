resource "docker_container" "mongodb" {
  image = "mongo"
  name  = "mongodb"
  networks_advanced {
    name = docker_network.n1u_network.id
  }
  ports {
    internal = 27017
    external = 27017
  }
}
