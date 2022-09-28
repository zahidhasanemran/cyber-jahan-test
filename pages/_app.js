import "../styles/globals.css"
import { QueryClientProvider, Hydrate } from "@tanstack/react-query"
import { queryClient } from "@config/reactQueryClient.config"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ThemeProvider } from "@mui/material"
import createEmotionCache from "@utils/createEmotionCache"
import { CacheProvider } from "@emotion/react"
import AuthProvider from "@context/authContext"
import Layout from "@components/Layout"
import ThemeContextProvider from "@context/themeContext"
import theme from "themes/theme"
import { useEffect, useState } from "react"
import GlobalLoader from "@components/Loader/GlobalLoader"
import { useRouter } from "next/router"

const clientSideEmotionCache = createEmotionCache()

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const start = () => setLoading(true)
    const end = () => setLoading(false)

    router.events.on("routeChangeStart", start)
    router.events.on("routeChangeComplete", end)
    router.events.on("routeChangeError", end)

    return () => {
      router.events.off("routeChangeStart", start)
      router.events.off("routeChangeComplete", end)
      router.events.off("routeChangeError", end)
    }
  }, [])

  return (
    <ThemeProvider theme={theme()}>
      <CacheProvider value={emotionCache}>
        <ThemeContextProvider>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <AuthProvider>
                {loading ? (
                  <GlobalLoader />
                ) : (
                  <Layout>
                    <Component {...pageProps}></Component>
                  </Layout>
                )}
              </AuthProvider>
            </Hydrate>
            {/* <ReactQueryDevtools /> */}
          </QueryClientProvider>
        </ThemeContextProvider>
      </CacheProvider>
    </ThemeProvider>
  )
}

export default MyApp
