/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721, ERC721Interface } from "../ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002785380380620027858339818101604052810190620000379190620002be565b81600090805190602001906200004f92919062000071565b5080600190805190602001906200006892919062000071565b505050620003a8565b8280546200007f9062000372565b90600052602060002090601f016020900481019282620000a35760008555620000ef565b82601f10620000be57805160ff1916838001178555620000ef565b82800160010185558215620000ef579182015b82811115620000ee578251825591602001919060010190620000d1565b5b509050620000fe919062000102565b5090565b5b808211156200011d57600081600090555060010162000103565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200018a826200013f565b810181811067ffffffffffffffff82111715620001ac57620001ab62000150565b5b80604052505050565b6000620001c162000121565b9050620001cf82826200017f565b919050565b600067ffffffffffffffff821115620001f257620001f162000150565b5b620001fd826200013f565b9050602081019050919050565b60005b838110156200022a5780820151818401526020810190506200020d565b838111156200023a576000848401525b50505050565b6000620002576200025184620001d4565b620001b5565b9050828152602081018484840111156200027657620002756200013a565b5b620002838482856200020a565b509392505050565b600082601f830112620002a357620002a262000135565b5b8151620002b584826020860162000240565b91505092915050565b60008060408385031215620002d857620002d76200012b565b5b600083015167ffffffffffffffff811115620002f957620002f862000130565b5b62000307858286016200028b565b925050602083015167ffffffffffffffff8111156200032b576200032a62000130565b5b62000339858286016200028b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200038b57607f821691505b60208210811415620003a257620003a162000343565b5b50919050565b6123cd80620003b86000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610234578063b88d4fde14610250578063c87b56dd1461026c578063e985e9c51461029c576100df565b80636352211e146101b657806370a08231146101e657806395d89b4114610216576100df565b8063095ea7b3116100bd578063095ea7b31461016257806323b872dd1461017e57806342842e0e1461019a576100df565b806301ffc9a7146100e457806306fdde0314610114578063081812fc14610132575b600080fd5b6100fe60048036038101906100f99190611428565b6102cc565b60405161010b9190611470565b60405180910390f35b61011c6103ae565b6040516101299190611524565b60405180910390f35b61014c6004803603810190610147919061157c565b610440565b60405161015991906115ea565b60405180910390f35b61017c60048036038101906101779190611631565b6104c5565b005b61019860048036038101906101939190611671565b6105dd565b005b6101b460048036038101906101af9190611671565b61063d565b005b6101d060048036038101906101cb919061157c565b61065d565b6040516101dd91906115ea565b60405180910390f35b61020060048036038101906101fb91906116c4565b61070f565b60405161020d9190611700565b60405180910390f35b61021e6107c7565b60405161022b9190611524565b60405180910390f35b61024e60048036038101906102499190611747565b610859565b005b61026a600480360381019061026591906118bc565b6109da565b005b6102866004803603810190610281919061157c565b610a3c565b6040516102939190611524565b60405180910390f35b6102b660048036038101906102b1919061193f565b610ae3565b6040516102c39190611470565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061039757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103a757506103a682610b77565b5b9050919050565b6060600080546103bd906119ae565b80601f01602080910402602001604051908101604052809291908181526020018280546103e9906119ae565b80156104365780601f1061040b57610100808354040283529160200191610436565b820191906000526020600020905b81548152906001019060200180831161041957829003601f168201915b5050505050905090565b600061044b82610be1565b61048a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048190611a52565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104d08261065d565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610541576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053890611ae4565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610560610c4d565b73ffffffffffffffffffffffffffffffffffffffff16148061058f575061058e81610589610c4d565b610ae3565b5b6105ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c590611b76565b60405180910390fd5b6105d88383610c55565b505050565b6105ee6105e8610c4d565b82610d0e565b61062d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062490611c08565b60405180910390fd5b610638838383610dec565b505050565b610658838383604051806020016040528060008152506109da565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610706576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106fd90611c9a565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610780576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077790611d2c565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600180546107d6906119ae565b80601f0160208091040260200160405190810160405280929190818152602001828054610802906119ae565b801561084f5780601f106108245761010080835404028352916020019161084f565b820191906000526020600020905b81548152906001019060200180831161083257829003601f168201915b5050505050905090565b610861610c4d565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c690611d98565b60405180910390fd5b80600560006108dc610c4d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610989610c4d565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516109ce9190611470565b60405180910390a35050565b6109eb6109e5610c4d565b83610d0e565b610a2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2190611c08565b60405180910390fd5b610a3684848484611048565b50505050565b6060610a4782610be1565b610a86576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7d90611e2a565b60405180910390fd5b6000610a906110a4565b90506000815111610ab05760405180602001604052806000815250610adb565b80610aba846110bb565b604051602001610acb929190611e86565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610cc88361065d565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610d1982610be1565b610d58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d4f90611f1c565b60405180910390fd5b6000610d638361065d565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610dd257508373ffffffffffffffffffffffffffffffffffffffff16610dba84610440565b73ffffffffffffffffffffffffffffffffffffffff16145b80610de35750610de28185610ae3565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610e0c8261065d565b73ffffffffffffffffffffffffffffffffffffffff1614610e62576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5990611fae565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ed2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ec990612040565b60405180910390fd5b610edd83838361121c565b610ee8600082610c55565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f38919061208f565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f8f91906120c3565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b611053848484610dec565b61105f84848484611221565b61109e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110959061218b565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611103576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611217565b600082905060005b6000821461113557808061111e906121ab565b915050600a8261112e9190612223565b915061110b565b60008167ffffffffffffffff81111561115157611150611791565b5b6040519080825280601f01601f1916602001820160405280156111835781602001600182028036833780820191505090505b5090505b600085146112105760018261119c919061208f565b9150600a856111ab9190612254565b60306111b791906120c3565b60f81b8183815181106111cd576111cc612285565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856112099190612223565b9450611187565b8093505050505b919050565b505050565b60006112428473ffffffffffffffffffffffffffffffffffffffff166113a9565b1561139c578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261126b610c4d565b8786866040518563ffffffff1660e01b815260040161128d9493929190612309565b6020604051808303816000875af19250505080156112c957506040513d601f19601f820116820180604052508101906112c6919061236a565b60015b61134c573d80600081146112f9576040519150601f19603f3d011682016040523d82523d6000602084013e6112fe565b606091505b50600081511415611344576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133b9061218b565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506113a1565b600190505b949350505050565b600080823b905060008111915050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611405816113d0565b811461141057600080fd5b50565b600081359050611422816113fc565b92915050565b60006020828403121561143e5761143d6113c6565b5b600061144c84828501611413565b91505092915050565b60008115159050919050565b61146a81611455565b82525050565b60006020820190506114856000830184611461565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156114c55780820151818401526020810190506114aa565b838111156114d4576000848401525b50505050565b6000601f19601f8301169050919050565b60006114f68261148b565b6115008185611496565b93506115108185602086016114a7565b611519816114da565b840191505092915050565b6000602082019050818103600083015261153e81846114eb565b905092915050565b6000819050919050565b61155981611546565b811461156457600080fd5b50565b60008135905061157681611550565b92915050565b600060208284031215611592576115916113c6565b5b60006115a084828501611567565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006115d4826115a9565b9050919050565b6115e4816115c9565b82525050565b60006020820190506115ff60008301846115db565b92915050565b61160e816115c9565b811461161957600080fd5b50565b60008135905061162b81611605565b92915050565b60008060408385031215611648576116476113c6565b5b60006116568582860161161c565b925050602061166785828601611567565b9150509250929050565b60008060006060848603121561168a576116896113c6565b5b60006116988682870161161c565b93505060206116a98682870161161c565b92505060406116ba86828701611567565b9150509250925092565b6000602082840312156116da576116d96113c6565b5b60006116e88482850161161c565b91505092915050565b6116fa81611546565b82525050565b600060208201905061171560008301846116f1565b92915050565b61172481611455565b811461172f57600080fd5b50565b6000813590506117418161171b565b92915050565b6000806040838503121561175e5761175d6113c6565b5b600061176c8582860161161c565b925050602061177d85828601611732565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6117c9826114da565b810181811067ffffffffffffffff821117156117e8576117e7611791565b5b80604052505050565b60006117fb6113bc565b905061180782826117c0565b919050565b600067ffffffffffffffff82111561182757611826611791565b5b611830826114da565b9050602081019050919050565b82818337600083830152505050565b600061185f61185a8461180c565b6117f1565b90508281526020810184848401111561187b5761187a61178c565b5b61188684828561183d565b509392505050565b600082601f8301126118a3576118a2611787565b5b81356118b384826020860161184c565b91505092915050565b600080600080608085870312156118d6576118d56113c6565b5b60006118e48782880161161c565b94505060206118f58782880161161c565b935050604061190687828801611567565b925050606085013567ffffffffffffffff811115611927576119266113cb565b5b6119338782880161188e565b91505092959194509250565b60008060408385031215611956576119556113c6565b5b60006119648582860161161c565b92505060206119758582860161161c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806119c657607f821691505b602082108114156119da576119d961197f565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000611a3c602c83611496565b9150611a47826119e0565b604082019050919050565b60006020820190508181036000830152611a6b81611a2f565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611ace602183611496565b9150611ad982611a72565b604082019050919050565b60006020820190508181036000830152611afd81611ac1565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b6000611b60603883611496565b9150611b6b82611b04565b604082019050919050565b60006020820190508181036000830152611b8f81611b53565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b6000611bf2603183611496565b9150611bfd82611b96565b604082019050919050565b60006020820190508181036000830152611c2181611be5565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b6000611c84602983611496565b9150611c8f82611c28565b604082019050919050565b60006020820190508181036000830152611cb381611c77565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b6000611d16602a83611496565b9150611d2182611cba565b604082019050919050565b60006020820190508181036000830152611d4581611d09565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000611d82601983611496565b9150611d8d82611d4c565b602082019050919050565b60006020820190508181036000830152611db181611d75565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b6000611e14602f83611496565b9150611e1f82611db8565b604082019050919050565b60006020820190508181036000830152611e4381611e07565b9050919050565b600081905092915050565b6000611e608261148b565b611e6a8185611e4a565b9350611e7a8185602086016114a7565b80840191505092915050565b6000611e928285611e55565b9150611e9e8284611e55565b91508190509392505050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000611f06602c83611496565b9150611f1182611eaa565b604082019050919050565b60006020820190508181036000830152611f3581611ef9565b9050919050565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b6000611f98602983611496565b9150611fa382611f3c565b604082019050919050565b60006020820190508181036000830152611fc781611f8b565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061202a602483611496565b915061203582611fce565b604082019050919050565b600060208201905081810360008301526120598161201d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061209a82611546565b91506120a583611546565b9250828210156120b8576120b7612060565b5b828203905092915050565b60006120ce82611546565b91506120d983611546565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561210e5761210d612060565b5b828201905092915050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612175603283611496565b915061218082612119565b604082019050919050565b600060208201905081810360008301526121a481612168565b9050919050565b60006121b682611546565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156121e9576121e8612060565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061222e82611546565b915061223983611546565b925082612249576122486121f4565b5b828204905092915050565b600061225f82611546565b915061226a83611546565b92508261227a576122796121f4565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b60006122db826122b4565b6122e581856122bf565b93506122f58185602086016114a7565b6122fe816114da565b840191505092915050565b600060808201905061231e60008301876115db565b61232b60208301866115db565b61233860408301856116f1565b818103606083015261234a81846122d0565b905095945050505050565b600081519050612364816113fc565b92915050565b6000602082840312156123805761237f6113c6565b5b600061238e84828501612355565b9150509291505056fea26469706673582212206de9c4c2e472f5cf269264296e5796554cd2c962d16b73f74a2eadb0ce90eebb64736f6c634300080a0033";

export class ERC721__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
