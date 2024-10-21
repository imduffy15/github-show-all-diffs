# GitHub PR Files Extension

This Chrome extension makes your life easier when looking at GitHub pull requests. It automatically opens all the file changes for you, so you don't have to click each "Load diff" button yourself.

## What It Does

- Clicks all "Load diff" buttons on GitHub pull request pages automatically
- Works on pages that look like this: `https://github.com/*/*/pull/*/files`
- Keeps working even as the page updates

## How to Install It

### Option 1: Use the .crx File

1. Go to the Releases page of this project.
2. Download the latest `.crx` file.
3. Open Google Chrome and type `chrome://extensions` in the address bar.
4. Drag and drop the `.crx` file onto the extensions page.
5. Click "Add extension" when Chrome asks you.

### Option 2: Install from Source Code

1. Download this project as a ZIP file and unzip it, or clone it if you know how to use Git.
2. Open Google Chrome and type `chrome://extensions` in the address bar.
3. Turn on "Developer mode" by clicking the switch in the top right corner.
4. Click "Load unpacked" and choose the folder that has the extension files.

## How to Use It

1. Install the extension using one of the methods above.
2. Go to any GitHub pull request page that shows file changes.
3. The extension will automatically open all the file diffs for you.

## For Developers

If you want to change how this extension works:

1. The important files are `manifest.json` and `content.js`.
2. After making changes, go back to `chrome://extensions` and click the refresh button for this extension.
