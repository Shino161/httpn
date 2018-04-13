# httpn

## Using

- TypeScript
- Sequelize
- Koa.js
- Moment.js
- RabbitMQ

## Usage

```shell
$ npm i
$ npm start
```

## Up MySQL

```shell
$ docker-compose -f docker/mysql/docker-compose.yml up -d
$ mysql -uroot -p -h127.0.0.1 -P3306 < schema/schema.sql
```