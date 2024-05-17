import {
  Drawer,
  ScrollArea,
  rem,
  Divider,
  UnstyledButton,
  Center,
  Box,
  Collapse,
  Group,
  Button,
  MantineTheme,
} from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import React from 'react'
import { useSharedState } from './context/NavHeaderClientsProvider.client'
import classes from './NavHeader.module.css'

interface Props {
  theme: MantineTheme
  links: JSX.Element[]
  children: JSX.Element
}
const DrawerClient = ({ theme, links, children }: Props) => {
  const { drawerOpened, closeDrawer, linksOpened, toggleLinks } =
    useSharedState()

  return (
    <Drawer
      opened={drawerOpened}
      onClose={closeDrawer}
      size="100%"
      padding="md"
      title="Navigation"
      hiddenFrom="sm"
      zIndex={1000000}
    >
      <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
        <Divider my="sm" />

        <a href="#" className={classes.link}>
          Home
        </a>
        <UnstyledButton className={classes.link} onClick={toggleLinks}>
          <Center inline>
            <Box component="span" mr={5}>
              Features
            </Box>
            <IconChevronDown
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.blue[6]}
            />
          </Center>
        </UnstyledButton>
        <Collapse in={linksOpened}>{links}</Collapse>
        {children}
      </ScrollArea>
    </Drawer>
  )
}

export default DrawerClient
