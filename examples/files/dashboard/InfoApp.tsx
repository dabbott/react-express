import Info from './components/Info'
import Block from './components/Block'

export default function App() {
  return (
    <Block>
      <Info
        title="Example Title"
        content="This is an Info component"
        links={[
          { title: 'Official website', url: '/' },
          { title: 'Whitepaper', url: '/' },
        ]}
      />
    </Block>
  )
}
