resource "docker_container" "load-balancer" {
    image = "nginx:alpine"
    name  = "load-balancer"
    networks_advanced {
        name = docker_network.n1u_network.id
    }
    ports {
        internal = 9000
        external = 9000
    }
    depends_on = [docker_container.node_api_1, docker_container.node_api_2]    
    volumes {
        host_path      = abspath("${path.module}/../load-balancer/nginx.conf")
        container_path = "/etc/nginx/nginx.conf"
        read_only      = true
    }
    env = [
        "NGINX_LOG_LEVEL = DEBUG"
    ]
}