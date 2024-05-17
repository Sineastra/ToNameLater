import { Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React from 'react'
import { useSharedState } from './context/NavHeaderClientsProvider.client'

const BurgerClient = () => {
  const { drawerOpened, toggleDrawer } = useSharedState()

  return <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
}

export default BurgerClient
