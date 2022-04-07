import type { Meta, StoryFn } from '@storybook/vue3'
import { SButton } from '..'

const meta: Meta = {
  title: 'UI/Button',
  component: SButton,
}

export default meta

export const Button: StoryFn = (props) => (
  <SButton {...props}>Let’s talk 👋</SButton>
)

export const Filled = Button.bind({})
Filled.args = { outline: true }
