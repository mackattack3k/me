# A site about me

TLDR; Go to [marcus.hansson.dev](https://marcus.hansson.dev)

## Run
You will need the following env variables
```shell script
echo REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN='' >> .env
echo REACT_APP_SPOTIFY_CLIENT='' >> .env
```
You can get your github token [here](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line)
 and create a spotify project [here](https://developer.spotify.com/dashboard/).

### Using docker
The easiest way to run this project is by using docker
```shell script
docker run --env-file .env -p HOST_PORT:80 mackattack3k/me:stable
```

### Using node
If you have npm / yarn installed clone this repo and run yarn install
```
git clone git@github.com:mackattack3k/me.git && cd me && yarn start
```
