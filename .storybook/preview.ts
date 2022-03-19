import type { Parameters } from '@storybook/addons'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import '~/app/index.css'

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: 'white' },
      { name: 'black', value: '#000' },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  viewport: { viewports: INITIAL_VIEWPORTS },
}
