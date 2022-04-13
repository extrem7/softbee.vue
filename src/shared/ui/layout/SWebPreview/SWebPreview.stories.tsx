import type { Meta, StoryFn } from '@storybook/vue3'
import { SWebPreview } from '.'

const meta: Meta = {
  title: 'UI/WebPreview',
  component: SWebPreview,
  parameters: {
    layout: 'padded',
  },
}

export default meta

export const WebPreview: StoryFn = (props) => <SWebPreview {...props} />
