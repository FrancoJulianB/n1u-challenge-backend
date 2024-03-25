resource "docker_image" "node_api" {
  name = "node-api:latest"

  build {
    context    = "../n1u-app/" 
    dockerfile = "../Dockerfile"
  }
}

resource "docker_container" "node_api_1" {
  name   = "node-api-1"
  image  = docker_image.node_api.image_id
  networks_advanced {
    name = docker_network.n1u_network.id
  }
  ports {
    internal = 9001
    external = 9001
  }
  depends_on = [docker_container.mongodb]
  restart    = "always"
  env = [
    "MONGO_URL=mongodb://mongodb:27017",
    "PORT=9001"
  ]
}

resource "docker_container" "node_api_2" {
  name   = "node-api-2"
  image  = docker_image.node_api.image_id
  networks_advanced {
    name = docker_network.n1u_network.id
  }
  ports {
    internal = 9002
    external = 9002
  }
  depends_on = [docker_container.mongodb]
  restart    = "always"
  env = [
    "MONGO_URL=mongodb://mongodb:27017",
    "PORT=9002"
  ]
}