import {publicAxios} from "@config/axios.config.js"

export const getUser = async () => {
  let resp = await publicAxios.get('user')
  return resp.data
  // fetch('http://localhost:3000/api/user').then((resp) => resp.json())
}