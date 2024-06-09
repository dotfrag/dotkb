+++
title = 'Gnome/GTK Theming'
date = 2024-06-09T12:33:43+00:00
toc = false
summary = false
+++

## Directories

The common directories used by GTK for theming are:

| Directory               | Description   |
| ----------------------- | ------------- |
| `~/.local/share/themes` | GTK themes    |
| `~/.local/share/icons`  | Icon themes   |
| `~/.icons`              | Cursor themes |

## Commands

If you are on Gnome, you can activate a theme from Gnome settings or Gnome tweak
tool.

If you are on a different WM, you have to run the following commands on startup:

```shell
gsettings set org.gnome.desktop.interface gtk-theme 'theme-name'
gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark' # optional for dark mode
gsettings set org.gnome.desktop.interface cursor-theme 'cursor-theme-name'
gsettings set org.gnome.desktop.interface icon-theme 'icon-theme-name'
```

### Extra commands

Set fonts for GTK applications:

```shell
gsettings set org.gnome.desktop.interface font-name 'Open Sans 11'
gsettings set org.gnome.desktop.interface monospace-font-name 'Iosevka SS08 11'
```
