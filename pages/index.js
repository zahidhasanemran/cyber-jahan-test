/* eslint-disable react-hooks/exhaustive-deps */

import { QueryKey } from "@constants/QueryKey"
import { dehydrate, QueryClient } from "@tanstack/react-query"
import Head from "next/head"
import { getUser } from "store/Others/User"
import { useMeData } from "store/Others/User/useMeData"

const label = { inputProps: { "aria-label": "Switch demo" } }

export default function Home() {
  const { data } = useMeData()

  return (
    <div>
      <Head>
        <title>.: Cyber Jahan :.</title>
        <meta name="description" content="A Test project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{JSON.stringify(data)}</main>
    </div>
  )
}

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery([QueryKey.USER], getUser, {
    staleTime: Infinity,
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
