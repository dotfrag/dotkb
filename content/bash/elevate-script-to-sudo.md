+++
title = 'Elevate script to sudo'
date = 2024-06-09T11:26:39+00:00
toc = false
summary = false
+++

Self-elevate script to `sudo`:

```bash
[ "$UID" -eq 0 ] || exec sudo "$0" "$@"
```

## Sources

<https://askubuntu.com/a/746351>\
<https://unix.stackexchange.com/a/28793>
