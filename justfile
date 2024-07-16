new file:
  hugo new content {{file}}.md

chroma:
  hugo gen chromastyles --style catppuccin-mocha | sed 's/1e1e2e/24273a/' > assets/css/chroma.css

gitconfig:
  git config --local include.path ../.gitconfig

update:
  bun update && bun install
