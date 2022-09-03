import type { Nullable, Settings } from '@tryghost/content-api';
import { atom } from 'nanostores';
import ghostClient from '@utils/ghost-client';

interface SettingsMissingParams {
  accent_color?: Nullable<string>;
}

const settingsResponse: Settings & SettingsMissingParams =
  (await ghostClient.settings.browse()) as any;

export const settingsStore = atom(settingsResponse);

export const settings = settingsStore.get();
