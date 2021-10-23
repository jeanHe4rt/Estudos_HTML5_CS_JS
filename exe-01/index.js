let velocityState = 150;

function slowDown (velocityState, printer) {
  for (let vel = 0; velocityState >= 0; vel++) {
    velocityState = velocityState - 20
    if (velocityState <= 0) {
      velocityState = 0
      break
    }
    printer(velocityState)
  }
  end()
}

let message = velocityState => {
  console.log(`Velocidade atual: ${velocityState}`)
}


function end() {
  console.log('Nave Parada e escotilhas podem ser abertas!')
}

slowDown(150, message)