import App from './App.tsx'
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import { ArticlesList } from './components/ArticlesList/ArticlesList.tsx'
import { ArticlePage } from './pages/ArticlePage/ArticlePage.tsx'

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>

        <Route index element={<ArticlesList />} />

        <Route path="v4/articles" element={<ArticlesList />} />
         <Route path="v4/articles/:id" element={<ArticlePage />} />
      </Route>
    </Routes>
  </Router>
)
