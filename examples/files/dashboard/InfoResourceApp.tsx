import Info from './components/Info'
import Block from './components/Block'
import useFetch from './hooks/useFetch'
import * as api from './api'
import { InfoResource } from './resources'

export default function App() {
  const info = useFetch<InfoResource>(api.info(1))

  if (info.status !== 'success') {
    return <span>Loading...</span>
  }

  const data = info.value

  return (
    <Block>
      <Info title={data.title} content={data.content} links={data.links} />
    </Block>
  )
}
