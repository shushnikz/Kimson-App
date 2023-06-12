import React from 'react'
import { Link } from 'react-router-dom'
import DefaultLayout from '../components/DefaultLayout'
import { Button, Col, Form, Input, Row } from 'antd'

const Signin = () => {
    return (
        <div className="register">
            <Row justify='center' className="flex align-tems-center">
                <Col lg={10} sm={24} className="bs p-5 mt-5 register-form">
                    <h3>Login Page</h3>
                    <hr />
                    <Form layout="vertical">
                        <Form.Item label="username" name="username" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="password" name="password" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Button className="mb-3 btn btn-dark" htmlType='submit'>Sign in</Button>
                        <br></br>
                        <Link to="/signup">Don't have an account? Click here to Register</Link>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Signin
