ð Rarible ã§ NFT ãç¢ºèªãã
---

ã³ã³ãã©ã¯ãã®ã¢ãã¬ã¹ï¼`Contract deployed to` ã«ç¶ã `0x..` ï¼ãã¿ã¼ããã«ããã³ãã¼ãã¦ã[`rinkeby.rarible.com`](https://rinkeby.rarible.com/) ã«è²¼ãä»ããæ¤ç´¢ãã¦ã¿ã¦ãã ããã

- [ãã¹ããããç¨ã® OpenSea](https://testnets.opensea.io/) ã§ãåãããã«ç¢ºèªãããã¨ãã§ãã¾ãããNFT ã OpenSea ã«åæ ãããã¾ã§ã«æéããããã®ã§ãRarible ã§æ¤è¨¼ãããã¨ããããããã¾ãã

ãããã®ã³ã¬ã¯ã·ã§ã³ã¯ãã®ãããªå½¢ã§è¡¨ç¤ºããã¾ãã

![](/public/images/Polygon-Generative-NFT/section-2/2_4_1.png)

`deploy.js` ã§ã10åã® NFT ãèªåç¨ã«ã­ã¼ããã¦ããã3 å NFT ã Mint ãã¾ããã

ãããã£ã¦ãä»ã³ã³ãã©ã¯ãã¢ãã¬ã¹ããè¡¨ç¤ºã§ãã NFT ã³ã¬ã¯ã·ã§ã³ã¯ã13åã§ãã

ð Etherscan ãä½¿ã£ã¦ã³ã³ãã©ã¯ãã verifyï¼æ¤è¨¼ï¼ãã
----

æå¾ã«ãEtherscan ã§ **ã³ã³ãã©ã¯ãã® Verificationï¼æ¤è¨¼ï¼** ãè¡ãã¾ãããã

ãã®æ©è½ãä½¿ãã°ãããªãã® Solidity ãã­ã°ã©ã ãä¸çä¸­ã®äººã«å¬éãããã¨ãã§ãã¾ãã

ã¾ããããªããä»ã®äººã®æ¸ããã³ã¼ããèª­ããã¨ãã§ãã¾ãã

ã¾ããEtherscan ã®ã¢ã«ã¦ã³ããåå¾ãã¦ãAPI Key ãåå¾ãã¾ãããã

ã¢ã«ã¦ã³ããã¾ã ãæã¡ã§ãªãå ´åã¯ã[https://etherscan.io/register](https://etherscan.io/register) ã«ã¢ã¯ã»ã¹ãã¦ãç¡æã®ã¦ã¼ã¶ã¼ã¢ã«ã¦ã³ããä½æãã¦ãã ããã

ã¢ã«ã¦ã³ããä½æã§ãããã`My Profile` ç»é¢ã«ç§»åãã¦ãã ããã

![](/public/images/Polygon-Generative-NFT/section-2/2_4_2.png)

`API Keys` ã¿ããé¸æãã`+ Add` ãã¿ã³ãæ¼ãããã`Create API Key` ã®ãããã¢ãããè¡¨ç¤ºãããã®ã§ãããªãã® API ã«ä»»æã®ååãã¤ãã¾ãããã

![](/public/images/Polygon-Generative-NFT/section-2/2_4_3.png)

æ¬¡ã«ãããªããä½æãã API ã®æ¨ªã® `Edit` ãã¿ã³ãé¸æãã¦ãã ããããããã¢ãããè¡¨ç¤ºãããã®ã§ã`apiKey` ãåå¾ãã¾ãããã

æ¬¡ã«ãã¿ã¼ããã«ã§ `nft-collectible` ãã£ã¬ã¯ããªã«ç§»åãã¦ãæ¬¡ã®ã³ãã³ããå®è¡ãã¦ãã ããã

Etherscan ã§ verification ãè¡ãããã«å¿è¦ãªãã¼ã«ãã¤ã³ã¹ãã¼ã«ãã¾ãã

```bash
npm install @nomiclabs/hardhat-etherscan
```

![](/public/images/Polygon-Generative-NFT/section-2/2_4_4.png)

æ¬¡ã«ã`nft-collectible` ãã£ã¬ã¯ããªã«ãã `.env` ãéãã¾ãã

`YOUR ETHERSCAN apiKey HERE` ã®é¨åã« Etherscan ããåå¾ãã `apiKey` ãè²¼ãä»ããããä¸è¨ã®ã³ã¼ãã `.env` ã«è¿½å ãã¾ãããã

```
ETHERSCAN_API = "YOUR ETHERSCAN apiKey HERE"
```

æå¾ã«ã`nft-collectible/hardhat.config.js` ãä¸è¨ã®ããã«æ´æ°ãã¾ãããã

```javascript
// hardhat.config.js
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

const { API_URL, PRIVATE_KEY, ETHERSCAN_API } = process.env;

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  networks: {
    rinkeby: {
      url: API_URL,
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API
  }
};
```

ããã§ã³ã³ãã©ã¯ããæ¤è¨¼ããæºåã¯æ´ãã¾ããã

ä¸è¨ã® `DEPLOYED_CONTRACT_ADDRESS` ã¨ `"BASE_TOKEN_URI"` ãããªãã®ãã®ã«æ´æ°ããããã¿ã¼ããã«ã§å®è¡ãã¦ããã¾ãããã

```bash
npx hardhat clean

npx hardhat verify --network rinkeby DEPLOYED_CONTRACT_ADDRESS "BASE_TOKEN_URI"
```
- `DEPLOYED_CONTRACT_ADDRESS` ã¯ããªãã®ã³ã³ãã©ã¯ãã¢ãã¬ã¹ã§ãã

- `"BASE_TOKEN_URI"` ã¯ã`deploy.js` ã«è¨è¼ããã¦ãããã®ã¨åä¸ã§ããå¿è¦ãããã¾ãã


ãããã®ã³ãã³ãã¯ä¸è¨ã®ããã«ãªãã¾ãã

```
npx hardhat verify --network rinkeby 0x94E614a7D82d9dD24CBED7607a40eBE4243491dF "ipfs://QmSvw119ALMN9SkP89Xj37jvqJik8jZrSjU5c1vgBhkhz8/"
```

ã¿ã¼ããã«ã«ãä¸è¨ã®ãããªçµæãè¡¨ç¤ºããã¦ãããã¨ãç¢ºèªãã¦ãã ããã

```
Compiling 1 file with 0.8.4
Successfully submitted source code for contract
contracts/NFTCollectible.sol:NFTCollectible at 0x94E614a7D82d9dD24CBED7607a40eBE4243491dF
for verification on the block explorer. Waiting for verification result...

Successfully verified contract NFTCollectible on Etherscan.
https://rinkeby.etherscan.io/address/0x94E614a7D82d9dD24CBED7607a40eBE4243491dF#code
```

åºåããã `rinkeby.etherscan.io` ã® URL ã«ã¢ã¯ã»ã¹ãã¦ã¿ã¾ãããã

ãããã® [URLãªã³ã¯](https://rinkeby.etherscan.io/address/0x94E614a7D82d9dD24CBED7607a40eBE4243491dF#code) ã®ä¸­èº«ã¯ä¸è¨ã®ããã«è¡¨ç¤ºããã¾ãã

![](/public/images/Polygon-Generative-NFT/section-2/2_4_5.png)

`Contract` ã¿ãã®æ¨ªã«å°ããªç·ã®ãã§ãã¯ãã¼ã¯ â ãè¡¨ç¤ºããã¦ããã§ããããï¼

â ã¯ãã¦ã¼ã¶ã¼ã Metamask ãä½¿ã£ã¦ããEtherscan èªä½ããã³ã³ãã©ã¯ãã®æ©è½ãå¼ã³åºããããã«ãªã£ãã¨ãããã¨ãæå³ãã¾ãã

![](/public/images/Polygon-Generative-NFT/section-2/2_4_6.png)

`Contract` ã¿ãã®ä¸­ã® `Write Contract` ãé¸æãã¦ä»¥ä¸ãè©¦ãã¦ã¿ã¾ãããã

- ã³ã³ãã©ã¯ããããã­ã¤ããã®ã«ä½¿ç¨ãã Metamask ã¢ã«ã¦ã³ãã«æ¥ç¶ãã`withdraw` é¢æ°ãå¼ã³åºãã¾ãã

- 0.03 ETH ãã³ã³ãã©ã¯ãããèªåã®ã¦ã©ã¬ããã«è»¢éã§ããã¯ãã§ãã

- ã¾ãã`mintNFTs` é¢æ°ãå¼ã³åºãã¦æ°æã® NFT ã Mint ãã¦ã¿ã¾ãããã

ðââï¸ è³ªåãã
-------------------------------------------
ããã¾ã§ã®ä½æ¥­ã§ä½ãããããªããã¨ãããå ´åã¯ãDiscordã® `#section-1-help` ã§è³ªåããã¦ãã ããã

ãã«ããããã¨ãã®ãã­ã¼ãåæ»ã«ãªãã®ã§ãã¨ã©ã¼ã¬ãã¼ãã«ã¯ä¸è¨ã®3ç¹ãè¨è¼ãã¦ãã ããâ¨
```
1. ä½ããããã¨ãã¦ããã
2. ã¨ã©ã¼æãã³ãã¼&ãã¼ã¹ã
3. ã¨ã©ã¼ç»é¢ã®ã¹ã¯ãªã¼ã³ã·ã§ãã
```

----

ã³ã³ãã©ã¯ãã®æ¤è¨¼ãå®äºããããæ¬¡ã®ã¬ãã¹ã³ã«é²ã¿ã¾ãããð
