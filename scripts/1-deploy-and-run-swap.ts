import { Address, toNano } from "locklift";

import { initializeExchangeContracts } from "./init-local-context";

async function main() {
  //addresses
  const dexPairAddress = new Address("0:56a3f53b5d07da8266c38eb7b4fe1b0e3f3dac6b88ef23a1634d4b9bd4eb2bbe");
  const usdt = new Address("0:8a4ed4483500caf2d4bb4b56c84df41009cc3d0ed6a9de05d853e26a30faeced");
  const usdtOwner = new Address("0:cfaacde75ac726e818c7c764f5c91bb7264d1156a4b200817455d58d32781203");
  const wrappedVenom = new Address("0:77d36848bb159fa485628bc38dc37eadb74befa514395e09910f601b841f749e");

  // init context
  console.log("Initializing context...");
  /* Note: In real network, you don't need to do it, all of this entities should be available in the network
    - userUsdtWallet is a user wallet for USDT token
    - user is a user wallet e.g. EverWallet or other type of wallet
    - pairContract is a DexPair contract that is used for swapping tokens inside the ExchangeContract
   */
  const { userUsdtWallet, user, pairContract } = await initializeExchangeContracts({
    dexPair: dexPairAddress,
    usdt,
    usdtOwner,
  });

  console.log("Deploying ExchangeContract...");
  const { contract: exchangeContract } = await locklift.factory.deployContract({
    contract: "ExchangeContract",
    constructorParams: {},
    initParams: {},
    value: toNano(10),
    publicKey: await locklift.keystore.getSigner("0").then(res => res!.publicKey),
  });

  console.log("Depositing usdt to ExchangeContract...");

  {
    const { traceTree } = await locklift.tracing.trace(
      userUsdtWallet.methods
        .transfer({
          amount: 100 * 10 ** 6,
          deployWalletValue: toNano(1),
          notify: true,
          payload: "",
          recipient: exchangeContract.address,
          remainingGasTo: user.address,
        })
        .send({
          from: user.address,
          amount: toNano(2),
        }),
    );

    await traceTree?.beautyPrint();
  }

  console.log("Execute swap on ExchangeContract...");

  {
    const { traceTree } = await locklift.tracing.trace(
      exchangeContract.methods
        .makeSwap({
          tokenIn: usdt,
          amountIn: 50 * 10 ** 6, // 50 USDT
          deployWalletValue: toNano(1),
          queryId: 1,
          expectedAmountOut: 0,
          pair: pairContract.address,
          tokenOut: wrappedVenom,
        })
        .send({
          from: user.address,
          amount: toNano(5),
        }),
      {
        raise: false,
      },
    );

    await traceTree?.beautyPrint();

    const swapEvent = traceTree?.findEventsForContract({
      contract: exchangeContract,
      name: "SwapSuccess" as const,
    })[0];

    console.log(
      `Swap executed successfully! ${(swapEvent?.result.spent as unknown as number) / 10 ** 6} USDT for ${(swapEvent?.result.received as unknown as number) / 10 ** 9} WVENOM`,
    );
  }
}

main()
  .then(() => process.exit(0))
  .catch(e => {
    console.log(e);
    process.exit(1);
  });
