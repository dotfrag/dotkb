+++
title = 'GTK Theming'
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

### Wayland

If you are on Wayland, it can be helpful to also set the settings in
`~/.config/gtk-3.0/settings.ini`, here's an example:

```init
[Settings]
gtk-theme-name = catppuccin-macchiato-blue-standard+default
gtk-application-prefer-dark-theme = true
gtk-cursor-theme-name = catppuccin-macchiato-dark-cursors
gtk-icon-theme-name = Papirus
gtk-font-name = 'Open Sans 11'
```

If you are on sway, you might also need to configure the cursor theme in sway
config:

```text
seat seat0 xcursor_theme 'catppuccin-macchiato-dark-cursors'
```

## Sources

<https://wiki.archlinux.org/title/Cursor_themes#XDG_specification>
<https://github.com/swaywm/sway/wiki/GTK-3-settings-on-Wayland>
<https://www.reddit.com/r/swaywm/comments/qq74gv/comment/hjzhoyo/>
