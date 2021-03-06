ð ã¦ã©ã¬ããã«æ¥ç¶ãããã¿ã³ãã¬ã³ããªã³ã°ãã
----

WEBã¢ããªãã Phantom Wallet ã«ã¢ããªã¸ã®æ¥ç¶ãä¿ãããã`connectWallet` ãã¿ã³ãä½æããå¿è¦ãããã¾ãã

web3 ã®ä¸çã§ã¯ãã¦ã©ã¬ããæ¥ç¶ãã¿ã³ã¯ããµã¤ã³ã¢ãã/ã­ã°ã¤ã³ããã¿ã³ã®å½¹å²ãæããã¾ãã

`App.js` ãã¡ã¤ã«ãä¸è¨ã®éãå¤æ´ãã¦ãã ããã


```jsx
import React, { useEffect } from 'react';
import './App.css';
import twitterLogo from './assets/twitter-logo.svg';

// å®æ°ã®å®£è¨
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            'Connected with Public Key:',
            response.publicKey.toString()
          );
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet ð»');
      }
    } catch (error) {
      console.error(error);
    }
  };

  /*
   * ã³ã¼ããå£ããªãããã«ãä¸è¨é¢æ°ãå®ç¾©ãã¾ãããã
   * ä¸è¨ã¯ãã®é¢æ°ã®å®è£ã§ãã
   */
  const connectWallet = async () => {};

  /*
   * ã¦ã¼ã¶ã¼ãã¾ã ã¦ã©ã¬ãããã¢ããªã«æ¥ç¶ãã¦ããªãã¨ãã«
   * ãã®UIãè¡¨ç¤ºãã¾ãã
   */
  const renderNotConnectedContainer = () => (
    <button
      className="cta-button connect-wallet-button"
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">ð­ Candy Drop</p>
          <p className="sub-text">NFT drop machine with fair mint</p>
          {/* Render your connect to wallet button right here */}
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

ããã§ãWEBã¢ããªã«ãã¦ã©ã¬ããã«æ¥ç¶ãã¨ããã°ã©ãã¼ã·ã§ã³ãã¿ã³ãè¡¨ç¤ºããã¾ãã

![ç¡é¡](/public/images/Solana-NFT-mint/section1/1_2_1.png)

**ã¦ã¼ã¶ã¼ãã¦ã©ã¬ãããWEBã¢ããªã«æ¥ç¶ãã¦ããªãå ´åã«ã®ã¿ã`Connect to Wallet` ãã¿ã³ãè¡¨ç¤ºããã¾ãã**

ããã§ããã®ã¦ã©ã¬ããã®ãã¼ã¿ã React ã® state ã«æ ¼ç´ãã¦ã¿ã¦ã¾ããããããããã°ãã¿ã³ãè¡¨ç¤ºãããã©ãããå¤æ­ãããã©ã°ã¨ãã¦ãä½¿ãã¾ãã

`App.js` ãä¿®æ­£ãã¾ãã

ã¾ãã¯ä¸è¨ã®ããã« `useState` ãã³ã³ãã¼ãã³ãã«ã¤ã³ãã¼ãããå¿è¦ãããã¾ãã

```jsx
import React, { useEffect, useState } from 'react';
```

æ¬¡ã«ã  `checkIfWalletIsConnected` é¢æ°ã®ããä¸ã«é²ã¿ãä¸è¨ã® `state` ã®å®£è¨ãè¿½å ãã¾ãã

```jsx
// State
const [walletAddress, setWalletAddress] = useState(null);
```

`state` ãä¿æããæºåãã§ããã®ã§ãããã§ããã¤ãã³ã¼ããæ´æ°ãã¾ãããã

`App.js` ãä¸è¨ã®éãä¿®æ­£ãã¦ãã ããã

```jsx
import React, { useEffect, useState } from 'react';
import './App.css';
import twitterLogo from './assets/twitter-logo.svg';

// Constants
const TWITTER_HANDLE = 'ta_ka_sea0';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  // State
  const [walletAddress, setWalletAddress] = useState(null);

  // Actions
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            'Connected with Public Key:',
            response.publicKey.toString()
          );

          /*
           * ã¦ã¼ã¶ã¼ã®å¬ééµãå¾ããä½¿ããç¶æã«ãã¾ãã
           */
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet ð»');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {};

  const renderNotConnectedContainer = () => (
    <button
      className="cta-button connect-wallet-button"
      onClick={connectWallet}
    >
      Connect to Wallet
    </button>
  );

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">ð­ Candy Drop</p>
          <p className="sub-text">NFT drop machine with fair mint</p>
          {/* ã¦ã©ã¬ããã¢ãã¬ã¹ãæã£ã¦ããªãå ´åã«ã®ã¿è¡¨ç¤ºããæ¡ä»¶ãè¿½å ãã */}
          {!walletAddress && renderNotConnectedContainer()}
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

ç°¡åã«ä¿®æ­£ç¹ãç¢ºèªãã¾ãããã

```jsx
const checkIfWalletIsConnected = async () => {
  try {
    const { solana } = window;

    if (solana) {
      if (solana.isPhantom) {
        console.log('Phantom wallet found!');
        const response = await solana.connect({ onlyIfTrusted: true });
        console.log(
          'Connected with Public Key:',
          response.publicKey.toString()
        );

        /*
         * ã¦ã¼ã¶ã¼ã®å¬ééµãå¾ããä½¿ããç¶æã«ãã¾ãã
         */
        setWalletAddress(response.publicKey.toString());
      }
    } else {
      alert('Solana object not found! Get a Phantom Wallet ð»');
    }
  } catch (error) {
    console.error(error);
  }
};
```

ãã¡ã³ãã ã¦ã©ã¬ãããæ¥ç¶ããã¨ã¦ã¼ã¶ã¼ã®ã¦ã©ã¬ãããããã¼ã¿ãåä¿¡ãã¾ããã

ããã§ãå¾ã§ä½¿ç¨ã§ããããã«ç¶æã«ä¿å­ãã¦ã¿ã¾ãããã

```jsx
{/* ã¦ã©ã¬ããã¢ãã¬ã¹ãæã£ã¦ããªãå ´åã«ã®ã¿è¡¨ç¤ºããæ¡ä»¶ãè¿½å ãã */}
{!walletAddress && renderNotConnectedContainer()}
```

ããã§ã¯` state` ã« `walletAddress` ãè¨­å®ããã¦ããªãå ´åã«ã®ã¿ããã® `render` é¢æ°ãå¼ã³åºãããã«æç¤ºãã¦ãã¾ãã

ãããã£ã¦ãã¦ã¼ã¶ã¼ãã¦ã©ã¬ãããæ¥ç¶ãã¦ããªããã¨ãæå³ããã¦ã©ã¬ããã¢ãã¬ã¹ããªãå ´åã¯ãã¦ã©ã¬ãããæ¥ç¶ããããã®ãã¿ã³ãè¡¨ç¤ºãã¾ãã

ð å®éã«ã¦ã©ã¬ããæ¥ç¶ãã
----

ãã®ã¾ã¾ã ã¨ãã¿ã³ãã¯ãªãã¯ãã¦ãä½ãèµ·ããã¾ããã

 `connectWallet` é¢æ°ã®ã­ã¸ãã¯ãã³ã¼ãã£ã³ã°ãã¾ãã
`App.js` ã® `connectWallet` é¢æ°ãä¸è¨ã®éãä¿®æ­£ãã¾ãããã

```jsx
const connectWallet = async () => {
  const { solana } = window;

  if (solana) {
    const response = await solana.connect();
    console.log('Connected with Public Key:', response.publicKey.toString());
    setWalletAddress(response.publicKey.toString());
  }
};
```

ã¦ã¼ã¶ã¼ãã¦ã©ã¬ãããæ¥ç¶ãããå ´åã`solana` ãªãã¸ã§ã¯ãã§ `connect` é¢æ°ãå¼ã³åºãã¦ãã¦ã¼ã¶ã¼ã®ã¦ã©ã¬ããã§WEBã¢ããªãæ¿èªãå®æ½ãã¾ãã

ããããã¨ãã¦ã¼ã¶ã¼ã®ã¦ã©ã¬ããæå ±(ã¦ã©ã¬ããã¢ãã¬ã¹ãªã©)ã«ã¢ã¯ã»ã¹ã§ããããã«ãªãã¾ãã

 `walletAddress` é¢æ°ãå®è£ã§ããããWEBã¢ããªããã¦ã©ã¬ãããæ¥ç¶ãããã®å¾ `Connect to Wallet` ãã¿ã³ãè¡¨ç¤ºãããªããç¢ºèªãã¾ãã

ããããã¯ãã©ã¦ã¶ã§åä½ãç¢ºèªãã¾ããWEBã¢ããªãéãã`Connect to Wallet` ãã¿ã³ãã¯ãªãã¯ãã¾ãããã

ã¾ãã¯WEBã¢ããªä¸ã®ãã¼ã¸ãæ´æ°ãã`Connect to Wallet` ãã¿ã³ãã¯ãªãã¯ããã¨ãããã¢ãããè¡¨ç¤ºãããã®ã§ãæç¤ºã«å¾ã£ã¦æ¥ç¶ãã¦ãã ããã

ãã¿ã³ãæ¶ãããã¨ãç¢ºèªã§ããããWEBã¢ããªãæ´æ°ãã¦ã¿ã¦ãã ããã

`checkIfWalletIsConnected` é¢æ°ãå¼ã³åºããããã¿ã³ãããã«æ¶ãã¾ããã³ã³ã½ã¼ã«ã«ã¯å¬ééµãåºåããã¦ãã¾ãã

åºæ¬çãªUIã¨ã¦ã¼ã¶ã¼èªè¨¼ãå®è£ã§ãã¾ããã

æ¬¡ã®ã»ã¯ã·ã§ã³ã§ã¯ãSolana ãã­ã°ã©ã ãå¼ã³åºãããã«å¿è¦ãªé¢æ°ãä½¿ç¨ãã¦ãã¹ã¦ã®ã»ããã¢ãããåå¾ãããã¼ã¿ãåå¾ãã¾ãããã®ã¾ã¾ã§ã¯WEBã¢ããªãå¯ããã®ã§æ©è½ãå®è£ãã¦ã¿ã¾ãããã

â ï¸: æ³¨æ
> Fantom Wallet ã®è¨­å®ç»é¢(æ­¯è»ãã¯ãªãã¯)ã«ã[ä¿¡é ¼æ¸ã¿ã¢ããª]ãããã¾ãããããéãã¨ãã¦ã©ã¬ããæ¥ç¶ãã¦ããWEBã¢ããªãè¡¨ç¤ºããã¾ãã
>
> ã­ã¼ã«ã«ã§å®è¡ãã¦ããå ´åã¯ã `localhostï¼3000` ãè¡¨ç¤ºããã¾ãããããåãæ¶ããã¨ã§ç°¡åã«é£æºè§£é¤å¯è½ã§ãã
>
> å®éã«é£æºè§£é¤ãã¢ããªãæ´æ°ããã¨ã`Connect to Wallet` ãã¿ã³ãè¡¨ç¤ºããã¾ãã


ðââï¸ è³ªåãã
-------------------------------------------
ããã¾ã§ã®ä½æ¥­ã§ä½ãããããªããã¨ãããå ´åã¯ãDiscord ã® `#section-1-help` ã§è³ªåããã¦ãã ããã

ãã«ããããã¨ãã®ãã­ã¼ãåæ»ã«ãªãã®ã§ãã¨ã©ã¼ã¬ãã¼ãã«ã¯ä¸è¨ã®3ç¹ãè¨è¼ãã¦ãã ããâ¨
```
1. ä½ããããã¨ãã¦ããã
2. ã¨ã©ã¼æãã³ãã¼&ãã¼ã¹ã
3. ã¨ã©ã¼ç»é¢ã®ã¹ã¯ãªã¼ã³ã·ã§ãã
```

------
æ¬¡ã®ã¬ãã¹ã³ã«é²ãã§ãSolana ã®éçºç°å¢ãæ§ç¯ãã¾ãããð
