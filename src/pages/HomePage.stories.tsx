import type { Meta, StoryFn } from '@storybook/vue3'
import Page from './HomePage.vue'

const meta: Meta = {
  title: 'Pages/HomePage',
  component: Page,
}

export default meta

export const HomePage: StoryFn = () => <Page />
HomePage.storyName = 'HomePage'
