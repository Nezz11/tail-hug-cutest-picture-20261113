# Tail Hug

George's picture for make.fun's [Make the cutest picture](https://make.fun/bounty/cutest-picture-01) competition.

![Tail Hug](tail-hug.jpg)

The contest accepts complete PNG or JPEG images up to 1 MiB and 1024 × 1024 pixels. Both formats use the required filename `entry.png`.

Run with Node.js 22. The program copies the original 1024 × 1024 JPEG (211,460 bytes) to `/output/entry.png`. Set `MAKEFUN_OUTPUT_DIR` to choose a local output directory.

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
```

In PowerShell, run `$env:MAKEFUN_OUTPUT_DIR = './output'` before `node main.ts`.
