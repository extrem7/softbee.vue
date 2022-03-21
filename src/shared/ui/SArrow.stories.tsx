import type { Meta, StoryFn } from '@storybook/vue3'
import { SArrow } from '.'

const meta: Meta = {
  title: 'Arrow',
  component: SArrow,
}

export default meta

export const Arrow: StoryFn = (props) => <SArrow {...props} />

Arrow.args = {}
