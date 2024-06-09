+++
title = 'Safe Scripts (Strict Mode)'
date = 2024-06-09T12:12:05+00:00
toc = false
summary = false
draft = true
+++

## Overview

These options can be set inside a bash script to make it safer or increase
strictness. They can also be set on-the-fly by calling bash with the
corresponding flags, i.e. `bash -eu <script_path>`.

```bash
set -eu
```

```bash
set -euo pipefail
```

```bash
set -Eeuo pipefail
```

## Explanation

<!--TODO: add explanation-->

## Bonus

The `-x` option can be used to print the commands executed by the script. This
is useful for debugging.

## Sources

<https://bash-prompt.net/guides/bash-set-options/>\
<https://betterdev.blog/minimal-safe-bash-script-template/>\
<https://gist.github.com/mohanpedala/1e2ff5661761d3abd0385e8223e16425>\
<https://gist.github.com/theofidry/d6a4c1f5c7a4b3a13ffd6b9cf5f70acd>\
<https://sipb.mit.edu/doc/safe-shell/>
