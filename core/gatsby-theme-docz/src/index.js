/** @jsx jsx */
import { ComponentsProvider, theme, useConfig } from 'docz'
import { jsx, Styled, ThemeProvider } from 'theme-ui'
import components from '~components'
import defaultTheme from '~theme'


const Theme = ({ children }) => {
  const config = useConfig()
  return (
    <ThemeProvider theme={config.themeConfig}>
      <ComponentsProvider components={components}>
        <Styled.root>{children}</Styled.root>
      </ComponentsProvider>
    </ThemeProvider>
  )
}

export default theme(defaultTheme)(Theme)
