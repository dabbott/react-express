import Article from './components/Article'
import Block from './components/Block'
import List from './components/List'

export default function App() {
  return (
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
  )
}
