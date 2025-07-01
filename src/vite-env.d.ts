/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_INSTAGRAM_ACCESS_TOKEN: string
  readonly VITE_INSTAGRAM_USER_ID: string
  readonly VITE_USE_DEMO_POSTS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
