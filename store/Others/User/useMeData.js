import { useQuery } from "@tanstack/react-query"
import { QueryKey } from "@constants/QueryKey"
import { getUser } from "store/Others/User"

export const useMeData = () => {
  return useQuery([QueryKey.USER], getUser)
}
