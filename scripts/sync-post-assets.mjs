import fs from "node:fs";
import path from "node:path";

const sourceRoot = path.join(process.cwd(), "blog", "posts");
const targetRoot = path.join(process.cwd(), "public", "post-assets");
const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);

fs.rmSync(targetRoot, { recursive: true, force: true });

function copyImages(source, target) {
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);

    if (entry.isDirectory()) {
      copyImages(sourcePath, targetPath);
    } else if (imageExtensions.has(path.extname(entry.name).toLowerCase())) {
      fs.mkdirSync(target, { recursive: true });
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

if (fs.existsSync(sourceRoot)) copyImages(sourceRoot, targetRoot);
