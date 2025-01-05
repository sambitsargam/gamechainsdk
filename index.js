const { Web3 } = require('web3'); // Import Web3

class GameChainSDK {
    constructor(providerUrl, contractAddress) {
        // Initialize Web3 with the provider
        this.web3 = new Web3(providerUrl);
        this.contractAddress = contractAddress;
        // Load the ABI from the JSON file
        this.abi = require('./ABI/contract.json');
        this.contract = new this.web3.eth.Contract(this.abi, this.contractAddress);
    }

    // Register a new asset
    async registerAsset(account, name, metadata) {
        const gas = await this.contract.methods.registerAsset(name, metadata).estimateGas({ from: account });
        return await this.contract.methods.registerAsset(name, metadata).send({ from: account, gas });
    }

    // Transfer an asset
    async transferAsset(account, assetId, toAddress) {
        const gas = await this.contract.methods.transferAsset(assetId, toAddress).estimateGas({ from: account });
        return await this.contract.methods.transferAsset(assetId, toAddress).send({ from: account, gas });
    }

    // Update metadata of an asset
    async updateAssetMetadata(account, assetId, newMetadata) {
        const gas = await this.contract.methods.updateAssetMetadata(assetId, newMetadata).estimateGas({ from: account });
        return await this.contract.methods.updateAssetMetadata(assetId, newMetadata).send({ from: account, gas });
    }

    // Get all assets owned by an address
    async getOwnerAssets(owner) {
        return await this.contract.methods.getOwnerAssets(owner).call();
    }

    // Get details of a specific asset by ID
    async getAsset(assetId) {
        return await this.contract.methods.assets(assetId).call();
    }
}

module.exports = GameChainSDK;
