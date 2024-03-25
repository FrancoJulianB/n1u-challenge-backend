# n1u Challenge Backend

Este repositorio contiene el backend y la infraestructura para la aplicación del challenge de n1u. La aplicación está desarrollada en Node.js utilizando Express.js para el enrutamiento y middleware como body-parser, express-validator, mongoose, morgan y multer para funcionalidades adicionales.

## Requisitos Previos

Antes de ejecutar la aplicación, asegúrate de tener Node.js y Terraform instalados en tu sistema. A continuación, se muestra un breve tutorial sobre cómo instalarlos:

### Instalación de Node.js

1. Descarga e instala Node.js desde [nodejs.org](https://nodejs.org/).
2. Verifica la instalación ejecutando `node --version` en tu terminal. Deberías ver la versión de Node.js instalada.

### Instalación de Docker

Docker es una plataforma de software que simplifica el desarrollo, implementación y ejecución de aplicaciones en contenedores. Puedes instalar Docker siguiendo los pasos en la documentación oficial:

- **Para Linux**: Consulta la guía de instalación de Docker para tu distribución específica en [Docker Docs - Linux](https://docs.docker.com/engine/install/).
- **Para macOS**: Descarga e instala Docker Desktop desde [Docker Desktop for Mac](https://docs.docker.com/desktop/install/mac-install/).
- **Para Windows**: Descarga e instala Docker Desktop desde [Docker Desktop for Windows](https://docs.docker.com/desktop/install/windows-install/).


### Instalación de Terraform

1. Descarga Terraform desde [Terraform Downloads](https://www.terraform.io/downloads.html).
2. Descomprime el archivo descargado y coloca el ejecutable `terraform` en un directorio incluido en tu variable de entorno `PATH`.
3. Verifica la instalación ejecutando `terraform version` en tu terminal. Deberías ver la versión de Terraform instalada.

## Configuración y Ejecución del Backend

1. Ejecute el daemon de docker, ya sea a traves de la consola o con "Docker Desktop"
2. Desde la raíz del proyecto, navega hasta el directorio `./terraform`.
3. Ejecuta los comandos de Terraform necesarios para configurar y desplegar la infraestructura requerida para el backend:
- `terraform init`
- `terraform plan`
- `terraform apply --auto-approve`


## Middleware Utilizado

La aplicación utiliza varios middleware para funcionalidades adicionales:

- `body-parser`: Analiza los cuerpos de las solicitudes entrantes en varios formatos y los expone en `req.body`.
- `express-validator`: Proporciona funciones para validar y sanear los datos de las solicitudes HTTP.
- `mongoose`: Proporciona una interfaz sencilla y basada en esquemas para interactuar con la base de datos.
- `morgan`: Registro de solicitudes HTTP.
- `multer`: Gestión y validacion de archivos en formularios multipart/form-data.

## Estado Actual

Actualmente se esta implementando un IDP con la herramienta de Keycloak para validar el acceso a los endpoints.
Se en este repositorio encontrara una rama llamada "idp-implementation" donde podra ver el avance del mismo.

Ademas, si lo desea, puede acceder al tablero kanban donde vera los issues en los que estoy trabajando a través del siguiente [link](https://www.notion.so/Challenge-N1U-BackEnd-Dev-5a62c0ab5e2b4e439a962ac58df3619e?pvs=4)

## Problemas y Sugerencias

Si encuentras algún problema o tienes alguna sugerencia, por favor, abre un issue en este repositorio.
