๐ ใในใไฝใ
---

ใใใใใใฒใผใ ๅใฎใในไฝๆใใฆใใใพใใ

ใใฎใฒใผใ ใฎใดใผใซใฏใ**ใในใๆปๆใใฆใใในใฎ HP ใ 0 ใซใใใใจใงใใ**

- ใในใฎHPใฏๅคใใใในใๆปๆใใใใณใซๅๆใใใใฎใงใNFT ใญใฃใฉใฏใฟใผใฎ HP ใฏๆธใฃใฆใใพใใพใใ

- NFT ใญใฃใฉใฏใฟใผใฎ HP ใ 0 ใซใชใใจใใในใๆปๆใใใใจใใงใใชใใชใใใฒใผใ ใชใผใใผใจใชใใพใใ

- ใใใใฃใฆใใในใๆปๆใใใใใซใฏไปใฎใใฌใคใคใผใๅฟ่ฆใงใใ

- ใพใใใในใฎใใผใฟใๆ ผ็ดใใใใใฎๆง้ ไฝใไฝใใใญใฃใฉใฏใฟใผใจๅใใใใซใใผใฟใๅๆๅใใพใใใใ

- ใในใฏใๅๅใ็ปๅใๆปๆๅใHPใๆใฃใฆใใพใใ

**ใในใฏ NFT ใงใฏใใใพใใใ**

ใในใฎใใผใฟใฏในใใผใใณใณใใฉใฏใใซไฟๅญใใใใ ใใงใใ

ๆฌกใฎใณใผใใ `MyEpigGame.sol` ใฎ `struct CharacterAttributes` ใณใผใใใญใใฏใฎ็ดไธใซ่ฟฝๅ ใใพใใใใ

```javascript
// MyEpicGame.sol
struct BigBoss {
  string name;
  string imageURI;
  uint hp;
  uint maxHp;
  uint attackDamage;
}
BigBoss public bigBoss;
```

ใใใงใฏใใในใฎใใผใฟใๆด็ใใฆไฟๆใใใใใฎๆง้ ไฝใจใใในใไฟๆใใใใใฎๅคๆฐ `bigBoss` ใไฝๆใใฆใใพใใ

ๆฌกใซใใในใๅๆๅใใใใใซใไธ่จใฎใใใซ `MyEpicGame.sol` ใๆดๆฐใใฆใใใพใใใใ

- `constructor` ใฎไธญ่บซใซไธ่จใ่ฟฝๅ ใใฆใใใพใใ

```javascript
// MyEpicGame.sol
constructor(
  string[] memory characterNames,
  string[] memory characterImageURIs,
  uint[] memory characterHp,
  uint[] memory characterAttackDmg,
  // ใใใใฎๆฐใใๅคๆฐใฏใrun.js ใ deploy.js ใไปใใฆๆธกใใใพใใ
  string memory bossName,
  string memory bossImageURI,
  uint bossHp,
  uint bossAttackDamage
)
  ERC721("Pokemons", "POKEMON")
{
  // ใในใๅๆๅใใพใใใในใฎๆๅ ฑใใฐใญใผใใซ็ถๆๅคๆฐ "bigBoss"ใซไฟๅญใใพใใ
  bigBoss = BigBoss({
    name: bossName,
    imageURI: bossImageURI,
    hp: bossHp,
    maxHp: bossHp,
    attackDamage: bossAttackDamage
  });
  console.log("Done initializing boss %s w/ HP %s, img %s", bigBoss.name, bigBoss.hp, bigBoss.imageURI);
```

ๆๅพใซใ`run.js` ใจ `deploy.js` ใๅคๆดใใฆใใในใซๆธกใใใฉใกใผใฟใๅคๆดใใพใใใใ

```javascript
// run.js, deploy.js
const gameContract = await gameContractFactory.deploy(
 ["FUSHIGIDANE", "HITOKAGE", "ZENIGAME"], // ใญใฃใฉใฏใฟใผใฎๅๅ
 ["https://i.imgur.com/IjX49Yf.png",      // ใญใฃใฉใฏใฟใผใฎ็ปๅ
  "https://i.imgur.com/Xid5qaC.png",
  "https://i.imgur.com/kW2dNCs.png"],
  [100, 200, 300],
  [100, 50, 25],
  "MYU2", // Bossใฎๅๅ
  "https://i.imgur.com/3Ikh51a.png", // Bossใฎ็ปๅ
  10000, // Bossใฎhp
  50 // Bossใฎๆปๆๅ
);
```

ใในใซใฏใใใฅใฆใใผใฎ็ปๅใ่จญๅฎใใพใใใ

ไปๅใฎใฒใผใ ใงใฏใใใฑใขใณใฎใตใณใใซ็ปๅใไฝฟ็จใใฆใใพใใใใใฒใชใชใธใใซใญใฃใฉใฏใฟใผใ้ธใใงใใชใใ ใใฎใฒใผใ ใไฝๆใใฆใฟใฆใใ ใใโจ

๐พ ใใฌใคใคใผใฎ NFT ใญใฃใฉใฏใฟใผใฎๅฑๆงใๅๅพใใใ
---

ใใใใ `attackBoss` ใจใใ้ขๆฐใไฝๆใใฆใ`MyEpicGame.sol` ใซ่ฟฝๅ ใใฆใใใพใใใใ

- `mintCharacterNFT` ้ขๆฐใฎใณใผใใใญใใฏ็ดไธใซไธ่จใ่ฟฝๅ ใใฆใใ ใใใ
```javascript
// MyEpicGame.sol
function attackBoss() public {
	// 1. ใใฌใคใคใผใฎNFTใฎ็ถๆใๅๅพใใพใใ
	uint256 nftTokenIdOfPlayer = nftHolders[msg.sender];
	CharacterAttributes storage player = nftHolderAttributes[nftTokenIdOfPlayer];
	console.log("\nPlayer w/ character %s about to attack. Has %s HP and %s AD", player.name, player.hp, player.attackDamage);
	console.log("Boss %s has %s HP and %s AD", bigBoss.name, bigBoss.hp, bigBoss.attackDamage);

	// 2. ใใฌใคใคใผใฎHPใ0ไปฅไธใงใใใใจใ็ขบ่ชใใใ
	require (
		player.hp > 0,
		"Error: character must have HP to attack boss."
	);
	// 3. ใในใฎHPใ0ไปฅไธใงใใใใจใ็ขบ่ชใใใ
	require (
		bigBoss.hp > 0,
		"Error: boss must have HP to attack boss."
	);

	// 4. ใใฌใคใคใผใใในใๆปๆใงใใใใใซใใใ
	if (bigBoss.hp < player.attackDamage) {
		bigBoss.hp = 0;
	} else {
		bigBoss.hp = bigBoss.hp - player.attackDamage;
	}
	// 5. ใในใใใฌใคใคใผใๆปๆใงใใใใใซใใใ
	if (player.hp < bigBoss.attackDamage) {
		player.hp = 0;
	} else {
		player.hp = player.hp - bigBoss.attackDamage;
	}

	// ใใฌใคใคใผใฎๆปๆใใฟใผใใใซใซๅบๅใใใ
	console.log("Player attacked boss. New boss hp: %s", bigBoss.hp);
	// ใในใฎๆปๆใใฟใผใใใซใซๅบๅใใใ
	console.log("Boss attacked player. New player hp: %s\n", player.hp);
}
```

่ฟฝๅ ใใใณใผใใใ5ใคใฎๆฎต้ใซๅใใฆ่ฆใฆใใใพใใใใ

**1๏ธโฃ \. ใใฌใคใคใผใฎNFTใฎ็ถๆใๅๅพใใ**

ใพใใ**ใใฌใคใคใผใฎ NFT ใญใฃใฉใฏใฟใผใฎ็ถๆใๅๅพใใฆใใใพใใ**

ใใฌใคใคใผใฎ NFT ใญใฃใฉใฏใฟใผใฎ็ถๆใซ้ขใใใใผใฟใฏ `nftHolderAttributes` ใซๆ ผ็ดใใใฆใใพใใ

ไปฅๅ่จ่ฟฐใใไธ่จใฎใณใผใใ่ฆใใฆใใใงใใใใ๏ผ
```javascript
// MyEpicGame.sol

// ใฆใผใถใผใฎใขใใฌในใจ NFT ใฎ tokenId ใ็ดใฅใใ mapping ใไฝๆใใฆใใพใใ
mapping(address => uint256) public nftHolders;

// ใฆใผใถใผใฎ tokenId ใๅๅพใใพใใ
uint256 newItemId = _tokenIds.current();

// NFTใฎๆๆ่ใ็ฐกๅใซ็ขบ่ชใงใใใใใซใใพใใ
nftHolders[msg.sender] = newItemId;
```

ใใใใฎๅฆ็ใซใใใ`nftHolders` ใใ ใฆใผใถใผใฎ `tokenId` ใๅๅพใใใใจใใงใใใใใซใชใใพใใใ

ไธ่จใฎใณใผใใใญใใฏใงใฏใ`nftHolders` ใไฝฟ็จใใฆใใพใใ่ฉณใใ่ฆใฆใใใพใใใใ

```javascript
// MyEpicGame.sol
function attackBoss() public {
  // 1. ใใฌใคใคใผใฎNFTใฎ็ถๆใๅๅพใใพใใ
  uint256 nftTokenIdOfPlayer = nftHolders[msg.sender];
  CharacterAttributes storage player = nftHolderAttributes[nftTokenIdOfPlayer];
  console.log("\nPlayer w/ character %s about to attack. Has %s HP and %s AD", player.name, player.hp, player.attackDamage);
  console.log("Boss %s has %s HP and %s AD", bigBoss.name, bigBoss.hp, bigBoss.attackDamage);
}
```

ใพใใไธ่จใฎใณใผใใซๆณจ็ฎใใฆใใ ใใใ

```javascript
// MyEpicGame.sol
uint256 nftTokenIdOfPlayer = nftHolders[msg.sender];
```

ใใใงใฏใ`nftHolders[msg.sender]` ใไฝฟใฃใฆใใใฌใคใคใผใๆๆใใ NFT ใฎ `tokenId` ใๅๅพใใ`nftTokenIdOfPlayer` ใซๆ ผ็ดใใฆใใพใใ

ไพใใฐใใณใฌใฏใทใงใณใฎ 3 ็ช็ฎใฎ NFT ใ Mint ใใๅ ดๅใ`nftHolders[msg.sender]` ใฏ `3` ใจใชใใพใ!

ๆฌกใซใไธ่จใฎใณใผใใ่ฆใฆใใใพใใใใ

```javascript
// MyEpicGame.sol
CharacterAttributes storage player = nftHolderAttributes[nftTokenIdOfPlayer];
```

ใใใงใฏใ`nftHolderAttributes[nftTokenIdOfPlayer]` ใไฝฟใฃใฆใใฌใคใคใผใฎๅฑๆงใๅๅพใใฆใใพใใ

โ๏ธ: `storage` ใจ `memory` ใซใคใใฆ

> ใใใงใฏ `storage` ใจใใใใผใฟใไฟๅญใใ้ใซไฝฟ็จใใใญใผใฏใผใใไฝฟใฃใฆใใพใใ
>
> ไธ่ฌ็ใซใ`storage` ใฏใใญใใฏใใงใผใณใซใใผใฟใไฟๅญใใใจใใซไฝฟ็จใใใใญใผใฏใผใใงใใ
>
> ไธๆนใ`memory` ใฏใณใณใใฉใฏใๅฎ่กๆใซไธๆ็ใซใใผใฟใไฟๆใใใจใใซไฝฟ็จใใใพใใ
>
> ไพใใฐใ`storage` ใจ่จ่ผใใฆใใใ`player.hp = 0` ใจใใใจใใใญใใฏใใงใผใณไธใง **NFT ใญใฃใฉใฏใฟใผใฎ HP ๅค** ใ `0` ใซๅคๆดใใใใจใซใชใใพใใ
>
> ใใใซๅฏพใใฆใใใ `storage` ใฎไปฃใใใซ `memory` ใไฝฟ็จใใใจใ้ขๆฐใฎในใณใผใๅใซๅคๆฐใฎใญใผใซใซใณใใผใไฝๆใใใพใใ
>
>  `memory` ใไฝฟ็จใใใฐใ`player.hp = 0` ใจใใๅ ดๅใงใใใใใฏ้ขๆฐใฎไธญใ ใใฎใใจใงใใใใใญใใฏใใงใผใณไธใฎใใผใฟใๆดๆฐใใใใใจใฏใใใพใใใ
>
> `storage` ใจ `memory` ใซ้ขใใ่ฉณใใ่ชฌๆใฏใ[ใใกใ](https://tomokazu-kozuma.com/what-is-storage-and-memory-in-solidity/) ใๅ็งใใฆใใ ใใใ

ๆๅพใซใไธ่จใฎใณใผใใ่ฆใฆใใใพใใใใ

```javascript
// MyEpicGame.sol
console.log("\nPlayer w/ character %s about to attack. Has %s HP and %s AD", player.name, player.hp, player.attackDamage);
console.log("Boss %s has %s HP and %s AD", bigBoss.name, bigBoss.hp, bigBoss.attackDamage);
```

ใใใงใฏใไธ่จใใฟใผใใใซใซๅบๅใใฆใใพใใ

- ๆปๆใ้ๅงใใ NFT ใญใฃใฉใฏใฟใผใฎๅๅ๏ผ `player.name` ๏ผใHPๅค๏ผ `player.hp` ๏ผใๆปๆๅ๏ผ `player.attackDamage` ๏ผใใฟใผใใใซใซๅบๅใใฆใใพใใ
- ใในใฎๅๅ๏ผ `bigBoss.name` ๏ผใHPๅค๏ผ `bigBoss.hp` ๏ผใๆปๆๅ๏ผ `bigBoss.attackDamage` ๏ผใใฟใผใใใซใซๅบๅใใฆใใพใใ


**2๏ธโฃ \. ใใฌใคใคใผใฎ HP ใ 0 ไปฅไธใงใใใใจใ็ขบ่ชใใ**

ๆฌกใซใ**ใใฌใคใคใผใฎ HP ใ 0 ไปฅไธใงใใใใจใ็ขบ่ชใใฆใใใพใใ**

```javascript
// MyEpicGame.sol
// 2. ใใฌใคใคใผใฎHPใ0ไปฅไธใงใใใใจใ็ขบ่ชใใใ
require (
	player.hp > 0,
	"Error: character must have HP to attack boss."
);
```
ใใใงใฏใ`require` ้ขๆฐใไฝฟ็จใใฆใ`player.hp > 0` ใงใใใใจใ็ขบ่ชใใฆใใพใใ

NFT ใญใฃใฉใฏใฟใผใฎ HP ใ 0 ใงใใๅ ดๅใฏใๆปๆใงใใพใใใ

`require` ใฏ `if` ๆใฎใใใชๅฝนๅฒใๆใใใพใใใญใธใใฏใฏใไธ่จใฎใใใซใชใใพใใ

```plaintext
require(
	player.hp > 0 ใงใใใฐ๏ผtrue๏ผใใณใผใใ้ฒใใ,
	player.hp > 0 ใงใชใใใฐ Error ใๅบๅใ(false)
	ใๅฆ็ๅฎ่กๅใฎใณใณใใฉใฏใใฎ็ถๆใซๆปใ
);
```
**3๏ธโฃ \. ใในใฎ HP ใ 0 ไปฅไธใงใใใใจใ็ขบ่ชใใ**

ในใใใ 2 ใจๅใใใใซใ**ใในใฎ HP ใ 0 ไปฅไธใงใใใใจใ็ขบ่ชใใฆใใใพใใ**

```javascript
// 3. ใในใฎHPใ0ไปฅไธใงใใใใจใ็ขบ่ชใใใ
require (
	bigBoss.hp > 0,
	"Error: boss must have HP to attack boss."
);
```

ใในใฎ HP ใ 0 ใฎๅ ดๅใNFT ใญใฃใฉใฏใฟใผใฏใในใใใไปฅไธๆปๆใใใใจใฏใงใใพใใใ

โ ๏ธ: ๆณจๆ
> VS Code ใไฝฟ็จใใฆใใๅ ดๅใ`"Function state mutability can be restricted to view"` ใจใใ `warning` ใ่กจ็คบใใใใใจใใใใพใใ
>
> ใใใงใฎ `warning` ใฏๅบๆฌ็ใซ็ก่ฆใใฆๅคงไธๅคซใงใ๐

**4๏ธโฃ \. ใใฌใคใคใผใใในใๆปๆใงใใใใใซใใ**

ๆฌกใซใ**ใใฌใคใคใผใใในใๆปๆใใใฟใผใณใๅฎ่ฃใใฆใใใพใใ**

```javascript
// MyEpicGame.sol
// 4. ใใฌใคใคใผใใในใๆปๆใงใใใใใซใใใ
if (bigBoss.hp < player.attackDamage) {
	bigBoss.hp = 0;
} else {
	bigBoss.hp = bigBoss.hp - player.attackDamage;
}
```
`if` / `else` ๆใฎใญใธใใฏใฏใไธ่จใฎใใใซใชใใพใใ

- `if` : ใใใใในใฎ HP๏ผ `bigBoss.hp` ๏ผใ NFT ใญใฃใฉใฏใฟใผใฎๆปๆๅ ๏ผ `player.attackDamage` ๏ผใไธๅใฃใฆใใใใใในใฎ HP ใ `0` ใซ่จญๅฎใใพใใ

- `else` : ใใใใในใฎ HP๏ผ `bigBoss.hp` ๏ผใใNFT ใญใฃใฉใฏใฟใผใฎๆปๆๅ ๏ผ `player.attackDamage` ๏ผใไธๅใฃใฆใใใใใในใฎ HP ใใ็พๅจใฎใในใฎ HPใใใใNFT ใญใฃใฉใฏใฟใผใฎๆปๆๅใใๅทฎใๅผใใๅคใซๆดๆฐใใพใใ

โ๏ธ: `unit` ใซใคใใฆ

> ใใใงไฝฟ็จใใใฆใใๅคๆฐ๏ผ`igBoss.hp` ใจ `player.attackDamage`๏ผใฏใ`constructor` ใฎไธญใง `unit` ใจใใฆๅฎ็พฉใใใฆใใพใใ
>
> `unit` ใจใฏใ็ฌฆๅทใชใๆดๆฐใๆๅณใใฆใใใ่ฒ ใฎๅคใใจใใใจใฏใงใใพใใใ
>
> ใชใฎใงใใในใฎ HP๏ผ `bigBoss.hp` ๏ผใ NFT ใญใฃใฉใฏใฟใผใฎๆปๆๅ ๏ผ `player.attackDamage` ๏ผใไธๅใฃใฆใใๅ ดๅใ`bigBoss.hp = 0` ใจ็ดๆฅๅคใๆดๆฐใใฆใใพใใ
>
> ๅคๆฐใๅฎ็พฉใใ้ใซใ่ฒ ใฎๆฐใใจใใใจใใงใใ `int` ใไฝฟ็จใใใจใใจใฉใผใ็บ็ใใใใจใใใใฎใงใๆณจๆใใพใใใใ
>
> OpenZeppelin ใ Hardhat ใฏใใฉใคใใฉใชใฎไธญใง `int` ใใตใใผใใใฆใใพใใใ
> ไพใใฐใ`MyEpicGame.sol` ใฎไธญใง `Strings.toString` ใไฝฟ็จใใฆใใพใใใใใใฏ `uint` ใงๅฎ็พฉใใใฆใใๅคๆฐใซใฎใฟๅไฝใใพใใ
>
> ใพใใ`console.log` ใ `int` ใซๅฏพๅฟใใฆใใพใใใ

**5๏ธโฃ \. ใในใใใฌใคใคใผใๆปๆใงใใใใใซใใ**

```javascript
// MyEpicGame.sol
// 5. ใในใใใฌใคใคใผใๆปๆใงใใใใใซใใใ
if (player.hp < bigBoss.attackDamage) {
	player.hp = 0;
} else {
	player.hp = player.hp - bigBoss.attackDamage;
}
```

ใใใงใฏใในใใใ 4 ใจๅใๅฎน้ใงใใในใใใฌใคใคใผใๆปๆใใ้ใฎใญใธใใฏใๅฎ่ฃใใฆใใพใใ

ๆๅพใซใไธ่จใฎใณใผใใ่ฆใฆใใใพใใใใ

```javascript
// ใใฌใคใคใผใฎๆปๆใใฟใผใใใซใซๅบๅใใใ
console.log("Player attacked boss. New boss hp: %s", bigBoss.hp);
// ใในใฎๆปๆใใฟใผใใใซใซๅบๅใใใ
console.log("Boss attacked player. New player hp: %s\n", player.hp);
```

ใใใงใฏใใใฌใคใคใผใจใในใฎๆปๆใใฟใผใใใซใซๅบๅใใใใใใใฎ็พๅจใฎ HP ใ่กจ็คบใใฆใใพใใ

๐ฆ ใในใใๅฎ่กใใ
----

`run.js` ใซไธ่จใ่ฟฝๅ ใใฆใ`attackBoss` ้ขๆฐใฎใในใใใใฆใฟใพใใใใ

- `attackBoss` ้ขๆฐใฎใณใผใใใญใใฏใ2ๅ `txn = await gameContract.mintCharacterNFT(2)` ใฎ็ดไธใซ่ฟฝๅ ใใพใใ

```javascript
// run.js
let txn;
txn = await gameContract.mintCharacterNFT(2);
await txn.wait();

// 1ๅ็ฎใฎๆปๆ: attackBoss ้ขๆฐใ่ฟฝๅ 
txn = await gameContract.attackBoss();
await txn.wait();

// 2ๅ็ฎใฎๆปๆ: attackBoss ้ขๆฐใ่ฟฝๅ 
txn = await gameContract.attackBoss();
await txn.wait();
```

ใณใผใใ่ฉณใใ่ฆใฆใใใพใใใใ

```javascript
// run.js
txn = await gameContract.mintCharacterNFT(2);
await txn.wait();
```
ใใใงใฏใพใใใคใณใใใฏใน `2` ใฎใญใฃใฉใฏใฟใผใไฝๆใใฆใใพใใ

ใใใฏ `constructor` ใซๆธกใใใ้ๅใฎ 3 ็ช็ฎใฎใญใฃใฉใฏใฟใผใงใใ

- ใใใใฎใฒใผใ ใฎๅ ดๅใ3็ช็ฎใฎใญใฃใฉใฏใฟใผใฏใใผใใฌใกใใงใใ

- ใฒใผใ ๅใงใใผใใฌใกใใใใใฅใฆใใผใใๆปๆใใพใใ

- ใใผใใฌใกใใฏ `run.js` ใ่ตทๅใใ้ใซใๆๅใซ Mint ใใใใญใฃใฉใฏใฟใผใชใฎใงใNFT ใฎ ID ( `tokenId` ) ใฏใ่ชๅ็ใซ `1` ใซใชใใพใใ

	> โ ๏ธ: ้ๅธธ `_tokenIds` ใฏ 0 ใงๅงใพใใพใใใ`constructor` ๅใง `1` ใซใคใณใฏใชใกใณใใใใใใใ`tokenId` ใฏ `1` ใใๅงใพใใพใใ

ๆฌกใซใไธ่จใฎใณใผใใ่ฆใฆใใใพใใใใ

```javascript
// run.js
// 1ๅ็ฎใฎๆปๆ: attackBoss ้ขๆฐใ่ฟฝๅ 
txn = await gameContract.attackBoss();
await txn.wait();

// 2ๅ็ฎใฎๆปๆ: attackBoss ้ขๆฐใ่ฟฝๅ 
txn = await gameContract.attackBoss();
await txn.wait();
```
ใใใงใฏใ`attackBoss()` ใ2ๅๅฎ่กใใฆใใพใใ

ใใใงใฏใ`epic-game` ใใฃใฌใฏใใชไธใงใไธ่จใๅฎ่กใใใในใใ่กใใพใใใใ

```bash
npx hardhat run scripts/run.js
```

ไธ่จใฎใใใช็ตๆใๅบๅใใใฆใใใฐใใในใใฏๆๅใงใใ

```plaintext
Done initializing boss MYU2 w/ HP 10000, img https://i.imgur.com/3Ikh51a.png
Done initializing FUSHIGIDANE w/ HP 100, img https://i.imgur.com/IjX49Yf.png
Done initializing HITOKAGE w/ HP 200, img https://i.imgur.com/Xid5qaC.png
Done initializing ZENIGAME w/ HP 300, img https://i.imgur.com/kW2dNCs.png
Contract deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
Minted NFT w/ tokenId 1 and characterIndex 2

Player w/ character ZENIGAME about to attack. Has 300 HP and 25 AD
Boss MYU2 has 10000 HP and 50 AD
Player attacked boss. New boss hp: 9975
Boss attacked player. New player hp: 250


Player w/ character ZENIGAME about to attack. Has 250 HP and 25 AD
Boss MYU2 has 9975 HP and 50 AD
Player attacked boss. New boss hp: 9950
Boss attacked player. New player hp: 200

Token URI: data:application/json;base64,eyJuYW1lIjogIlpFTklHQU1FIC0tIE5GVCAjOiAxIiwgImRlc2NyaXB0aW9uIjogIlRoaXMgaXMgYW4gTkZUIHRoYXQgbGV0cyBwZW9wbGUgcGxheSBpbiB0aGUgZ2FtZSBNZXRhdmVyc2UgU2xheWVyISIsICJpbWFnZSI6ICJodHRwczovL2kuaW1ndXIuY29tL2tXMmROQ3MucG5nIiwgImF0dHJpYnV0ZXMiOiBbIHsgInRyYWl0X3R5cGUiOiAiSGVhbHRoIFBvaW50cyIsICJ2YWx1ZSI6IDIwMCwgIm1heF92YWx1ZSI6MzAwfSwgeyAidHJhaXRfdHlwZSI6ICJBdHRhY2sgRGFtYWdlIiwgInZhbHVlIjogMjV9IF19
```

1 ๅ็ฎใฎๆปๆใฎ็ตๆใ่ฉณใใ่ฆใฆใใใพใใใใ

```
Player w/ character ZENIGAME about to attack. Has 300 HP and 25 AD
Boss MYU2 has 10000 HP and 50 AD
Player attacked boss. New boss hp: 9975
Boss attacked player. New player hp: 250
```

ใใใงใฏใใผใใฌใกใใใฅใฆใใผใ `25` ใฎๆปๆๅ๏ผ `AD` ๏ผใงๆปๆใใฆใใใฅใฆใใผใฎ HP ใ `10000` ใใ `9975` ใซใชใใพใใใ

ใใใฆใใใฅใฆใใผใฏใผใใฌใกใซ `50` ใฎๆปๆๅ๏ผ `AD` ๏ผใงๆปๆใใใผใใฌใกใฎ HP ใฏใ300ใใใใ250ใใซๆธๅฐใใพใใใ

ๆฌกใซใ2 ๅ็ฎใฎๆปๆใฎ็ตๆใ็ขบ่ชใใพใใใใ

```
Player w/ character ZENIGAME about to attack. Has 250 HP and 25 AD
Boss MYU2 has 9975 HP and 50 AD
Player attacked boss. New boss hp: 9950
Boss attacked player. New player hp: 200
```

2ๅ็ฎใฎๆปๆใงใฏใใญใฃใฉใฏใฟใผใจใในใฎไธกๆนใซๆดๆฐใใใ HP ๅคใไฝฟ็จใใใฆใใใฎใใใใใพใใ

ใใใงใ`attackBoss` ้ขๆฐใฏๅฎๆใงใโจ

ใฒใผใ ใฎใญใธใใฏใๅฎๅจใซใใญใใฏใใงใผใณใซไฟๅญใใใพใใใ

๐โโ๏ธ ่ณชๅใใ
-------------------------------------------
ใใใพใงใฎไฝๆฅญใงไฝใใใใใชใใใจใใใๅ ดๅใฏใDiscordใฎ `#section-2-help` ใง่ณชๅใใฆใใ ใใใ

ใใซใใใใใจใใฎใใญใผใๅๆปใซใชใใฎใงใใจใฉใผใฌใใผใใซใฏไธ่จใฎ3็นใ่จ่ผใใฆใใ ใใโจ
```
1. ไฝใใใใใจใใฆใใใ
2. ใจใฉใผๆใใณใใผ&ใใผในใ
3. ใจใฉใผ็ป้ขใฎในใฏใชใผใณใทใงใใ
```
-------------------------------------------
ๆฌกใฎใฌใในใณใซ้ฒใใงใใในใใใใใซๆดๆฐใใใณใณใใฉใฏใใใใใญใคใใพใใใ๐
