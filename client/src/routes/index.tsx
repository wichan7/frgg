import { NonIndexRouteObject, createBrowserRouter } from 'react-router-dom'
import Layout from '../layouts'
import HomePage from '../pages/Home'
import RankPage from '../pages/Rank'

interface ChildRouteObject extends NonIndexRouteObject {
  label: '홈' | '랭킹'
  path: string
}

export const childRoutes: ChildRouteObject[] = [
  { label: '홈', path: '', element: <HomePage /> },
  { label: '랭킹', path: 'rank', element: <RankPage /> },
]

export const parentRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: childRoutes,
  },
]

export const router = createBrowserRouter(parentRoutes)
