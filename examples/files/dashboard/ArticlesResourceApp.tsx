import Article from './components/Article'
import Block from './components/Block'
import Info from './components/Info'
import List from './components/List'
import { VerticalSpacer } from './components/Spacer'
import useFetch from './hooks/useFetch'
import { ArticleResource } from './resources'
import * as api from './api'

export default function App() {
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
