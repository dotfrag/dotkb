+++
title = 'Environment variable defaults'
date = 2024-06-09T11:29:18+00:00
toc = false
summary = false
+++

```bash
#!/bin/bash
set -euo pipefail

: "${GREETING:=Hello}"
: "${NAME:=user}"

echo "${GREETING} ${NAME}"
```

## Sources

<https://emmer.dev/blog/bash-environment-variable-defaults/>
