import { LockOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Row, Col, message } from 'antd';
import { useAuth } from "../hooks/useAuthHook";
import { useNavigate, Link } from "react-router-dom";
import { FetchOneUser } from '../utils/ApiStore';
import { useEffect } from 'react';

const LoginPage = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const { user, login } = auth;

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    if (!auth) return null;

    const onFinish = async (values: { userFirstName: string; userPassword: string }) => {
        const { userFirstName, userPassword } = values;

        if (!userFirstName.trim() || !userPassword.trim()) {
            return message.error("All fields are mandatory!");
        }

        try {
            const fetchedUser = await FetchOneUser(userFirstName, userPassword);

            if (fetchedUser) {
                login(userFirstName, userPassword);
                message.success("Welcome! You are logged in.");
                navigate("/");
            } else {
                message.error("Incorrect username or password.");
            }
        } catch (error) {
            console.error("Login error:", error);
            message.error("Something went wrong while logging in.");
        }
    };

    return (
        <main className="loginPageContainer">
            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={24} md={12} lg={8}>
                    <h2
                        style={{
                            display: "flex",
                            margin: "2rem",
                            fontSize: "1.8rem",
                            textAlign: "center",
                            color: "var(--errors-color-)"
                        }}
                    >
                        Sign in to enter the Event log system
                        <LoginOutlined style={{ color: "var(--Info-color-)", padding: ".4rem" }} />
                    </h2>
                    <Form onFinish={onFinish}
                        name="login"
                        initialValues={{ remember: true }}
                        style={{
                            maxWidth: 600,
                            padding: "2rem",
                            borderRadius: ".5rem",
                            border: "1px solid var(--Info-color-)"
                        }}
                    >
                        <Form.Item
                            name="userFirstName"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="userPassword"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                        </Form.Item>
                        <Form.Item>
                            <Flex justify="space-between" align="center">
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Link to="/forgot-password">Forgot password</Link>
                            </Flex>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                block
                                type="primary"
                                htmlType="submit"
                                style={{
                                    backgroundColor: "var(--Info-color-)",
                                    marginBlock: ".5rem"
                                }}
                            >
                                Log in
                            </Button>
                            or <Link to="/register">Register now!</Link>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </main>
    );
};

export default LoginPage;