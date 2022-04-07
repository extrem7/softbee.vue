import type { Meta, StoryFn } from '@storybook/vue3'
import { SMenu } from '.'

const meta: Meta = {
  title: 'UI/layout/Menu',
  component: SMenu,
}

export default meta

export const Menu: StoryFn = (props) => <SMenu {...props} />
