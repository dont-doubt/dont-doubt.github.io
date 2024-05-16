const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

function drawSpiral(x, y, radius, turns) {
  ctx.beginPath()
  for (let i = 0; i < 2 * Math.PI * turns; i += 0.01) {
    const angle = i, rad = radius * (i / (2 * Math.PI))
    ctx.lineTo(x + Math.cos(angle) * rad, y + Math.sin(angle) * rad)
  }
  ctx.stroke()
}

function drawDiamond(x, y, size) {
  ctx.fillStyle = '#FF0000'
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x + size / 2, y + size / 2)
  ctx.lineTo(x, y + size)
  ctx.lineTo(x - size / 2, y + size / 2)
  ctx.closePath()
  ctx.fill()
}

function drawStar(x, y, points, innerRadius, outerRadius) {
  ctx.fillStyle = '#FFA500'
  ctx.beginPath()
  ctx.moveTo(x + outerRadius, y)
  for (let i = 1; i < points * 2; i++) {
    const angle = Math.PI * i / points
    const radius = (i % 2) === 0 ? outerRadius : innerRadius
    ctx.lineTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius)
  }
  ctx.closePath()
  ctx.fill()
}

function drawTrapeze(x, y, topWidth, bottomWidth, height) {
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x + bottomWidth, y)
  ctx.lineTo(x + bottomWidth - (bottomWidth - topWidth) / 2, y - height)
  ctx.lineTo(x + (bottomWidth - topWidth) / 2, y - height)
  ctx.closePath()
  ctx.stroke()
}

function drawZigZag(x, y, width, height, segments) {
  ctx.beginPath()
  ctx.moveTo(x, y)
  for (let i = 1; i <= segments; i++) {
    ctx.lineTo(x + ((i % 2 === 0) ? 0 : width), y + i * (height / segments))
  }
  ctx.stroke()
}

drawDiamond(70, 100, 100)
drawTrapeze(120, 120, 70, 150, 75)
drawStar(120, 300, 8, 30, 60)
drawSpiral(300, 270, 20, 3.125)
drawZigZag(340, 20, 140, 120, 12)
