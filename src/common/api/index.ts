import { DefaultApi } from '@/openapi'

export function createApi() {
  return new DefaultApi({
    basePath: 'http://localhost:3000',
    isJsonMime: () => true, //これでええんかわからん
  })
}
