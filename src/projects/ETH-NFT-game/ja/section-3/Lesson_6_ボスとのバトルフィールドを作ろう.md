ð¥ ãã¹ã¨æ¦ã
---

ååã®ã¬ãã¹ã³ã§ãã·ããªãªã® 1 ã¨ 2 ãå®è£ãã¾ããã

â **ã·ããªãª1. ã¦ã¼ã¶ã¼ãWEBã¢ããªã«ã­ã°ã¤ã³ãã¦ããªãå ´å**

	ð WEBã¢ããªä¸ã«ã"Connect Wallet to Get Started" ãã¿ã³ãè¡¨ç¤ºãã¾ãã

â **ã·ããªãª2. ã¦ã¼ã¶ã¼ã¯WEBã¢ããªã«ã­ã°ã¤ã³ãã¦ããããã¤ NFT ã­ã£ã©ã¯ã¿ã¼ãæã£ã¦ããªãå ´å**

	ð WEBã¢ããªä¸ã«ã`SelectCharacter` ã³ã³ãã¼ãã³ããè¡¨ç¤ºãã¾ãã

ããããããã¹ã¨ã®ããã«ãã£ã¼ã«ãã `Arina` ããä½æããã·ããªãª 3 ãå®è£ãã¦ããã¾ãã

ð¥ **ã·ããªãª3. ã¦ã¼ã¶ã¼ã¯WEBã¢ããªã«ã­ã°ã¤ã³ãã¦ããããã¤ NFT ã­ã£ã©ã¯ã¿ã¼ãæã£ã¦ããå ´å**

	ð WEBã¢ããªä¸ã«ããArena Componentããè¡¨ç¤ºãã¾ãã

		- ãArena Componentãã¯ããã¬ã¤ã¤ã¼ããã¹ã¨æ¦ãå ´æã§ãã

ã¾ããã¿ã¼ããã«ä¸ã§ `nft-game-starter-project/src/Components/Arena` ãã©ã«ãã«ç§»åãã¦ã`index.js`ã¨ããååã®æ°ãããã¡ã¤ã«ãä½æãã¾ãããã

`Arena` ãã©ã«ãã«ã¯ `Arena.css` ãã¡ã¤ã«ãå«ã¾ãã¦ãã¾ãã

WEBã¢ããªã®æ§ç¯ãå®äºããããCSSã®ã¹ã¿ã¤ãªã³ã°ãæ¥½ããã§ãã ããâ¨

âï¸ `Arena` ãä½æãã

æ¬¡ã«ã`nft-game-starter-project/src/Components/Arena/index.js` ãéããä¸è¨ã®ã³ã¼ããè²¼ãä»ãã¾ãããã

```javascript
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, transformCharacterData } from '../../constants';
import myEpicGame from '../../utils/MyEpicGame.json';
import './Arena.css';
// ãã­ã³ãã¨ã³ãã«NFTã­ã£ã©ã¯ã¿ã¼ãè¡¨ç¤ºãããããcharacterNFTã®ã¡ã¿ãã¼ã¿ãæ¸¡ãã¾ãã
const Arena = ({ characterNFT }) => {
  // ã³ã³ãã©ã¯ãã®ãã¼ã¿ãä¿æããç¶æå¤æ°ãåæåãã¾ãã
  const [gameContract, setGameContract] = useState(null);
  // ãã¼ã¸ãã­ã¼ããããã¨ä¸è¨ãå®è¡ããã¾ãã
  useEffect(() => {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const gameContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        myEpicGame.abi,
        signer
      );
      setGameContract(gameContract);
    } else {
      console.log('Ethereum object not found');
    }
  }, []);
  return (
    <div className="arena-container">
      {/* ãã¹ */}
      <p>ãã¹ãè¡¨ç¤ºãã¾ãã</p>
      {/* NFT ã­ã£ã©ã¯ã¿ã¼ */}
      <p>NFT ã­ã£ã©ã¯ã¿ã¼ãè¡¨ç¤ºãã¾ãã</p>
    </div>
  );
};
export default Arena;
```

`Arena` ã³ã³ãã¼ãã³ãæºåãã§ããã®ã§ã`App.js` ã«æ»ã£ã¦ãã·ããªãª 3 ãå®è£ãã¦ããã¾ãã

**ã·ããªãª3. ã¦ã¼ã¶ã¼ã¯WEBã¢ããªã«ã­ã°ã¤ã³ãã¦ããããã¤ NFT ã­ã£ã©ã¯ã¿ã¼ãæã£ã¦ããå ´å**

	ð WEBã¢ããªä¸ã«ããArena Componentããè¡¨ç¤ºãã¾ãã

		- ãArena Componentãã¯ããã¬ã¤ã¤ã¼ããã¹ã¨æ¦ãå ´æã§ãã

ã¾ãã`Arena` ãã¤ã³ãã¼ãããããã`App.js` ã®åé ­ã«ãä¸è¨ãè¿½å ãã¾ãããã

```javascript
// App.js
import Arena from './Components/Arena';
```

æ¬¡ã«ã`renderContent` é¢æ°ãä¸è¨ã®ããã«æ´æ°ãã¾ãããã

```javascript
// ã¬ã³ããªã³ã°ã¡ã½ãã
const renderContent = () => {
	// ã·ããªãª1.
	// ã¦ã¼ã¶ã¼ãWEBã¢ããªã«ã­ã°ã¤ã³ãã¦ããªãå ´åãWEBã¢ããªä¸ã«ã"Connect Wallet to Get Started" ãã¿ã³ãè¡¨ç¤ºãã¾ãã
	if (!currentAccount) {
		return (
		<div className="connect-wallet-container">
			<img
				src="https://i.imgur.com/yMocj5x.png"
				alt="Pickachu"
			/>
			<button
			className="cta-button connect-wallet-button"
			onClick={connectWalletAction}
			>
			Connect Wallet to Get Started
			</button>
		</div>
		);
	// ã·ããªãª2.
	// ã¦ã¼ã¶ã¼ã¯WEBã¢ããªã«ã­ã°ã¤ã³ãã¦ããããã¤ NFT ã­ã£ã©ã¯ã¿ã¼ãæã£ã¦ããªãå ´åãWEBã¢ããªä¸ã«ã"SelectCharacter Component" ãè¡¨ç¤ºãã¾ãã
	} else if (currentAccount && !characterNFT) {
		return <SelectCharacter setCharacterNFT={setCharacterNFT} />;
	// ã·ããªãª3.
	// ã¼ã¶ã¼ã¯WEBã¢ããªã«ã­ã°ã¤ã³ãã¦ããããã¤ NFT ã­ã£ã©ã¯ã¿ã¼ãæã£ã¦ããå ´åã
	// Area ã§ãã¹ã¨æ¦ãã¾ãã
	} else if (currentAccount && characterNFT) {
		return <Arena characterNFT={characterNFT} />;
	}
};
```

WEBã¢ããªãæ´æ°ããã¨ããã¢ãªã¼ããã³ã³ãã¼ãã³ãã«ç´æ¥ç§»åãã¾ãã

ãã­ã³ãã¨ã³ããä¸è¨ã®ããã«è¡¨ç¤ºããã¦ããã°ãããã¾ã§ã®å®è£ã¯æåã§ãã

![](/public/images/ETH-NFT-game/section-3/3_6_1.png)

ð ã¹ãã¼ãã³ã³ãã©ã¯ããããã¹ãåå¾ãã
----

ããã§ã¯ã`Area` ã³ã³ãã¼ãã³ãã«ããã¹ã®ãã¼ã¿ãåå¾ãã¦ããã¾ãããã

- `SelectCharacter` ã³ã³ãã¼ãã³ãã§ãNFT ã­ã£ã©ã¯ã¿ã¼ã®ãã¼ã¿ãåå¾ããæ¹æ³ã¨åãè¦é ã§é²ãã¦ããã¾ãã

ã¾ãã`Arena` ã³ã³ãã¼ãã³ãã®ä¸­ã® `const [gameContract, setGameContract] = useState(null);` ã®ç´ä¸ã«ä¸è¨ãè¿½è¨ãã¦ãã ããã

```javascript
// Arena/index.js
// ãã¹ã®ã¡ã¿ãã¼ã¿ãä¿å­ããç¶æå¤æ°ãåæåãã¾ãã
const [boss, setBoss] = useState(null);

// ãã¼ã¸ãã­ã¼ããããã¨ä¸è¨ãå®è¡ããã¾ãã
useEffect(() => {
  // ã³ã³ãã©ã¯ããããã¹ã®ã¡ã¿ãã¼ã¿ãåå¾ããbossãè¨­å®ããéåæé¢æ° fetchBoss ãè¨­å®ãã¾ãã
  const fetchBoss = async () => {
    const bossTxn = await gameContract.getBigBoss();
    console.log('Boss:', bossTxn);
    setBoss(transformCharacterData(bossTxn));
  };
  if (gameContract) {
    // ã³ã³ãã©ã¯ãã®æºåãã§ãããããã¹ã®ã¡ã¿ãã¼ã¿ãåå¾ãã¾ãã
    fetchBoss();
  }
}, [gameContract]);
```

ä¸è¨ã®å®è£ãå®äºããããWEBã¢ããªä¸ã§ã`Console` ãéãã¦ããã¹ã®ãã¼ã¿ãèª­ã¿è¾¼ã¾ãã¦ãããã¨ãç¢ºèªãã¾ãããã

`Console` ã«ä¸è¨ã®ãããªçµæãåºåããã¦ããã°ãå®è£ã¯æåã§ãã

![](/public/images/ETH-NFT-game/section-3/3_6_2.png)


ð ãã¹ããã­ã³ãã¨ã³ãã«ã¬ã³ããªã³ã°ãã
---

ã¾ãã`Arena/index.js` ã«åããã`const [boss, setBoss] = useState(null);` ã®ç´ä¸ã«ä¸è¨ãè¿½å ãã¾ãããã

```javascript
// Arena/index.js
// NFTã­ã£ã©ã¯ã¿ã¼ããã¹ãæ»æããéã«ä½¿ç¨ããé¢æ°ãå®ç¾©ãã¾ãã
const  runAttackAction  =  async()=> {};
```

æ¬¡ã«ã`Arena/index.js` ã® `return();` ã®ä¸­èº«ãä¸è¨ã®ããã«æ´æ°ãã¾ãããã

```javascript
// Arena/index.js

return (
  <div className="arena-container">
    {/* ãã¹ãã¬ã³ããªã³ã°ãã¾ã */}
    {boss && (
      <div className="boss-container">
        <div className={`boss-content`}>
          <h2>ð¥ {boss.name} ð¥</h2>
          <div className="image-content">
            <img src={boss.imageURI} alt={`Boss ${boss.name}`} />
            <div className="health-bar">
              <progress value={boss.hp} max={boss.maxHp} />
              <p>{`${boss.hp} / ${boss.maxHp} HP`}</p>
            </div>
          </div>
        </div>
        <div className="attack-container">
          <button className="cta-button" onClick={runAttackAction}>
            {`ð¥ Attack ${boss.name}`}
          </button>
        </div>
      </div>
    )}
    {/* NFT ã­ã£ã©ã¯ã¿ã¼ */}
    <p>NFT ã­ã£ã©ã¯ã¿ã¼ãè¡¨ç¤ºãã¾ãã</p>
  </div>
);
```

ã­ã¼ã«ã«ãµã¼ãã¼ã§ãWEBã¢ããªãéããä¸è¨ã®ããã«ãã¹ã `Arena` ã«ã¬ã³ããªã³ã°ããã¦ãããã¨ãç¢ºèªãã¦ãã ããã

![](/public/images/ETH-NFT-game/section-3/3_6_3.png)


ð¡ NFT ã­ã£ã©ã¯ã¿ã¼ã `Arena` ã«ã¬ã³ããªã³ã°ãã
---

ãã¹ã¨ã®ããã«ãã£ã¼ã«ãã§ãã `Arena` ã«ãNFT ã­ã£ã©ã¯ã¿ã¼ãã¬ã³ããªã³ã°ãã¾ãããã

`Arena/index.js` ã® `return();` ã®ä¸­èº«ãä¸è¨ã®ããã«æ´æ°ãã¾ãããã

```javascript
return (
  <div className="arena-container">
    {/* ãã¹ãã¬ã³ããªã³ã°ãã¾ã */}
    {boss && (
      <div className="boss-container">
        <div className={`boss-content`}>
          <h2>ð¥ {boss.name} ð¥</h2>
          <div className="image-content">
            <img src={boss.imageURI} alt={`Boss ${boss.name}`} />
            <div className="health-bar">
              <progress value={boss.hp} max={boss.maxHp} />
              <p>{`${boss.hp} / ${boss.maxHp} HP`}</p>
            </div>
          </div>
        </div>
        <div className="attack-container">
          <button className="cta-button" onClick={runAttackAction}>
            {`ð¥ Attack ${boss.name}`}
          </button>
        </div>
      </div>
    )}
    {/* NFT ã­ã£ã©ã¯ã¿ã¼ ãã¬ã³ããªã³ã°ãã¾ã*/}
    {characterNFT && (
      <div className="players-container">
        <div className="player-container">
          <h2>Your Character</h2>
          <div className="player">
            <div className="image-content">
              <h2>{characterNFT.name}</h2>
              <img
                src={characterNFT.imageURI}
                alt={`Character ${characterNFT.name}`}
              />
              <div className="health-bar">
                <progress value={characterNFT.hp} max={characterNFT.maxHp} />
                <p>{`${characterNFT.hp} / ${characterNFT.maxHp} HP`}</p>
              </div>
            </div>
            <div className="stats">
              <h4>{`âï¸ Attack Damage: ${characterNFT.attackDamage}`}</h4>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);
```

ã­ã¼ã«ã«ãµã¼ãã¼ã§ãWEBã¢ããªãéããä¸è¨ã®ããã«ããªãã® NFT ã­ã£ã©ã¯ã¿ã¼ã `Arena` ã«ã¬ã³ããªã³ã°ããã¦ãããã¨ãç¢ºèªãã¦ãã ããã

![](/public/images/ETH-NFT-game/section-3/3_6_4.png)

â ãã¹ã¨ã®ããã«ãå®è£ãã
---

ããããããã¹ã¨ã®ããã«ãå®è£ãã¦ããã¾ãã

`Arena/index.js` ãä¸è¨ã®ããã«æ´æ°ãã¦ããã¾ãããã

```javascript
// Arena/index.js

// ã³ã³ãã©ã¯ãã®ãã¼ã¿ãä¿æããç¶æå¤æ°ãåæåãã¾ãã
const [gameContract, setGameContract] = useState(null);

// ãã¹ã®ã¡ã¿ãã¼ã¿ãä¿å­ããç¶æå¤æ°ãåæåãã¾ãã
const [boss, setBoss] = useState(null);

// æ»æã®ç¶æãä¿å­ããå¤æ°ãåæåãã¾ãã
const [attackState, setAttackState] = useState('');

// ãã¹ãæ»æããé¢æ°ãè¨­å®ãã¾ãã
const runAttackAction = async () => {
  try {
	// ã³ã³ãã©ã¯ããå¼ã³åºããããã¨ãç¢ºèªãã¾ãã
    if (gameContract) {
	  // attackState ã®ç¶æã attacking ã«è¨­å®ãã¾ãã
      setAttackState('attacking');
      console.log('Attacking boss...');

	  // NFT ã­ã£ã©ã¯ã¿ã¼ããã¹ãæ»æãã¾ãã
      const attackTxn = await gameContract.attackBoss();

	  // ãã©ã³ã¶ã¯ã·ã§ã³ããã¤ãã³ã°ãããã¾ã§å¾ã¡ã¾ãã
      await attackTxn.wait();
      console.log('attackTxn:', attackTxn);

	  // attackState ã®ç¶æã hit ã«è¨­å®ãã¾ãã
      setAttackState('hit');
    }
  } catch (error) {
    console.error('Error attacking boss:', error);
    setAttackState('');
  }
};
```

æ´æ°ããã®ã¯ãä»¥ä¸ã®2ç¹ã§ãã

**1 \. `const [boss, setBoss] = useState(null);` ã®ç´ä¸ã«ãä¸è¨ãè¿½å ã**

```javascript
// Arena/Index.js
// æ»æã®ç¶æãä¿å­ããå¤æ°ãåæåãã¾ãã
const [attackState, setAttackState] = useState('');
```

`attackState` ã¯ããã«ä¸­ã«ã¢ãã¡ã¼ã·ã§ã³ãçºçãããããã«è¿½å ãã¦ãã¾ãã

`setAttackState` ãä½¿ç¨ããã¨ã`attackState` ã«ãä¸è¨3ã¤ã®ç¶æã®ãããããä¿å­ãããã¨ãã§ãã¾ãã

- `attacking` : æ»æãããå¾ããã©ã³ã¶ã¯ã·ã§ã³ãå®äºããã®ãå¾ã£ã¦ããç¶æ

- `hit` : ãã¹ã«æ»æããããããç¶æ

- `''` : ããã©ã«ãã®ç¶æ

`nft-game-starter-project/src/Components/Arena/Arena.css` ãéãã¦ã`attacking` ã `hit` ãèª¿ã¹ã¦ã¿ã¦ãã ããã

- ã¢ãã¡ã¼ã·ã§ã³ã®ããã® CSS ãè¨­å®ããã¦ãã¾ãâ¨

**2 \. `runAttackAction` é¢æ°ã®ä¸­èº«ãæ´æ°ã**

ãããããWEBã¢ããªã«ä¸è¨ã®å®è£ãé£æºããã¦ããã¾ãã

`Arena/index.js` ã®ä¸­ã® `return();` ã®ä¸­èº«ãè¦ã¦ããã¾ãããã

- `{boss ..}` ã®ä¸­èº«ãä¸è¨ã®ããã«æ´æ°ãã¾ãããã

```javascript
return (
  <div className="arena-container">
    {/* ãã¹ãã¬ã³ããªã³ã°ãã¾ã */}
    {boss && (
      <div className="boss-container">
        {/* attackState è¿½å ãã¾ã */}
        <div className={`boss-content ${attackState}`}>
          <h2>ð¥ {boss.name} ð¥</h2>
          <div className="image-content">
            <img src={boss.imageURI} alt={`Boss ${boss.name}`} />
            <div className="health-bar">
              <progress value={boss.hp} max={boss.maxHp} />
              <p>{`${boss.hp} / ${boss.maxHp} HP`}</p>
            </div>
          </div>
        </div>
        <div className="attack-container">
          <button className="cta-button" onClick={runAttackAction}>
            {`ð¥ Attack ${boss.name}`}
          </button>
        </div>
      </div>
    )}
	{/* ããã¾ã§ãæ´æ° */}
    ...
  </div>
);
```

â ãã¹ããå®è¡ãã
---

1 \. WEBã¢ããªã§ `Attack MYU2` ãã¿ã³ãæ¼ãã¦ãã ããã

- MetaMask ããããã¢ãããã¦ãæ»æã®æ¿èªãæ±ãããã¾ãã

- `Confirm` ãæ¼ãã¦æ»æãè¡ãã¾ãããã

2 \. `Consol` ã«ã`Attacking boss ...`ãã§å§ã¾ãã­ã°ãè¡¨ç¤ºããããã¨ãç¢ºèªãã¾ãããã

3 \. æ»æãå®äºããã¨ããã©ã³ã¶ã¯ã·ã§ã³ããã·ã¥ï¼ `attackTxn:` ï¼ã `Console` ã«è¡¨ç¤ºããã¾ãã

![](/public/images/ETH-NFT-game/section-3/3_6_5.png)

ããã¾ã§ãå®äºãããããã¹ãã¯æåã§ãã

ð©¹ æ»æã«ãããã¡ã¼ã¸ãåæ ããã
---

ããã§ã¯ãNFT ã­ã£ã©ã¯ã¿ã¼ã¨ãã¹ã®ãã¡ã¼ã¸ãWEBã¢ããªã«åæ ããã¦ããã¾ãããã

`MyEpicGame.sol` ã«è¨è¼ãã `event AttackComplete` ãWEBã¢ããªã§åä¿¡ããã³ã¼ããå®è£ãã¦ããã¾ãã

ã¾ãã`Arena/index.js` ã®ä¸­ã«ãã `Arena` ã³ã³ãã¼ãã³ããä¸è¨ã®ããã«æ´æ°ãã¦ãã ããã

```javascript
// Arena/index.js
// NFT ã­ã£ã©ã¯ã¿ã¼ã®æå ±ãæ´æ°ãããããsetCharacterNFT ãå¼æ°ã¨ãã¦è¿½å ãã¾ãã
const Arena = ({ characterNFT, setCharacterNFT }) => {
```

æ¬¡ã«ã`fetchBoss` é¢æ°ãè¨è¼ããã¦ãã `useEffect` ã®ä¸­èº«ãä¸è¨ã®ããã«æ´æ°ãã¾ãããã

```javascript
// Arena/index.js
// ãã¼ã¸ãã­ã¼ããããã¨ä¸è¨ãå®è¡ããã¾ãã
useEffect(() => {
	// ãã¹ã®ãã¼ã¿ãã³ã³ãã©ã¯ãããèª­ã¿è¾¼ãé¢æ°ãè¨­å®ãã¾ãã
	const fetchBoss = async () => {
		//ãã¹ã®ã¡ã¿ãã¼ã¿ãã³ã³ãã©ã¯ããããå¼ã³åºãã¾ãã
		const bossTxn = await gameContract.getBigBoss();
		console.log('Boss:', bossTxn);
		// ãã¹ã®ç¶æãè¨­å®ãã¾ãã
		setBoss(transformCharacterData(bossTxn));
	};

	// AttackCompleteã¤ãã³ããåä¿¡ããã¨ãã«èµ·åããã³ã¼ã«ããã¯ã¡ã½ãããè¿½å ãã¾ãã
	const onAttackComplete = (newBossHp, newPlayerHp) => {
		// ãã¹ã®æ°ããHPãåå¾ãã¾ãã
		const bossHp = newBossHp.toNumber();
		// NFT ã­ã£ã©ã¯ã¿ã¼ã®æ°ããHPãåå¾ãã¾ãã
		const playerHp = newPlayerHp.toNumber();
		console.log(`AttackComplete: Boss Hp: ${bossHp} Player Hp: ${playerHp}`);

		// NFT ã­ã£ã©ã¯ã¿ã¼ã¨ãã¹ã®HPãæ´æ°ãã¾ãã
		setBoss((prevState) => {
			return { ...prevState, hp: bossHp };
		});
		setCharacterNFT((prevState) => {
			return { ...prevState, hp: playerHp };
		});
	};

	// ã³ã³ãã©ã¯ããå¼ã³åºããã¦ããããä¸è¨ãå®è¡ãã¾ãã
	if (gameContract) {
		fetchBoss();
		// ãªã¹ãã¼ã®è¨­å®ï¼ãã¹ãæ»æãããéç¥ãåãåãã¾ãã
		gameContract.on('AttackComplete', onAttackComplete);
	}

	// ã³ã³ãã¼ãã³ãããã¦ã³ãããããããªã¹ãã¼ãåæ­¢ããã
	return () => {
		if (gameContract) {
			gameContract.off('AttackComplete', onAttackComplete);
		}
	}
}, [gameContract]);
```

ã¾ãã`App.js` ãéãã`Arena` ã³ã³ãã¼ãã³ããä¸è¨ã®ããæ´æ°ãã¦ãã ããã

- `Arena/index.js` ã§ `Arena` ã³ã³ãã¼ãã³ãã®å¼æ°ã«ã`setCharacterNFT` ãè¿½å ããã®ã§ã`App.js` ã«ãæ´æ°ãåæ ããã¾ãã

```javascript
// App.js
<Arena characterNFT={characterNFT} setCharacterNFT={setCharacterNFT} />
```
æ°ããè¿½å ããã³ã¼ãã¯ãã»ã¼ `SelectCharacter` ã³ã³ãã¼ãã³ããè¨­å®ããã­ã¸ãã¯ã¨åãã§ãã

ä¸ã¤ã ã React ã®ææ³ [`prevState`](https://ratio.ym-tane.com/development/react-prevstate/) ãä½¿ç¨ããã®ã§ãä¸è¨ã®ã³ã¼ããè¦ã¦ããã¾ãããã

```javascript
// Arena/index.js
setBoss((prevState) => {
  return { ...prevState, hp: bossHp };
});
setCharacterNFT((prevState) => {
  return { ...prevState, hp: playerHp };
});
```

ããã§ã¯ãä¸è¨ãè¡ããã¦ãã¾ãã

ä¸è¨ã®ããã« `prevState` ãä½¿ç¨ããã¨ãå¤æ°ã®ä»¥åã®ç¶æã«ã¢ã¯ã»ã¹ç§ãã¦ãå¤ãå¤æ´ãããã¨ãã§ãã¾ãã

ããã§ã¯ãä»¥ä¸ã®å¦çãè¡ããã¦ãã¾ãã

- `setBoss` ã§ `boss` ã® `hp` å¤ãæ°ããå¤ï¼ `bossHp` ï¼ã«æ´æ°

- `setCharacterNFT` ã§ `characterNFT` ã® `hp` å¤ãæ°ããå¤ï¼ `playerHp` ï¼ã«æ´æ°

ð¼ ããä¸åº¦æ»æãã¦ã¿ã

ããä¸åº¦ãã¥ã¦ãã¼ã«æ»æãä»æãã¦ã¿ã¾ãããã

ä¸è¨ã®ããã«ãã¹ã¨ NFT ã­ã£ã©ã¯ã¿ã¼ã® HP ãæ´æ°ããã¦ããã°æåã§ãã

![](/public/images/ETH-NFT-game/section-3/3_6_6.png)


ðââï¸ è³ªåãã
-------------------------------------------
ããã¾ã§ã®ä½æ¥­ã§ä½ãããããªããã¨ãããå ´åã¯ãDiscord ã® `#section-3-help` ã§è³ªåããã¦ãã ããã

ãã«ããããã¨ãã®ãã­ã¼ãåæ»ã«ãªãã®ã§ãã¨ã©ã¼ã¬ãã¼ãã«ã¯ä¸è¨ã®3ç¹ãè¨è¼ãã¦ãã ããâ¨
```
1. ä½ããããã¨ãã¦ããã
2. ã¨ã©ã¼æãã³ãã¼&ãã¼ã¹ã
3. ã¨ã©ã¼ç»é¢ã®ã¹ã¯ãªã¼ã³ã·ã§ãã
```
--------------
æ¬¡ã®ã¬ãã¹ã³ã«é²ãã§ãUIãå®æããã¾ãããð
