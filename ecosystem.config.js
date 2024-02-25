module.exports = {
  apps: [
    {
      name: "frontend",
      script: "npm",
      args: "start --prefix frontend",
      watch: true,
      env: {
        NODE_ENV: "production",
        PORT: 3002, // Ensure this matches the Next.js port
      },
    },
    {
      name: "backend",
      script: "npm",
      args: "start --prefix backend",
      watch: true,
      env: {
        NODE_ENV: "production",
        PORT: 3001, // Replace with your actual backend port
      },
    },
  ],
};
