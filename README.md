# bun-tailwind-crash

This project demonstrates a crash that occurs when using the bun-tailwind-plugin with Bun 1.2.0 on Windows.

## Prerequisites

- Bun 1.2.0
- Windows operating system

## Installation

To install dependencies:

```bash
bun install
```

To run:

```bash
bun index.ts
```

## Reproduction Steps

1. Ensure you have Bun 1.2.0 installed
2. Run either of these commands:

```bash
bun index.ts
```

or:

```bash
bun run index.ts
```


The crash should occur during bundling.

This project was created using `bun init` in bun v1.2.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
