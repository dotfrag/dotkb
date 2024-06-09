+++
title = 'Change visudo editor'
date = 2024-06-09T12:29:57+00:00
toc = false
summary = false
draft = true
+++

```shell
sudo update-alternatives --config editor
```

```shell
sudo update-alternatives --install <link> <name> <path> <priority>
```

```shell
sudo update-alternatives --install /usr/bin/editor editor /usr/bin/nvim 0
```

## Sources

<https://askubuntu.com/a/539244>\
<https://unix.stackexchange.com/a/335162>\
<https://www.baeldung.com/linux/update-alternatives-command>
