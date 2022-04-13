import type { Meta, StoryFn } from '@storybook/vue3'
import { SDashboard } from '.'

const meta: Meta = {
  title: 'UI/PreviewMobile',
  component: SDashboard,
  parameters: {
    layout: 'padded',
  },
}

export default meta

export const PreviewMobile: StoryFn = (props) => <SDashboard {...props} />
