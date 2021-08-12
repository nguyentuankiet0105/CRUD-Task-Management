import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Button, Input } from 'antd';
import '../Style/Header.css';

const Header = () => {
  const { Header } = Layout;
  return (
    <Layout>
      <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Button type="primary" className="hd_btn">
            <Link to="/home">Create New Tasks</Link>
          </Button>
          <Input placeholder="input search text" id='hd_ipt'/>
          <Button type="primary" className="hd_btn">Search</Button>
        </Menu>
      </Header>
    </Layout>
  );
};
export default Header;
