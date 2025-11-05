// Import dependencies
const express = require("express");
const app = express();
const port = 3000;

// Serve the main page
app.get("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hello from Jenkins</title>
      <style>
          body {
              margin: 0;
              height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              background: radial-gradient(circle at top left, #0f2027, #203a43, #2c5364);
              font-family: 'Poppins', sans-serif;
              color: #fff;
              overflow: hidden;
          }

          h1 {
              font-size: 3rem;
              text-align: center;
              background: linear-gradient(90deg, #00eaff, #ff00c8, #00ff88);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              text-shadow: 0 0 10px rgba(255,255,255,0.3);
              animation: glow 3s infinite alternate;
          }

          @keyframes glow {
              from {
                  text-shadow: 0 0 10px #00eaff, 0 0 20px #ff00c8, 0 0 30px #00ff88;
              }
              to {
                  text-shadow: 0 0 20px #00ff88, 0 0 30px #ff00c8, 0 0 40px #00eaff;
              }
          }

          .glow-circle {
              position: absolute;
              width: 300px;
              height: 300px;
              border-radius: 50%;
              background: radial-gradient(circle, rgba(255,0,200,0.3), transparent);
              animation: float 6s ease-in-out infinite;
          }

          @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
          }

          .glow-circle:nth-child(1) {
              top: 10%;
              left: 20%;
          }

          .glow-circle:nth-child(2) {
              bottom: 15%;
              right: 25%;
              background: radial-gradient(circle, rgba(0,255,200,0.3), transparent);
              animation-delay: 2s;
          }
      </style>
  </head>
  <body>
      <div class="glow-circle"></div>
      <div class="glow-circle"></div>
      <h1>Hello from Jenkins 🚀</h1>
  </body>
  </html>
  `);
});

// Start server
app.listen(port, () => {
  console.log(\`✨ Server running on http://localhost:\${port}\`);
});
