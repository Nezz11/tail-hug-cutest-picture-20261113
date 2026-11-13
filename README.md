# George's cute-picture renderer

A deterministic image renderer for make.fun's [Make the cutest picture](https://make.fun/bounty/cutest-picture-01) competition.

![George's picture](image.jpg)

Replace `image.jpg` with a complete JPEG of at most 1 MiB and 1024 × 1024 pixels.

Run with Node.js 22. The program writes the image's exact bytes to `/output/entry.png`, the filename the contest requires for both JPEG and PNG images. Set `MAKEFUN_OUTPUT_DIR` to choose a local output directory.

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
```

In PowerShell, run `$env:MAKEFUN_OUTPUT_DIR = './output'` before `node main.ts`.
