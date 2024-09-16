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
 */

import type { Contract } from "generated"
import { Ownable } from "generated"
import { type Address } from "viem"
import { zeroAddress } from "viem"

import { getOrCreateContract } from "../../actions/getOrCreateContract"
import { getOrCreateWallet } from "../../actions/getOrCreateWallet"

Ownable.OwnershipTransferred.handler(
  async ({ context, event }) => {
    const { block, params, srcAddress } = event
    const { newOwner, oldOwner } = params

    const { data: contract } = await getOrCreateContract({
      context,
      event,
      contract: srcAddress as Address,
      creator: oldOwner === zeroAddress ? (newOwner as Address) : undefined,
    })

    const updatedContract: Contract = {
      ...contract,
      owner_id: newOwner,
      updatedBlockNumber: block.number,
      updatedTimestamp: block.timestamp,
    }

    const { data: newOwnerWallet } = await getOrCreateWallet({
      address: newOwner as Address,
      context,
      event,
    })

    context.Wallet.set({
      ...newOwnerWallet,
      collectionsOwnedCount: newOwnerWallet.collectionsOwnedCount + 1,
      updatedTimestamp: block.timestamp,
    })

    const { data: oldOwnerWallet } = await getOrCreateWallet({
      address: oldOwner as Address,
      context,
      event,
    })

    context.Wallet.set({
      ...oldOwnerWallet,
      collectionsOwnedCount: oldOwnerWallet.collectionsOwnedCount - 1,
      updatedTimestamp: block.timestamp,
    })

    context.Contract.set(updatedContract)
  },
  {
    wildcard: true,
  },
)
