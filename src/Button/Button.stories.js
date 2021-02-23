import React from 'react'

import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

const PrimaryButton = () => {
  return (
    <div>
      <Button color={'primary'}>Primary</Button>
      <Button style={{ marginTop: '1rem' }} color={'primary'} size={'sm'}>
        Small
      </Button>
      <Button style={{ marginTop: '1rem' }} color={'primary'} size={'md'}>
        Medium
      </Button>
      <Button style={{ marginTop: '1rem' }} color={'primary'} size={'lg'}>
        Large
      </Button>
      <Button style={{ marginTop: '1rem' }} color={'primary'} size={'xl'}>
        Extra Large
      </Button>
    </div>
  )
}
const WarningButton = () => <Button color={'warning'}>Warning</Button>
const DangerButton = () => <Button color={'danger'}>Danger</Button>
const LightButton = () => <Button color={'light'}>Light</Button>

export const Primary = PrimaryButton.bind({})
export const Warning = WarningButton.bind({})
export const Danger = DangerButton.bind({})
export const Light = LightButton.bind({})
