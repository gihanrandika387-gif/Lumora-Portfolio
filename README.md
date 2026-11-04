# Lumora Business & Creative Solutions

**Company Portfolio Website | 2026**  
**Where Ideas Come Alive**

A responsive, editable company website for **Lumora Business & Creative Solutions**, built with plain HTML, CSS and JavaScript. You can publish this website free using GitHub Pages. No Node.js, database, paid hosting, or build step is required.

## Files

```text
lumora-portfolio/
├── index.html                  # Website content and sections
├── styles.css                  # Website design and mobile responsiveness
├── script.js                   # Mobile menu, team cards and contact form
├── team.js                     # Edit/add co-partners HERE
└── assets/
    ├── bimshari-gamage.webp    # Photo provided by you
    ├── lumora-brand-banner.webp # Lumora banner provided by you
    ├── lumora-symbol.png        # Symbol extracted from the banner
    └── favicon.svg              # Browser tab icon
```

## How to preview

Open `index.html` in any modern web browser. It works without installing anything. (Google Fonts will load when connected to the internet.)

## How to publish with GitHub Pages

1. Sign in to [GitHub](https://github.com/) and create a new **public** repository, e.g. `lumora-portfolio`.
2. Choose **Add file → Upload files**. Upload the **contents inside** the `lumora-portfolio` folder, including the `assets` folder. Make sure `index.html` is at the root of the repository, not nested in an extra folder.
3. Click **Commit changes**.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**. Choose branch `main` and folder `/(root)`, and click **Save**.
6. Your website will be available at a URL like `https://YOUR-GITHUB-USERNAME.github.io/lumora-portfolio/` after GitHub publishes it.

**Tip:** To create a site at `https://YOUR-GITHUB-USERNAME.github.io/`, name your repository exactly `YOUR-GITHUB-USERNAME.github.io`.

## How to add your other co-partner

Open **`team.js`**. You will find the two current founding team entries:

- **Bimshari Gamage** — already includes the photo you provided.
- **Iresha Pieris** — currently has an initials placeholder until you add a photo.

To add Iresha's picture, add the file to `assets/` (e.g. `iresha-pieris.jpg`) and change her `image` field to:

```js
image: "assets/iresha-pieris.jpg",
```

To add a **third co-partner**, put their photo in `assets/` and add a third object **inside** the `window.LUMORA_TEAM` array, separated by a comma:

```js
{
  name: "New Co-Partner Name",
  role: "Co-Partner",
  image: "assets/new-partner.jpg",
  description: "Write a short introduction about your new co-partner."
}
```

You can add as many people as you like. If `image` is empty (`""`), the website automatically shows an initials placeholder. Commit `team.js` and the new picture to GitHub to publish the change.

**Important:** If the added person is also a founder, update the **About** paragraph in `index.html` accordingly; the original portfolio names Bimshari and Iresha as the founders.

## How to change company details

- **Main text, services, vision, mission, VYBE and footer:** edit `index.html`.
- **Team members:** edit `team.js`.
- **Brand colours, layout and type:** edit `styles.css`.
- **Logo/banner/photo:** replace assets while keeping the original filenames, or update paths in the HTML.
- **Email:** replace `lumorabusinesscreative@gmail.com` in `index.html` and `script.js` if needed.
- **Instagram/Facebook:** check your public account URL and edit the links in `index.html`. Links are constructed from the handles you provided and should be verified.

## Contact form behaviour

The form creates an **email draft** addressed to Lumora using `mailto:`. It **does not** send messages automatically or store personal information on a server. Visitors need a configured email application to send the message. For a hosted form with direct submissions later, integrate a reputable form service or a small backend.

## About VYBE

The VYBE phone illustration is a **concept mock-up**, not a screenshot of a working app. The project is correctly described as an **upcoming project** and makes no claims of launch, downloads or active users.

## License and assets

The website code is ready to customise for Lumora. The supplied company branding and personal photography remain with their respective rights holders; do not redistribute those assets as an open-source image library without permission.
