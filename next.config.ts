// next.config.ts
import type { NextConfig } from 'next';
import { i18n } from './next-i18next.config.js'; // 這裡仍是 ESM import

const nextConfig: NextConfig = {
  // 其他設定...
  i18n,
};

export default nextConfig;
