import type { Meta, StoryFn } from '@storybook/vue3'
import { SHeaderWeb } from '.'

const meta: Meta = {
  title: 'UI/HeaderWeb',
  component: SHeaderWeb,
  parameters: {
    layout: 'padded',
  },
}

export default meta

export const HeaderWeb: StoryFn = (props) => <SHeaderWeb {...props} />
