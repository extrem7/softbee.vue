import type { Meta, StoryFn } from '@storybook/vue3'
import { SBoard } from '.'

const meta: Meta = {
  title: 'UI/Board',
  component: SBoard,
}

export default meta

export const Board: StoryFn = (props) => <SBoard {...props} />
