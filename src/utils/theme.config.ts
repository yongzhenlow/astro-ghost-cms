/**
 * Casper theme options
 *
 * @see https://github.com/TryGhost/Casper/blob/main/package.json
 */
interface CasperThemeOptions {
  navigation_layout: 'Logo on cover' | 'Logo in the middle' | 'Stacked';
  title_font: 'Modern sans-serif' | 'Elegant serif';
  body_font: 'Modern sans-serif' | 'Elegant serif';
  show_publication_cover: boolean;
  header_style: 'Center aligned' | 'Left aligned' | 'Hidden';
  feed_layout: 'Classic' | 'Grid' | 'List';
  color_scheme: 'Light' | 'Dark' | 'Auto';
  post_image_style: 'Wide' | 'Full' | 'Small' | 'Hidden';
  show_recent_posts_footer: boolean;
}

const defaultOptions: CasperThemeOptions = {
  navigation_layout: 'Logo on cover',
  title_font: 'Modern sans-serif',
  body_font: 'Elegant serif',
  show_publication_cover: true,
  header_style: 'Center aligned',
  feed_layout: 'Classic',
  color_scheme: 'Light',
  post_image_style: 'Wide',
  show_recent_posts_footer: true,
};

/**
 * Configure your theme options here
 */
const customOptions: Partial<CasperThemeOptions> = {
  // color_scheme: 'Dark',
};

const themeConfig: CasperThemeOptions = { ...defaultOptions, ...customOptions };

export default themeConfig;
