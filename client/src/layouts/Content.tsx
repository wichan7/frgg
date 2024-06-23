import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { palette } from '../themes/palette'
import styled from 'styled-components'

const { Content: AntdContent } = Layout

const S = {
  Content: styled(AntdContent)`
    padding: 20px;
    background-color: ${palette.white};
  `,
}

const Content = () => {
  return (
    <S.Content>
      <Outlet />
    </S.Content>
  )
}

export default Content
