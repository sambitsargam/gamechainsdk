require('dotenv').config(); // Load environment variables
const { Web3 } = require('web3'); // Import Web3
const GameChainSDK = require('./index'); // Path to your SDK

(async () => {
    // Load environment variables
    const providerUrl = process.env.PROVIDER_URL;
    const contractAddress = process.env.CONTRACT_ADDRESS;
    const privateKey = process.env.PRIVATE_KEY;
    const recipientAddress = process.env.RECIPIENT_ADDRESS;

    // Validate environment variables
    if (!providerUrl || !contractAddress || !privateKey || !recipientAddress) {
        console.error('One or more environment variables are missing. Please check your .env file.');
        return;
    }

    if (privateKey.length !== 66 || !privateKey.startsWith('0x')) {
        console.error('Private key is missing or invalid. Ensure it is a valid 64-character hexadecimal string prefixed with 0x.');
        return;
    }

    try {
        // Initialize Web3
        const web3 = new Web3(providerUrl);

        // Add account using private key
        const account = web3.eth.accounts.privateKeyToAccount(privateKey);
        console.log('Account Address:', account.address);
        web3.eth.accounts.wallet.add(account);

        // Initialize the SDK
        const sdk = new GameChainSDK(providerUrl, contractAddress);

        console.log('Fetching asset...');
        const asset = await sdk.getAsset(0); // Assuming the first asset ID is 0
        console.log('Asset details:', asset);

        console.log('Fetching owner assets...');
        const ownerAssets = await sdk.getOwnerAssets(account.address);
        console.log('Assets owned by the account:', ownerAssets);

        console.log('Updating asset metadata...');
        const updateResult = await sdk.updateAssetMetadata(account.address, 0, 'Updated metadata for the sword');
        console.log('Metadata updated:', updateResult);

        console.log('Transferring asset...');
        const transferResult = await sdk.transferAsset(account.address, 0, recipientAddress);
        console.log('Asset transferred:', transferResult);
    } catch (error) {
        console.error('Error during SDK testing:', error);
    }
})();
