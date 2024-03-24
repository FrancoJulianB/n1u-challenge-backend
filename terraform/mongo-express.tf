resource "docker_container" "mongo-express" {
    image = "mongo-express"
    name  = "mongo-express"
    networks_advanced {
        name = docker_network.n1u_network.id
    }
    ports {
        internal = 8081
        external = 8081
    }
    env = [
        "ME_CONFIG_MONGODB_URL=mongodb://mongodb:27017/"
    ]
}