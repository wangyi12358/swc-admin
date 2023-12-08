import { login } from '@/services/api'
import { setCookie } from '@/utils/cookie'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { LoginForm, ProFormText } from '@ant-design/pro-components'
import { FC } from 'react'
import styled from 'styled-components'

const LoginContent = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const LoginFormContent = styled.div`
  margin-top: 30vh;
  margin-left: 20vh;
`

const Title = styled.div`
  margin-bottom: 60px;
  font-size: 18px;
`

const Login: FC = () => {
  return (
    <LoginContent>
      <LoginFormContent>
        <LoginForm<API.LoginParams>
          initialValues={{
            username: 'admin',
            password: '666666'
          }}
          onFinish={async values => {
            const res = await login(values)
            if (res?.token) {
              setCookie(import.meta.env.VITE_TOKEN_KEY, res.token, 2)
              location.href = import.meta.env.BASE_URL
            }
          }}
          title={<Title>Base Admin</Title>}
        >
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            placeholder="请输入用户名"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            placeholder="请输入密码"
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
        </LoginForm>

      </LoginFormContent>
    </LoginContent>
  )
}
export default Login