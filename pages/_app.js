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

const clientSideEmotionCache = createEmotionCache()

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <ThemeProvider theme={theme()}>
      <CacheProvider value={emotionCache}>
        <ThemeContextProvider>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <AuthProvider>
                <Layout>
                  <Component {...pageProps}></Component>
                </Layout>
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
