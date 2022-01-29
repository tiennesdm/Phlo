"# Phlo"
# Phlo 


## Running Locally

Make sure you have [Node.js](http://nodejs.org/)

```sh
git clone https://github.com/tiennesdm/Phlo.git # or clone your own fork
cd Backend
npm install
npm run dev
```

To run your react app 

Copy the build of your frontend and paste in the Backend folder

Your directory name should be build in them 

```
npm run dev
```


# Run app in a docker container 

```
cd Backend
docker build --pull --rm -f "Dockerfile" -t phlo-backend:latest "."
docker run --rm -it  -p 3000:3000/tcp phlo-backend:latest
```

# To check the docker image detail

```
docker images
```

# Push docker image to [docker hub](https://hub.docker.com/)

```
docker tag <image_id> <docker_repo>(tiennesdm/phlo_docker:tagname)
docker push tiennesdm/phlo_docker:tagname
```


# To take the clone of docker image
```
docker pull tiennesdm/phlo_docker:latest
```

# Phlo docker Repo Detail
```
https://hub.docker.com/repository/docker/tiennesdm/phlo_docker/general
```







Your app should now be running on [localhost:3000](http://localhost:3000/).
