import type { Meta, StoryFn } from '@storybook/vue3'
import { SHeaderMobileCase } from '.'

const meta: Meta = {
  title: 'UI/HeaderMobileCase',
  component: SHeaderMobileCase,
  parameters: {
    layout: 'padded',
  },
}

export default meta

export const HeaderMobileCase: StoryFn = (props) => (
  <SHeaderMobileCase {...props} />
)
