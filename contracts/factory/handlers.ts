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

import { Factory } from "generated"

Factory.CollectionCreated.contractRegister(({ context, event }) => {
  const { params } = event
  const { collection_ } = params

  context.addNftCollection(collection_)
})
