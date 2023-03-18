# Static Site with Headless Ghost (Casper theme) + Astro

Check out the article on how this was created [here](https://www.yzlow.com/build-a-custom-static-site-with-headless-ghost-astro).

## Getting started

You should have a Ghost instance up and ready to get the [API Credentials](https://ghost.org/docs/content-api/).

Clone `.env.example` to `.env.local`, and add the following:

```
GHOST_CONTENT_API_URL=your_ghost_content_api_url
GHOST_CONTENT_API_KEY=your_ghost_content_api_key
SITE_URL=http://localhost:3000
```

Add your production url in [Astro config](https://docs.astro.build/en/reference/configuration-reference/#site) under `site` key.

```js
export default defineConfig({
  site: 'https://my-website.com',
  ...
});
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
