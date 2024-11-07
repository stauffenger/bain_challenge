# Bain & Company Challenge

This repository is a code challenge from Bain & Company. Here, you will find all the code needed to run the application. 

For this challenge, I developed a simple web application that allows a user to
query the distance in kilometers between two addresses.

For more details about the choices made in this project [read here](https://github.com/stauffenger/bain_challenge/blob/main/PROJECT_CHOICES.md).

[Demo online application here](http://54.91.17.9:8083/)

## Getting Started

To run this project you only need to clone this repository and use the docker compose file.

Since this repository contains the [backend](https://github.com/stauffenger/bain_challenge_backend) as a submodule you should use the following command to clone:

`$ git clone --recurse-submodules https://github.com/stauffenger/bain_challenge.git`

However, if you already clone this repository without the submodule you can clone only the submodule by using these commands:

```
$ git submodule init
$ git submodule update
```

After cloning the repository you need to execute this command from the repository folder:

`$ docker compose up`

The docker will create a container for the frontend, backend, and database, and then you can access them by the following URL:

- [http://localhost:8083/](http://localhost:8083/) [ frontend ]
- [http://localhost:2002/healthCheck](http://localhost:2002/healthCheck) [ backend ]
- [mongodb://test:bain_challenge@localhost:2022/](mongodb://test:bain_challenge@localhost:2022/) [ database - MongoDB ]