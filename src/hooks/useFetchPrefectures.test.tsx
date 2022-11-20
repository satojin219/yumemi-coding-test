import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactNode } from 'react'
import { server } from '../mocks/server'
import { renderHook, waitFor } from '@testing-library/react'
import { useFetchPrefectures } from './useFetchPrefectures'

type WrapperType = { children: ReactNode }

describe('useFetchPrefectures', () => {
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

  test('都道府県API通信成功', async () => {
    const { result } = renderHook(() => useFetchPrefectures(), { wrapper })
    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    await waitFor(() => expect(result.current.data?.result).toHaveLength(47))
    expect(result.current.error).toBeNull()
    expect(result.current.isLoading).toBeFalsy()
  })
})
