ð `window.ethereum`ãè¨­å®ãã
--------------------------

WEBã¢ããªä¸ã§ãã¦ã¼ã¶ã¼ãã¤ã¼ãµãªã¢ã ãããã¯ã¼ã¯ã¨éä¿¡ããããã«ã¯ãWEBã¢ããªã¯ã¦ã¼ã¶ã¼ã®ã¦ã©ã¬ããæå ±ãåå¾ããå¿è¦ãããã¾ãã

ãããããããªãã®WEBã¢ããªã«ã¦ã©ã¬ãããæ¥ç¶ããã¦ã¼ã¶ã¼ã«ãã¹ãã¼ãã³ã³ãã©ã¯ããå¼ã³åºãæ¨©éãä»ä¸ããæ©è½ãå®è£ãã¦ããã¾ãã

- ããã¯ãWEBãµã¤ãã¸ã®èªè¨¼æ©è½ã§ãã

ã¿ã¼ããã«ä¸ã§ã`nft-game-starter-project/src`ã«ç§»åãããã®ä¸­ã«ãã `App.js` ã VS Code ã§éãã¾ãããã

ä¸è¨ã®ããã«ã`App.js`ã®ä¸­èº«ãæ´æ°ãã¾ãã
- `App.js` ã¯ããªãã®WEBã¢ããªã®ãã­ã³ãã¨ã³ãæ©è½ãæããã¾ãã

```javascript
import React, { useEffect, useState } from "react";
import twitterLogo from './assets/twitter-logo.svg';
import './App.css';

// Constantsãå®£è¨ãã: constã¨ã¯å¤æ¸ãæããç¦æ­¢ããå¤æ°ãå®£è¨ããæ¹æ³ã§ãã
const TWITTER_HANDLE = 'ããªãã®Twitterãã³ãã«';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {

  // ã¦ã¼ã¶ã¼ãã¡ã¿ãã¯ã¹ãæã£ã¦ãããç¢ºèªãã¾ãã
  const checkIfWalletIsConnected = () => {
      const { ethereum } = window;
      if (!ethereum) {
        console.log('Make sure you have MetaMask!');
        return;
      } else {
        console.log('We have the ethereum object', ethereum);
      }
  };

  // ãã¼ã¸ãã­ã¼ããããã¨ãã« useEffect()åã®é¢æ°ãå¼ã³åºããã¾ãã
  useEffect(() => {
      checkIfWalletIsConnected();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
        <p className="header gradient-text">â¡ï¸ METAVERSE GAME â¡ï¸</p>
          <p className="sub-text">ãã¬ã¤ã¤ã¼ã¨ååãã¦ãã¹ãåããï¼</p>
          <div className="connect-wallet-container">
            <img
              src="https://i.imgur.com/yMocj5x.png"
              alt="Pickachu"
            />
          </div>
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built with @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
```

ð¦ ã¦ã¼ã¶ã¼ã¢ã«ã¦ã³ãã«ã¢ã¯ã»ã¹ã§ãããç¢ºèªãã
-----------------------------------------

`window.ethereum` ã¯ãããªãã®WEBã¢ããªã«åå ããã¦ã¼ã¶ã¼ã Metamask ãæã£ã¦ãããç¢ºèªããçµæã `Console log` ã«åºåãã¾ãã

ã¿ã¼ããã«ã§ `nft-game-starter-project` ã«ç§»åããä¸è¨ãå®è¡ãã¦ã¿ã¾ãããã

```bash
npm run start
```

ã­ã¼ã«ã«ãµã¼ãã¼ã§WEBãµã¤ããç«ã¡ä¸ãããããµã¤ãã®ä¸ã§å³ã¯ãªãã¯ãè¡ãã`Inspect`ãé¸æãã¾ãã
![](/public/images/ETH-NFT-game/section-3/3_2_1.png)
æ¬¡ã«ã`Console`ãé¸æããåºåçµæãç¢ºèªãã¦ã¿ã¾ãããã
![](/public/images/ETH-NFT-game/section-3/3_2_2.png)
`Console` ã« `We have the ethereum object` ã¨è¡¨ç¤ºããã¦ããã§ããããï¼
- ããã¯ã`window.ethereum` ãããã®WEBãµã¤ããè¨ªåããã¦ã¼ã¶ã¼ï¼ããã§ããããªãï¼ã Metamask ãæã£ã¦ãããã¨ãç¢ºèªãããã¨ãç¤ºãã¦ãã¾ãã

æ¬¡ã«ãWEBãµã¤ããã¦ã¼ã¶ã¼ã®ã¦ã©ã¬ããã«ã¢ã¯ã»ã¹ããæ¨©éããããç¢ºèªãã¾ãã

- ã¢ã¯ã»ã¹ã§ããããã¹ãã¼ãã³ã³ãã©ã¯ããå¼ã³åºããã¨ãã§ãã¾ãã

ãããããã¦ã¼ã¶ã¼èªèº«ãæ¿èªããWEBãµã¤ãã«ã¦ã©ã¬ããã®ã¢ã¯ã»ã¹æ¨©éãä¸ããã³ã¼ããæ¸ãã¦ããã¾ãã
- ããã¯ãã¦ã¼ã¶ã¼ã®ã­ã°ã¤ã³æ©è½ã§ãã


ä»¥ä¸ã®ã³ã¼ããç¢ºèªãã¦ãã ããã

```javascript
import React, { useEffect, useState } from "react";
import twitterLogo from './assets/twitter-logo.svg';
import './App.css';

// Constantsãå®£è¨ãã: constã¨ã¯å¤æ¸ãæããç¦æ­¢ããå¤æ°ãå®£è¨ããæ¹æ³ã§ãã
const TWITTER_HANDLE = 'ããªãã®Twitterãã³ãã«';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {

  // ã¦ã¼ã¶ã¼ã®ã¦ã©ã¬ããã¢ãã¬ã¹ãæ ¼ç´ããããã«ä½¿ç¨ããç¶æå¤æ°ãå®ç¾©ãã¾ãã
  const [currentAccount, setCurrentAccount] = useState(null);

  // ã¦ã¼ã¶ã¼ãã¡ã¿ãã¯ã¹ãæã£ã¦ãããç¢ºèªãã¾ãã
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log('Make sure you have MetaMask!');
        return;
      } else {
        console.log('We have the ethereum object', ethereum);
        // accountsã«WEBãµã¤ããè¨ªããã¦ã¼ã¶ã¼ã®ã¦ã©ã¬ããã¢ã«ã¦ã³ããæ ¼ç´ãã¾ãã
        // ï¼è¤æ°æã£ã¦ããå ´åãå å³ããã£ã¦ account's' ã¨å¤æ°ãå®ç¾©ãã¦ããï¼
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        // ããã¢ã«ã¦ã³ããä¸ã¤ã§ãå­å¨ããããä»¥ä¸ãå®è¡ã
        if (accounts.length !== 0) {
          // accountã¨ããå¤æ°ã«ã¦ã¼ã¶ã¼ã®1ã¤ç®ï¼=Javascriptã§ãã0çªç®ï¼ã®ã¢ãã¬ã¹ãæ ¼ç´
          const account = accounts[0];
          console.log('Found an authorized account:', account);
          // currentAccountã«ã¦ã¼ã¶ã¼ã®ã¢ã«ã¦ã³ãã¢ãã¬ã¹ãæ ¼ç´
          setCurrentAccount(account);
        } else {
          console.log('No authorized account found');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ãã¼ã¸ãã­ã¼ããããã¨ãã« useEffect()åã®é¢æ°ãå¼ã³åºããã¾ãã
  useEffect(() => {
      checkIfWalletIsConnected();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
        <p className="header gradient-text">â¡ï¸ METAVERSE GAME â¡ï¸</p>
          <p className="sub-text">ãã¬ã¤ã¤ã¼ã¨ååãã¦ãã¹ãåããï¼</p>
          <div className="connect-wallet-container">
            <img
              src="https://i.imgur.com/yMocj5x.png"
              alt="Pickachu"
            />
          </div>
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built with @${TWITTER_HANDLE}`}</a>
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
const [currentAccount, setCurrentAccount] = useState(null);
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
import React, { useEffect, useState } from "react";
import twitterLogo from './assets/twitter-logo.svg';
import './App.css';

// Constantsãå®£è¨ãã: constã¨ã¯å¤æ¸ãæããç¦æ­¢ããå¤æ°ãå®£è¨ããæ¹æ³ã§ãã
const TWITTER_HANDLE = 'ããªãã®Twitterãã³ãã«';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {

  // ã¦ã¼ã¶ã¼ã®ã¦ã©ã¬ããã¢ãã¬ã¹ãæ ¼ç´ããããã«ä½¿ç¨ããç¶æå¤æ°ãå®ç¾©ãã¾ãã
  const [currentAccount, setCurrentAccount] = useState(null);

  // ã¦ã¼ã¶ã¼ãã¡ã¿ãã¯ã¹ãæã£ã¦ãããç¢ºèªãã¾ãã
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log('Make sure you have MetaMask!');
        return;
      } else {
        console.log('We have the ethereum object', ethereum);
        // accountsã«WEBãµã¤ããè¨ªããã¦ã¼ã¶ã¼ã®ã¦ã©ã¬ããã¢ã«ã¦ã³ããæ ¼ç´ãã¾ãã
        // ï¼è¤æ°æã£ã¦ããå ´åãå å³ããã£ã¦ account's' ã¨å¤æ°ãå®ç¾©ãã¦ããï¼
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        // ããã¢ã«ã¦ã³ããä¸ã¤ã§ãå­å¨ããããä»¥ä¸ãå®è¡ã
        if (accounts.length !== 0) {
          // accountã¨ããå¤æ°ã«ã¦ã¼ã¶ã¼ã®1ã¤ç®ï¼=Javascriptã§ãã0çªç®ï¼ã®ã¢ãã¬ã¹ãæ ¼ç´
          const account = accounts[0];
          console.log('Found an authorized account:', account);
          // currentAccountã«ã¦ã¼ã¶ã¼ã®ã¢ã«ã¦ã³ãã¢ãã¬ã¹ãæ ¼ç´
          setCurrentAccount(account);
        } else {
          console.log('No authorized account found');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  // connectWallet ã¡ã½ãããå®è£ãã¾ãã
  const connectWalletAction = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert('Get MetaMask!');
        return;
      }
      // ã¦ã©ã¬ããã¢ãã¬ã¹ã«å¯¾ãã¦ã¢ã¯ã»ã¹ããªã¯ã¨ã¹ããã¦ãã¾ãã
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      // ã¦ã©ã¬ããã¢ãã¬ã¹ã currentAccount ã«ç´ä»ãã¾ãã
      console.log('Connected', accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // ãã¼ã¸ãã­ã¼ããããã¨ãã« useEffect()åã®é¢æ°ãå¼ã³åºããã¾ãã
  useEffect(() => {
      checkIfWalletIsConnected();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
        <p className="header gradient-text">â¡ï¸ METAVERSE GAME â¡ï¸</p>
          <p className="sub-text">ãã¬ã¤ã¤ã¼ã¨ååãã¦ãã¹ãåããï¼</p>
          <div className="connect-wallet-container">
            <img
              src="https://i.imgur.com/yMocj5x.png"
              alt="Pickachu"
            />
            {/*
             * ã¦ã©ã¬ããã³ãã¯ããèµ·åããããã«ä½¿ç¨ãããã¿ã³ãè¨­å®ãã¦ãã¾ãã
             * ã¡ã½ãããå¼ã³åºãããã« onClick ã¤ãã³ããè¿½å ãããã¨ãå¿ããªãã§ãã ããã
             */}
            <button
              className="cta-button connect-wallet-button"
              onClick={connectWalletAction}
            >
              Connect Wallet To Get Started
            </button>
          </div>
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built with @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
```

ããã§æ°ããå®è£ããæ©è½ã¯ãä»¥ä¸ã®2ã¤ã§ãã

**1 \. `connectWallet` ã¡ã½ãããå®è£**

```javascript
// App.js
// connectWallet ã¡ã½ãããå®è£ãã¾ãã
const connectWalletAction = async () => {
try {
	const { ethereum } = window;
	if (!ethereum) {
	alert('Get MetaMask!');
	return;
	}
	// ã¦ã©ã¬ããã¢ãã¬ã¹ã«å¯¾ãã¦ã¢ã¯ã»ã¹ããªã¯ã¨ã¹ããã¦ãã¾ãã
	const accounts = await ethereum.request({
	method: 'eth_requestAccounts',
	});
	// ã¦ã©ã¬ããã¢ãã¬ã¹ã currentAccount ã«ç´ä»ãã¾ãã
	console.log('Connected', accounts[0]);
	setCurrentAccount(accounts[0]);
} catch (error) {
	console.log(error);
}
};
```

`eth_requestAccounts` ã¡ã½ãããä½¿ç¨ãããã¨ã§ãMetamask ããã¦ã¼ã¶ã¼ã«ã¦ã©ã¬ããã¸ã®ã¢ã¯ã»ã¹ãè¨±å¯ããããå¼ã³ããããã¨ãã§ãã¾ãã

**2 \. `Connect Wallet` ãã¿ã³ã®å®è£**
```javascript
// App.js
{/*
  * ã¦ã©ã¬ããã³ãã¯ããèµ·åããããã«ä½¿ç¨ãããã¿ã³ãè¨­å®ãã¦ãã¾ãã
  * ã¡ã½ãããå¼ã³åºãããã« onClick ã¤ãã³ããè¿½å ãããã¨ãå¿ããªãã§ãã ããã
*/}
<button
	className="cta-button connect-wallet-button"
	onClick={connectWalletAction}
>
	Connect Wallet To Get Started
</button>
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
ã¦ã©ã¬ããæ¥ç¶æ©è½ãå®è£ã§ããããæ¬¡ã®ã¬ãã¹ã³ã«é²ã¿ã¾ãããð
