import { Menu as AntdMenu } from 'antd'
import styled from 'styled-components'
import { childRoutes } from '../../routes'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const MenuStyle = styled(AntdMenu)`
  height: 64px;
`

const Menu = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [currentKey, setCurrentKey] = useState(location.pathname.split('/')[1])

  useEffect(() => {
    setCurrentKey(location.pathname.split('/')[1])
  }, [location])

  return (
    <MenuStyle
      mode="horizontal"
      selectedKeys={[currentKey]}
      items={childRoutes.map((route) => ({
        key: route.path,
        label: route.label,
        onClick: () => navigate(route.path),
      }))}
    />
  )
}

export default Menu
