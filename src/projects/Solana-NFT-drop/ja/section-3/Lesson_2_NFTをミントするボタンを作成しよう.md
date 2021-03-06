ð© `mintToken` é¢æ°ãå®è£ãã
---

`CandyMachine` ã³ã³ãã¼ãã³ãã«ã¯ã`mintToken` ã¨ããååã®é¢æ°ãããã¾ããããã¯ Metaplex ã®ãã­ã³ãã¨ã³ãã©ã¤ãã©ãªã®ä¸é¨ã§ãã

ãã®é¢æ°ã¯ããªãè¤éãªãããããã§ã¯è©³ç´°ãªèª¬æã¯çãã¾ãããä¸åº¦ã³ã¼ããèª­ãã§ã¿ã¦ãã ããã

ããããã¨ãã¦ãcommand ã­ã¼ï¼ MacOS ï¼ã CTRL ã­ã¼ï¼ Windows ï¼ãä½¿ã£ã¦é¢æ°ãã¯ãªãã¯ãããã®é¢æ°ãã©ã®ããã«åä½ãããç¢ºèªãã¦ã¿ã¦ãã ããã

ã§ã¯ãã£ããã¨ãã£ã³ã¯ãã¨ã«ã³ã¼ããè¦ã¦ããã¾ãã

```jsx
const mint = web3.Keypair.generate();

const userTokenAccountAddress = (
  await getAtaForMint(mint.publicKey, walletAddress.publicKey)
)[0];
```

ããã§ã¯ãNFT ã®ã¢ã«ã¦ã³ããä½æãã¦ãã¾ãã

Solana ã§ã¯ãã­ã°ã©ã ã§ç¶æãä¿æãã¾ããã

ã³ã³ãã©ã¯ãã§ç¶æãä¿æãã Ethereum ã¨ã¯å¤§ããç°ãªãã¾ããã®è©³ç´°ã¯ [ãã¡ã](https://docs.solana.com/developing/programming-model/accounts) ããè¦§ãã ããã

```jsx
const userPayingAccountAddress = candyMachine.state.tokenMint
  ? (await getAtaForMint(candyMachine.state.tokenMint, walletAddress.publicKey))[0]
  : walletAddress.publicKey;

const candyMachineAddress = candyMachine.id;
const remainingAccounts = [];
const signers = [mint];
```

Candy Machine ã NFT ãä½æããããã«å¿è¦ãªãã¹ã¦ã®ãã©ã¡ã¼ã¿ã¼ã§ãã

`userPayingAccountAddress` ( NFT è²»ç¨ãæ¯æããåãåããè¡ãäºº)ãããä½æãã NFT ã®ã¢ã«ã¦ã³ãã¢ãã¬ã¹ã§ãã `mint` ( mint ãã NFT ã¢ã«ã¦ã³ãã¢ãã¬ã¹)ã¾ã§ãã¹ã¦å¿è¦ã§ãã

```jsx
const instructions = [
  web3.SystemProgram.createAccount({
    fromPubkey: walletAddress.publicKey,
    newAccountPubkey: mint.publicKey,
    space: MintLayout.span,
    lamports:
      await candyMachine.program.provider.connection.getMinimumBalanceForRentExemption(
        MintLayout.span,
      ),
    programId: TOKEN_PROGRAM_ID,
  }),
  Token.createInitMintInstruction(
    TOKEN_PROGRAM_ID,
    mint.publicKey,
    0,
    walletAddress.publicKey,
    walletAddress.publicKey,
  ),
  createAssociatedTokenAccountInstruction(
    userTokenAccountAddress,
    walletAddress.publicKey,
    walletAddress.publicKey,
    mint.publicKey,
  ),
  Token.createMintToInstruction(
    TOKEN_PROGRAM_ID,
    mint.publicKey,
    userTokenAccountAddress,
    walletAddress.publicKey,
    [],
    1,
  ),
];
```

Solana ã§ã¯ããã©ã³ã¶ã¯ã·ã§ã³ã®ä¸­ã«å½ä»¤ãã²ã¨ã¾ã¨ãã«ãã¦ãã¾ããããã§ã¯ããã¤ãã®å½ä»¤ãã¾ã¨ãã¦ãã¾ãããç§ãã¡ãä½æãã Candy Machine ã«å­å¨ããé¢æ°ã§ãããMetaplex ã®æ¨æºé¢æ°ã§ãã
ãã®ããã1ããé¢æ°ãæ¸ãå¿è¦ã¯ããã¾ããã

```jsx
    if (candyMachine.state.gatekeeper) {
    }

    if (candyMachine.state.whitelistMintSettings) {
    }

    if (candyMachine.state.tokenMint) {
    }
```
ããã§ã¯ãã­ã£ã³ãã£ãã·ã³ãããããé²ãããã«ã­ã£ããã£ã¼ãä½¿ç¨ãã¦ãããã©ããï¼ `gatekeeper` ï¼ããã¯ã¤ããªã¹ããè¨­å®ããã¦ãããã©ããããã³ãããã¼ã¯ã³ã²ã¼ãã§ãããã©ããããã§ãã¯ãã¦ãã¾ãã

ãããã¯ã¦ã¼ã¶ã¼ã®ã¢ã«ã¦ã³ããã¨ã«ãã¹ãã¹ããã§ãã¯é ç®ãç°ãªãã¾ããif æãæããã¨æ¬¡ã®å¦çã«é²ã¿ã¾ãã

```jsx
const metadataAddress = await getMetadata(mint.publicKey);
const masterEdition = await getMasterEdition(mint.publicKey);

const [candyMachineCreator, creatorBump] = await getCandyMachineCreator(
  candyMachineAddress,
);

instructions.push(
  await candyMachine.program.instruction.mintNft(creatorBump, {
    accounts: {
      candyMachine: candyMachineAddress,
      candyMachineCreator,
      payer: walletAddress.publicKey,
      wallet: candyMachine.state.treasury,
      mint: mint.publicKey,
      metadata: metadataAddress,
      masterEdition,
      mintAuthority: walletAddress.publicKey,
      updateAuthority: walletAddress.publicKey,
      tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
      tokenProgram: TOKEN_PROGRAM_ID,
      systemProgram: SystemProgram.programId,
      rent: web3.SYSVAR_RENT_PUBKEY,
      clock: web3.SYSVAR_CLOCK_PUBKEY,
      recentBlockhashes: web3.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
      instructionSysvarAccount: web3.SYSVAR_INSTRUCTIONS_PUBKEY,
    },
    remainingAccounts:
      remainingAccounts.length > 0 ? remainingAccounts : undefined,
  }),
);
```
æå¾ã«ããã¹ã¦ã®ãã§ãã¯ãééããå¾ãå®éã« NFT ããã³ãããããã®å½ä»¤ãè¡ãã¾ãã

```jsx
  try {
    return (
      await sendTransactions(
        candyMachine.program.provider.connection,
        candyMachine.program.provider.wallet,
        [instructions, cleanupInstructions],
        [signers, []],
      )
    ).txs.map(t => t.txid);
  } catch (e) {
    console.log(e);
  }
```
ãã­ãã¤ãã¼ãã¦ã©ã¬ããããã¹ã¦ã®å½ä»¤ãç¨ãã¦ããã­ãã¯ãã§ã¼ã³ã¨å¯¾è©±ããé¢æ°ã§ãã `sendTransactions` ãå¼ã³åºãã¾ãã

ç§ãã¡ãå®éã«ã­ã£ã³ãã£ãã·ã³ãå©ããNFT ããã³ãããããã«æç¤ºããããã¾ããªãã³ã¼ãã§ãã

ãã£ããã¨ããèª¬æã¯ä»¥ä¸ã§ããã§ããéãèªåã§èª­ã¿è§£ãã¦ã¿ã¦ãã ããã­ãã¡ã³ãã¼ã¨ä¸ç·ã«èª­ã¿åããããã®ãããããããã¾ãããã¾ããèª°ãããã®ã³ã¼ããç´ æµãª `npm` ã¢ã¸ã¥ã¼ã«ã«ãã¦ããããã¨ãå¤¢è¦ã¦ãã¾ã...ã

â¨ NFTããã³ããããï¼
----

`CandyMachine` ã³ã³ãã¼ãã³ãã§ã"Mint" ãã¿ã³ãã¯ãªãã¯ããã¨ãã« `mintToken` é¢æ°ãå¼ã³åºãããè¨­å®ãã¾ãã`index.js` ãä¸è¨ã®éãä¿®æ­£ãã¦ãã ããã

```jsx
return (
    // Only show this if machineStats is available
    machineStats && (
      <div className="machine-container">
        <p>{`Drop Date: ${machineStats.goLiveDateTimeString}`}</p>
        <p>{`Items Minted: ${machineStats.itemsRedeemed} / ${machineStats.itemsAvailable}`}</p>
        <button className="cta-button mint-button" onClick={mintToken}>
            Mint NFT
        </button>
      </div>
    )
  );
```

`Mint NFT` ãã¯ãªãã¯ããåã«ãPhantomWallet ã« DevnetSOL ããããã¨ãç¢ºèªããå¿è¦ãããã¾ããããã¯ã¨ã¦ãç°¡åã§ãã

ã¾ããPhantom Wallet ã®ãããªãã¯ã¢ãã¬ã¹ãåå¾ãã¾ãã

![ç¡é¡](/public/images/Solana-NFT-mint/section3/3_2_1.png)

æ¬¡ã«ãDevnet ã§ãã¼ã¯ã³ãå¾ãããã«ã¿ã¼ããã«ã§æ¬¡ã®ã³ãã³ããå®è¡ãã¾ãã

```txt
solana airdrop 2 INSERT_YOUR_PHANTOM_WALLET_ADDRESS
```

`Mint NFT` ãã¯ãªãã¯ããã¨ãæ¬¡ã®ãããªãããã¢ãããè¡¨ç¤ºããã¾ãã

![ç¡é¡](/public/images/Solana-NFT-mint/section3/3_2_2.png)

[æ¿èª]ãã¯ãªãã¯ãã¦åå¼ææ°æãæ¯æãã¨ãã­ã£ã³ãã£ã¼ãã·ã³ã« NFT ãä½æããããã«æç¤ºããã¾ãã

ã­ã°ãç¢ºèªããããã«ããã©ã¦ã¶ã®ã³ã³ã½ã¼ã«ãéããã¾ã¾ã«ãã¦ããã¾ãããã3ã10ç§ã»ã©ãããã¾ãã

NFT ãæ­£å¸¸ã«ãã³ãããã¨ãã³ã³ã½ã¼ã«ã«æ¬¡ã®ãããªãã®ãè¡¨ç¤ºããã¾ãã

![ç¡é¡](/public/images/Solana-NFT-mint/section3/3_2_3.png)

NFT ã mint ãããã¨ãã§ãã¾ããï¼

Phantom Wallet ãéãã`[]` ã»ã¯ã·ã§ã³ã«è¡¨ç¤ºããããã©ãããç¢ºèªãã¾ãã

![ç¡é¡](/public/images/Solana-NFT-mint/section3/3_2_4.png)

ðââï¸ è³ªåãã
-------------------------------------------
ããã¾ã§ã®ä½æ¥­ã§ä½ãããããªããã¨ãããå ´åã¯ãDiscord ã® `#section-3-help` ã§è³ªåããã¦ãã ããã

ãã«ããããã¨ãã®ãã­ã¼ãåæ»ã«ãªãã®ã§ãã¨ã©ã¼ã¬ãã¼ãã«ã¯ä¸è¨ã®3ç¹ãè¨è¼ãã¦ãã ããâ¨
```
1. ä½ããããã¨ãã¦ããã
2. ã¨ã©ã¼æãã³ãã¼&ãã¼ã¹ã
3. ã¨ã©ã¼ç»é¢ã®ã¹ã¯ãªã¼ã³ã·ã§ãã
```

------
æ¬¡ã®ã¬ãã¹ã³ã«é²ãã§ãä»ã®æ©è½ãWEBã¢ããªã«å®è£ãã¦ããã¾ãããð
