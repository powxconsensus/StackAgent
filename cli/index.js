#!/usr/bin/env node

const yargs = require("yargs");

const { mainnet, testnet } = require("../sdk/index");
const {
  BlockByHeight,
  BlockByHash,
  RecentBlock,
} = require("./../sdk/block.event");

const { RecentTransaction } = require("./../sdk/transaction.event");

let options = yargs
  .usage(
    "Usage: -n <network> -b <block> -h <height> -l <limit> -o <offset> -r <hash>"
  )
  .usage("Usage: -n <network> -t <block> -l <limit> -o <offset> -ty <type>")
  .option("n", {
    alias: "network",
    describe: "testnet or mainnet or mocknet",
    type: "string",
    demandOption: true,
  })
  .option("ty", {
    alias: "type",
    describe:
      "Items Enum: 'coinbase' 'token_transfer' 'smart_contract' 'contract_call' 'poison_microblock'",
    type: "string",
  })
  .option("l", {
    alias: "limit",
    describe: "max number of blocks to fetch",
    type: "number",
  })
  .option("o", {
    alias: "offset",
    describe: "index of first block to fetch",
    type: "number",
  })
  .option("h", {
    alias: "height",
    describe: "block height",
    type: "number",
  })
  .option("r", {
    alias: "hash",
    describe: "block hash",
    type: "string",
  }).argv;

(async () => {
  const { b, block, t, transaction } = options;
  // block
  if (b || block) {
    const { network, height, hash, limit, offset } = options;
    if (height) {
      const res = await BlockByHeight(
        network == "mainnet"
          ? mainnet
          : network == "testnet"
          ? testnet
          : network,
        height
      );
      if (res) console.log(res);
    } else if (hash) {
      const res = await BlockByHash(
        network == "mainnet"
          ? mainnet
          : network == "testnet"
          ? testnet
          : network,
        hash
      );
      if (res) console.log(res);
    } else {
      const res = await RecentBlock(
        network == "mainnet"
          ? mainnet
          : network == "testnet"
          ? testnet
          : network,
        limit,
        offset
      );
      if (res) console.log(res);
    }
    return;
  }

  if (t || transaction) {
    console.log("transactions");
    const { network, limit, offset, type } = options;
    const res = await RecentTransaction(
      network == "mainnet" ? mainnet : network == "testnet" ? testnet : network,
      limit,
      offset,
      type
    );
    console.log(res);
  }
})();
