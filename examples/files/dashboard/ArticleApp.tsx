import Article from './components/Article'
import Block from './components/Block'

export default function App() {
  return (
    <Block>
      <Article
        title="Example Title"
        summary="This is a summary of the article"
        image="//picsum.photos/200/200"
        author="Devin"
        url="/"
        formattedDate="Jan 20"
      />
    </Block>
  )
}
