import { fileURLToPath, URL } from 'url'
import { defineConfig, type UserConfig } from 'vite'

import { cloneDeep } from 'lodash'

import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'

export const config: UserConfig = {
  alias: { '~': fileURLToPath(new URL('./src', import.meta.url)) },
  plugins: [Vue(), VueJsx()],
  test: { globals: true },
}

export default defineConfig(() => {
  const finalConfig = cloneDeep(config)

  if (!process.env.VITEST) {
    finalConfig.plugins?.push(visualizer())
  }

  return finalConfig
})
