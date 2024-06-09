+++
title = 'Default and alternative command'
date = 2024-06-09T11:21:54+00:00
toc = false
summary = 'Provide an alternative command if the preferred command is not available.'
+++

The following command will return the `gnumfmt` command if it is available,
otherwise it will use the `numfmt` command.

```bash
$(command -v gnumfmt || echo numfmt)
```
