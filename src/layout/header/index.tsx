import { memo } from 'react'
import { Header, Title, Left, Right } from './style.ts'

const HeaderPage = memo(() => {

  return (
    <Header>
      <Left>
        <img src="/vite.svg" alt="" />
        <Title>Admin</Title>
      </Left>
      <Right>
        Right
      </Right>
    </Header>
  )
})

export default HeaderPage
