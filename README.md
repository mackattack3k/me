# A site about me
![Docker image](https://github.com/mackattack3k/me/workflows/Dockerhub/badge.svg)
![Node install and build](https://github.com/mackattack3k/me/workflows/Node%20install,%20build,%20test/badge.svg)

TLDR; Go to [marcus.hansson.dev](https://marcus.hansson.dev)

## Run
You will need the following config file in your public folder `public/config.js`
```javascript
window.ENV = {
  GITHUB_PERSONAL_ACCESS_TOKEN: '',
  SPOTIFY_CLIENT_ID: ''
};
```
You can get your github token [here](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line)
 and create a spotify project [here](https://developer.spotify.com/dashboard/).

### Using docker

The easiest way to run this project is by using docker
```shell script
docker run -v your_config.js:/me/config.js -p HOST_PORT:80 mackattack3k/me:stable
```

### Using node

If you have npm / yarn installed clone this repo and run yarn install
```
git clone git@github.com:mackattack3k/me.git && cd me && yarn start
```

## Development

This is built using [Create-React-App](https://github.com/facebook/create-react-app). So you can just clone and run install. Make sure you
 set up
 your config file as specified in the run section.

```
git clone git@github.com:mackattack3k/me.git && cd me && yarn install
```

### Code style

The code is following a `feature first` folder structure.

We are also not using redux in favor of Reacts Context API for as long as possible.

Prettier should also be used before committing and is therefor in a git hook per default
