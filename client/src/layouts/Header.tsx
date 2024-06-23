import { Layout, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const { Header: AntdHeader } = Layout

const S = {
  Header: styled(AntdHeader)`
    position: sticky;
    top: 0;
    display: flex;
  `,
  Title: styled.span``,
  Menu: styled(Menu)`
    height: 64px;
  `,
}

const Header = () => {
  const navigate = useNavigate()

  const goHome = () => navigate('/')
  const goRank = () => navigate('/rank')

  return (
    <S.Header>
      <S.Title>메이플스토리 관상 퀴즈</S.Title>
      <S.Menu
        mode="horizontal"
        items={[
          { key: '홈', label: '홈', onClick: goHome },
          { key: '랭킹', label: '랭킹', onClick: goRank },
        ]}
      />
    </S.Header>
  )
}

export default Header
