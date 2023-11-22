
const canvas = document.getElementById('petersenGraphCanvas');
const context = canvas.getContext('2d');


function drawGeneralizedPetersenGraph(ctx, n, k) {
    const canvasWidth = ctx.canvas.width;
    const canvasHeight = ctx.canvas.height;
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const radius = Math.min(canvasWidth, canvasHeight) / 2 - 20;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.fillStyle = '#3498db'; // Vertex fill color
    ctx.strokeStyle = '#2980b9'; // Vertex stroke color
    ctx.font = '14px Arial';

    const vertices = [];
    for (let i = 0; i < n; i++) {
      const angle = (2 * Math.PI * i) / n;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      vertices.push({ x, y });
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = 'blue'; // Text color
      ctx.fillText(i + 1, x - 5, y + 5);
    }

    ctx.strokeStyle = 'red'; // Edge color
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const fromVertex = vertices[i];
      const toVertex = vertices[(i + k) % n];
      ctx.moveTo(fromVertex.x, fromVertex.y);
      ctx.lineTo(toVertex.x, toVertex.y);
    }
    ctx.stroke();
  }
    drawGeneralizedPetersenGraph(context, 18, 13);
