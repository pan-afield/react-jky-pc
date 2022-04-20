// import { Button } from 'antd'
import './index.scss'
import logo from '@/assets/logo.png'
import { Form, Input, Button, Checkbox, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '@/store/actions'
import { useLocation } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const onFinish = async (values) => {
        const { mobile, code } = values
        try {
            await dispatch(login(mobile, code))
            message.success('登录成功')
            history.replace(location?.state?.returnUrl || '/')
        } catch (e) {
            message.error(e.response?.data?.message || '登录失败')
        }
        console.log(values);
    }
    return (
        // <div><Button type="primary">Button</Button></div>
        <div className="login">
            <div className="login-container">
                <img className='login-logo' src={logo} alt="" />
                <Form size='large' validateTrigger={["onChange", "onBlur"]} autoComplete="off"
                    onFinish={onFinish} initialValues={{ mobile: '13911111111', code: '246810', isAgree: true }}>
                    <Form.Item name={"mobile"} rules={[{ require: true, message: '请输入手机号' }, { pattern: /^1[3-9\d{9}]/, message: '手机格式不正确' }]}>
                        <Input prefix={<UserOutlined />} placeholder="请输入手机号"></Input>
                    </Form.Item>
                    <Form.Item name={"code"} rules={[{ required: true, message: '请输入验证码' }, { len: 6, message: '验证码为6个字符串' }]}>
                        <Input prefix={<LockOutlined />} placeholder="请输入验证码"></Input>
                    </Form.Item>
                    <Form.Item name={'isAgree'} valuePropName="checked"
                        rules={[{
                            validator: (_, value) => {
                                if (value === true) return Promise.resolve()
                                else return Promise.reject(new Error("请勾选我已阅读并同意"))
                            }
                        }]}>
                        <Checkbox>我已阅读并同意「用户协议」和「隐私条款」</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType='submit' block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login