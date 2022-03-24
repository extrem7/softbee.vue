import type { Meta, StoryFn } from '@storybook/vue3'
import { SArrowNext } from '.'

const meta: Meta = {
  title: 'UI/ArrowNext',
  component: SArrowNext,
}

export default meta

export const Default: StoryFn = (props) => <SArrowNext {...props} />

export const Disabled = Default.bind({})
Disabled.args = { disabled: true }

export const Left = Default.bind({})
Left.args = { left: true }
