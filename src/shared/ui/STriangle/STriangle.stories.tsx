import type { Meta, StoryFn } from '@storybook/vue3'
import { STriangle } from '.'

const meta: Meta = {
  title: 'UI/Triangle',
  component: STriangle,
}

export default meta

export const Input: StoryFn = (props) => <STriangle {...props} />
