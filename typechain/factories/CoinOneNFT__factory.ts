/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CoinOneNFT, CoinOneNFTInterface } from "../CoinOneNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "allTokenOwners",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "issueToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620039ab380380620039ab833981810160405281019062000037919062000286565b828281600090805190602001906200005192919062000164565b5080600190805190602001906200006a92919062000164565b5050506200008d620000816200009660201b60201c565b6200009e60201b60201c565b50505062000497565b600033905090565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8280546200017290620003bc565b90600052602060002090601f016020900481019282620001965760008555620001e2565b82601f10620001b157805160ff1916838001178555620001e2565b82800160010185558215620001e2579182015b82811115620001e1578251825591602001919060010190620001c4565b5b509050620001f19190620001f5565b5090565b5b8082111562000210576000816000905550600101620001f6565b5090565b60006200022b620002258462000350565b62000327565b9050828152602081018484840111156200024457600080fd5b6200025184828562000386565b509392505050565b600082601f8301126200026b57600080fd5b81516200027d84826020860162000214565b91505092915050565b6000806000606084860312156200029c57600080fd5b600084015167ffffffffffffffff811115620002b757600080fd5b620002c58682870162000259565b935050602084015167ffffffffffffffff811115620002e357600080fd5b620002f18682870162000259565b925050604084015167ffffffffffffffff8111156200030f57600080fd5b6200031d8682870162000259565b9150509250925092565b60006200033362000346565b9050620003418282620003f2565b919050565b6000604051905090565b600067ffffffffffffffff8211156200036e576200036d62000457565b5b620003798262000486565b9050602081019050919050565b60005b83811015620003a657808201518184015260208101905062000389565b83811115620003b6576000848401525b50505050565b60006002820490506001821680620003d557607f821691505b60208210811415620003ec57620003eb62000428565b5b50919050565b620003fd8262000486565b810181811067ffffffffffffffff821117156200041f576200041e62000457565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61350480620004a76000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806370a08231116100b8578063a22cb4651161007c578063a22cb46514610362578063b88d4fde1461037e578063c87b56dd1461039a578063d079eb3e146103ca578063e985e9c5146103e8578063f2fde38b1461041857610137565b806370a08231146102bc578063715018a6146102ec57806389034082146102f65780638da5cb5b1461032657806395d89b411461034457610137565b806323b872dd116100ff57806323b872dd146101f45780632f745c591461021057806342842e0e146102405780634f6ccce71461025c5780636352211e1461028c57610137565b806301ffc9a71461013c57806306fdde031461016c578063081812fc1461018a578063095ea7b3146101ba57806318160ddd146101d6575b600080fd5b61015660048036038101906101519190612404565b610434565b60405161016391906128f7565b60405180910390f35b6101746104ae565b6040516101819190612912565b60405180910390f35b6101a4600480360381019061019f9190612456565b610540565b6040516101b1919061286e565b60405180910390f35b6101d460048036038101906101cf91906123c8565b6105c5565b005b6101de6106dd565b6040516101eb9190612b74565b60405180910390f35b61020e600480360381019061020991906122c2565b6106ea565b005b61022a600480360381019061022591906123c8565b61074a565b6040516102379190612b74565b60405180910390f35b61025a600480360381019061025591906122c2565b6107ef565b005b61027660048036038101906102719190612456565b61080f565b6040516102839190612b74565b60405180910390f35b6102a660048036038101906102a19190612456565b6108a6565b6040516102b3919061286e565b60405180910390f35b6102d660048036038101906102d1919061225d565b610958565b6040516102e39190612b74565b60405180910390f35b6102f4610a10565b005b610310600480360381019061030b919061225d565b610a98565b60405161031d9190612b74565b60405180910390f35b61032e610ac5565b60405161033b919061286e565b60405180910390f35b61034c610aef565b6040516103599190612912565b60405180910390f35b61037c6004803603810190610377919061238c565b610b81565b005b61039860048036038101906103939190612311565b610d02565b005b6103b460048036038101906103af9190612456565b610d64565b6040516103c19190612912565b60405180910390f35b6103d2610e0b565b6040516103df91906128d5565b60405180910390f35b61040260048036038101906103fd9190612286565b610f3a565b60405161040f91906128f7565b60405180910390f35b610432600480360381019061042d919061225d565b610fce565b005b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104a757506104a6826110c6565b5b9050919050565b6060600080546104bd90612dd2565b80601f01602080910402602001604051908101604052809291908181526020018280546104e990612dd2565b80156105365780601f1061050b57610100808354040283529160200191610536565b820191906000526020600020905b81548152906001019060200180831161051957829003601f168201915b5050505050905090565b600061054b826111a8565b61058a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058190612a94565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105d0826108a6565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610641576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063890612b14565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610660611214565b73ffffffffffffffffffffffffffffffffffffffff16148061068f575061068e81610689611214565b610f3a565b5b6106ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c590612a14565b60405180910390fd5b6106d8838361121c565b505050565b6000600880549050905090565b6106fb6106f5611214565b826112d5565b61073a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073190612b34565b60405180910390fd5b6107458383836113b3565b505050565b600061075583610958565b8210610796576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078d90612934565b60405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b61080a83838360405180602001604052806000815250610d02565b505050565b60006108196106dd565b821061085a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085190612b54565b60405180910390fd5b60088281548110610894577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561094f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094690612a54565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109c090612a34565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610a18611214565b73ffffffffffffffffffffffffffffffffffffffff16610a36610ac5565b73ffffffffffffffffffffffffffffffffffffffff1614610a8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8390612ab4565b60405180910390fd5b610a96600061160f565b565b6000610aa4600b6116d5565b6000610ab0600b6116eb565b9050610abc83826116f9565b80915050919050565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610afe90612dd2565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2a90612dd2565b8015610b775780601f10610b4c57610100808354040283529160200191610b77565b820191906000526020600020905b815481529060010190602001808311610b5a57829003601f168201915b5050505050905090565b610b89611214565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610bf7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bee906129d4565b60405180910390fd5b8060056000610c04611214565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610cb1611214565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610cf691906128f7565b60405180910390a35050565b610d13610d0d611214565b836112d5565b610d52576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4990612b34565b60405180910390fd5b610d5e848484846118c7565b50505050565b6060610d6f826111a8565b610dae576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610da590612af4565b60405180910390fd5b6000610db8611923565b90506000815111610dd85760405180602001604052806000815250610e03565b80610de28461193a565b604051602001610df392919061284a565b6040516020818303038152906040525b915050919050565b60606000610e176106dd565b67ffffffffffffffff811115610e56577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610e845781602001602082028036833780820191505090505b50905060005b610e926106dd565b811015610f3257610eae600182610ea99190612c61565b6108a6565b828281518110610ee7577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505080610f2b90612e35565b9050610e8a565b508091505090565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610fd6611214565b73ffffffffffffffffffffffffffffffffffffffff16610ff4610ac5565b73ffffffffffffffffffffffffffffffffffffffff161461104a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104190612ab4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156110ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b190612974565b60405180910390fd5b6110c38161160f565b50565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061119157507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806111a157506111a082611ae7565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661128f836108a6565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006112e0826111a8565b61131f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611316906129f4565b60405180910390fd5b600061132a836108a6565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061139957508373ffffffffffffffffffffffffffffffffffffffff1661138184610540565b73ffffffffffffffffffffffffffffffffffffffff16145b806113aa57506113a98185610f3a565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166113d3826108a6565b73ffffffffffffffffffffffffffffffffffffffff1614611429576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161142090612ad4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611499576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611490906129b4565b60405180910390fd5b6114a4838383611b51565b6114af60008261121c565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114ff9190612ce8565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115569190612c61565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611769576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161176090612a74565b60405180910390fd5b611772816111a8565b156117b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117a990612994565b60405180910390fd5b6117be60008383611b51565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461180e9190612c61565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6118d28484846113b3565b6118de84848484611c65565b61191d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161191490612954565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611982576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611ae2565b600082905060005b600082146119b457808061199d90612e35565b915050600a826119ad9190612cb7565b915061198a565b60008167ffffffffffffffff8111156119f6577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611a285781602001600182028036833780820191505090505b5090505b60008514611adb57600182611a419190612ce8565b9150600a85611a509190612e7e565b6030611a5c9190612c61565b60f81b818381518110611a98577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611ad49190612cb7565b9450611a2c565b8093505050505b919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b611b5c838383611dfc565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611b9f57611b9a81611e01565b611bde565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611bdd57611bdc8382611e4a565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611c2157611c1c81611fb7565b611c60565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614611c5f57611c5e82826120fa565b5b5b505050565b6000611c868473ffffffffffffffffffffffffffffffffffffffff16612179565b15611def578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611caf611214565b8786866040518563ffffffff1660e01b8152600401611cd19493929190612889565b602060405180830381600087803b158015611ceb57600080fd5b505af1925050508015611d1c57506040513d601f19601f82011682018060405250810190611d19919061242d565b60015b611d9f573d8060008114611d4c576040519150601f19603f3d011682016040523d82523d6000602084013e611d51565b606091505b50600081511415611d97576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611d8e90612954565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611df4565b600190505b949350505050565b505050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505060019003906000526020600020016000909190919091505550565b60006001611e5784610958565b611e619190612ce8565b9050600060076000848152602001908152602001600020549050818114611f46576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816007600083815260200190815260200160002081905550505b6007600084815260200190815260200160002060009055600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b60006001600880549050611fcb9190612ce8565b9050600060096000848152602001908152602001600020549050600060088381548110612021577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020015490508060088381548110612069577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200181905550816009600083815260200190815260200160002081905550600960008581526020019081526020016000206000905560088054806120de577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b600061210583610958565b905081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806007600084815260200190815260200160002081905550505050565b600080823b905060008111915050919050565b600061219f61219a84612bb4565b612b8f565b9050828152602081018484840111156121b757600080fd5b6121c2848285612d90565b509392505050565b6000813590506121d981613472565b92915050565b6000813590506121ee81613489565b92915050565b600081359050612203816134a0565b92915050565b600081519050612218816134a0565b92915050565b600082601f83011261222f57600080fd5b813561223f84826020860161218c565b91505092915050565b600081359050612257816134b7565b92915050565b60006020828403121561226f57600080fd5b600061227d848285016121ca565b91505092915050565b6000806040838503121561229957600080fd5b60006122a7858286016121ca565b92505060206122b8858286016121ca565b9150509250929050565b6000806000606084860312156122d757600080fd5b60006122e5868287016121ca565b93505060206122f6868287016121ca565b925050604061230786828701612248565b9150509250925092565b6000806000806080858703121561232757600080fd5b6000612335878288016121ca565b9450506020612346878288016121ca565b935050604061235787828801612248565b925050606085013567ffffffffffffffff81111561237457600080fd5b6123808782880161221e565b91505092959194509250565b6000806040838503121561239f57600080fd5b60006123ad858286016121ca565b92505060206123be858286016121df565b9150509250929050565b600080604083850312156123db57600080fd5b60006123e9858286016121ca565b92505060206123fa85828601612248565b9150509250929050565b60006020828403121561241657600080fd5b6000612424848285016121f4565b91505092915050565b60006020828403121561243f57600080fd5b600061244d84828501612209565b91505092915050565b60006020828403121561246857600080fd5b600061247684828501612248565b91505092915050565b600061248b8383612497565b60208301905092915050565b6124a081612d1c565b82525050565b6124af81612d1c565b82525050565b60006124c082612bf5565b6124ca8185612c23565b93506124d583612be5565b8060005b838110156125065781516124ed888261247f565b97506124f883612c16565b9250506001810190506124d9565b5085935050505092915050565b61251c81612d2e565b82525050565b600061252d82612c00565b6125378185612c34565b9350612547818560208601612d9f565b61255081612f6b565b840191505092915050565b600061256682612c0b565b6125708185612c45565b9350612580818560208601612d9f565b61258981612f6b565b840191505092915050565b600061259f82612c0b565b6125a98185612c56565b93506125b9818560208601612d9f565b80840191505092915050565b60006125d2602b83612c45565b91506125dd82612f7c565b604082019050919050565b60006125f5603283612c45565b915061260082612fcb565b604082019050919050565b6000612618602683612c45565b91506126238261301a565b604082019050919050565b600061263b601c83612c45565b915061264682613069565b602082019050919050565b600061265e602483612c45565b915061266982613092565b604082019050919050565b6000612681601983612c45565b915061268c826130e1565b602082019050919050565b60006126a4602c83612c45565b91506126af8261310a565b604082019050919050565b60006126c7603883612c45565b91506126d282613159565b604082019050919050565b60006126ea602a83612c45565b91506126f5826131a8565b604082019050919050565b600061270d602983612c45565b9150612718826131f7565b604082019050919050565b6000612730602083612c45565b915061273b82613246565b602082019050919050565b6000612753602c83612c45565b915061275e8261326f565b604082019050919050565b6000612776602083612c45565b9150612781826132be565b602082019050919050565b6000612799602983612c45565b91506127a4826132e7565b604082019050919050565b60006127bc602f83612c45565b91506127c782613336565b604082019050919050565b60006127df602183612c45565b91506127ea82613385565b604082019050919050565b6000612802603183612c45565b915061280d826133d4565b604082019050919050565b6000612825602c83612c45565b915061283082613423565b604082019050919050565b61284481612d86565b82525050565b60006128568285612594565b91506128628284612594565b91508190509392505050565b600060208201905061288360008301846124a6565b92915050565b600060808201905061289e60008301876124a6565b6128ab60208301866124a6565b6128b8604083018561283b565b81810360608301526128ca8184612522565b905095945050505050565b600060208201905081810360008301526128ef81846124b5565b905092915050565b600060208201905061290c6000830184612513565b92915050565b6000602082019050818103600083015261292c818461255b565b905092915050565b6000602082019050818103600083015261294d816125c5565b9050919050565b6000602082019050818103600083015261296d816125e8565b9050919050565b6000602082019050818103600083015261298d8161260b565b9050919050565b600060208201905081810360008301526129ad8161262e565b9050919050565b600060208201905081810360008301526129cd81612651565b9050919050565b600060208201905081810360008301526129ed81612674565b9050919050565b60006020820190508181036000830152612a0d81612697565b9050919050565b60006020820190508181036000830152612a2d816126ba565b9050919050565b60006020820190508181036000830152612a4d816126dd565b9050919050565b60006020820190508181036000830152612a6d81612700565b9050919050565b60006020820190508181036000830152612a8d81612723565b9050919050565b60006020820190508181036000830152612aad81612746565b9050919050565b60006020820190508181036000830152612acd81612769565b9050919050565b60006020820190508181036000830152612aed8161278c565b9050919050565b60006020820190508181036000830152612b0d816127af565b9050919050565b60006020820190508181036000830152612b2d816127d2565b9050919050565b60006020820190508181036000830152612b4d816127f5565b9050919050565b60006020820190508181036000830152612b6d81612818565b9050919050565b6000602082019050612b89600083018461283b565b92915050565b6000612b99612baa565b9050612ba58282612e04565b919050565b6000604051905090565b600067ffffffffffffffff821115612bcf57612bce612f3c565b5b612bd882612f6b565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000612c6c82612d86565b9150612c7783612d86565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612cac57612cab612eaf565b5b828201905092915050565b6000612cc282612d86565b9150612ccd83612d86565b925082612cdd57612cdc612ede565b5b828204905092915050565b6000612cf382612d86565b9150612cfe83612d86565b925082821015612d1157612d10612eaf565b5b828203905092915050565b6000612d2782612d66565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612dbd578082015181840152602081019050612da2565b83811115612dcc576000848401525b50505050565b60006002820490506001821680612dea57607f821691505b60208210811415612dfe57612dfd612f0d565b5b50919050565b612e0d82612f6b565b810181811067ffffffffffffffff82111715612e2c57612e2b612f3c565b5b80604052505050565b6000612e4082612d86565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612e7357612e72612eaf565b5b600182019050919050565b6000612e8982612d86565b9150612e9483612d86565b925082612ea457612ea3612ede565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008201527f74206f6620626f756e6473000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b7f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008201527f7574206f6620626f756e64730000000000000000000000000000000000000000602082015250565b61347b81612d1c565b811461348657600080fd5b50565b61349281612d2e565b811461349d57600080fd5b50565b6134a981612d3a565b81146134b457600080fd5b50565b6134c081612d86565b81146134cb57600080fd5b5056fea264697066735822122095d3cb0bf451339ed8bd42c04350ed1137cf774426f5566392243a1acd0a1aff64736f6c63430008040033";

export class CoinOneNFT__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    _baseURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CoinOneNFT> {
    return super.deploy(
      name,
      symbol,
      _baseURI,
      overrides || {}
    ) as Promise<CoinOneNFT>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    _baseURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, _baseURI, overrides || {});
  }
  attach(address: string): CoinOneNFT {
    return super.attach(address) as CoinOneNFT;
  }
  connect(signer: Signer): CoinOneNFT__factory {
    return super.connect(signer) as CoinOneNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoinOneNFTInterface {
    return new utils.Interface(_abi) as CoinOneNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoinOneNFT {
    return new Contract(address, _abi, signerOrProvider) as CoinOneNFT;
  }
}
