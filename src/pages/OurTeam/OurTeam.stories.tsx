import type { Meta, StoryFn } from '@storybook/vue3'
import Page from './OurTeam.vue'

const meta: Meta = {
  title: 'Pages/OurTeam',
  component: Page,
}

export default meta

export const OurTeam: StoryFn = () => <Page />
OurTeam.storyName = 'OurTeam'
