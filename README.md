# Static Site with Headless Ghost (Casper theme) + Astro

This showcases how to use Ghost Content API as a headless CMS, using Astro as the frontend framework.

Check out the article on how this site was created [here](https://www.yzlow.com/build-a-custom-static-site-with-headless-ghost-astro).

## Getting started

You should have a Ghost instance up and ready to get the [API Credentials](https://ghost.org/docs/content-api/).

Clone `.env.example` to `.env.local` in the same directory, and add the following:

```
GHOST_CONTENT_API_URL=your_ghost_content_api_url
GHOST_CONTENT_API_KEY=your_ghost_content_api_key
SITE_URL=http://localhost:3000
```

Add your production url in [Astro config](https://docs.astro.build/en/reference/configuration-reference/#site) under the `site` key.

```js
export default defineConfig({
  site: 'https://my-website.com',
  ...
});
```

## Theme Configuration

Theme settings are not exposed by Ghost Content API. You will have to manually set options for our Casper theme in `utils/theme.config.ts`. These should mirror your settings in your Ghost instance, under `Settings > Design`. Refer to the interface `CasperThemeOptions` for the values.

```typescript
const customOptions: Partial<CasperThemeOptions> = {
  body_font: 'Modern sans-serif',
  show_publication_cover: false,
  feed_layout: 'Classic',
  color_scheme: 'Dark',
};
```

## 🧞 Commands

This project prefers the [yarn package manager](https://yarnpkg.com/).
All commands are run from the root of the project, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `yarn install`      | Installs dependencies                              |
| `yarn start`        | Starts local dev server at `localhost:3000`        |
| `yarn build`        | Build your production site to `./dist/`            |
| `yarn preview`      | Preview your build locally, before deploying       |
| `yarn astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `yarn astro --help` | Get help using the Astro CLI                       |

## N.B.

In this showcase, the design is based on the [Casper](https://github.com/TryGhost/Casper) theme, and is converted into js/ts from the theme's handlebars templates, which might not reflect the changes in the latest version.

It is recommended that you implement your own design for your site. If you wish to continue using the Casper theme for production, you should update the markup by referencing the latest source code at https://github.com/TryGhost/Casper.
