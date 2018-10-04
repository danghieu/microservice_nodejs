![alt text](https://cdn.rawgit.com/rikkeisoft-dn/microservice_nodejs/8eedf4d7/ui_site/public/img/movie_microservice.png
)

Install Node Package

> ``npm install``

Install CLI globally with

> ``npm install -g sequelize-cli``

 1. MIGRATION DATABASE

Migration database movie service

> ``cd movie_service/database``

> ``sequelize db:migrate``

Migration database genre service

> ``cd genre_service/database``

> ``sequelize db:migrate``

 2. RUN APP

- MOVIE SERVICE
> ``npm run start_movie_service``

- GENRE SERVICE
> ``npm run start_genre_service``

- UI SITE
> ``npm run start_ui_site``


