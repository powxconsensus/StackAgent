<h1>Stack Agent</h1>
Stack Agent is a bot that scans all transactions and states changes on a block-by-block basis for threats and abnormalities. When a problem is found, scan nodes provide notifications to subscribers, allowing them to take appropriate action.
A Detection Bot examines all network transactions and blocks, applies custom logic, and sends information to users through Alerts.

We built an SDK on top of the Hiro API so that customers may utilize this package without having to hardcode it into their code. It is still in progress.

<h3>StackAgent CLI</h3>

```bash
Usage: -n <network> -b <block> -h <height> -l <limit> -o <offset> -r <hash>
Usage: -n <network> -t <block> -l <limit> -o <offset> -ty <type>

Options:
--help Show help [boolean]
--version Show version number [boolean]
-n, --network testnet or mainnet or mocknet [string] [required]
--ty, --type Items Enum: 'coinbase' 'token_transfer' 'smart_contract'
'contract_call' 'poison_microblock' [string]
-l, --limit max number of blocks to fetch [number]
-o, --offset index of first block to fetch [number]
-h, --height block height [number]
-r, --hash block hash [string]

```
