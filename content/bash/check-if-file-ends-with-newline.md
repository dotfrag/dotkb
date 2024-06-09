+++
title = 'Check if a file ends with newline'
date = 2024-06-09T10:49:23+00:00
summary = false
+++

The following command will return 1 if the file ends with a newline, and 0
otherwise:

```bash
tail -c1 <file> | wc -l
```

Or as a function:

```bash
function file_ends_with_newline() {
  [[ $(tail -c1 "$1" | wc -l) -gt 0]]
}
```

## Sources

<https://stackoverflow.com/a/25749716>
