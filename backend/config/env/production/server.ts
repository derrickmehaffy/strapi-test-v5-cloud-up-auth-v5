export default ({ env }) => ({
  url: env("CLOUD_APP_URL"),
  proxy: true,
});
