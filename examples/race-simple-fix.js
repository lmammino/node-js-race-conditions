// Utility function to simulate some delay (e.g. reading from or writing to a database).
// It will take from 0 to 50ms in a random fashion.
const randomDelay = () => new Promise(resolve =>
  setTimeout(resolve, Math.random() * 100)
)

// Our global balance.
// In a more complete implementation, this will live in the persistent data storage.
let balance = 0

async function loadBalance () {
  // simulates random delay to retrieve data from data storage
  await randomDelay()
  return balance
}

async function saveBalance (value) {
  // simulates random delay to write the data to the data storage
  await randomDelay()
  balance = value
}

async function sellGrapes () {
  const balance = await loadBalance()
  console.log(`sellGrapes - balance loaded: ${balance}`)
  const newBalance = balance + 50
  await saveBalance(newBalance)
  console.log(`sellGrapes - balance updated: ${newBalance}`)
}

async function sellOlives () {
  const balance = await loadBalance()
  console.log(`sellOlives - balance loaded: ${balance}`)
  const newBalance = balance + 50
  await saveBalance(newBalance)
  console.log(`sellOlives - balance updated: ${newBalance}`)
}

async function main () {
  await sellGrapes()
  await sellOlives()
  const balance = await loadBalance()
  console.log(`Final balance: ${balance}`)
}

main()
