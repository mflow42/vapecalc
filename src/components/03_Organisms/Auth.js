import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Auth.css';
import md5 from 'md5';

// var md5 = require('md5');
console.log(md5('message'));
const FormItem = Form.Item;

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      psw: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changePsw = this.changePsw.bind(this);
  }
  changePsw = (value) => {
    this.setState({
      psw: value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // action = "http://perehodinapar.ru/calc/";
        // method = "post";

        fetch('http://perehodinapar.ru/calc/', {
          method: 'POST',
          headers: {
            'Host': 'perehodinapar.ru',
            'Connection': 'keep-alive',
            'Cache-Control': 'max-age=0',
            'Upgrade-Insecure-Requests': 1,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'Referer': 'http://perehodinapar.ru/calc/',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'en-US,en;q=0.8,ru;q=0.6',
            'X-Compress': null,
          },
          body: JSON.stringify({
            ips_username: 'user42',
            ips_password: 'Dtnth1990',
          })
        })

      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    let authKey = md5("psw");
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">

          <FormItem>
            {getFieldDecorator('auth_key', {
              rules: [{ required: false, message: 'Пожалуйста, введите свой логин!' }],
            })(
              <Input type="hidden" setFieldsValue={authKey}/>
              )}
          </FormItem>

          <FormItem>
            {getFieldDecorator('ips_username', {
              rules: [{ required: true, message: 'Пожалуйста, введите свой логин!' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Логин" />
              )}
          </FormItem>

          <FormItem>
            {getFieldDecorator('ips_password', {
              rules: [{ required: true, message: 'Пожалуйста, введите свой пароль!' }],
            })(
              <Input id="psw" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Пароль" onChange={this.changePsw} />
              )}
          </FormItem>

          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox name={"rememberMe"}>Запомнить меня</Checkbox>
              )}
            <a className="login-form-forgot" href="">Забыли пароль?</a>
            <Button type="primary" htmlType="submit" className="login-form-button">Войти</Button>
            Или <a href="http://perehodinapar.ru/calc/index.php?app=core&module=global&section=register">Зарегистрироваться</a>
          </FormItem>

        </Form>
      </div>
    );
  };
}
const Auth = Form.create()(AuthForm);

export default Auth;