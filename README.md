# dotkb

My personal knowledge base, hosted at <https://www.dotkb.net/>.

## Useful commands

### Add new content

```shell
hugo new content bash/file.md
```

### Index site with pagefind

```shell
bun pagefind --site public
```

### Generate chroma stylesheet

```shell
hugo gen chromastyles --style catppuccin-mocha | sed 's/1e1e2e/24273a/' > assets/css/chroma.css
```

### Bun git diff

Run this to use the local `.gitconfig` file:

```shell
git config --local include.path ../.gitconfig
```

Otherwise, apply manually:

```shell
git config diff.lockb.textconv bun
git config diff.lockb.binary true
```
