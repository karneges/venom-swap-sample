import { Address } from "locklift";
import * as fs from "node:fs";

export const DexPairAbi = {
  "ABI version": 2,
  data: [],
  events: [
    {
      inputs: [
        {
          components: [
            {
              name: "timestamp",
              type: "uint32",
            },
            {
              name: "price0To1Cumulative",
              type: "uint256",
            },
            {
              name: "price1To0Cumulative",
              type: "uint256",
            },
          ],
          name: "value0",
          type: "tuple",
        },
      ],
      name: "OracleInitialized",
      outputs: [],
    },
    {
      inputs: [
        {
          components: [
            {
              name: "timestamp",
              type: "uint32",
            },
            {
              name: "price0To1Cumulative",
              type: "uint256",
            },
            {
              name: "price1To0Cumulative",
              type: "uint256",
            },
          ],
          name: "value0",
          type: "tuple",
        },
      ],
      name: "OracleUpdated",
      outputs: [],
    },
    {
      inputs: [
        {
          components: [
            {
              name: "minInterval",
              type: "uint8",
            },
            {
              name: "minRateDeltaNumerator",
              type: "uint128",
            },
            {
              name: "minRateDeltaDenominator",
              type: "uint128",
            },
            {
              name: "cardinality",
              type: "uint16",
            },
          ],
          name: "value0",
          type: "tuple",
        },
      ],
      name: "OracleOptionsUpdated",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "version",
          type: "uint32",
        },
        {
          name: "pool_type",
          type: "uint8",
        },
      ],
      name: "PairCodeUpgraded",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "current",
          type: "bool",
        },
        {
          name: "previous",
          type: "bool",
        },
      ],
      name: "ActiveStatusUpdated",
      outputs: [],
    },
    {
      inputs: [
        {
          components: [
            {
              name: "denominator",
              type: "uint128",
            },
            {
              name: "pool_numerator",
              type: "uint128",
            },
            {
              name: "beneficiary_numerator",
              type: "uint128",
            },
            {
              name: "referrer_numerator",
              type: "uint128",
            },
            {
              name: "beneficiary",
              type: "address",
            },
            {
              name: "threshold",
              type: "map(address,uint128)",
            },
            {
              name: "referrer_threshold",
              type: "map(address,uint128)",
            },
          ],
          name: "params",
          type: "tuple",
        },
      ],
      name: "FeesParamsUpdated",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "sender",
          type: "address",
        },
        {
          name: "owner",
          type: "address",
        },
        {
          components: [
            {
              name: "amount",
              type: "uint128",
            },
            {
              name: "root",
              type: "address",
            },
          ],
          name: "tokens",
          type: "tuple[]",
        },
        {
          name: "lp",
          type: "uint128",
        },
      ],
      name: "DepositLiquidity",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "sender",
          type: "address",
        },
        {
          name: "owner",
          type: "address",
        },
        {
          name: "lp",
          type: "uint128",
        },
        {
          components: [
            {
              name: "amount",
              type: "uint128",
            },
            {
              name: "root",
              type: "address",
            },
          ],
          name: "tokens",
          type: "tuple[]",
        },
      ],
      name: "WithdrawLiquidity",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "sender",
          type: "address",
        },
        {
          name: "recipient",
          type: "address",
        },
        {
          name: "spentTokenRoot",
          type: "address",
        },
        {
          name: "spentAmount",
          type: "uint128",
        },
        {
          name: "receiveTokenRoot",
          type: "address",
        },
        {
          name: "receiveAmount",
          type: "uint128",
        },
        {
          components: [
            {
              name: "feeTokenRoot",
              type: "address",
            },
            {
              name: "pool_fee",
              type: "uint128",
            },
            {
              name: "beneficiary_fee",
              type: "uint128",
            },
            {
              name: "beneficiary",
              type: "address",
            },
          ],
          name: "fees",
          type: "tuple[]",
        },
      ],
      name: "Exchange",
      outputs: [],
    },
    {
      inputs: [
        {
          components: [
            {
              name: "amount",
              type: "uint128",
            },
            {
              name: "root",
              type: "address",
            },
          ],
          name: "fees",
          type: "tuple[]",
        },
      ],
      name: "ReferrerFees",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "reserves",
          type: "uint128[]",
        },
        {
          name: "lp_supply",
          type: "uint128",
        },
      ],
      name: "Sync",
      outputs: [],
    },
  ],
  fields: [
    {
      name: "_pubkey",
      type: "uint256",
    },
    {
      name: "_timestamp",
      type: "uint64",
    },
    {
      name: "_constructorFlag",
      type: "bool",
    },
    {
      name: "platform_code",
      type: "cell",
    },
    {
      components: [
        {
          name: "price0To1Cumulative",
          type: "uint256",
        },
        {
          name: "price1To0Cumulative",
          type: "uint256",
        },
      ],
      name: "_points",
      type: "map(uint32,tuple)",
    },
    {
      name: "_length",
      type: "uint16",
    },
    {
      components: [
        {
          name: "minInterval",
          type: "uint8",
        },
        {
          name: "minRateDeltaNumerator",
          type: "uint128",
        },
        {
          name: "minRateDeltaDenominator",
          type: "uint128",
        },
        {
          name: "cardinality",
          type: "uint16",
        },
      ],
      name: "_options",
      type: "tuple",
    },
    {
      name: "_root",
      type: "address",
    },
    {
      name: "_vault",
      type: "address",
    },
    {
      name: "_active",
      type: "bool",
    },
    {
      name: "_currentVersion",
      type: "uint32",
    },
    {
      components: [
        {
          name: "denominator",
          type: "uint128",
        },
        {
          name: "pool_numerator",
          type: "uint128",
        },
        {
          name: "beneficiary_numerator",
          type: "uint128",
        },
        {
          name: "referrer_numerator",
          type: "uint128",
        },
        {
          name: "beneficiary",
          type: "address",
        },
        {
          name: "threshold",
          type: "map(address,uint128)",
        },
        {
          name: "referrer_threshold",
          type: "map(address,uint128)",
        },
      ],
      name: "_fee",
      type: "tuple",
    },
    {
      name: "_typeToRootAddresses",
      type: "map(uint8,address[])",
    },
    {
      name: "_typeToWalletAddresses",
      type: "map(uint8,address[])",
    },
    {
      name: "_typeToReserves",
      type: "map(uint8,uint128[])",
    },
  ],
  functions: [
    {
      inputs: [],
      name: "constructor",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "id",
          type: "uint64",
        },
        {
          name: "deploy_wallet_grams",
          type: "uint128",
        },
        {
          name: "expected_amount",
          type: "uint128",
        },
      ],
      name: "buildExchangePayload",
      outputs: [
        {
          name: "value0",
          type: "cell",
        },
      ],
    },
    {
      inputs: [
        {
          name: "_id",
          type: "uint64",
        },
        {
          name: "_deployWalletGrams",
          type: "uint128",
        },
        {
          name: "_expectedAmount",
          type: "uint128",
        },
        {
          name: "_recipient",
          type: "address",
        },
        {
          name: "_referrer",
          type: "address",
        },
        {
          name: "_successPayload",
          type: "optional(cell)",
        },
        {
          name: "_cancelPayload",
          type: "optional(cell)",
        },
        {
          name: "_toNative",
          type: "optional(bool)",
        },
      ],
      name: "buildExchangePayloadV2",
      outputs: [
        {
          name: "value0",
          type: "cell",
        },
      ],
    },
    {
      inputs: [
        {
          name: "id",
          type: "uint64",
        },
        {
          name: "deploy_wallet_grams",
          type: "uint128",
        },
      ],
      name: "buildDepositLiquidityPayload",
      outputs: [
        {
          name: "value0",
          type: "cell",
        },
      ],
    },
    {
      inputs: [
        {
          name: "_id",
          type: "uint64",
        },
        {
          name: "_deployWalletGrams",
          type: "uint128",
        },
        {
          name: "_expectedAmount",
          type: "uint128",
        },
        {
          name: "_recipient",
          type: "address",
        },
        {
          name: "_referrer",
          type: "address",
        },
        {
          name: "_successPayload",
          type: "optional(cell)",
        },
        {
          name: "_cancelPayload",
          type: "optional(cell)",
        },
      ],
      name: "buildDepositLiquidityPayloadV2",
      outputs: [
        {
          name: "value0",
          type: "cell",
        },
      ],
    },
    {
      inputs: [
        {
          name: "id",
          type: "uint64",
        },
        {
          name: "deploy_wallet_grams",
          type: "uint128",
        },
      ],
      name: "buildWithdrawLiquidityPayload",
      outputs: [
        {
          name: "value0",
          type: "cell",
        },
      ],
    },
    {
      inputs: [
        {
          name: "_id",
          type: "uint64",
        },
        {
          name: "_deployWalletGrams",
          type: "uint128",
        },
        {
          name: "_expectedLeftAmount",
          type: "uint128",
        },
        {
          name: "_expectedRightAmount",
          type: "uint128",
        },
        {
          name: "_recipient",
          type: "address",
        },
        {
          name: "_referrer",
          type: "address",
        },
        {
          name: "_successPayload",
          type: "optional(cell)",
        },
        {
          name: "_cancelPayload",
          type: "optional(cell)",
        },
        {
          name: "_toNative",
          type: "optional(bool)",
        },
      ],
      name: "buildWithdrawLiquidityPayloadV2",
      outputs: [
        {
          name: "value0",
          type: "cell",
        },
      ],
    },
    {
      inputs: [
        {
          name: "id",
          type: "uint64",
        },
        {
          name: "deploy_wallet_grams",
          type: "uint128",
        },
        {
          name: "expected_amount",
          type: "uint128",
        },
        {
          components: [
            {
              name: "amount",
              type: "uint128",
            },
            {
              name: "root",
              type: "address",
            },
          ],
          name: "steps",
          type: "tuple[]",
        },
      ],
      name: "buildCrossPairExchangePayload",
      outputs: [
        {
          name: "value0",
          type: "cell",
        },
      ],
    },
    {
      inputs: [
        {
          name: "_id",
          type: "uint64",
        },
        {
          name: "_deployWalletGrams",
          type: "uint128",
        },
        {
          name: "_expectedAmount",
          type: "uint128",
        },
        {
          name: "_outcoming",
          type: "address",
        },
        {
          name: "_nextStepIndices",
          type: "uint32[]",
        },
        {
          components: [
            {
              name: "amount",
              type: "uint128",
            },
            {
              name: "roots",
              type: "address[]",
            },
            {
              name: "outcoming",
              type: "address",
            },
            {
              name: "numerator",
              type: "uint128",
            },
            {
              name: "nextStepIndices",
              type: "uint32[]",
            },
          ],
          name: "_steps",
          type: "tuple[]",
        },
        {
          name: "_recipient",
          type: "address",
        },
        {
          name: "_referrer",
          type: "address",
        },
        {
          name: "_successPayload",
          type: "optional(cell)",
        },
        {
          name: "_cancelPayload",
          type: "optional(cell)",
        },
        {
          name: "_toNative",
          type: "optional(bool)",
        },
      ],
      name: "buildCrossPairExchangePayloadV2",
      outputs: [
        {
          name: "value0",
          type: "cell",
        },
      ],
    },
    {
      inputs: [
        {
          name: "answerId",
          type: "uint32",
        },
        {
          name: "left_amount",
          type: "uint128",
        },
        {
          name: "right_amount",
          type: "uint128",
        },
        {
          name: "auto_change",
          type: "bool",
        },
        {
          name: "referrer",
          type: "optional(address)",
        },
      ],
      name: "expectedDepositLiquidity",
      outputs: [
        {
          components: [
            {
              name: "step_1_left_deposit",
              type: "uint128",
            },
            {
              name: "step_1_right_deposit",
              type: "uint128",
            },
            {
              name: "step_1_lp_reward",
              type: "uint128",
            },
            {
              name: "step_2_left_to_right",
              type: "bool",
            },
            {
              name: "step_2_right_to_left",
              type: "bool",
            },
            {
              name: "step_2_spent",
              type: "uint128",
            },
            {
              name: "step_2_fee",
              type: "uint128",
            },
            {
              name: "step_2_received",
              type: "uint128",
            },
            {
              name: "step_3_left_deposit",
              type: "uint128",
            },
            {
              name: "step_3_right_deposit",
              type: "uint128",
            },
            {
              name: "step_3_lp_reward",
              type: "uint128",
            },
          ],
          name: "value0",
          type: "tuple",
        },
      ],
    },
    {
      inputs: [
        {
          name: "_callId",
          type: "uint64",
        },
        {
          components: [
            {
              name: "amount",
              type: "uint128",
            },
            {
              name: "root",
              type: "address",
            },
          ],
          name: "_operations",
          type: "tuple[]",
        },
        {
          components: [
            {
              name: "amount",
              type: "uint128",
            },
            {
              name: "root",
              type: "address",
            },
          ],
          name: "_expected",
          type: "tuple",
        },
        {
          name: "_autoChange",
          type: "bool",
        },
        {
          name: "_accountOwner",
          type: "address",
        },
        {
          name: "value5",
          type: "uint32",
        },
        {
          name: "_remainingGasTo",
          type: "address",
        },
        {
          name: "_referrer",
          type: "address",
        },
      ],
      name: "depositLiquidity",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "answerId",
          type: "uint32",
        },
        {
          name: "lp_amount",
          type: "uint128",
        },
      ],
      name: "expectedWithdrawLiquidity",
      outputs: [
        {
          name: "expected_left_amount",
          type: "uint128",
        },
        {
          name: "expected_right_amount",
          type: "uint128",
        },
      ],
    },
    {
      inputs: [
        {
          name: "_callId",
          type: "uint64",
        },
        {
          components: [
            {
              name: "amount",
              type: "uint128",
            },
            {
              name: "root",
              type: "address",
            },
          ],
          name: "_operation",
          type: "tuple",
        },
        {
          components: [
            {
              name: "amount",
              type: "uint128",
            },
            {
              name: "root",
              type: "address",
            },
          ],
          name: "_expected",
          type: "tuple[]",
        },
        {
          name: "_accountOwner",
          type: "address",
        },
        {
          name: "value4",
          type: "uint32",
        },
        {
          name: "_remainingGasTo",
          type: "address",
        },
      ],
      name: "withdrawLiquidity",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "answerId",
          type: "uint32",
        },
        {
          name: "amount",
          type: "uint128",
        },
        {
          name: "spent_token_root",
          type: "address",
        },
      ],
      name: "expectedExchange",
      outputs: [
        {
          name: "expected_amount",
          type: "uint128",
        },
        {
          name: "expected_fee",
          type: "uint128",
        },
      ],
    },
    {
      inputs: [
        {
          name: "answerId",
          type: "uint32",
        },
        {
          name: "receive_amount",
          type: "uint128",
        },
        {
          name: "receive_token_root",
          type: "address",
        },
      ],
      name: "expectedSpendAmount",
      outputs: [
        {
          name: "expected_amount",
          type: "uint128",
        },
        {
          name: "expected_fee",
          type: "uint128",
        },
      ],
    },
    {
      inputs: [
        {
          name: "_callId",
          type: "uint64",
        },
        {
          components: [
            {
              name: "amount",
              type: "uint128",
            },
            {
              name: "root",
              type: "address",
            },
          ],
          name: "_operation",
          type: "tuple",
        },
        {
          components: [
            {
              name: "amount",
              type: "uint128",
            },
            {
              name: "root",
              type: "address",
            },
          ],
          name: "_expected",
          type: "tuple",
        },
        {
          name: "_accountOwner",
          type: "address",
        },
        {
          name: "value4",
          type: "uint32",
        },
        {
          name: "_remainingGasTo",
          type: "address",
        },
      ],
      name: "exchange",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "_id",
          type: "uint64",
        },
        {
          name: "value1",
          type: "uint32",
        },
        {
          name: "value2",
          type: "uint8",
        },
        {
          name: "_prevPoolTokenRoots",
          type: "address[]",
        },
        {
          name: "_op",
          type: "uint8",
        },
        {
          name: "_spentTokenRoot",
          type: "address",
        },
        {
          name: "_spentAmount",
          type: "uint128",
        },
        {
          name: "_senderAddress",
          type: "address",
        },
        {
          name: "_recipient",
          type: "address",
        },
        {
          name: "_referrer",
          type: "address",
        },
        {
          name: "_toNative",
          type: "bool",
        },
        {
          name: "_remainingGasTo",
          type: "address",
        },
        {
          name: "_deployWalletGrams",
          type: "uint128",
        },
        {
          name: "_payload",
          type: "cell",
        },
        {
          name: "_notifySuccess",
          type: "bool",
        },
        {
          name: "_successPayload",
          type: "cell",
        },
        {
          name: "_notifyCancel",
          type: "bool",
        },
        {
          name: "_cancelPayload",
          type: "cell",
        },
      ],
      name: "crossPoolExchange",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "_tokenRoot",
          type: "address",
        },
        {
          name: "_tokensAmount",
          type: "uint128",
        },
        {
          name: "_senderAddress",
          type: "address",
        },
        {
          name: "_senderWallet",
          type: "address",
        },
        {
          name: "_remainingGasTo",
          type: "address",
        },
        {
          name: "_payload",
          type: "cell",
        },
      ],
      name: "onAcceptTokensTransfer",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "answerId",
          type: "uint32",
        },
      ],
      name: "getRoot",
      outputs: [
        {
          name: "dex_root",
          type: "address",
        },
      ],
    },
    {
      inputs: [
        {
          name: "answerId",
          type: "uint32",
        },
      ],
      name: "getTokenRoots",
      outputs: [
        {
          name: "left",
          type: "address",
        },
        {
          name: "right",
          type: "address",
        },
        {
          name: "lp",
          type: "address",
        },
      ],
    },
    {
      inputs: [
        {
          name: "answerId",
          type: "uint32",
        },
      ],
      name: "getTokenWallets",
      outputs: [
        {
          name: "left",
          type: "address",
        },
        {
          name: "right",
          type: "address",
        },
        {
          name: "lp",
          type: "address",
        },
      ],
    },
    {
      inputs: [
        {
          name: "answerId",
          type: "uint32",
        },
      ],
      name: "getVersion",
      outputs: [
        {
          name: "version",
          type: "uint32",
        },
      ],
    },
    {
      inputs: [
        {
          name: "answerId",
          type: "uint32",
        },
      ],
      name: "getVault",
      outputs: [
        {
          name: "value0",
          type: "address",
        },
      ],
    },
    {
      inputs: [
        {
          name: "answerId",
          type: "uint32",
        },
      ],
      name: "getPoolType",
      outputs: [
        {
          name: "value0",
          type: "uint8",
        },
      ],
    },
    {
      inputs: [
        {
          name: "answerId",
          type: "uint32",
        },
      ],
      name: "getFeeParams",
      outputs: [
        {
          components: [
            {
              name: "denominator",
              type: "uint128",
            },
            {
              name: "pool_numerator",
              type: "uint128",
            },
            {
              name: "beneficiary_numerator",
              type: "uint128",
            },
            {
              name: "referrer_numerator",
              type: "uint128",
            },
            {
              name: "beneficiary",
              type: "address",
            },
            {
              name: "threshold",
              type: "map(address,uint128)",
            },
            {
              name: "referrer_threshold",
              type: "map(address,uint128)",
            },
          ],
          name: "value0",
          type: "tuple",
        },
      ],
    },
    {
      inputs: [
        {
          name: "answerId",
          type: "uint32",
        },
      ],
      name: "getAccumulatedFees",
      outputs: [
        {
          name: "accumulatedFees",
          type: "uint128[]",
        },
      ],
    },
    {
      inputs: [
        {
          name: "answerId",
          type: "uint32",
        },
      ],
      name: "isActive",
      outputs: [
        {
          name: "value0",
          type: "bool",
        },
      ],
    },
    {
      inputs: [
        {
          name: "answerId",
          type: "uint32",
        },
      ],
      name: "getBalances",
      outputs: [
        {
          components: [
            {
              name: "lp_supply",
              type: "uint128",
            },
            {
              name: "left_balance",
              type: "uint128",
            },
            {
              name: "right_balance",
              type: "uint128",
            },
          ],
          name: "value0",
          type: "tuple",
        },
      ],
    },
    {
      inputs: [
        {
          components: [
            {
              name: "denominator",
              type: "uint128",
            },
            {
              name: "pool_numerator",
              type: "uint128",
            },
            {
              name: "beneficiary_numerator",
              type: "uint128",
            },
            {
              name: "referrer_numerator",
              type: "uint128",
            },
            {
              name: "beneficiary",
              type: "address",
            },
            {
              name: "threshold",
              type: "map(address,uint128)",
            },
            {
              name: "referrer_threshold",
              type: "map(address,uint128)",
            },
          ],
          name: "_params",
          type: "tuple",
        },
        {
          name: "_remainingGasTo",
          type: "address",
        },
      ],
      name: "setFeeParams",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "send_gas_to",
          type: "address",
        },
      ],
      name: "withdrawBeneficiaryFee",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "_accountOwner",
          type: "address",
        },
        {
          name: "value1",
          type: "uint32",
        },
      ],
      name: "checkPair",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "_code",
          type: "cell",
        },
        {
          name: "_newVersion",
          type: "uint32",
        },
        {
          name: "_newType",
          type: "uint8",
        },
        {
          name: "_remainingGasTo",
          type: "address",
        },
      ],
      name: "upgrade",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "_lpRootAddress",
          type: "address",
        },
        {
          name: "_remainingGasTo",
          type: "address",
        },
      ],
      name: "liquidityTokenRootDeployed",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "value0",
          type: "address",
        },
        {
          name: "_remainingGasTo",
          type: "address",
        },
      ],
      name: "liquidityTokenRootNotDeployed",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "_wallet",
          type: "address",
        },
      ],
      name: "onTokenWallet",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "_newActive",
          type: "bool",
        },
        {
          name: "_remainingGasTo",
          type: "address",
        },
      ],
      name: "setActive",
      outputs: [],
    },
    {
      inputs: [
        {
          components: [
            {
              name: "minInterval",
              type: "uint8",
            },
            {
              name: "minRateDeltaNumerator",
              type: "uint128",
            },
            {
              name: "minRateDeltaDenominator",
              type: "uint128",
            },
            {
              name: "cardinality",
              type: "uint16",
            },
          ],
          name: "_newOptions",
          type: "tuple",
        },
        {
          name: "_remainingGasTo",
          type: "address",
        },
      ],
      name: "setOracleOptions",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "answerId",
          type: "uint32",
        },
      ],
      name: "getOracleOptions",
      outputs: [
        {
          components: [
            {
              name: "minInterval",
              type: "uint8",
            },
            {
              name: "minRateDeltaNumerator",
              type: "uint128",
            },
            {
              name: "minRateDeltaDenominator",
              type: "uint128",
            },
            {
              name: "cardinality",
              type: "uint16",
            },
          ],
          name: "value0",
          type: "tuple",
        },
      ],
    },
    {
      inputs: [
        {
          name: "_count",
          type: "uint16",
        },
        {
          name: "_remainingGasTo",
          type: "address",
        },
      ],
      name: "removeLastNPoints",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "answerId",
          type: "uint32",
        },
        {
          name: "_timestamp",
          type: "uint32",
        },
      ],
      name: "getObservation",
      outputs: [
        {
          components: [
            {
              name: "timestamp",
              type: "uint32",
            },
            {
              name: "price0To1Cumulative",
              type: "uint256",
            },
            {
              name: "price1To0Cumulative",
              type: "uint256",
            },
          ],
          name: "value0",
          type: "optional(tuple)",
        },
      ],
    },
    {
      inputs: [
        {
          name: "_timestamp",
          type: "uint32",
        },
        {
          name: "_callbackTo",
          type: "address",
        },
        {
          name: "_payload",
          type: "cell",
        },
      ],
      name: "observation",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "answerId",
          type: "uint32",
        },
        {
          name: "_fromTimestamp",
          type: "uint32",
        },
        {
          name: "_toTimestamp",
          type: "uint32",
        },
      ],
      name: "getRate",
      outputs: [
        {
          components: [
            {
              name: "price0To1",
              type: "uint256",
            },
            {
              name: "price1To0",
              type: "uint256",
            },
            {
              name: "fromTimestamp",
              type: "uint32",
            },
            {
              name: "toTimestamp",
              type: "uint32",
            },
          ],
          name: "value0",
          type: "optional(tuple)",
        },
        {
          name: "value1",
          type: "uint128[]",
        },
      ],
    },
    {
      inputs: [
        {
          name: "_fromTimestamp",
          type: "uint32",
        },
        {
          name: "_toTimestamp",
          type: "uint32",
        },
        {
          name: "_callbackTo",
          type: "address",
        },
        {
          name: "_payload",
          type: "cell",
        },
      ],
      name: "rate",
      outputs: [],
    },
    {
      inputs: [
        {
          name: "answerId",
          type: "uint32",
        },
        {
          name: "_amount",
          type: "uint128",
        },
        {
          name: "_tokenRoot",
          type: "address",
        },
        {
          name: "_fromTimestamp",
          type: "uint32",
        },
        {
          name: "_toTimestamp",
          type: "uint32",
        },
      ],
      name: "getExpectedAmountByTWAP",
      outputs: [
        {
          name: "value0",
          type: "uint128",
        },
      ],
    },
    {
      inputs: [],
      name: "platform_code",
      outputs: [
        {
          name: "platform_code",
          type: "cell",
        },
      ],
    },
  ],
  header: ["pubkey", "time", "expire"],
  version: "2.2",
} as const;

export const PAIR_DATA = fs.readFileSync("PAIR_DATA.boc", "utf-8");
