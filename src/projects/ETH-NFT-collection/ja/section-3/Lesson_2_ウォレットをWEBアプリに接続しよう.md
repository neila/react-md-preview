ð `window.ethereum`ãè¨­å®ãã
--------------------------

WEBã¢ããªä¸ã§ãã¦ã¼ã¶ã¼ãã¤ã¼ãµãªã¢ã ãããã¯ã¼ã¯ã¨éä¿¡ããããã«ã¯ãWEBã¢ããªã¯ã¦ã¼ã¶ã¼ã®ã¦ã©ã¬ããæå ±ãåå¾ããå¿è¦ãããã¾ãã

ãããããããªãã®WEBã¢ããªã«ã¦ã©ã¬ãããæ¥ç¶ããã¦ã¼ã¶ã¼ã«ãã¹ãã¼ãã³ã³ãã©ã¯ããå¼ã³åºãæ¨©éãä»ä¸ããæ©è½ãå®è£ãã¦ããã¾ãã

- ããã¯ãWEBãµã¤ãã¸ã®èªè¨¼æ©è½ã§ãã

ã¿ã¼ããã«ä¸ã§ã`nft-collection-starter-project/src`ã«ç§»åãããã®ä¸­ã«ãã `App.js` ã VS Code ã§éãã¾ãããã

ä¸è¨ã®ããã«ã`App.js`ã®ä¸­èº«ãæ´æ°ãã¾ãã
- `App.js` ã¯ããªãã®WEBã¢ããªã®ãã­ã³ãã¨ã³ãæ©è½ãæããã¾ãã

```javascript
import React, { useEffect } from "react";
import './styles/App.css';
import twitterLogo from './assets/twitter-logo.svg';
// Constantsãå®£è¨ãã: constã¨ã¯å¤æ¸ãæããç¦æ­¢ããå¤æ°ãå®£è¨ããæ¹æ³ã§ãã
const TWITTER_HANDLE = 'ããªãã®Twitterã®ãã³ãã«ãã¼ã ãè²¼ãä»ãã¦ãã ãã';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const OPENSEA_LINK = '';
const TOTAL_MINT_COUNT = 50;
const App = () => {
  const checkIfWalletIsConnected = () => {
    /*
    * ã¦ã¼ã¶ã¼ãã¡ã¿ãã¯ã¹ãæã£ã¦ãããç¢ºèªãã¾ãã
    */
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }
  }
  // renderNotConnectedContainer ã¡ã½ãããå®ç¾©ãã¾ãã
  const renderNotConnectedContainer = () => (
    <button className="cta-button connect-wallet-button">
      Connect to Wallet
    </button>
  );
  /*
  * ãã¼ã¸ãã­ã¼ããããã¨ãã« useEffect()åã®é¢æ°ãå¼ã³åºããã¾ãã
  */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])
  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">My NFT Collection</p>
          <p className="sub-text">
            ããªãã ãã®ç¹å¥ãª NFT ã Mint ãããð«
          </p>
          {/* ã¡ã½ãããè¿½å ãã¾ã */}
          {renderNotConnectedContainer()}
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};
export default App;
```

ð¦ ã¦ã¼ã¶ã¼ã¢ã«ã¦ã³ãã«ã¢ã¯ã»ã¹ã§ãããç¢ºèªãã
-----------------------------------------

`window.ethereum` ã¯ãããªãã®WEBãµã¤ããè¨ªåããã¦ã¼ã¶ã¼ã Metamask ãæã£ã¦ãããç¢ºèªããçµæã `Console log` ã«åºåãã¾ãã

ã¿ã¼ããã«ã§ `nft-collection-starter-project` ã«ç§»åããä¸è¨ãå®è¡ãã¦ã¿ã¾ãããã

```bash
npm run start
```

ã­ã¼ã«ã«ãµã¼ãã¼ã§WEBãµã¤ããç«ã¡ä¸ãããããµã¤ãã®ä¸ã§å³ã¯ãªãã¯ãè¡ãã`Inspect`ãé¸æãã¾ãã

![](/public/images/ETH-NFT-collection/section-3/3_2_1.png)

æ¬¡ã«ã`Console`ãé¸æããåºåçµæãç¢ºèªãã¦ã¿ã¾ãããã

![](/public/images/ETH-NFT-collection/section-3/3_2_2.png)

`Console` ã« `We have the ethereum object` ã¨è¡¨ç¤ºããã¦ããã§ããããï¼
- ããã¯ã`window.ethereum` ãããã®WEBãµã¤ããè¨ªåããã¦ã¼ã¶ã¼ï¼ããã§ããããªãï¼ã Metamask ãæã£ã¦ãããã¨ãç¢ºèªãããã¨ãç¤ºãã¦ãã¾ãã

æ¬¡ã«ãWEBãµã¤ããã¦ã¼ã¶ã¼ã®ã¦ã©ã¬ããã«ã¢ã¯ã»ã¹ããæ¨©éããããç¢ºèªãã¾ãã

- ã¢ã¯ã»ã¹ã§ããããã¹ãã¼ãã³ã³ãã©ã¯ããå¼ã³åºããã¨ãã§ãã¾ãã

ãããããã¦ã¼ã¶ã¼èªèº«ãæ¿èªããWEBãµã¤ãã«ã¦ã©ã¬ããã®ã¢ã¯ã»ã¹æ¨©éãä¸ããã³ã¼ããæ¸ãã¦ããã¾ãã
- ããã¯ãã¦ã¼ã¶ã¼ã®ã­ã°ã¤ã³æ©è½ã§ãã

ä»¥ä¸ã®éãã`App.js` ãä¿®æ­£ãã¦ãã ããã

```javascript
// useEffect ã¨ useState é¢æ°ã React.js ããã¤ã³ãã¼ããã¦ãã¾ãã
import React, { useEffect, useState } from "react";
import './styles/App.css';
import twitterLogo from './assets/twitter-logo.svg';
// Constantsãå®£è¨ãã: constã¨ã¯å¤æ¸ãæããç¦æ­¢ããå¤æ°ãå®£è¨ããæ¹æ³ã§ãã
const TWITTER_HANDLE = 'ããªãã®Twitterã®ãã³ãã«ãã¼ã ãè²¼ãä»ãã¦ãã ãã';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const OPENSEA_LINK = '';
const TOTAL_MINT_COUNT = 50;
const App = () => {
  /*
  * ã¦ã¼ã¶ã¼ã®ã¦ã©ã¬ããã¢ãã¬ã¹ãæ ¼ç´ããããã«ä½¿ç¨ããç¶æå¤æ°ãå®ç¾©ãã¾ãã
  */
  const [currentAccount, setCurrentAccount] = useState("");
  /*ãã®æ®µéã§currentAccountã®ä¸­èº«ã¯ç©º*/
  console.log("currentAccount: ", currentAccount);
  /*
  * ã¦ã¼ã¶ã¼ãèªè¨¼å¯è½ãªã¦ã©ã¬ããã¢ãã¬ã¹ãæã£ã¦ãããç¢ºèªãã¾ãã
  */
  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
    } else {
        console.log("We have the ethereum object", ethereum);
    }
    /*
		// ã¦ã¼ã¶ã¼ãèªè¨¼å¯è½ãªã¦ã©ã¬ããã¢ãã¬ã¹ãæã£ã¦ããå ´åã¯ã
    // ã¦ã¼ã¶ã¼ã«å¯¾ãã¦ã¦ã©ã¬ããã¸ã®ã¢ã¯ã»ã¹è¨±å¯ãæ±ããã
    // è¨±å¯ãããã°ãã¦ã¼ã¶ã¼ã®æåã®ã¦ã©ã¬ããã¢ãã¬ã¹ã
    // accounts ã«æ ¼ç´ããã
    */
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account)
    } else {
      console.log("No authorized account found")
    }
  }
  // renderNotConnectedContainer ã¡ã½ãããå®ç¾©ãã¾ãã
  const renderNotConnectedContainer = () => (
    <button className="cta-button connect-wallet-button">
      Connect to Wallet
    </button>
  );
  /*
  * ãã¼ã¸ãã­ã¼ããããã¨ãã« useEffect()åã®é¢æ°ãå¼ã³åºããã¾ãã
  */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])
  return (
     <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">My NFT Collection</p>
          <p className="sub-text">
          ããªãã ãã®ç¹å¥ãª NFT ã Mint ãããð«
          </p>
          {/* ã¡ã½ãããè¿½å ãã¾ã */}
          {renderNotConnectedContainer()}
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};
export default App;
```

æ°ããè¿½å ããã³ã¼ããè¦ã¦ããã¾ãããã

```javascript
// App.js
// ã¦ã¼ã¶ã¼ã®ã¦ã©ã¬ããã¢ãã¬ã¹ãæ ¼ç´ããããã«ä½¿ç¨ããç¶æå¤æ°ãå®ç¾©ãã¾ãã
const [currentAccount, setCurrentAccount] = useState("");
/*ãã®æ®µéã§currentAccountã®ä¸­èº«ã¯ç©º*/
console.log("currentAccount: ", currentAccount);
```
ã¢ã¯ã»ã¹å¯è½ãªã¢ã«ã¦ã³ããæ¤åºããå¾ã`currentAccount` ã«ã¦ã¼ã¶ã¼ã®ã¦ã©ã¬ããã¢ã«ã¦ã³ãï¼`0x...`ï¼ã®å¤ãå¥ãã¾ãã

ä»¥ä¸ã§ `currentAccount` ãæ´æ°ãã¦ãã¾ãã
```javascript
// App.js
// accountsã«WEBãµã¤ããè¨ªããã¦ã¼ã¶ã¼ã®ã¦ã©ã¬ããã¢ã«ã¦ã³ããæ ¼ç´ããï¼è¤æ°æã£ã¦ããå ´åãå å³ããã£ã¦ account's' ã¨å¤æ°ãå®ç¾©ãã¦ããï¼
const accounts = await ethereum.request({ method: "eth_accounts" });
// ããã¢ã«ã¦ã³ããä¸ã¤ã§ãå­å¨ããããä»¥ä¸ãå®è¡ã
if (accounts.length !== 0) {
    // accountã¨ããå¤æ°ã«ã¦ã¼ã¶ã¼ã®1ã¤ç®ï¼=Javascriptã§ãã0çªç®ï¼ã®ã¢ãã¬ã¹ãæ ¼ç´
  	const account = accounts[0];
    console.log("Found an authorized account:", account);
  	// currentAccountã«ã¦ã¼ã¶ã¼ã®ã¢ã«ã¦ã³ãã¢ãã¬ã¹ãæ ¼ç´
  	setCurrentAccount(account)
} else {
	console.log("No authorized account found")
}
```
ãã®å¦çã®ãããã§ãã¦ã¼ã¶ã¼ãã¦ã©ã¬ããã«è¤æ°ã®ã¢ã«ã¦ã³ããæã£ã¦ããå ´åã§ãããã­ã°ã©ã ã¯ã¦ã¼ã¶ã¼ã®1çªç®ã®ã¢ã«ã¦ã³ãã¢ãã¬ã¹ãåå¾ãããã¨ãã§ãã¾ãã

ð ã¦ã©ã¬ããæ¥ç¶ãã¿ã³ãä½æãã
--------------------------------

æ¬¡ã«ã`connectWallet` ãã¿ã³ãä½æãã¦ããã¾ãã

ä¸è¨ã®éã `App.js` ãæ´æ°ãã¦ããã¾ãããã

```javascript
// useEffect ã¨ useState é¢æ°ã React.js ããã¤ã³ãã¼ããã¦ãã¾ãã
import React, { useEffect, useState } from "react";
import './styles/App.css';
import twitterLogo from './assets/twitter-logo.svg';
// Constantsãå®£è¨ãã: constã¨ã¯å¤æ¸ãæããç¦æ­¢ããå¤æ°ãå®£è¨ããæ¹æ³ã§ãã
const TWITTER_HANDLE = 'ããªãã®Twitterã®ãã³ãã«ãã¼ã ãè²¼ãä»ãã¦ãã ãã';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const OPENSEA_LINK = '';
const TOTAL_MINT_COUNT = 50;
const App = () => {
  /*
  * ã¦ã¼ã¶ã¼ã®ã¦ã©ã¬ããã¢ãã¬ã¹ãæ ¼ç´ããããã«ä½¿ç¨ããç¶æå¤æ°ãå®ç¾©ãã¾ãã
  */
  const [currentAccount, setCurrentAccount] = useState("");
  /*ãã®æ®µéã§currentAccountã®ä¸­èº«ã¯ç©º*/
  console.log("currentAccount: ", currentAccount);
  /*
  * ã¦ã¼ã¶ã¼ãèªè¨¼å¯è½ãªã¦ã©ã¬ããã¢ãã¬ã¹ãæã£ã¦ãããç¢ºèªãã¾ãã
  */
  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
    } else {
        console.log("We have the ethereum object", ethereum);
    }
    /* ã¦ã¼ã¶ã¼ãèªè¨¼å¯è½ãªã¦ã©ã¬ããã¢ãã¬ã¹ãæã£ã¦ããå ´åã¯ã
     * ã¦ã¼ã¶ã¼ã«å¯¾ãã¦ã¦ã©ã¬ããã¸ã®ã¢ã¯ã»ã¹è¨±å¯ãæ±ããã
     * è¨±å¯ãããã°ãã¦ã¼ã¶ã¼ã®æåã®ã¦ã©ã¬ããã¢ãã¬ã¹ã
     * accounts ã«æ ¼ç´ããã
     */
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account)
    } else {
      console.log("No authorized account found")
    }
  }

  /*
  * connectWallet ã¡ã½ãããå®è£ãã¾ãã
  */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      /*
      * ã¦ã©ã¬ããã¢ãã¬ã¹ã«å¯¾ãã¦ã¢ã¯ã»ã¹ããªã¯ã¨ã¹ããã¦ãã¾ãã
      */
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      console.log("Connected", accounts[0]);
      /*
      * ã¦ã©ã¬ããã¢ãã¬ã¹ã currentAccount ã«ç´ä»ãã¾ãã
      */
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  // renderNotConnectedContainer ã¡ã½ãããå®ç¾©ãã¾ãã
  const renderNotConnectedContainer = () => (
    <button onClick={connectWallet} className="cta-button connect-wallet-button">
      Connect to Wallet
    </button>
  );
  /*
  * ãã¼ã¸ãã­ã¼ããããã¨ãã« useEffect()åã®é¢æ°ãå¼ã³åºããã¾ãã
  */
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])
  return (
     <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">My NFT Collection</p>
          <p className="sub-text">
          ããªãã ãã®ç¹å¥ãª NFT ã Mint ãããð«
          </p>
          {/*æ¡ä»¶ä»ãã¬ã³ããªã³ã°ãè¿½å ãã¾ãã
          // ãã§ã«æ¥ç¶ããã¦ããå ´åã¯ã
          // Connect to Walletãè¡¨ç¤ºããªãããã«ãã¾ãã*/}
          {currentAccount === "" ? (
            renderNotConnectedContainer()
          ) : (
            <button onClick={null} className="cta-button connect-wallet-button">
              Mint NFT
            </button>
          )}
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};
export default App;
```
ããã§å®è£ããæ©è½ã¯ä»¥ä¸ã®3ã¤ã§ãã

**1 \. `connectWallet` ã¡ã½ãããå®è£**
```javascript
// App.js
const connectWallet = async () => {
	try {
		// ã¦ã¼ã¶ã¼ãèªè¨¼å¯è½ãªã¦ã©ã¬ããã¢ãã¬ã¹ãæã£ã¦ãããç¢ºèª
		const { ethereum } = window;
		if (!ethereum) {
			alert("Get MetaMask!");
			return;
		}
		// æã£ã¦ããå ´åã¯ãã¦ã¼ã¶ã¼ã«å¯¾ãã¦ã¦ã©ã¬ããã¸ã®ã¢ã¯ã»ã¹è¨±å¯ãæ±ãããè¨±å¯ãããã°ãã¦ã¼ã¶ã¼ã®æåã®ã¦ã©ã¬ããã¢ãã¬ã¹ã currentAccount ã«æ ¼ç´ããã
		const accounts = await ethereum.request({ method: "eth_requestAccounts" });
		console.log("Connected: ", accounts[0]);
		setCurrentAccount(accounts[0]);
    } catch (error) {
		console.log(error)
    }
  }
```

`eth_requestAccounts` ã¡ã½ãããä½¿ç¨ãããã¨ã§ãMetamask ããã¦ã¼ã¶ã¼ã«ã¦ã©ã¬ããã¸ã®ã¢ã¯ã»ã¹ãè¨±å¯ããããå¼ã³ããããã¨ãã§ãã¾ãã


**2 \. `renderNotConnectedContainer` ã¡ã½ãããå®è£**
```javascript
// App.js
const renderNotConnectedContainer = () => (
  <button onClick={connectWallet} className="cta-button connect-wallet-button">
    Connect to Wallet
  </button>
);
```

`renderNotConnectedContainer` ã¡ã½ããã«ãã£ã¦ãã¦ã¼ã¶ã¼ã®ã¦ã©ã¬ããã¢ãã¬ã¹ããWEBã¢ããªã¨ç´ã¥ãã¦ããªãå ´åã¯ãã`Connect to Wallet`ãã®ãã¿ã³ããã­ã³ãã¨ã³ãã«è¡¨ç¤ºããã¾ãã

**3 \. `renderNotConnectedContainer` ã¡ã½ãããä½¿ã£ãæ¡ä»¶ä»ãã¬ã³ããªã³ã°**
```javascript
// App.s
{/*æ¡ä»¶ä»ãã¬ã³ããªã³ã°ãè¿½å ãã¾ããã*/}
{currentAccount === "" ? (
  renderNotConnectedContainer()
) : (
  <button onClick={null} className="cta-button connect-wallet-button">
    Mint NFT
  </button>
)}
```

ããã§ã¯ãæ¡ä»¶ä»ãã¬ã³ããªã³ã°ãå®è£ãã¦ãã¾ãã

`currentAccount === ""` ã¯ã`currentAccount` ã«ã¦ã¼ã¶ã¼ã®ã¦ã©ã¬ããã¢ãã¬ã¹ãç´ã¥ãã¦ãããã©ããå¤å®ãã¦ãã¾ãã

æ¡ä»¶ä»ãã¬ã³ããªã³ã°ã¯ãä¸è¨ã®ããã«å®è¡ããã¾ãã
```javascript
{ currentAccount === "" ? ( currentAccount ã«ã¢ãã¬ã¹ãç´ã¥ãã¦ãªããã°ãA ãå®è¡ ) : ( currentAccount ã«ã¢ãã¬ã¹ãç´ã¥ããã° B ãå®è¡ )}
```
`App.js` ã®å ´åã`A` ãªãã°ã¯ã`renderNotConnectedContainer()` ãå®è¡ãã`B` ãªãã°ã`Mint NFT` ãã¿ã³ããã­ã³ãã¨ã³ãã«åæ ããã¦ãã¾ãã

æ¡ä»¶ä»ãã¬ã³ããªã³ã°ã«ã¤ãã¦è©³ããã¯ [ãã¡ã](https://ja.reactjs.org/docs/conditional-rendering.html) ãåç§ãã¦ãã ããã

ð ã¦ã©ã¬ããã³ãã¯ãã®ãã¹ããå®è¡ãã
--------------------------------

ä¸è¨ã®ã³ã¼ããå¨ã¦ `App.js` ã«åæ ãããããã¿ã¼ããã«ä¸ã§ `nft-collection-starter-project` ãã£ã¬ã¯ããªã«ç§»åããä¸è¨ãå®è¡ãã¾ãããã

```bash
npm run start
```

ã­ã¼ã«ã«ãµã¼ãã¼ã§WEBãµã¤ããç«ã¡ä¸ããããMetamask ã®ãã©ã°ã¤ã³ãã¯ãªãã¯ããããªãã®ã¦ã©ã¬ããã¢ãã¬ã¹ã®æ¥ç¶ç¶æ³ãç¢ºèªãã¾ãããã
ãããä¸å³ã®ããã« `Connected` ã¨è¡¨ç¤ºããã¦ããå ´åã¯ã`Connected` ã®æå­ãã¯ãªãã¯ãã¾ãã

![](/public/images/ETH-NFT-collection/section-3/3_2_3.png)

ããã§ãWEBãµã¤ãã¨ããªãã®ã¦ã©ã¬ããã¢ãã¬ã¹ã®æ¥ç¶ãä¸åº¦è§£é¤ãã¾ãã

- `Disconnect this account` ãé¸æãã¦ãã ããã

![](/public/images/ETH-NFT-collection/section-3/3_2_4.png)

æ¬¡ã«ã­ã¼ã«ã«ãµã¼ãã¼ã«ãã¹ãããã¦ããããªãã®WEBãµã¤ãããªãã¬ãã·ã¥ãã¦ãã¿ã³ã®è¡¨ç¤ºãç¢ºèªãã¦ãã ããã

- ã¦ã©ã¬ããæ¥ç¶ç¨ã®ãã¿ã³ãã`Connect Wallet` ã¨è¡¨ç¤ºããã¦ããã°æåã§ãã

æ¬¡ã«ãå³ã¯ãªãã¯ â `Inspect` ãé¸æãã`Console` ãç«ã¡ä¸ãã¾ããããä¸å³ã®ããã«ã`No authorized account found` ã¨åºåããã¦ããã°æåã§ãã

![](/public/images/ETH-NFT-collection/section-3/3_2_5.png)

ã§ã¯ã`Connect Wallet` ãã¿ã³ãæ¼ãã¦ã¿ã¾ãããã

ä¸å³ã®ããã« Metamask ããã¦ã©ã¬ããæ¥ç¶ãæ±ãããã¾ãã®ã§ãæ¿èªãã¦ãã ããã

![](/public/images/ETH-NFT-collection/section-3/3_2_6.png)

Metamaskã®æ¿èªãçµããã¨ãã¦ã©ã¬ããæ¥ç¶ãã¿ã³ã®è¡¨ç¤ºã `Wallet Connected` ã«å¤æ´ããã¦ããã¯ãã§ãã

ä¸è¨ã®ããã«ã`Console` ã«ããæ¥ç¶ãããã¦ã©ã¬ããã¢ãã¬ã¹ãã`currentAccount` ã¨ãã¦åºåããã¦ãããã¨ãç¢ºèªãã¦ãã ããã

```
Connected 0x3a0a49fb3cf930e599f0fa7abe554dc18bd1f135
App.js:16 currentAccount:  0x3a0a49fb3cf930e599f0fa7abe554dc18bd1f135
```

ðââï¸ è³ªåãã
-------------------------------------------
ããã¾ã§ã®ä½æ¥­ã§ä½ãããããªããã¨ãããå ´åã¯ãDiscordã®`#section-3-help`ã§è³ªåããã¦ãã ããã

ãã«ããããã¨ãã®ãã­ã¼ãåæ»ã«ãªãã®ã§ãã¨ã©ã¼ã¬ãã¼ãã«ã¯ä¸è¨ã®3ç¹ãè¨è¼ãã¦ãã ããâ¨
```
1. ä½ããããã¨ãã¦ããã
2. ã¨ã©ã¼æãã³ãã¼&ãã¼ã¹ã
3. ã¨ã©ã¼ç»é¢ã®ã¹ã¯ãªã¼ã³ã·ã§ãã
```
-------------------------------------------
ã¦ã©ã¬ããæ¥ç¶æ©è½ãå®æããããæ¬¡ã®ã¬ãã¹ã³ã«é²ã¿ã¾ãããð
