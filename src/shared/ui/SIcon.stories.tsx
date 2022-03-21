import type { Meta, StoryFn } from '@storybook/vue3'
import { SInstagram, SLinkedIn, SFacebook, SUpWork } from '.'

const meta: Meta = {
  title: 'UI/Icons',
  component: SInstagram,
}

export default meta

export const Instagram: StoryFn = (props) => (
  <SInstagram {...props} class="bg-neutral-900" />
)
export const LinkedIn: StoryFn = (props) => <SLinkedIn {...props} />
export const Facebook: StoryFn = (props) => <SFacebook {...props} />
export const UpWork: StoryFn = (props) => <SUpWork {...props} />
