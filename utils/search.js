import * as Guidebook from 'react-guidebook'
import guidebook from '../guidebook'

let searchDocuments = []
let searchIndexPromise = undefined

export const searchPages = query => {
  if (!searchIndexPromise) {
    searchIndexPromise = Promise.all([
      import('../searchIndex'),
      import('flexsearch'),
    ]).then(([{ indexData, documents }, { default: FlexSearch }]) => {
      searchDocuments = documents
      const search = new FlexSearch()
      search.import(indexData)
      return search
    })
  }

  return searchIndexPromise.then(searchIndex =>
    Guidebook.searchPages(guidebook, searchIndex, searchDocuments, query)
  )
}

export const searchTextMatch = (id, query) =>
  Guidebook.searchTextMatch(guidebook, searchDocuments, id, query)
