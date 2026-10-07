# Install the browser extension

The extension is the part of granny that reads the page: a movie on YouTube, an
endless feed, a scroll. granny blocks the obvious at the network layer on its
own; the extension is what judges content. One folder, two consent toggles,
five minutes.

The person at the keyboard must press the browser toggles - macOS, Chrome and
Safari require human consent, and no script can click them for them.

## Chrome, Brave, Edge, Arc

1. In the granny menu choose **Install browser extension...** then **Open browser
   settings**. granny copies the extension to `~/Applications/granny-extension`
   and reveals it in Finder.
2. Open `chrome://extensions` (`brave://extensions`, `edge://extensions`,
   `arc://extensions`).
3. Turn on **Developer mode** - the switch in the top-right corner, off by
   default.
4. Click **Load unpacked** and pick `~/Applications/granny-extension`.
5. granny appears in the list, switched on. Pin it from the puzzle-piece menu if
   you want the face on the toolbar.
6. Open a YouTube video. The warning offers **Close the tab** (red),
   **Continue** (yellow), **Don't warn for this domain** (green - silence that
   site for the rest of the day), and a small back arrow. Shorts stay a hard
   block.

## Safari

Safari cannot sideload extensions - Apple's rule, not granny's. The Safari build
needs the source app signed with your Apple Development team; a free Apple ID is
enough.

1. Run `scripts/install-extension.sh` from the source checkout; it builds the
   Safari app signed with your team and installs it.
2. Run **granny for Safari** once.
3. Open *Safari > Settings > Extensions* and tick **granny**.
4. When Safari asks for website access, choose *Always Allow on Every Website*.
   It lives later in *Settings > Websites > granny*: set *For other websites* to
   **Allow**.
5. Open a YouTube video: the same warning, the same choices.

## What the extension adds

- **Content verdicts** - a movie or vlog on YouTube gets a negotiable warning:
  *Close the tab*, *Continue*, or *Don't warn for this domain* (silence that
  site until the day is over). Feeds get the same. Shorts stay a hard block.
- **Without it** - Facebook, Instagram and TikTok die at `/etc/hosts`; the tab
  janitor closes YouTube Shorts and the curated red-flag list; entertainment
  apps are closed on launch. No content-aware overlays.
- **Pairing** - the extension finds the app on loopback and fetches its token.
  Nothing to paste.
- **Privacy** - verdicts are cached on your Mac. Classifier calls happen only if
  you configured keys.

## Check it works

- **No warning on a video** - reload the extension (`chrome://extensions` ->
  granny -> Reload). A task's allowed surfaces can legitimately open a site;
  check the task list first.
- **The warning never leaves** - the granny app must be running. Without it the
  extension fails closed on the hard list only.
- **Safari lists no granny** - Safari loads signed extensions only. Build from
  source and run the app once, then look again in *Safari > Settings >
  Extensions*.
- **After a granny update** - use the menu again: it copies the fresh extension
  to `~/Applications/granny-extension`. Then Reload in `chrome://extensions`.

Not on the Chrome Web Store or the App Store yet. This is the pilot path: when
the extension ships on the stores, both browsers will be one click.

The same content as an agent skill:
https://granny.happyvoxel.com/skills/granny-extension/SKILL.md
