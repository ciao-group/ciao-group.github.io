# CIAO GROUP Academic Website

Welcome to the CIAO Group academic website repository. 

## Preview changes locally

On macOS, double-click **Preview Website.command** in the project folder.
The first run installs the required preview tools locally. It then opens the
website in your browser; select **Publications** to review the papers.

From PyCharm's Terminal (or any terminal in this project), you can instead run:

```sh
./scripts/preview
```

The preview is at <http://127.0.0.1:4000/publications/>. Other pages are available
through the normal navigation. Save your changes in PyCharm: the site rebuilds
and your browser refreshes automatically. No commit or push is needed. Keep
the terminal running while reviewing; press **Control+C** to stop.

Changes to `_config.yml` require stopping and restarting the preview.
If port 4000 is already in use, stop the other preview first.

All downloaded tools and generated pages stay in the ignored `.preview/`
folder. Previewing does not change the tracked `_site/` folder or publish
anything to GitHub. It requires Ruby, and macOS Command Line Tools for the
first setup (`xcode-select --install` if they are missing).

To build the preview without starting a server:

```sh
./scripts/preview --build
```

Use `./scripts/preview --no-open` to start the server without opening a browser.

This website is based on a template developed by Ethan Pickering. 
You can find the original template and its resources at [Ethan Pickering's GitHub Repository](https://github.com/ethan-pickering/sbryngelson.github.io).


