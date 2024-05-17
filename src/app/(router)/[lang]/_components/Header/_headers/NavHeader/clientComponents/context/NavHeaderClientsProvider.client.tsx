'use client'

import { MantineTheme, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { createContext, useContext } from 'react'

interface State {
  drawerOpened: boolean
  toggleDrawer: () => void
  closeDrawer: () => void
  linksOpened: boolean
  toggleLinks: () => void
  theme: MantineTheme | null
}
const NavHeaderClientsContext = createContext<State>({
  drawerOpened: false,
  toggleDrawer: () => undefined,
  closeDrawer: () => undefined,
  linksOpened: false,
  toggleLinks: () => undefined,
  theme: null,
})

interface Props {
  children: JSX.Element
}
export const NavHeaderClientsProvider = ({ children }: Props) => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
  const theme = useMantineTheme()

  return (
    <NavHeaderClientsContext.Provider
      value={{
        drawerOpened,
        toggleDrawer,
        closeDrawer,
        linksOpened,
        toggleLinks,
        theme,
      }}
    >
      {children}
    </NavHeaderClientsContext.Provider>
  )
}

export const useSharedState = () => useContext(NavHeaderClientsContext)
