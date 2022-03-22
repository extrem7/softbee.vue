import type { Meta, StoryFn } from '@storybook/vue3'
import { SInput } from '.'

const meta: Meta = {
  title: 'UI/Input',
  component: SInput,
}

export default meta

export const Input: StoryFn = (props) => (
  <SInput {...props}>Let’s talk 👋</SInput>
)

export const Large = Input.bind({})
Large.args = { outline: true }
