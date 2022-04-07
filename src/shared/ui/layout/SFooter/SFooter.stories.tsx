import type { Meta, StoryFn } from '@storybook/vue3'
import { SFooter } from '.'

const meta: Meta = {
  title: 'UI/layout/Footer',
  component: SFooter,
}

export default meta

export const Footer: StoryFn = (props) => <SFooter {...props} />
