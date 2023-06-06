import styled from 'styled-components'
import { Layout } from 'antd'

export const Header = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.span`
  color: white;
  margin-left: 16px;
  font-weight: 600;
`

export const Left = styled.div`
  display: flex;
  align-items: center;
`

export const Right = styled.div`
  color: white;
`
