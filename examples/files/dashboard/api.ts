export const BASE_URL =
  'https://my-json-server.typicode.com/dabbott/dashboard-json-server'

export function articles(id?: number): string {
  return `${BASE_URL}/articles${id !== undefined ? `/${id}` : ''}`
}

export function info(id?: number): string {
  return `${BASE_URL}/info${id !== undefined ? `/${id}` : ''}`
}
