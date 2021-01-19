import { useState } from 'react'
import Article from './components/Article'
import Block from './components/Block'
import Info from './components/Info'
import List from './components/List'
import { VerticalSpacer } from './components/Spacer'
import StarButton from './components/StarButton'
import Tabs from './components/Tabs'

function Overview() {
  return (
    <>
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
    </>
  )
}

export default function App() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  return (
    <main>
      <div style={{ display: 'flex' }}>
        <h1 style={{ flex: 1 }}>My Dashboard</h1>
        <StarButton activeTitle="Unwatch" inactiveTitle="Watch" />
      </div>
      <VerticalSpacer size={20} />
      <Tabs
        id="main-tabs"
        aria-label="Main tabs"
        tabs={[
          {
            title: 'Overview',
            content: <Overview />,
          },
          {
            title: 'Wallet',
            content: 'Tab 2',
          },
          {
            title: 'Vault',
            content: 'Tab 3',
          },
        ]}
        selectedIndex={selectedTabIndex}
        onChangeSelectedIndex={setSelectedTabIndex}
      />
    </main>
  )
}
