export const ignore = `# IDE config
coverage
.vscode
.idea

# General
node_modules
dist
build
.**/dist

#Package & Locks
package.json
package-lock.json
pnpm-lock.yaml
yarn.lock
bun.lockb

# Electron-vite
release
out
out-tsc
public

# Electron Builder
.packaged
*.asar

# Compilation files
*.log
*.tgz

# Others
.env`;

export const config = `{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "always",
  "endOfLine": "lf",
  "embeddedLanguageFormatting": "auto"
}`;
