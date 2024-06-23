import { ConfigProvider } from 'antd'
import { config } from './themes/config'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

function App() {
  return (
    <ConfigProvider theme={config}>
      <RouterProvider router={routes} />
    </ConfigProvider>
  )
}

export default App
