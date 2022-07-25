# HTML / Javascript Frontend Fund Me

Bare bones HTML / js frontend example for the [Hardhat Fund Me](https://github.com/AVDel7/FCC-HardhatFundMe) project. This corresponds to Lesson 8 in [freeCodeCamp youtube tutorial](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=45177s) on ethereum blockchain development.

> **Attention!** - This project is meant for learning only. Do not use it with an account with real ETH, i.e. on Ethereum mainnet. It is advised you use a development metamask account without Eth on the mainnet's account.


## Requirements:

* [Node.js](https://nodejs.org/)
* [yarn](https://yarnpkg.com/)
* [Hardhat](https://hardhat.org/)
* [Hardhat Fund Me](https://github.com/AVDel7/FCC-HardhatFundMe)
* [Metamask](https://metamask.io/) browser extension installed.

## Quickstart

1. Clone repo:
```
git clone https://github.com/AVDel7/FCC-HtmlFundMe
cd FCC-HtmlFundMe
```

2. Run index.html.

## Usage

* After clonning the [Hardhat Fund Me](https://github.com/AVDel7/FCC-HardhatFundMe) project, run a local development node with `yarn hardhat node` where the _Fund Me_ contract will be deployed.
* Metamask needs to be installed with an account in order to connect to a wallet.
 > **Attention!** - Do not run this project on an account with real Eth on it!
* Connect Metamask to the local hardhat network (usally http://127.0.0.1:8545/). You can create a new custom network.
* Use the _Connect_ button to connect with the Metamask wallet.
* Use the _Balance_ button to check current funds currently held in contract.
* Use the _Fund_ button to fund the contract with the ammount specified in the _Eth Ammount_ field.
* Use _Withdraw_ funds from the contract. This works because the hardcoded account is also the owner of the contract.
> **Note** - The account address that owns the contract is hardcoded to the 0th address provided by the hardhat node. This account needs to be added to Metamask for being able to withdraw the funds.