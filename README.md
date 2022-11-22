# ExpressJS REST API Boilerplate
NodeJS simple REST API boilerplate using expressJS

## Overview
Multipurpose ExpressJS boilerplate for building fast & robust application. The idea of this boilerplate is to build an expressJS REST API as a base that ideal for any purpose such as payment, storage, etc. For data handling and ORM, I'm using prisma, so you can use postgresql, mysql, sqlite, sqlserver, mongodb, cockroachdb. For more info kindly check [prisma documentation](https://prisma.io/docs)
### Folder structure
```
project - ROOT
├── config - Application config
│   └── config.js - global application config to run the server
├── db - Database related files & folder
│   ├── main - Main application database folder
│   │   ├── schema.prisma - application schema & model
│   │   ├── seeders - database seeders
│   │   └── migrations - database migration
│   └── db.js - Connection to prisma client
├── services - API Connection
└── src - Main application logic
    ├── routes - Application routes
    │   ├── v1 - API Version
    │   │    ├── handlers - Application logic
    │   │    ├── middlewares - Middlewares function
    │   │    ├── helpers - helpers function
    │   │    ├── index.js - Express routes
    │   │    └── validation.js - validation
    │   └──index.js - Version import
    └── index.js - server
```
## Getting Started

_Below is an example of how you can instruct your audience on installing and setting up your app._
### Local setup

1. Clone the repo

   ```sh
   git clone https://github.com/orandong/express-boilerplate.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Copy `.env.example` to `.env` and fill in the missing values.

4. Run prisma migration

   ```sh
   npx prisma migrate dev --name init
   ```

5. Run prisma seeder (optional)

    ```sh
    npx prisma db seed
    ```

6. Run the server

    ```sh
    npm run dev
    ```
### Using docker
_I assume you already have docker installed on your machine._
1. Clone the repo

   ```sh
   git clone https://github.com/orandong/express-boilerplate.git
   ```

2. Build docker image

   ```sh
   docker build -t express-boilerplate:latest .
   ```

3. Run docker container

   ```sh
   docker run -d -p 5000:5000 --name=docker-express docker-express:latest
   ```
## Future Update
This tables shows which features that has been implemented by this boilerplate.

:white_check_mark: : ready

:heavy_exclamation_mark: : in progress

:x: : not yet 

| Features      | Provider     | Status |
| ------------- | ------------ | ------ |
| Cloud Storage | Google Cloud | :x:    |
| S3 Bucket     | Amazon       | :x:    |

