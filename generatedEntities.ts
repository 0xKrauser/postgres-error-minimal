/* 
* SPDX-License-Identifier: LicenseRef-AllRightsReserved
*
* License-Url: https://github.com/beramarket/torchbearer/LICENSES/LicenseRef-AllRightsReserved.txt
*
* SPDX-FileType: SOURCE
*
* SPDX-FileCopyrightText: 2024 Johannes Krauser III <detroitmetalcrypto@gmail.com>
*
* SPDX-FileContributor: Johannes Krauser III <detroitmetalcrypto@gmail.com>

* This file is generated by generateSchemaTypes.ts. Do not modify it manually.
*/

/* eslint-disable typescript-sort-keys/interface */
type Contract = {
  id: string
  chainId: number
  address: string
  wallet_id: string
  creator_id: string | undefined
  owner_id: string | undefined
  paused: boolean | undefined
  createdBlockNumber: number | undefined
  createdTimestamp: number | undefined
  encounteredBlockNumber: number | undefined
  encounteredTimestamp: number | undefined
  updatedBlockNumber: number
  updatedTimestamp: number
}

export const INITIAL_CONTRACT: Contract = {
  id: "",
  chainId: 0,
  address: "",
  wallet_id: "",
  creator_id: undefined,
  owner_id: undefined,
  paused: undefined,
  createdBlockNumber: undefined,
  createdTimestamp: undefined,
  encounteredBlockNumber: undefined,
  encounteredTimestamp: undefined,
  updatedBlockNumber: 0,
  updatedTimestamp: 0,
} satisfies Contract

type Wallet = {
  id: string
  contract_id: string | undefined
  collectionsOwnedCount: number
  encounteredTimestamp: number
  updatedTimestamp: number
}

export const INITIAL_WALLET: Wallet = {
  id: "",
  contract_id: undefined,
  collectionsOwnedCount: 0,
  encounteredTimestamp: 0,
  updatedTimestamp: 0,
} satisfies Wallet
