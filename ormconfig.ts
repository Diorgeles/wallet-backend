let config = {};
if (process.env.NODE_ENV === 'development') {
  config = {
    host: process.env.DATABASE_URL,
    extra: {
      socketPath: process.env.DATABASE_URL,
    },
    port: 5432,
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
  };
} else {
  config = {
    url: process.env.DATABASE_URL,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*{.ts,.js}'],
  };
}
module.exports = {
  type: 'postgres',
  ...config,

  migrationsRun: true,
  logging: true,
  logger: 'advanced-console',
  synchronize: true,
  cli: {
    migrationsDir: 'migrations',
  },
};
