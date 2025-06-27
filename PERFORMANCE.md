# Performance Optimization Guidelines

@plyaz/ui follows performance best practices to ensure UI components are fast and scalable.

## Component Design

- Apply useMemo and useCallback strategically to optimize performance by avoiding unnecessary recalculations and re-renders.
- Avoid passing deeply nested objects or functions as props.
- Lazy-load components when possible to reduce initial bundle size.

## Testing & Monitoring

- Track initial render times (e.g., < 100ms) using Vitest performance tests (performance.now()).
- Monitor bundle sizes using vite-plugin-bundlesize.
- Write interaction performance test inside Storybook

## Build Targets

- Deliver both ESM (`ui.js`) and CJS (`ui.cjs`) outputs for flexibility by using vite-plugin-bundlesize.
