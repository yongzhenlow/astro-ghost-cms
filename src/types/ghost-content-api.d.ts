import type {
  Nullable,
  PostOrPage as GhostPostOrPage,
  Tag as GhostTag,
  Settings as GhostSettings,
} from '@tryghost/content-api';

/**
 * Fill in missing properties from API @types/tryghost__content-api
 */
interface PostOrPageMissing {
  visibility?: 'public';
  access?: boolean;
  comments?: boolean;
  email_subject?: Nullable<string>;
  frontmatter?: Nullable<string>;
}

interface TagMissing {
  codeinjection_head?: Nullable<string>;
  codeinjection_foot?: Nullable<string>;
}

interface SettingsMissing {
  accent_color?: Nullable<string>;
  locale?: Nullable<string>;
  members_support_address?: string;
  members_enabled?: boolean;
  members_invite_only?: boolean;
  paid_members_enabled?: boolean;
  firstpromoter_account?: Nullable<string>;
  portal_button_style?: Nullable<string>;
  portal_button_signup_text?: Nullable<string>;
  portal_button_icon?: Nullable<string>;
  portal_plans?: Array<'free' | 'paid'>;
  portal_name?: boolean;
  portal_button?: boolean;
  comments_enabled?: 'all';
  version?: string;
}

export interface PostOrPage extends GhostPostOrPage, PostOrPageMissing {}

export interface PostsOrPages extends Array<PostOrPage> {}

export interface Tag extends GhostTag, TagMissing {}

export interface Settings extends GhostSettings, SettingsMissing {}
