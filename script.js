// Get Data
const body = document.getElementById('body')


// Create Tap
function createTap() {
  const tap = document.createElement('button')
  tap.id = 'tap'
  tap.className = 'tap'
  tap.onclick = destroyTap

  const colorRadius = Math.round(getRandomArbitrary(0, 360))
  tap.style.backgroundColor = `hsl(${colorRadius}, 100%, 50%)`
  tap.style.borderColor = `hsl(${colorRadius}, 100%, 50%)`
  tap.style.top = getRandomArbitrary(10, 90) + '%'
  tap.style.left = getRandomArbitrary(10, 90) + '%'

  body.appendChild(tap)
}

// Destroy Tap
function destroyTap() {
  const tap = document.getElementById('tap')
  tap.classList.add('tap-destroy')
  setTimeout(function() {
    tap.remove()
    createTap()
  }, 200)
}

// Randomizer
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}