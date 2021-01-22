import styles from './styles'
import { posts, PostResource } from './resources'

interface Props {
  post: PostResource
}

function Post({ post: { title, body, image } }: Props) {
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
  return posts.map((post) => <Post key={post.id} post={post} />)
}
