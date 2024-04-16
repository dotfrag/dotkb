# dotkb

## Useful commands

Add new content:

```shell
hugo new content bash/test.md
```

Index site with pagefind:

```shell
pnpm dlx pagefind --site public
```

Generate chroma stylesheet:

```shell
hugo gen chromastyles --style catppuccin-mocha | sed 's/1e1e2e/24273a/' > assets/css/chroma.css
```
