import type { Meta, StoryFn } from '@storybook/vue3'
import { SButtonCase } from '.'

const meta: Meta = {
  title: 'UI/ButtonCase',
  component: SButtonCase,
}

export default meta

export const ButtonCase: StoryFn = (props) => (
  <SButtonCase {...props}>Check it out</SButtonCase>
)
