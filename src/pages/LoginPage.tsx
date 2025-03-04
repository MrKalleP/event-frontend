
import { LockOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Row, Col } from 'antd';
import { useAuth } from "../components/login/AuthContextLogin";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const onFinish = (values: { username: string; password: string }) => {
        console.log("Received values of form: ", values);


        if (values.username === "test" && values.password === "password") {
            login(values.username);
            navigate("/");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <main className="loginPageContainer">
            <Row gutter={[16, 16]} justify="center" >
                <Col xs={24} sm={12} md={6} lg={6} >
                    <label><h2
                        style={{
                            marginBlock: "2rem",
                            fontSize: "1.8rem",
                            textAlign: "center",
                            textDecoration: "underline",
                            color: "var(--errors-color-)"
                        }}>  Sign in to enter the Event log system  <LoginOutlined style={{ color: "var(--Info-color-)", padding: ".4rem" }} /></h2></label>
                    <Form
                        name="login"
                        initialValues={{ remember: true }}
                        style={{
                            maxWidth: 600,
                            padding: "2rem",
                            borderRadius: ".5rem",
                            border: "1px solid var(--Info-color-)"
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                        </Form.Item>
                        <Form.Item>
                            <Flex justify="space-between" align="center">
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <a href="">Forgot password</a>
                            </Flex>
                        </Form.Item>

                        <Form.Item>
                            <Button block type="primary" htmlType="submit"
                                style={{
                                    backgroundColor: "var(--Info-color-)",
                                    marginBlock: ".5rem"
                                }}>
                                Log in
                            </Button>
                            or <a href="">Register now!</a>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </main>
    );
};


export default LoginPage