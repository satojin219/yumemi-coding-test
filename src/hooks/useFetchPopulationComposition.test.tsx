import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactNode } from 'react'
import { server } from '../mocks/server'
import { renderHook, waitFor } from '@testing-library/react'
import { useFetchPopulationComposition } from './useFetchPopulationComposition'

type WrapperType = { children: ReactNode }

describe('useFetchPopulationComposition', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: 0
      }
    }
  })
  const wrapper = ({ children }: WrapperType): JSX.Element => {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
  }

  beforeAll(() => server.listen())
  afterEach(() => {
    server.resetHandlers()
    queryClient.clear()
  })
  afterAll(() => server.close())

  test('人口構成API通信成功', async () => {
    const { result } = renderHook(() => useFetchPopulationComposition(11), {
      wrapper
    })
    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    await waitFor(() =>
      expect(result.current.data?.result.data).toHaveLength(4)
    )
    await waitFor(() =>
      expect(result.current.data?.result.data[0].label).toBe('総人口')
    )
    expect(result.current.error).toBeNull()
    expect(result.current.isLoading).toBeFalsy()
  })
})
