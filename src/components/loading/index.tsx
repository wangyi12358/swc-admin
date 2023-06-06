import { Spin } from 'antd'
import styled from 'styled-components'

const Spinning = styled(Spin)`
  width: 100%;
  margin-top: 100px;
`

const Loading = () => {
  return (
    <Spinning />
  )
}

export default Loading
