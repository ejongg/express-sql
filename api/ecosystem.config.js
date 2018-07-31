module.exports = {
  apps: [
    {
      name: 'API',
      script: 'server.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      watch_options: {
        ignore_watch: ['node_modules'],
        usePolling: true,
      },
    },
  ],
}
