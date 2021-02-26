import React from 'react'

import Typography from './Typography'

export default {
  title: 'Typography',
  component: Typography,
}

const PrimaryTypography = () => {
  return <Typography color={'primary'}>Hello World</Typography>
}

export const Primary = PrimaryTypography.bind({})
