import type { Meta, StoryFn } from '@storybook/vue3'
import { SMemberCard } from '..'
import Yuri from '~/shared/assets/memberYuri.png'
import Vlad from '~/shared/assets/memberVlad.png'

const meta: Meta = {
  title: 'UI/Card',
  component: SMemberCard,
}

export default meta

export const Card: StoryFn = (props) => <SMemberCard {...props} />
Card.args = {
  name: 'Yuri',
  description: 'Vue.js Developer',
  img: Yuri,
}

export const CardTwo = Card.bind({})
CardTwo.args = {
  name: 'Vlad',
  description: 'Lead Graphic Designer',
  img: Vlad,
}
