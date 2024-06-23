import { Divider, Flex, Layout } from 'antd'
import styled from 'styled-components'
import { palette } from '../themes/palette'
import { Link } from 'react-router-dom'
import { GithubOutlined, LinkOutlined, MailOutlined } from '@ant-design/icons'

const { Footer: AntdFooter } = Layout

const S = {
  Footer: styled(AntdFooter)`
    padding: 32px 0;
    border-top: 1px solid ${palette.border};
  `,
}

const Footer = () => {
  return (
    <S.Footer>
      <Flex gap={4} align="center" justify="center">
        Powered by wichan
        <Divider type="vertical" />
        <Link to="mailto:wichan.dev@gmail.com" target="_blank">
          <MailOutlined /> contact
        </Link>
        <Divider type="vertical" />
        <Link to="https://github.com/wichan7" target="_blank">
          <GithubOutlined /> github
        </Link>
        <Divider type="vertical" />
        <Link to="https://wichan7.github.io" target="_blank">
          <LinkOutlined /> blog
        </Link>
      </Flex>
    </S.Footer>
  )
}

export default Footer
