/**
 * Casper theme options
 *
 * @see https://github.com/TryGhost/Casper/blob/main/package.json
 */
interface CasperThemeOptions {
  title_font: 'Modern sans-serif' | 'Elegant serif';
  body_font: 'Modern sans-serif' | 'Elegant serif';
  show_publication_cover: boolean;
  header_style: 'Center aligned' | 'Left aligned' | 'Hidden';
  show_logo_in_navigation: boolean;
  feed_layout: 'Classic' | 'Grid' | 'List';
  color_scheme: 'Light' | 'Dark' | 'Auto';
  post_image_style: 'Wide' | 'Full' | 'Small' | 'Hidden';
  show_recent_posts_footer: boolean;
}

const defaultOptions: CasperThemeOptions = {
  title_font: 'Modern sans-serif',
  body_font: 'Elegant serif',
  show_publication_cover: true,
  header_style: 'Center aligned',
  show_logo_in_navigation: false,
  feed_layout: 'Classic',
  color_scheme: 'Light',
  post_image_style: 'Wide',
  show_recent_posts_footer: true,
};

/**
 * Configure your theme options here
 */
const customOptions: Partial<CasperThemeOptions> = {
  body_font: 'Modern sans-serif',
  show_publication_cover: false,
  feed_layout: 'Classic',
  color_scheme: 'Dark',
};

const themeConfig: CasperThemeOptions = { ...defaultOptions, ...customOptions };

export default themeConfig;
