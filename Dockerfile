# base image
FROM node:12-alpine as build-deps

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN=''
ENV REACT_APP_SPOTIFY_CLIENT=''

# install and cache app dependencies
COPY . ./
RUN yarn install --silent
RUN yarn build

# Serve from nginx webserver
FROM nginx:stable-alpine
COPY --from=build-deps /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
