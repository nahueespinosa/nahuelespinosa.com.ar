# Nahue's Website

This is Nahue's personal website built with [Gatsby](https://www.gatsbyjs.com/).

# Usage

## Prerequisites

Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [docker-compose](https://docs.docker.com/compose/install/).

Clone this repository:

```bash
git clone https://github.com/nahueespinosa/nahuelespinosa.com.ar nahue-site
```

## Usage

Change directory to your local repository and bring up the docker image:

```bash
cd nahue-site
docker-compose up --build
```

Open `localhost:8000` in your web browser.

To attach a terminal to the running container use:

```bash
docker exec -it nahue-site-app bash
```

To remove the containers use:

```bash
docker-compose down
```

# License

The source code is licensed under [MIT](LICENSE-src). Feel free to use it.

All rights reserved for the [content](LICENSE-content) folder (blog posts, images, etc.).
