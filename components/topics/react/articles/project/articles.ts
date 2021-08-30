import A0, {meta as m0} from './0-introduce.mdx'
import A1, {meta as m1} from './1-basic.mdx'
import {ArticleData, ArticleSet} from "../../../topic";


export const ProjectArticles: ArticleData[] = [
  {Component: A0, meta: m0},
  {Component: A1, meta: m1},
]

export const ProjectArticleSet: ArticleSet = {
  id: 'project',
  name: '工程篇',
  articles: ProjectArticles,
}