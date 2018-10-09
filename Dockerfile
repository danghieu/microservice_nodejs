FROM node:7
WORKDIR /app
RUN apt-get update -qq

COPY . /app
RUN npm cache clean && npm install
RUN npm install -g sequelize-cli

#RUN cd movie_service/database && sequelize db:migrate
#RUN cd genre_service/database && sequelize db:migrate
CMD ["bash"]