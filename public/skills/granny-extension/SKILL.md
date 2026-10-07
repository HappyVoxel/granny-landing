---
name: granny-extension
description: Install the granny browser extension on macOS - Chrome, Brave, Edge, Arc or Safari - so granny can judge page content (a movie on YouTube, a feed, a scroll). Use when the user asks to install or enable the granny extension, or to finish a granny setup.
---

# Install the granny browser extension

granny blocks the obvious at the network layer on its own. The extension is what
judges page content: a movie on YouTube, an endless feed, a scroll. One folder,
two consent toggles, five minutes.

## Before you start

- The granny app must be installed and running: `pgrep -x granny-agent` prints a
  pid. If it prints nothing, open it with `open -a granny`.
- The person at the keyboard must press the browser toggles. macOS, Chrome and
  Safari require human consent; no script can click them. Ask the user to do it,
  and wait.

## Chrome, Brave, Edge, Arc

1. In the granny menu choose "Install browser extension..." then "Open browser
   settings". granny copies the extension to `~/Applications/granny-extension`.
2. Open the extensions page: `chrome://extensions` (or `brave://extensions`,
   `edge://extensions`, `arc://extensions`).
3. Ask the user to turn on **Developer mode** - the switch in the top-right
   corner, off by default.
4. Click **Load unpacked** and pick `~/Applications/granny-extension`.
5. Confirm granny shows in the list, switched on. Pin it from the puzzle-piece
   menu if the user wants the face on the toolbar.
6. Verify: open a YouTube video. A negotiable warning must appear with
   *Close the tab*, *Continue*, and *Don't warn for this domain*.

## Safari

Safari cannot sideload extensions - Apple's rule. The Safari build needs the
source app signed with the user's Apple Development team; a free Apple ID is
enough.

1. From the source checkout run `scripts/install-extension.sh`; it builds the
   Safari app signed with the user's team and installs it.
2. Run "granny for Safari" once.
3. Ask the user: *Safari > Settings > Extensions*, tick **granny**.
4. Ask the user: *Safari > Settings > Websites > granny* - set
   "For other websites" to **Allow**.
5. Verify with the same YouTube video.

## If it does not work

- **No warning on a video** - reload the extension in `chrome://extensions`
  (granny -> Reload). A task's allowed surfaces can legitimately open a site;
  check the task list first.
- **The warning never leaves** - the granny app must be running. Without it the
  extension fails closed on the hard list only.
- **Safari lists no granny** - Safari loads signed extensions only. Build from
  source, run the app once, then look again.
- **After a granny update** - use the menu again; it copies the fresh extension
  to `~/Applications/granny-extension`. Then Reload in `chrome://extensions`.

## What the extension adds

Content verdicts with a negotiable overlay. Without it, the hosts block, the tab
janitor and the app killer still run, but there are no content-aware overlays.
Pairing is loopback and tokenless; verdicts are cached on the Mac.

Guide with screenshots: https://granny.happyvoxel.com/blog/install-extension/
