export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', '127.0.0.1'),
      port: env.int('PGPORT', 5432),
      database: env('PGDATABASE', 'blog-strapi'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'senha'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
