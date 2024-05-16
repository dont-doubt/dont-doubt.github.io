
const trailSize = 20
const canvas = document.getElementById('trail-canvas')

const trail = []
for (let i = 0; i < trailSize; i++) {
  const div = document.createElement('div')
  canvas.appendChild(div)
  trail.push(div)
}

let current = 0

canvas.addEventListener('mousemove', (e) => {
  const curr = trail[current]
  
  // console.log({ clientX: e.clientX, x: e.x, pageX: e.pageX, offsetX: e.offsetX, layerX: e.layerX, screenX: e.screenX, movementX: e.movementX, c: canvas })
  const { left, top } = e.target.getBoundingClientRect()
  curr.style.left = (e.clientX - left) + 'px'
  curr.style.top = (e.clientY - top) + 'px'
  current = (current + 1) % trailSize
})