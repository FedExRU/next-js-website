export default {
  development: {
    client: 'postgresql',
    connection: {
      database: 'fs_database',
      // eslint-disable-next-line sonarjs/no-hardcoded-passwords
      password: 'postgres',
      user: 'postgres',
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    pool: {
      afterCreate: (
        connection: unknown,
        done: (err: Error | null, connection: unknown) => void,
      ) => {
        // @ts-expect-error Error
        connection.query('SET timezone="Europe/Moscow";', function (err) {
          done(err, connection)
        })
      },
      max: 10,
      min: 2,
    },
  },
}
