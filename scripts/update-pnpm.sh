#!/bin/bash

set -eu

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)
GIT_ROOT=$(git -C "${SCRIPT_DIR}" rev-parse --show-toplevel)
cd "${GIT_ROOT}"

current_version=$(jq -r '.devEngines.packageManager.version' package.json)
latest_version=$(vp info pnpm version)

if [[ ${current_version} != "${latest_version}" ]]; then
  sed -i "s/${current_version}/${latest_version}/" package.json
else
  echo "Already up to date."
fi

vp install

git add package.json pnpm-lock.yaml
git commit -m 'update pnpm version'
