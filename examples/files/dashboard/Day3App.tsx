import { useEffect, useState } from 'react'
import Article from './components/Article'
import Block from './components/Block'
import Button from './components/Button'
import Info from './components/Info'
import List from './components/List'
import { HorizontalSpacer, VerticalSpacer } from './components/Spacer'
import StarButton from './components/StarButton'
import Tabs from './components/Tabs'
import useFetch from './hooks/useFetch'
import { ArticleResource, InfoResource } from './resources'
import * as api from './api'
import Trade from './components/Trade'

function Articles() {
  const articles = useFetch<ArticleResource[]>(api.articles())

  if (articles.status !== 'success') {
    return <span>{articles.status === 'failure' ? 'Error' : 'Loading...'}</span>
  }

  return (
    <List>
      {articles.value.map((article) => (
        <Article
          title={article.title}
          summary={article.summary}
          image={article.image}
          author={article.author}
          url={article.url}
          formattedDate={article.formattedDate}
        />
      ))}
    </List>
  )
}

function HeroInfo() {
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

function Overview() {
  return (
    <>
      <HeroInfo />
      <VerticalSpacer size={20} />
      <Trade />
      <VerticalSpacer size={20} />
      <Articles />
    </>
  )
}

export default function App() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('theme--dark')
    } else {
      document.documentElement.classList.remove('theme--dark')
    }
  }, [isDarkMode])

  return (
    <main>
      <div style={{ display: 'flex' }}>
        <h1 style={{ flex: 1 }}>My Dashboard</h1>
        <Button
          onClick={() => {
            setIsDarkMode(!isDarkMode)
          }}
        >
          Enable {isDarkMode ? 'light' : 'dark'} mode
        </Button>
        <HorizontalSpacer size={12} />
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
