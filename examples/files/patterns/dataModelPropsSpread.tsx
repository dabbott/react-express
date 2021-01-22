import styles from './styles'
import { posts } from './resources'

interface Props {
  title: string
  body: string
  image: string
}

function Post({ title, body, image }: Props) {
  return (
    <article style={styles.article}>
      <div style={styles.content}>
        <h2 style={styles.title}>{title}</h2>
        <p>{body}</p>
      </div>
      <img src={image} alt="" />
    </article>
  )
}

export default function App() {
  return posts.map((post) => <Post key={post.id} {...post} />)
}
