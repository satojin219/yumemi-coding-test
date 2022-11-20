import { ReactElement } from 'react'
import { Global, css } from '@emotion/react'
import noramlize from 'normalize.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Home } from './Home'

const styles = css`
  ${noramlize}
`

function App(): ReactElement {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={styles} />
      <Home />
    </QueryClientProvider>
  )
}

export default App
