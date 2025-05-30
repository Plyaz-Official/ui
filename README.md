# ui

A reusable, accessible, and themeable component library powering the Plyaz Web App interface. Built with performance and consistency in mind, @plyaz/ui delivers modular React components aligned with the Plyaz design system — enabling seamless development across fan-facing features, quests, NFTs, and loyalty flows in the Web3 ecosystem.

## Project Structure

```text
src/              # source code
src/components     # component source code
tests/            # Unit tests
.storybook/       # Storybook configuration
dist/             # Build output
package.json
tsconfig.json
vite.config.ts
tailwind.config.js
```

## Installation

```bash
npm install @plyaz/ui
```

or

```bash
yarn add @plyaz/ui
```

or

```bash
pnpm add @plyaz/ui
```

## Storybook

```bash
pnpm run storybook
```

## Plop Utility for Auto-Generating Storybook Stories

### Requirement

Manually creating Storybook story files for each component can be repetitive. So we needed a way to automatically generate story files with consistent structure and boilerplate.

### Solution

We integrated the **Plop** library, a micro-generator framework that automates file creation using custom templates (in our case, a story template). With Plop, we can generate story files for components quickly and consistently.

### How It Works

Plop takes three inputs and generates a story file based on a defined template:

- **Path to the component:** The target path where the file should be generated (relative to src/)
- **Component directory name (PascalCase):** The component directory name (e.g., Button)
- **Component name (PascalCase):** The component name in PascalCase format based on these inputs, Plop processes a predefined template plop-templates/Component.stories.tsx.hbs file and generates the corresponding story file in the specified location.

**Plop** then executes a custom template file and generates the new story file at the target path with the provided name.

### Folder Structure

```
plopfile.js
/plop-templates
└── Component.stories.tsx.hbs # template for story file
```

### Usage

To generate a new story file:

```bash
pnpm run generate
```
