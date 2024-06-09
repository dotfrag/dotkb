+++
title = 'Cleanup a script on exit using trap'
date = 2024-06-09T11:19:07+00:00
toc = false
summary = false
+++

```bash
trap cleanup SIGINT SIGTERM ERR EXIT

cleanup() {
  trap - SIGINT SIGTERM ERR EXIT
  # script cleanup here
}
```

## Sources

<https://betterdev.blog/minimal-safe-bash-script-template/>
