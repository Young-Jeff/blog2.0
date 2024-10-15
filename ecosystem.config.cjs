module.exports = {
  apps: [
    {
      name: 'blog', // 你的应用名称
      script: 'pnpm', // 使用 npm 启动项目
      args: 'start', // 启动 npm start
      autorestart: true, // 如果应用崩溃，自动重启
      max_memory_restart: '2G', // 
    }
  ]
};