# A site about me

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
docker run -v your_config.js:/app/me/config.js -p HOST_PORT:80 mackattack3k/me:stable
```

### Using node
If you have npm / yarn installed clone this repo and run yarn install
```
git clone git@github.com:mackattack3k/me.git && cd me && yarn start
```
