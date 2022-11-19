import { ReactElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Global, css } from '@emotion/react'
import noramlize from 'normalize.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const styles = css`
  ${noramlize}
`

function App(): ReactElement {
  const [count, setCount] = useState(0)
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={styles} />
      <div className="App">
        <div>
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </QueryClientProvider>
  )
}

export default App
