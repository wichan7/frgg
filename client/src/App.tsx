import { ConfigProvider } from 'antd'
import { config } from './themes/config'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

function App() {
  return (
    <ConfigProvider theme={config}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App
