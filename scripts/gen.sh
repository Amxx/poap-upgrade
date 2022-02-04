#!/bin/bash

TEMPLATE=templates/PoapV2.sol
PATCH=templates/PoapV2.patch
TARGET=contracts/v0.8.x/PoapV2.sol

# generate new version
npx hardhat flatten $TEMPLATE > $TARGET

# needed because hardhat flatten doesn't remove duplicated Licences
sed -i '/SPDX-License-Identifier/d' $TARGET

# patch solidity
patch $TARGET $PATCH
