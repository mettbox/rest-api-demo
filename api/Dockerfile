FROM node:lts-alpine3.11
LABEL maintainer="maik@mettbox.de"

WORKDIR /var/www

# Make sure to use docker cache correctly
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install

# sources
COPY . .

# Expose is for dev server
EXPOSE 3030

# default "production" build
CMD ["npm", "run", "start"]
