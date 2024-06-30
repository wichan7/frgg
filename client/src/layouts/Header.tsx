import { Layout } from 'antd'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Typo, { typography } from '../components/typo/Typo'
import Menu from './Menu/Menu'

const { Header: AntdHeader } = Layout

const S = {
  Header: styled(AntdHeader)`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  `,
  Title: styled.div`
    display: flex;
    gap: 8px;
    cursor: pointer;
  `,
}

const Header = () => {
  const navigate = useNavigate()
  const goHome = () => navigate('/')

  return (
    <S.Header>
      <S.Title onClick={goHome}>
        <Typo {...typography.titleB}>메이플스토리 관상 퀴즈</Typo>
      </S.Title>
      <Menu />
    </S.Header>
  )
}

export default Header
