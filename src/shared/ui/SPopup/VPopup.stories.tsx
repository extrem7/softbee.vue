import type { Meta, StoryFn } from '@storybook/vue3'
import { SPopup } from '.'

const meta: Meta = {
  title: 'ui/popup',
  component: SPopup,
}

export default meta

export const Popup: StoryFn = (props) => <SPopup {...props} />
