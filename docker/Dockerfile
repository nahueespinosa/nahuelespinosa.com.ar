FROM node:16

RUN apt-get update \
  && apt-get install --no-install-recommends -y \
    libvips-dev \
  && rm -rf /var/lib/apt/lists/*

RUN npm install -g gatsby-cli

WORKDIR /usr/app

COPY package.json .

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 8000

CMD ["npm", "run", "develop"]
