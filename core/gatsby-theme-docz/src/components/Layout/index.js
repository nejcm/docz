/** @jsx jsx */
import { Global } from '@emotion/core'
import { useRef, useState } from 'react'
import { Box, Flex, jsx } from 'theme-ui'
import global from '~theme/global'
import { Header } from '../Header'
import { MainContainer } from '../MainContainer'
import { Sidebar } from '../Sidebar'
import * as styles from './styles'

export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  const nav = useRef()

  return (
    <Flex sx={{ '& > div': { flex: '1 1 auto' } }} data-testid="layout">
      <Global styles={global} />
      <Box sx={styles.main}>
        <Header onOpen={() => setOpen(s => !s)} />
        <div sx={styles.wrapper}>
          <Sidebar
            ref={nav}
            open={open}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            onClick={() => setOpen(false)}
          />
          <MainContainer data-testid="main-container">{children}</MainContainer>
        </div>
      </Box>
    </Flex>
  )
}
