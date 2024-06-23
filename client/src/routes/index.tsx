import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layouts'
import HomePage from '../pages/Home'
import RankPage from '../pages/Rank'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'rank', element: <RankPage /> },
    ],
  },
])
