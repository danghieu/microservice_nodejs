![alt text](https://cdn.rawgit.com/rikkeisoft-dn/microservice_nodejs/8eedf4d7/ui_site/public/img/movie_microservice.png
)

**DATABASE**

Install CLI globally with

> ``npm install -g sequelize-cli``

 1. MIGRATION
> ``cd movie_service/database``

> ``sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string``

> ``sequelize db:migrate``


