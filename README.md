**DATABASE**

Install CLI globally with

> ``npm install -g sequelize-cli``

 1. MIGRATION
> ``cd movie_service/database``

> ``sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string``

> ``sequelize db:migrate``


