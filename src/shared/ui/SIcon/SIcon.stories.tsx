import type { Meta, StoryFn } from '@storybook/vue3'
import { SFacebookIcon, SInstagramIcon, SLinkedInIcon, SUpworkIcon } from '.'

const meta: Meta = {
  title: 'UI/Icons',
  component: SInstagramIcon,
}

export default meta

export const Instagram: StoryFn = (props) => (
  <SInstagramIcon {...props} class="bg-neutral-900" />
)
export const LinkedIn: StoryFn = (props) => <SLinkedInIcon {...props} />
export const Facebook: StoryFn = (props) => <SFacebookIcon {...props} />
export const UpWork: StoryFn = (props) => <SUpworkIcon {...props} />
