import { ethers } from "./ethers-5.6.esm.min.js"
import { abi, contractAddress } from "./constants.js"

const connectButton = document.getElementById("connectButton")
connectButton.onclick = connect
if (typeof window.ethereum != "undefined") {
  if (window.ethereum.isConnected()) {
    connectButton.innerHTML = "Connected!"
  }
}

const fundButton = document.getElementById("fundButton")
fundButton.onclick = fund

const withdrawButton = document.getElementById("withdrawButton")
withdrawButton.onclick = withdraw

const balanceButton = document.getElementById("balanceButton")
balanceButton.onclick = getBalance

async function connect() {
  console.log("HEllo there")
  if (typeof window.ethereum != "undefined") {
    try {
      window.ethereum.request({ method: "eth_requestAccounts" }) // Connects to Metamask
      console.log("Connecting") // In reality the user still has to click through a few buttons on Metamask to complete the connection
    } catch (error) {
      console.log(error)
    }
    connectButton.innerHTML = "Connected!"
  } else {
    console.log("No metamask")
    connectButton.innerHTML = "Please install Metamask"
  }
}

// fund function
async function fund() {
  const ethAmmount = document.getElementById("ethAmmount").value

  console.log(`Funding with ${ethAmmount} eth ...`)

  if (typeof window.ethereum != "undefined") {
    // To interact with a contract we need: Provider; Signer; Contract's ABI
    const provider = new ethers.providers.Web3Provider(window.ethereum) // Ethers.provider wraps Metamask's provider
    const singer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress, abi, singer)

    try {
      const tr = await contract.fund({ value: ethers.utils.parseEther(ethAmmount) })
      await listenForTransactionMine(tr, provider)
      console.log("Done!")
    } catch (error) {
      console.log(error)
    }
  }
}

async function getBalance() {
  if (typeof window.ethereum != "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const balance = await provider.getBalance(contractAddress)
    console.log(ethers.utils.formatEther(balance))
  }
}

async function withdraw(){
  if (typeof window.ethereum != "undefined") {
    console.log("Withdrawing ...")
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const singer = provider.getSigner()
    const contract = new ethers.Contract(contractAddress, abi, singer)

    try {
      const tr = await contract.withdraw()
      await  listenForTransactionMine(tr, provider)
    } catch (error) {
      console.log(error)
    }
  }
}

function listenForTransactionMine(tr, provider) {
  console.log(`Mining ${tr.hash}`)
  // Listen for transaction to finish
  return new Promise((resolve, reject) => {
    provider.once(tr.hash, (transactionReceipt) => {
      console.log(`Completed with ${transactionReceipt.confirmations} confirmations.`)
      resolve()
    }) // provider.once() is a listener function added to the event cue. This is what we need to do to ensure we wait for the transaction to finish.
  })
}

// withdraw
