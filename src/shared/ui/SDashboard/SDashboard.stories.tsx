import type { Meta, StoryFn } from '@storybook/vue3'
import { SDashboard } from '..'

const meta: Meta = {
  title: 'UI/Phone',
  component: SDashboard,
  parameters: {
    layout: 'padded',
  },
}

export default meta

export const Phone: StoryFn = (props) => <SDashboard {...props} />

export const PhoneMenu = Phone.bind({})
PhoneMenu.args = { outline: true }
