import type { Meta, StoryFn } from '@storybook/vue3'
import { SLink } from '..'

const meta: Meta = {
  title: 'UI/SLink',
  component: SLink,
}

export default meta

export const Link: StoryFn = (props) => <SLink {...props}>hello</SLink>
