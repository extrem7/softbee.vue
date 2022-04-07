import type { Meta, StoryFn } from '@storybook/vue3'
import { SMobileCase } from '.'
import phone from '~/shared/assets/phone.png'
import phoneMenu from '~/shared/assets/phonemenu.png'
import logo from '~/shared/assets/logo.svg'

const meta: Meta = {
  title: 'UI/MobileCase',
  component: SMobileCase,
  parameters: {
    layout: 'padded',
  },
}

export default meta

export const MobileCase: StoryFn = (props) => <SMobileCase {...props} />

MobileCase.args = {
  img: phone,
  imgSecond: phoneMenu,
  android: true,
  logo,
}
