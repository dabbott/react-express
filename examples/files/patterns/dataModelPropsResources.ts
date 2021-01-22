export interface PostResource {
  id: string
  title: string
  author: string
  body: string
  image: string
}

export const posts: PostResource[] = [
  {
    id: '1',
    title: 'Article 1',
    author: 'Author 1',
    body: 'This is article 1',
    image: '//picsum.photos/id/27/100/100',
  },
  {
    id: '2',
    title: 'Article 2',
    author: 'Author 2',
    body: 'This is article 2',
    image: '//picsum.photos/id/37/100/100',
  },
  {
    id: '3',
    title: 'Article 3',
    author: 'Author 3',
    body: 'This is article 3',
    image: '//picsum.photos/id/47/100/100',
  },
]
