# 🛡️ GameChainSDK 🕹️
![npm version](https://img.shields.io/npm/v/gamechainsdk)
![license](https://img.shields.io/github/license/sambitsargam/gamechainsdk)
![downloads](https://img.shields.io/npm/dt/gamechainsdk)

**GameChainSDK** is your gateway to seamless integration with blockchain-based game assets. Build, manage, and interact with game assets effortlessly on Ethereum-compatible networks like Sepolia and ANCIENT8.


## 🌟 Features
- 🔗 **Blockchain Integration**: Interact with blockchain game assets using smart contracts.
- 🚀 **Easy-to-Use API**: Simple functions for registering, transferring, and updating assets.
- 🌐 **Multi-Network Support**: Works on Sepolia, ANCIENT8, and other EVM-compatible networks.
- 📦 **Lightweight and Efficient**: Designed for performance and developer productivity.


## 📦 Installation

Install via npm:
```bash
npm install gamechainsdk
```


## 🚀 Quick Start

### Import and Initialize

```javascript
import GameChainSDK from 'gamechainsdk';

const providerUrl = 'https://rpcv2-testnet.ancient8.gg/';
const contractAddress = '0x8628d91E8311B4856ae7d3E317a0E8fFf48E0f98'; // ANCIENT8 network

const sdk = new GameChainSDK(providerUrl, contractAddress);
```


## 🛠️ Usage

### 1️⃣ Register a New Asset
```javascript
const registerAsset = async () => {
    const account = '0xYourAccountAddress'; // Replace with your wallet address
    const name = 'Sword of Power';
    const metadata = 'A mythical sword of great power.';

    try {
        const result = await sdk.contract.methods.registerAsset(name, metadata).send({
            from: account,
            gas: 2000000,
        });
        console.log('Asset registered successfully:', result);
    } catch (error) {
        console.error('Error registering asset:', error.message);
    }
};
```


### 2️⃣ Fetch Owned Assets
```javascript
const fetchOwnerAssets = async () => {
    const account = '0xYourAccountAddress'; // Replace with your wallet address

    try {
        const assets = await sdk.getOwnerAssets(account);
        console.log('Owned assets:', assets);
    } catch (error) {
        console.error('Error fetching assets:', error.message);
    }
};
```


### 3️⃣ Update Asset Metadata
```javascript
const updateAssetMetadata = async () => {
    const account = '0xYourAccountAddress';
    const assetId = 1; // Replace with the asset ID
    const newMetadata = 'Updated description of the sword.';

    try {
        const result = await sdk.contract.methods.updateAssetMetadata(assetId, newMetadata).send({
            from: account,
            gas: 2000000,
        });
        console.log('Metadata updated successfully:', result);
    } catch (error) {
        console.error('Error updating metadata:', error.message);
    }
};
```


### 4️⃣ Transfer an Asset
```javascript
const transferAsset = async () => {
    const fromAccount = '0xYourAccountAddress';
    const toAccount = '0xRecipientAddress'; // Replace with the recipient's address
    const assetId = 1; // Replace with the asset ID

    try {
        const result = await sdk.contract.methods.transferAsset(assetId, toAccount).send({
            from: fromAccount,
            gas: 2000000,
        });
        console.log('Asset transferred successfully:', result);
    } catch (error) {
        console.error('Error transferring asset:', error.message);
    }
};
```


## 🌐 Supported Networks

- 🛠️ **Sepolia Testnet**: `0x1d6f8DAAd9a1B9c266768EC1AD0903Ab6E1e89C5`
- 🎮 **ANCIENT8 Network**: `0x8628d91E8311B4856ae7d3E317a0E8fFf48E0f98`

Make sure your provider URL matches the network of the contract.

## ⚙️ Advanced Usage

### Estimate Gas
Optimize gas usage with estimation:
```javascript
const gas = await sdk.contract.methods.registerAsset(name, metadata).estimateGas({ from: account });
console.log('Estimated gas:', gas);
```



## 📜 License

This project is licensed under the [MIT License](LICENSE).


## 💡 Contributing

Contributions are always welcome! Please fork this repository and submit a pull request for any changes.


## 📞 Support

If you encounter any issues, please open an issue on [GitHub](https://github.com/sambitsargam/gamechainsdk) or contact the maintainers.


## 🙌 Acknowledgements

Thanks to the open-source community and developers who contributed to the creation of GameChainSDK.


### 📖 Author

GameChainSDK is developed and maintained by **Sambit Sargam Ekalabya**.
