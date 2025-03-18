export default ({ env }: { env: (key: string, defaultValue?: any) => any }) => ({
  host: env('HOST', '0.0.0.0'),
  port: parseInt(env('PORT', '1337'), 10),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
