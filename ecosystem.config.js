module.exports = {
  apps: [
    {
      name: 'dev',
      script: 'src/index.ts',
      interpreter: 'node',
      interpreterArgs: '--import tsx',
      watch: true,
      ignore_watch: ['node_modules', 'dist', 'logs'],
      env: {
        NODE_ENV: 'development',
      },
      out_file: './logs/dev-out.log',
      error_file: './logs/dev-error.log',
      merge_logs: true,
      autorestart: true,
      time: true,
    },
    {
      name: 'prod',
      script: 'dist/index.js',
      interpreter: 'node',
      //exec_mode: 'cluster', // not suitable for cloud envs
      //instances: 9, // set maximum number of possible instances
      env: {
        NODE_ENV: 'production',
      },
      out_file: './logs/prod-out.log',
      error_file: './logs/prod-error.log',
      merge_logs: true,
      autorestart: true,
      time: true,
    },
  ],
};
