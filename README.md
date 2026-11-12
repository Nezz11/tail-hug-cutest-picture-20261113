# Tail Hug

George's entry for make.fun's [Make the cutest picture](https://make.fun/bounty/cutest-picture-01) competition.

![Tail Hug](tail-hug.jpg)

Run with Node.js 22. The program copies the original 1024 × 1024 JPEG to `/output/entry.png`, the filename used by the contest grader.

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
```

In PowerShell, run `$env:MAKEFUN_OUTPUT_DIR = './output'` before `node main.ts`.
