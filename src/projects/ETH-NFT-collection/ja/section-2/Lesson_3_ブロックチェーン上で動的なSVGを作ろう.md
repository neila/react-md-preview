ð¤ SVG ç»åã«ã©ã³ãã ã«åèªãåæ ãããã
------------------

ååã®ã¬ãã¹ã³ã§ã¯ãNFT ããªã³ãã§ã¼ã³ã§ä½æããã³ã³ãã©ã¯ããå®è£ãã¾ããã

ããããã3ã¤ã®ã©ã³ãã ãªåèªãåçã«çµã¿åããã¦ NFT ãåºåããã³ã¼ããä½æãã¦ããã¾ãã

ä¸è¨ã®ããã«ã`MyEpicNFT.sol` ãæ´æ°ãã¦ããã¾ãããã

```javascript
// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

// ããã¤ãã® OpenZeppelin ã®ã³ã³ãã©ã¯ããã¤ã³ãã¼ããã¾ãã
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// utils ã©ã¤ãã©ãªãã¤ã³ãã¼ããã¦æå­åã®å¦çãè¡ãã¾ãã
import "@openzeppelin/contracts/utils/Counters.sol";

import "hardhat/console.sol";

// ã¤ã³ãã¼ããã OpenZeppelin ã®ã³ã³ãã©ã¯ããç¶æ¿ãã¦ãã¾ãã
// ç¶æ¿ããã³ã³ãã©ã¯ãã®ã¡ã½ããã«ã¢ã¯ã»ã¹ã§ããããã«ãªãã¾ãã
contract MyEpicNFT is ERC721URIStorage {

  // OpenZeppelin ã tokenIds ãç°¡åã«è¿½è·¡ããããã«æä¾ããã©ã¤ãã©ãªãå¼ã³åºãã¦ãã¾ã
  using Counters for Counters.Counter;

  // _tokenIdsãåæåï¼_tokenIds = 0ï¼
  Counters.Counter private _tokenIds;

  // SVGã³ã¼ããä½æãã¾ãã
  // å¤æ´ãããã®ã¯ãè¡¨ç¤ºãããåèªã ãã§ãã
  // ãã¹ã¦ã®NFTã«SVGã³ã¼ããé©ç¨ããããã«ãbaseSvgå¤æ°ãä½æãã¾ãã
  string baseSvg = "<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'><style>.base { fill: white; font-family: serif; font-size: 24px; }</style><rect width='100%' height='100%' fill='black' /><text x='50%' y='50%' class='base' dominant-baseline='middle' text-anchor='middle'>";

  // 3ã¤ã®éå string[] ã«ãããããã©ã³ãã ãªåèªãè¨­å®ãã¾ãããã
  string[] firstWords = ["YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD"];
  string[] secondWords = ["YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD"];
  string[] thirdWords = ["YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD"];

  // NFT ãã¼ã¯ã³ã®ååã¨ãã®ã·ã³ãã«ãæ¸¡ãã¾ãã
  constructor() ERC721 ("SquareNFT", "SQUARE") {
    console.log("This is my NFT contract.");
  }

  // åéåããã©ã³ãã ã«åèªãé¸ã¶é¢æ°ã3ã¤ä½æãã¾ãã
  // pickRandomFirstWordé¢æ°ã¯ãæåã®åèªãé¸ã³ã¾ãã
  function pickRandomFirstWord(uint256 tokenId) public view returns (string memory) {

    // pickRandomFirstWord é¢æ°ã®ã·ã¼ãã¨ãªã rand ãä½æãã¾ãã
    uint256 rand = random(string(abi.encodePacked("FIRST_WORD", Strings.toString(tokenId))));

    // seed rand ãã¿ã¼ããã«ã«åºåããã
	console.log("rand seed: ", rand);

	// firstWordséåã®é·ããåºæºã«ãrand çªç®ã®åèªãé¸ã³ã¾ãã
    rand = rand % firstWords.length;

	// firstWordséåããä½çªç®ã®åèªãé¸ã°ãããã¿ã¼ããã«ã«åºåããã
	console.log("rand first word: ", rand);
    return firstWords[rand];
  }

  // pickRandomSecondWordé¢æ°ã¯ã2çªç®ã«è¡¨ç¤ºãããã®åèªãé¸ã³ã¾ãã
  function pickRandomSecondWord(uint256 tokenId) public view returns (string memory) {

    // pickRandomSecondWord é¢æ°ã®ã·ã¼ãã¨ãªã rand ãä½æãã¾ãã
    uint256 rand = random(string(abi.encodePacked("SECOND_WORD", Strings.toString(tokenId))));
    rand = rand % secondWords.length;
    return secondWords[rand];
  }

  // pickRandomThirdWordé¢æ°ã¯ã3çªç®ã«è¡¨ç¤ºãããã®åèªãé¸ã³ã¾ãã
  function pickRandomThirdWord(uint256 tokenId) public view returns (string memory) {

    // pickRandomThirdWord é¢æ°ã®ã·ã¼ãã¨ãªã rand ãä½æãã¾ãã
    uint256 rand = random(string(abi.encodePacked("THIRD_WORD", Strings.toString(tokenId))));
    rand = rand % thirdWords.length;
    return thirdWords[rand];
  }

  // ã·ã¼ããçæããé¢æ°ãä½æãã¾ãã
  function random(string memory input) internal pure returns (uint256) {
      return uint256(keccak256(abi.encodePacked(input)));
  }

  // ã¦ã¼ã¶ã¼ã NFT ãåå¾ããããã«å®è¡ããé¢æ°ã§ãã
  function makeAnEpicNFT() public {

    // ç¾å¨ã®tokenIdãåå¾ãã¾ããtokenIdã¯0ããå§ã¾ãã¾ãã
    uint256 newItemId = _tokenIds.current();

    // 3ã¤ã®éåãããããã1ã¤ã®åèªãã©ã³ãã ã«åãåºãã¾ãã
    string memory first = pickRandomFirstWord(newItemId);
    string memory second = pickRandomSecondWord(newItemId);
    string memory third = pickRandomThirdWord(newItemId);

    // 3ã¤ã®åèªãé£çµãã¦ã<text>ã¿ã°ã¨<svg>ã¿ã°ã§éãã¾ãã
    string memory finalSvg = string(abi.encodePacked(baseSvg, first, second, third, "</text></svg>"));

	// NFTã«åºåããããã­ã¹ããã¿ã¼ããã«ã«åºåãã¾ãã
    console.log("\n--------------------");
    console.log(finalSvg);
    console.log("--------------------\n");

    // msg.sender ãä½¿ã£ã¦ NFT ãéä¿¡èã« Mint ãã¾ãã
    _safeMint(msg.sender, newItemId);

	// tokenURI ã¯å¾ã§è¨­å®ãã¾ãã
	// ä»ã¯ãtokenURI ã®ä»£ããã«ã"We will set tokenURI later." ãè¨­å®ãã¾ãã
	_setTokenURI(newItemId, "We will set tokenURI later.");

	// NFTããã¤èª°ã«ä½æãããããç¢ºèªãã¾ãã
	console.log("An NFT w/ ID %s has been minted to %s", newItemId, msg.sender);

    // æ¬¡ã® NFT ã Mint ãããã¨ãã®ã«ã¦ã³ã¿ã¼ãã¤ã³ã¯ãªã¡ã³ãããã
    _tokenIds.increment();
  }
}
```

ç°¡åã«ã³ã¼ãã®åå®¹ãèª¬æãã¦ããã¾ãã

ð· SVG å½¢å¼ã§ãã¼ã¿ãè¡¨ç¤ºã§ããããã«ãã
-----------

`baseSvg` å¤æ°ã¯ãSVG å½¢å¼ã§åèªãè¡¨ç¤ºããããã«ãä½æããã¦ãã¾ãã

```javascript
// MyEpicNFT.sol
string baseSvg = "<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'><style>.base { fill: white; font-family: serif; font-size: 24px; }</style><rect width='100%' height='100%' fill='black' /><text x='50%' y='50%' class='base' dominant-baseline='middle' text-anchor='middle'>";
```

`makeAnEpicNFT()` é¢æ°ã®ä¸­ã§ã3ã¤ã®åèªãé£çµããã¦1ã¤ã®ãã­ã¹ããä½æãã¾ãã

ä¸è¨ã§ã¯ã`baseSvg` å¤æ°ã®ä¸­èº«ã¨ã`"</text></svg>"`ã§ã3ã¤ã®åèªï¼`first`ã`second`ã`third` å¤æ°ã«æ ¼ç´ãããå¤ï¼ãéãã¦ãæå­åï¼ `string` ï¼ã¨ãã¦é£çµãã¦ãã¾ãã

```javascripts
string memory finalSvg = string(abi.encodePacked(baseSvg, first, second, third, "</text></svg>"));
```
ããã§ãSVG å½¢å¼ã§æå­ã®ãã¼ã¿ã NFT ç»åã¨ãã¦è¡¨ç¤ºãããã¨ãã§ãã¾ãã

ð ã©ã³ãã ã«çµã¿åããããåèªãè¨­å®ãã
------------------

```javascript
// MyEpicNFT.sol
string[] firstWords = ["YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD"];
string[] secondWords = ["YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD"];
string[] thirdWords = ["YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD"];
```

`YOUR_WORD` ã«å¥½ããªåèªãå¥åãã¦ãã ããã

éåãã¨ã«15ã20åèªç¨åº¦ãæ ¼ç´ãããã¨ããããããã¾ãã

ãããã®éåã¯ä¸è¨ã®ããã«ãªã£ã¦ãã¾ãã
```javascript
string[] firstWords = ["Epic", "Fantastic", "Crude", "Crazy", "Hysterical", "Grand"];
string[] secondWords = ["Meta", "Live", "Pop", "Cute", "Sweet", "Hot"];
string[] thirdWords = ["Kitten", "Puppy", "Monkey", "Bird", "Panda", "Elephant"];
```

ð¥´ ä¹±æ°ãçæãã¦ãåèªãã©ã³ãã ã«çµã¿åããã
------------------

ä¸è¨ã®ã³ã¼ãã§ã¯ã`string[] firstWords` éåããã©ã³ãã ã«åèªãé¸ã¶é¢æ°ãä½æãã¦ãã¾ãã

`pickRandomFirstWord` é¢æ°ã¯ãNFTç»åã«1çªç®ã«è¡¨ç¤ºãããåèªãé¸ã³ã¾ãã

```javascript
// MyEpicNFT.sol
function pickRandomFirstWord(uint256 tokenId) public view returns (string memory)
{
	// pickRandomFirstWord é¢æ°ã®ã·ã¼ãã¨ãªã rand ãä½æãã¾ãã
	uint256 rand = random(string(abi.encodePacked("FIRST_WORD", Strings.toString(tokenId))));

	// firstWordséåã®é·ããåºæºã«ãrand çªç®ã®åèªãé¸ã³ã¾ãã
	rand = rand % firstWords.length;
	return firstWords[rand];
}
```

ããã§ä¸ã¤éè¦ãªãã¨ãè¦ãã¦ããã¾ãããã

ããã¯ãã¹ãã¼ãã³ã³ãã©ã¯ãã§ä¹±æ°ãçæãããã¨ã¯ã**å¤§å¤é£ãã**ã¨ãããã¨ã§ãã

éå¸¸ã®ãã­ã°ã©ã ã§ã¯ãPCã®ãã¡ã³ã®éåº¦ãCPUã®æ¸©åº¦ãã¤ã³ã¿ã¼ãããéåº¦ãªã©å¶å¾¡ãé£ããæ°å¤ãå¤æ°ã«è¨­å®ãããããã®æ°å¤ãçµã¿åããã¦ããã©ã³ãã ããªæ°å¤ãçæããã¢ã«ã´ãªãºã ãä½æãã¾ãã

ã§ããã**ãã­ãã¯ãã§ã¼ã³ã«ããã¦ãã¹ãã¼ãã³ã³ãã©ã¯ãã¯ä¸è¬ã«å¬éããã¦ããããããã­ã°ã©ã ãã©ã®æ°å¤ãå¤æ°ã¨ãã¦ä½¿ç¨ãã¦ããã®ãèª°ã§ãç¢ºèªã§ãã¦ãã¾ãã¾ãã**

ãããã**ã¹ãã¼ãã³ã³ãã©ã¯ãã§ä¹±æ°ãçæãããã¨ãé£ããã¨è¨ããã¦ããçç±**ã§ãã

ä»åã®ãã­ã¸ã§ã¯ãã§ã¯ãä¸è¨ã®æ¹æ³ãç¨ãã¦ãä¹±æ°ãçæãã¦ãã¾ãã

ä¸è¨ã®ã³ã¼ããè¦ã¦ããã¾ãããã

```javascript
// MyEpicNFT.sol
uint256 rand = random(string(abi.encodePacked("FIRST_WORD", Strings.toString(tokenId))));
```

ããã§ã¯ãæå­å `FIRST_WORD` ã¨ã`Strings.toString()` ã«ããæå­ååããã `tokenId` ã®2ã¤ã®å¤ã `abi.encodePacked` ãä½¿ç¨ãã¦çµåãã`rand` ã«æ ¼ç´ãã¦ãã¾ãã

`rand` ã«æ ¼ç´ããã¦ããã®ã¯ãæ¬¡ã®ãããªå¤ã§ãã

```plaintext
96777463446932378109744360884080025980584389114515208476196941633474201541706
```

`rand` ã¯ãä¹±æ°ãçæããããã®ãç¨®ãã§ãããªã®ã§ãå¤ãã®ãã®ã«æå³ã¯ããã¾ããã

æ¬¡ã«ãæ¬¡ã®ã³ã¼ããè¦ã¦ããã¾ãããã

```javascript
// MyEpicNFT.sol
rand = rand % firstWords.length;
return firstWords[rand];
```

ããã§ã¯ã`firstWords` éåã®é·ããåºæºã«ã`rand` çªç®ã®åèªãé¸ãã§ãã¾ãã

`%` ã¯ãæ´æ°ã®å²ãç®ã«ãããä½ããè¿ãã¾ãã

ä¸è¨ã®ãããªä¾ã§ã¯ã`%` ã«ããå²ãç®ã®ä½ããæ´æ°ã§è¿ããã¾ãã

```
1 % 2 = 1 // 1ãä½ã
2 % 2 = 0 // 0ãä½ã
```

`rand = rand % firstWords.length` ã§ã¯ã`0` ãã `firstWords.length - 1` ã®éã®ä»»æã®å¤ã `rand` ã«æ ¼ç´ãã¦ãã¾ãã

ããã«ããã`firstWords` éåããã©ã³ãã ã«å¤ãé¸ã¹ãããã«ãªãã¾ãã

- ãããã® `firstWords` éåã«ã¯6ã¤ã®åèªãæ ¼ç´ããã¦ãã¾ãã

- Solidity ã§ã¯ãéåã«æåã«æ ¼ç´ããã¦ããå¤ã `0` çªç®ã¨æãã¾ãã

- ãããã£ã¦ããããã®ä¾ã§ã¯ã`rand % firstWords.length` ã«ãã£ã¦ã`0` ãã `5` ã¾ã§ã®å¤ãä¸ã¤è¿ããã¾ãã


â ï¸: æ³¨æ
> ä¸è¨ã®ã¢ã«ã´ãªãºã ã¯ãå®å¨ãªã©ã³ãã æ§ãæã¡ã¾ããã
>
> ä»åä¹±æ°ãä½¿ç¨ããã®ã¯ãããã¾ã§ãæå­åã®çæãã®ãããªã®ã§ãå¼·åºãªã©ã³ãã æ§ã¯å¿è¦ã§ã¯ããã¾ããã
>
> ä¾ãã°ããã©ã³ãã ã«ã¦ã¼ã¶ã¼ãé¸ãã§ãETHãééããããããªãã­ã°ã©ã ãå®è£ããéã¯ãããã«å¼·åºãªä¹±æ°çæã®ã¢ã«ã´ãªãºã ãå®è£ãããã¨ã«ãªãã¾ãã
>
> ä»åã®ãã­ã¸ã§ã¯ãã§ã¯ããã®å¿è¦ããªãã®ã§ãä¸è¨ã®ã¢ã«ã´ãªãºã ãæ¡ç¨ãã¾ãã


Solidity ã¯ãã¤ã³ããããåãã§ããã°å¿ãåãçµæãåºåãããããã«è¨­è¨ããã¦ãããããå¬å¼ãªä¹±æ°çæã®å¦çããµãã¼ãããã©ã¤ãã©ãªãæä¾ãã¦ãã¾ããã

Solidity ã«ãããä¹±æ°çæã®æ¹æ³ã«èå³ãããã°ã[Chainlinkï¼è±èªï¼](https://docs.chain.link/docs/intermediates-tutorial/) ã®ãã­ã¥ã¡ã³ãã¼ã·ã§ã³ãåç§ãã¦ã¿ã¾ãããã

ð©âð¬ ãã¹ããã¦ã¿ãã
------

ä¹±æ°ã®çæã«é¢ãã¦çè§£ãæ·±ããããã«ãã¿ã¼ããã«ã§ä¸è¨ãå®è¡ãã¦ã`MyEpicNFT.sol` ã®ä¸­ã® `console.log` ã«ãã£ã¦åºåãããçµæãç¢ºèªãã¦ã¿ã¾ãããã

```bash
npx hardhat run scripts/run.js
```

- ä¸è¨ã®ã³ã¼ããå®è¡ããã¨ãã¯ãã¿ã¼ããã«ä¸ã§ `epic-nfts` ãã£ã¬ã¯ããªã«ãããã¨ãç¢ºèªãã¦ãã ããã

ä¸è¨ã®ãããªçµæãã¿ã¼ããã«ã«åºåããã¦ããã°æåã§ãã

```plaintext
Compiling 1 file with 0.8.4
Solidity compilation finished successfully
This is my NFT contract.
Contract deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
rand - seed:  96777463446932378109744360884080025980584389114515208476196941633474201541706
rand - first word:  0

--------------------
<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'><style>.base { fill: white; font-family: serif; font-size: 24px; }</style><rect width='100%' height='100%' fill='black' /><text x='50%' y='50%' class='base' dominant-baseline='middle' text-anchor='middle'>EpicPopBird</text></svg>
--------------------

An NFT w/ ID 0 has been minted to 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
rand - seed:  65185702252814965187814840607877062151565847602989074464506246984646613707935
rand - first word:  5

--------------------
<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'><style>.base { fill: white; font-family: serif; font-size: 24px; }</style><rect width='100%' height='100%' fill='black' /><text x='50%' y='50%' class='base' dominant-baseline='middle' text-anchor='middle'>GrandCuteBird</text></svg>
--------------------

An NFT w/ ID 1 has been minted to 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
```

ã¿ã¼ããã«ã«åºåããã SVG ã®1ã¤ãã³ãã¼ãã¦ã[ãã](https://www.svgviewer.dev/)ã«è²¼ãä»ããä¸­èº«ãç¢ºèªãã¦ã¿ã¾ãããã

ä¸è¨ã®ãããªçµæãè¡¨ç¤ºããã¦ããã°ãã¹ãã¯æåã§ãã
![](/public/images/ETH-NFT-collection/section-2/2_3_1.png)


ð©âð» ã¡ã¿ãã¼ã¿ãåçã«çæãã
------------------

æ¬¡ã«ãJSON ãã¡ã¤ã«ï¼ï¼ã¡ã¿ãã¼ã¿ï¼ãè¨­å®ããå¿è¦ãããã¾ãã

è¿½å ã§ããã¤ãé¢æ°ãä½æããå¿è¦ãããã¾ãã

`contracts` ãã£ã¬ã¯ããªã®ä¸ã« `libraries` ã¨ãããã£ã¬ã¯ããªãä½æãã¾ãããã

ä¸è¨ã®ãã£ã¬ã¯ããªæ§å³ãåèã«ãã¦ãã ããã
```
epic-nfts
   |_ contracts
		  |_ libraries
```

`libraries` ãã£ã¬ã¯ããªã« `Base64.sol` ã¨ããååã®ãã¡ã¤ã«ãä½æããä¸è¨ã®ã³ã¼ããè²¼ãä»ãã¦ãã ããã

```javascript
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

/// [MIT License]
/// @title Base64
/// @notice Provides a function for encoding some bytes in base64
/// @author Brecht Devos <brecht@loopring.org>
library Base64 {
    bytes internal constant TABLE =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    /// @notice Encodes some bytes to the base64 representation
    function encode(bytes memory data) internal pure returns (string memory) {
        uint256 len = data.length;
        if (len == 0) return "";

        // multiply by 4/3 rounded up
        uint256 encodedLen = 4 * ((len + 2) / 3);

        // Add some extra buffer at the end
        bytes memory result = new bytes(encodedLen + 32);

        bytes memory table = TABLE;

        assembly {
            let tablePtr := add(table, 1)
            let resultPtr := add(result, 32)

            for {
                let i := 0
            } lt(i, len) {

            } {
                i := add(i, 3)
                let input := and(mload(add(data, i)), 0xffffff)

                let out := mload(add(tablePtr, and(shr(18, input), 0x3F)))
                out := shl(8, out)
                out := add(
                    out,
                    and(mload(add(tablePtr, and(shr(12, input), 0x3F))), 0xFF)
                )
                out := shl(8, out)
                out := add(
                    out,
                    and(mload(add(tablePtr, and(shr(6, input), 0x3F))), 0xFF)
                )
                out := shl(8, out)
                out := add(
                    out,
                    and(mload(add(tablePtr, and(input, 0x3F))), 0xFF)
                )
                out := shl(224, out)

                mstore(resultPtr, out)

                resultPtr := add(resultPtr, 4)
            }

            switch mod(len, 3)
            case 1 {
                mstore(sub(resultPtr, 2), shl(240, 0x3d3d))
            }
            case 2 {
                mstore(sub(resultPtr, 1), shl(248, 0x3d))
            }

            mstore(result, encodedLen)
        }

        return string(result);
    }
}
```

ãã®ãã¡ã¤ã«ã«ã¯ãSVG ã¨ JSON ã Base64 ã«å¤æããããã®é¢æ°ãå«ã¾ãã¦ãã¾ãã

`MyEpicNFT.sol` ãä¸è¨ã®ããã«æ´æ°ãã¾ãããã

```javascript
// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.4;

// ããã¤ãã® OpenZeppelin ã®ã³ã³ãã©ã¯ããã¤ã³ãã¼ããã¾ãã
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// utils ã©ã¤ãã©ãªãã¤ã³ãã¼ããã¦æå­åã®å¦çãè¡ãã¾ãã
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

// Base64.solã³ã³ãã©ã¯ãããSVGã¨JSONãBase64ã«å¤æããé¢æ°ãã¤ã³ãã¼ããã¾ãã
import { Base64 } from "./libraries/Base64.sol";

// ã¤ã³ãã¼ããã OpenZeppelin ã®ã³ã³ãã©ã¯ããç¶æ¿ãã¦ãã¾ãã
// ç¶æ¿ããã³ã³ãã©ã¯ãã®ã¡ã½ããã«ã¢ã¯ã»ã¹ã§ããããã«ãªãã¾ãã
contract MyEpicNFT is ERC721URIStorage {
  // OpenZeppelinãããtokenIdsããç°¡åã«è¿½è·¡ããããã«æä¾ããã©ã¤ãã©ãªãå¼ã³åºãã¦ãã¾ã
  using Counters for Counters.Counter;
  // _tokenIdsãåæåï¼_tokenIds = 0ï¼
  Counters.Counter private _tokenIds;

  // SVGã³ã¼ããä½æãã¾ãã
  // å¤æ´ãããã®ã¯ãè¡¨ç¤ºãããåèªã ãã§ãã
  // ãã¹ã¦ã®NFTã«SVGã³ã¼ããé©ç¨ããããã«ãbaseSvgå¤æ°ãä½æãã¾ãã
  string baseSvg = "<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'><style>.base { fill: white; font-family: serif; font-size: 24px; }</style><rect width='100%' height='100%' fill='black' /><text x='50%' y='50%' class='base' dominant-baseline='middle' text-anchor='middle'>";

  // 3ã¤ã®éå string[] ã«ãããããã©ã³ãã ãªåèªãè¨­å®ãã¾ãããã
  string[] firstWords = ["YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD"];
  string[] secondWords = ["YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD"];
  string[] thirdWords = ["YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD"];

  // NFT ãã¼ã¯ã³ã®ååã¨ãã®ã·ã³ãã«ãæ¸¡ãã¾ãã
  constructor() ERC721 ("SquareNFT", "SQUARE") {
    console.log("This is my NFT contract.");
  }

  // åéåããã©ã³ãã ã«åèªãé¸ã¶é¢æ°ã3ã¤ä½æãã¾ãã
  // pickRandomFirstWordé¢æ°ã¯ãæåã®åèªãé¸ã³ã¾ãã
  function pickRandomFirstWord(uint256 tokenId) public view returns (string memory) {
    // pickRandomFirstWord é¢æ°ã®ã·ã¼ãã¨ãªã rand ãä½æãã¾ãã
    uint256 rand = random(string(abi.encodePacked("FIRST_WORD", Strings.toString(tokenId))));
    // seed rand ãã¿ã¼ããã«ã«åºåããã
	  console.log("rand - seed: ", rand);
	  // firstWordséåã®é·ããåºæºã«ãrand çªç®ã®åèªãé¸ã³ã¾ãã
    rand = rand % firstWords.length;
	  // firstWordséåããä½çªç®ã®åèªãé¸ã°ãããã¿ã¼ããã«ã«åºåããã
	  console.log("rand - first word: ", rand);
    return firstWords[rand];
  }

  // pickRandomSecondWordé¢æ°ã¯ã2çªç®ã«è¡¨ç¤ºãããã®åèªãé¸ã³ã¾ãã
  function pickRandomSecondWord(uint256 tokenId) public view returns (string memory) {
    // pickRandomSecondWord é¢æ°ã®ã·ã¼ãã¨ãªã rand ãä½æãã¾ãã
    uint256 rand = random(string(abi.encodePacked("SECOND_WORD", Strings.toString(tokenId))));
    rand = rand % secondWords.length;
    return secondWords[rand];
  }

  // pickRandomThirdWordé¢æ°ã¯ã3çªç®ã«è¡¨ç¤ºãããã®åèªãé¸ã³ã¾ãã
  function pickRandomThirdWord(uint256 tokenId) public view returns (string memory) {
    // pickRandomThirdWord é¢æ°ã®ã·ã¼ãã¨ãªã rand ãä½æãã¾ãã
    uint256 rand = random(string(abi.encodePacked("THIRD_WORD", Strings.toString(tokenId))));
    rand = rand % thirdWords.length;
    return thirdWords[rand];
  }

  // ã·ã¼ããçæããé¢æ°ãä½æãã¾ãã
  function random(string memory input) internal pure returns (uint256) {
      return uint256(keccak256(abi.encodePacked(input)));
  }

  // ã¦ã¼ã¶ã¼ã NFT ãåå¾ããããã«å®è¡ããé¢æ°ã§ãã
  function makeAnEpicNFT() public {
    // ç¾å¨ã®tokenIdãåå¾ãã¾ããtokenIdã¯0ããå§ã¾ãã¾ãã
    uint256 newItemId = _tokenIds.current();

    // 3ã¤ã®éåãããããã1ã¤ã®åèªãã©ã³ãã ã«åãåºãã¾ãã
    string memory first = pickRandomFirstWord(newItemId);
    string memory second = pickRandomSecondWord(newItemId);
    string memory third = pickRandomThirdWord(newItemId);

	  // 3ã¤ã®åèªãé£æºãã¦æ ¼ç´ããå¤æ° combinedWord ãå®ç¾©ãã¾ãã
    string memory combinedWord = string(abi.encodePacked(first, second, third));

    // 3ã¤ã®åèªãé£çµãã¦ã<text>ã¿ã°ã¨<svg>ã¿ã°ã§éãã¾ãã
    string memory finalSvg = string(abi.encodePacked(baseSvg, first, second, third, "</text></svg>"));

	  // NFTã«åºåããããã­ã¹ããã¿ã¼ããã«ã«åºåãã¾ãã
	  console.log("\n----- SVG data -----");
    console.log(finalSvg);
    console.log("--------------------\n");

    // JSONãã¡ã¤ã«ãæå®ã®ä½ç½®ã«åå¾ããbase64ã¨ãã¦ã¨ã³ã³ã¼ããã¾ãã
    string memory json = Base64.encode(
        bytes(
            string(
                abi.encodePacked(
                    '{"name": "',
                    // NFTã®ã¿ã¤ãã«ãçæãããè¨èï¼ä¾: GrandCuteBirdï¼ã«è¨­å®ãã¾ãã
                    combinedWord,
                    '", "description": "A highly acclaimed collection of squares.", "image": "data:image/svg+xml;base64,',
                    //  data:image/svg+xml;base64 ãè¿½å ããSVG ã base64 ã§ã¨ã³ã³ã¼ãããçµæãè¿½å ãã¾ãã
                    Base64.encode(bytes(finalSvg)),
                    '"}'
                )
            )
        )
    );

    // ãã¼ã¿ã®åé ­ã« data:application/json;base64 ãè¿½å ãã¾ãã
    string memory finalTokenUri = string(
        abi.encodePacked("data:application/json;base64,", json)
    );

	  console.log("\n----- Token URI ----");
    console.log(finalTokenUri);
    console.log("--------------------\n");

    // msg.sender ãä½¿ã£ã¦ NFT ãéä¿¡èã« Mint ãã¾ãã
    _safeMint(msg.sender, newItemId);

    // tokenURIãæ´æ°ãã¾ãã
    _setTokenURI(newItemId, finalTokenUri);

 	  // NFTããã¤èª°ã«ä½æãããããç¢ºèªãã¾ãã
	  console.log("An NFT w/ ID %s has been minted to %s", newItemId, msg.sender);

    // æ¬¡ã® NFT ã Mint ãããã¨ãã®ã«ã¦ã³ã¿ã¼ãã¤ã³ã¯ãªã¡ã³ãããã
    _tokenIds.increment();  }
}
```

è¿½å ããã³ã¼ããè¦ã¦ããã¾ãããã

```javascript
// MyEpicNFT.sol
import { Base64 } from "./libraries/Base64.sol";
```
ããã§ã¯ãåã»ã©è¿½å ãã `Base64.sol` ãããSVG ãã¼ã¿ã¨ JSON ãã¡ã¤ã«ã `Base64` ã«å¤æããé¢æ°ãã¤ã³ãã¼ããã¦ãã¾ãã

æ¬¡ã«ãä¸è¨ã®ã³ã¼ããè¦ã¦ããã¾ãããã

```javascript
// MyEpicNFT.sol
string memory combinedWord = string(abi.encodePacked(first, second, third));
```
ããã§ã¯ã3ã¤ã®åèªãçµã¿åãããè¨èï¼ä¾: GrandCuteBirdï¼ã `combinedWord` å¤æ°ã«æ ¼ç´ãã¦ãã¾ãã

æ¬¡ã«ãä¸è¨ã®ã³ã¼ããè¦ã¦ããã¾ãããã

```javascript
// MyEpicNFT.sol
// JSONãã¡ã¤ã«ãæå®ã®ä½ç½®ã«åå¾ããbase64ã¨ãã¦ã¨ã³ã³ã¼ããã¾ãã
string memory json = Base64.encode(
	bytes(
		string(
			abi.encodePacked(
				'{"name": "',
				// NFTã®ã¿ã¤ãã«ãçæãããè¨èï¼ä¾: GrandCuteBirdï¼ã«è¨­å®ãã¾ãã
				combinedWord,
				'", "description": "A highly acclaimed collection of squares.", "image": "data:image/svg+xml;base64,',
				//  data:image/svg+xml;base64 ãè¿½å ããSVG ã base64 ã§ã¨ã³ã³ã¼ãããçµæãè¿½å ãã¾ãã
				Base64.encode(bytes(finalSvg)),
				'"}'
			)
		)
	)
);
```

ããã§ã¯ãJSON ãã¡ã¤ã«ã®ã¡ã¿ãã¼ã¿ã `base64` ã§ã¨ã³ã³ã¼ããã¦ãã¾ãã

ãã®å¦çã«ãã£ã¦ãã¡ã¿ãã¼ã¿ã**ãªã³ãã§ã¼ã³**ã«æ¸ãè¾¼ã¾ããã³ã³ãã©ã¯ãã®ä¸­ã«çµã¿è¾¼ã¾ãã¾ãã

`name`ã§ã¯ã`base64` ã§ã¨ã³ã³ã¼ãããã SVG ãã¼ã¿ãè¿½å ãã¦ãã¾ãã

æ¬¡ã«ãä¸è¨ã®ã³ã¼ããè¦ã¦ããã¾ãããã

```javascript
// MyEpicNFT.sol
string memory finalTokenUri = string(
	abi.encodePacked("data:application/json;base64,", json)
);
```
ããã§ã¯ã`data:application/json;base64,` ã®å¾ãã« `base64` ã§ã¨ã³ã³ã¼ããããã¡ã¿ãã¼ããçµåããã`finalTokenUri` å¤æ°ã«æ ¼ç´ãã¦ãã¾ãã

æå¾ã«ãä¸è¨ã®ã³ã¼ããè¦ã¦ããã¾ãããã
```javascript
// MyEpicNFT.sol
_setTokenURI(newItemId, finalTokenUri);
```
ããã§ã¯ã`tokenURI` ãæ´æ°ãã¦ãã¾ãã

ãã®å¦çã¯ãããªãã® SVG ãã¼ã¿ãçµã¿è¾¼ã¾ãã JSON ã®ã¡ã¿ãã¼ã¿ãã³ã³ãã©ã¯ãã¨ç´ä»ãã¾ãã

â­ï¸ å®è¡ãã
----------

ããã§ã¯ãã¿ã¼ããã«ã«åããã`epic-nfts` ãã£ã¬ã¯ããªä¸ã§ãä¸è¨ãå®è¡ãã¾ãããã

```bash
npx hardhat run scripts/run.js
```

ã¿ã¼ããã«ã«ä¸è¨ã®ãããªçµæãåºåããã¦ãããã¨ãç¢ºèªãã¾ãããã

```plaintext
Compiling 1 file with 0.8.4
Solidity compilation finished successfully
This is my NFT contract!
Contract deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
rand - seed:  96777463446932378109744360884080025980584389114515208476196941633474201541706
rand - first word:  0

----- SVG data -----
<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'><style>.base { fill: white; font-family: serif; font-size: 24px; }</style><rect width='100%' height='100%' fill='black' /><text x='50%' y='50%' class='base' dominant-baseline='middle' text-anchor='middle'>EpicPopBird</text></svg>
--------------------


----- Token URI ----
data:application/json;base64,eyJuYW1lIjogIkVwaWNQb3BCaXJkIiwgImRlc2NyaXB0aW9uIjogIkEgaGlnaGx5IGFjY2xhaW1lZCBjb2xsZWN0aW9uIG9mIHNxdWFyZXMuIiwgImltYWdlIjogImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owbmFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jbklIQnlaWE5sY25abFFYTndaV04wVW1GMGFXODlKM2hOYVc1WlRXbHVJRzFsWlhRbklIWnBaWGRDYjNnOUp6QWdNQ0F6TlRBZ016VXdKejQ4YzNSNWJHVStMbUpoYzJVZ2V5Qm1hV3hzT2lCM2FHbDBaVHNnWm05dWRDMW1ZVzFwYkhrNklITmxjbWxtT3lCbWIyNTBMWE5wZW1VNklESTBjSGc3SUgwOEwzTjBlV3hsUGp4eVpXTjBJSGRwWkhSb1BTY3hNREFsSnlCb1pXbG5hSFE5SnpFd01DVW5JR1pwYkd3OUoySnNZV05ySnlBdlBqeDBaWGgwSUhnOUp6VXdKU2NnZVQwbk5UQWxKeUJqYkdGemN6MG5ZbUZ6WlNjZ1pHOXRhVzVoYm5RdFltRnpaV3hwYm1VOUoyMXBaR1JzWlNjZ2RHVjRkQzFoYm1Ob2IzSTlKMjFwWkdSc1pTYytSWEJwWTFCdmNFSnBjbVE4TDNSbGVIUStQQzl6ZG1jKyJ9
--------------------

An NFT w/ ID 0 has been minted to 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
rand - seed:  65185702252814965187814840607877062151565847602989074464506246984646613707935
rand - first word:  5

----- SVG data -----
<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'><style>.base { fill: white; font-family: serif; font-size: 24px; }</style><rect width='100%' height='100%' fill='black' /><text x='50%' y='50%' class='base' dominant-baseline='middle' text-anchor='middle'>GrandCuteBird</text></svg>
--------------------


----- Token URI ----
data:application/json;base64,eyJuYW1lIjogIkdyYW5kQ3V0ZUJpcmQiLCAiZGVzY3JpcHRpb24iOiAiQSBoaWdobHkgYWNjbGFpbWVkIGNvbGxlY3Rpb24gb2Ygc3F1YXJlcy4iLCAiaW1hZ2UiOiAiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBuYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNuSUhCeVpYTmxjblpsUVhOd1pXTjBVbUYwYVc4OUozaE5hVzVaVFdsdUlHMWxaWFFuSUhacFpYZENiM2c5SnpBZ01DQXpOVEFnTXpVd0p6NDhjM1I1YkdVK0xtSmhjMlVnZXlCbWFXeHNPaUIzYUdsMFpUc2dabTl1ZEMxbVlXMXBiSGs2SUhObGNtbG1PeUJtYjI1MExYTnBlbVU2SURJMGNIZzdJSDA4TDNOMGVXeGxQanh5WldOMElIZHBaSFJvUFNjeE1EQWxKeUJvWldsbmFIUTlKekV3TUNVbklHWnBiR3c5SjJKc1lXTnJKeUF2UGp4MFpYaDBJSGc5SnpVd0pTY2dlVDBuTlRBbEp5QmpiR0Z6Y3owblltRnpaU2NnWkc5dGFXNWhiblF0WW1GelpXeHBibVU5SjIxcFpHUnNaU2NnZEdWNGRDMWhibU5vYjNJOUoyMXBaR1JzWlNjK1IzSmhibVJEZFhSbFFtbHlaRHd2ZEdWNGRENDhMM04yWno0PSJ9
--------------------

An NFT w/ ID 1 has been minted to 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
```

ð  `finalTokenUri` ã®ä¸­èº«ãç¢ºèªãããã
------------------------

ã¿ã¼ããã«ã«åºåããã `Token URI` ã®ä¸ã¤ãã³ãã¼ãã¦ã[NFT Preview](https://nftpreview.0xdev.codes/) ã«è²¼ãä»ããä¸­èº«ãç¢ºèªãã¦ã¿ã¾ãããã

NFT Preview ãä½¿ç¨ããã°ããã¹ããããã«ããã­ã¤ããªãã¦ããJSONãã¡ã¤ã«ãã SVG ãã¼ã¿ãç¢ºèªã§ãã¾ãã

ä¸è¨ã®ããã« `Token URI` ãç»åã¨ãã¦ç¢ºèªã§ããã°ããã¹ãã¯æåã§ãã

![](/public/images/ETH-NFT-collection/section-2/2_3_2.png)

ð Rinkeby Test Network ã«ããã­ã¤ãã
------------------

ä¸è¨ã³ãã³ããã¿ã¼ããã«ã«å¥åããRinkebyã«ååº¦ããã­ã¤ãã¾ãããã

`deploy.js` ãä¸è¨ã®ããã«æ´æ°ãã¦ãã ããã
- å¤æ´ç¹ã¯ã2ã¤ç®ã®NFTçºè¡ãåé¤ãã¦ããã ãã§ãã

```javascript
const main = async () => {
	// ã³ã³ãã©ã¯ããã³ã³ãã¤ã«ãã¾ã
  	// ã³ã³ãã©ã¯ããæ±ãããã«å¿è¦ãªãã¡ã¤ã«ã `artifacts` ãã£ã¬ã¯ããªã®ç´ä¸ã«çæããã¾ãã
	const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
	// Hardhat ãã­ã¼ã«ã«ã® Ethereum ãããã¯ã¼ã¯ãä½æãã¾ãã
	const nftContract = await nftContractFactory.deploy();
	// ã³ã³ãã©ã¯ãã Mint ãããã­ã¼ã«ã«ã®ãã­ãã¯ãã§ã¼ã³ã«ããã­ã¤ãããã¾ã§å¾ã¡ã¾ãã
	await nftContract.deployed();
	console.log("Contract deployed to:", nftContract.address);
	// makeAnEpicNFT é¢æ°ãå¼ã³åºããNFT ã Mint ãããã
	let txn = await nftContract.makeAnEpicNFT()
	// Minting ãä»®æ³ãã¤ãã¼ã«ãããæ¿èªãããã®ãå¾ã¡ã¾ãã
	await txn.wait()
	console.log("Minted NFT #1")
  };
  // ã¨ã©ã¼å¦çãè¡ã£ã¦ãã¾ãã
  const runMain = async () => {
	try {
	  await main();
	  process.exit(0);
	} catch (error) {
	  console.log(error);
	  process.exit(1);
	}
  };
  runMain();
```

```bash
npx hardhat run scripts/deploy.js --network rinkeby
```

ä¸è¨ã®ãããªçµæãã¿ã¼ããã«ã«è¡¨ç¤ºããã¦ããã°ããã¹ããããã¸ã®ããã­ã¤ã¯æåã§ãã

```
Contract deployed to: 0x2bE00D9524E37A432B695A033912709ecEb64Cfa
Minted NFT #1
```

æå¾ã«ãã³ã³ãã©ã¯ãã®ã¢ãã¬ã¹ï¼`Contract deployed to` ã«ç¶ã `0x..` ï¼ãã¿ã¼ããã«ããã³ãã¼ãã¦ã[`rinkeby.rarible.com`](https://rinkeby.rarible.com/) ã«è²¼ãä»ããæ¤ç´¢ãã¦ã¿ã¦ãã ããã

- [ãã¹ããããç¨ã® OpenSea](https://testnets.opensea.io/) ã§ãåãããã«ç¢ºèªãããã¨ãã§ãã¾ãããNFT ã OpenSea ã«åæ ãããã¾ã§ã«æéããããã®ã§ãRarible ã§æ¤è¨¼ãããã¨ããããããã¾ãã

ä¸è¨ã®ããã«ãããªãã® SquareNFT ã Rarible ã§ç¢ºèªã§ããã§ããããï¼
![](/public/images/ETH-NFT-collection/section-2/2_3_3.png)


ðââï¸ è³ªåãã
-------------------------------------------
ããã¾ã§ã®ä½æ¥­ã§ä½ãããããªããã¨ãããå ´åã¯ãDiscord ã® `#section-2-help` ã§è³ªåããã¦ãã ããã

ãã«ããããã¨ãã®ãã­ã¼ãåæ»ã«ãªãã®ã§ãã¨ã©ã¼ã¬ãã¼ãã«ã¯ä¸è¨ã®3ç¹ãè¨è¼ãã¦ãã ããâ¨
```
1. ä½ããããã¨ãã¦ããã
2. ã¨ã©ã¼æãã³ãã¼&ãã¼ã¹ã
3. ã¨ã©ã¼ç»é¢ã®ã¹ã¯ãªã¼ã³ã·ã§ãã
```

------
æ¬¡ã®ã¬ãã¹ã³ã«é²ãã§ãã¦ã¼ã¶ã¼ã NFT ãçºè¡ã§ããWEBãµã¤ããæ§ç¯ãã¾ãããð
