
function test1 () {

  // Utility function to simulate some delay (e.g. reading from or writing to a database).
  // It will take from 0 to 50ms in a random fashion.
  const randomDelay = () => new Promise(resolve =>
    setTimeout(resolve, Math.random() * 100)
  )

  // Our global balance.
  // In a more complete implementation, this will live in the persistent data storage.
  const BALANCE_INDEX = 0
  const balanceStorage = new BigInt64Array(1)

  async function loadBalance () {
    // simulates random delay to retrieve data from data storage
    await randomDelay()
    return Atomics.load(balanceStorage, BALANCE_INDEX)
  }

  async function saveBalance (value) {
    // simulates random delay to write the data to the data storage
    await randomDelay()
    Atomics.add(balanceStorage, BALANCE_INDEX, BigInt(value))
  }

  async function sellGrapes () {
    try {
      console.log(`sellGrapes - balance loaded: ${await loadBalance()}`)
      await saveBalance(50)
      console.log(`sellGrapes - balance`)
      console.log(`sellOlives - balance loaded: ${await loadBalance()}`)
      // const newBalance = balance + 50
      await saveBalance(50)
      console.log(`sellOlives - balance updated: ${await loadBalance()}`)
    } finally {
      // release()
    }
  }

  async function sellOlives () {
    try {
      console.log(`sellGrapes - balance loaded: ${await loadBalance()}`)
      await saveBalance(50)
      console.log(`sellGrapes - balance`)
      console.log(`sellOlives - balance loaded: ${await loadBalance()}`)
      // const newBalance = balance + 50
      await saveBalance(50)
      console.log(`sellOlives - balance updated: ${await loadBalance()}`)
    } finally {
      //    release()
    }
  }

  async function main () {
    await Promise.all([
      sellGrapes(),
      sellOlives(),
      sellGrapes(),
      sellOlives(),
      sellGrapes(),
      sellOlives()
    ])
    const balance = await loadBalance()
    console.log(`Final balance: ${balance}`)
  }

  main()
}

function test2 () {
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
}

function test3 () {
  // Utility function to simulate some delay (e.g. reading from or writing to a database).
  // It will take from 0 to 50ms in a random fashion.
  const randomDelay = () => new Promise(resolve =>
    setTimeout(resolve, Math.random() * 100)
  )

  // Our global balance.
  // In a more complete implementation, this will live in the persistent data storage.
  const balanceStorage = new BigInt64Array(1)
  const BALANCE_INDEX = 0

  async function loadBalance () {
    // simulates random delay to retrieve data from data storage
    await randomDelay()
    return Atomics.load(balanceStorage, BALANCE_INDEX)
  }

  async function saveBalance (value) {
    // simulates random delay to write the data to the data storage
    await randomDelay()
    Atomics.add(balanceStorage, BALANCE_INDEX, BigInt(value))
  }

  async function sellGrapes () {
    console.log(`sellGrapes - balance loaded: ${await loadBalance()}`)
    await saveBalance(50)
    console.log(`sellGrapes - balance updated: ${await loadBalance()}`)
  }

  async function sellOlives () {
    const balance = await loadBalance()
    console.log(`sellOlives - balance loaded: ${balance}`)
    await saveBalance(50)
    console.log(`sellOlives - balance updated: ${await loadBalance()}`)
  }

  async function main () {
    await sellGrapes()
    await sellOlives()
    console.log(`Final balance: ${await loadBalance()} `)
  }

  main()
}

test3()
