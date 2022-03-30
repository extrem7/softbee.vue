import type { Meta, StoryFn } from '@storybook/vue3'
import { SDeclarationCircle } from '.'

const meta: Meta = {
  title: 'UI/DeclarationCircle',
  component: SDeclarationCircle,
}

export default meta

export const Default: StoryFn = (props) => <SDeclarationCircle {...props} />
