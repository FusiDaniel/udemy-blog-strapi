export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'containers-us-west-137.railway.app'),
      port: env.int('DATABASE_PORT', 6341),
      database: env('DATABASE_NAME', 'railway'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'kKxcVcp1B1iX89dZfG5q'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
