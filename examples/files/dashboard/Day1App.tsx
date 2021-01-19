import Article from './components/Article'
import Block from './components/Block'
import Info from './components/Info'
import List from './components/List'
import { VerticalSpacer } from './components/Spacer'
import StarButton from './components/StarButton'

export default function App() {
  return (
    <main>
      <div style={{ display: 'flex' }}>
        <h1 style={{ flex: 1 }}>My Dashboard</h1>
        <StarButton activeTitle="Unwatch" inactiveTitle="Watch" />
      </div>
      <VerticalSpacer size={20} />
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
      <VerticalSpacer size={20} />
      <List>
        <Article
          title="Example Title"
          summary="This is a summary of the article"
          image="//picsum.photos/200/200"
          author="Devin"
          url="/"
          formattedDate="Jan 20"
        />
        <Article
          title="Example Title"
          summary="This is a summary of the article"
          image="//picsum.photos/200/200"
          author="Devin"
          url="/"
          formattedDate="Jan 20"
        />
        <Article
          title="Example Title"
          summary="This is a summary of the article"
          image="//picsum.photos/200/200"
          author="Devin"
          url="/"
          formattedDate="Jan 20"
        />
      </List>
    </main>
  )
}
