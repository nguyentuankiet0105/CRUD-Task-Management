import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {  LaptopOutlined } from '@ant-design/icons';
import Body from '../layout/Body';
import "../Style/content.css"

const { SubMenu } = Menu;

const Content = () => {
  const { Content, Sider } = Layout;

  return (
    <Layout  id='content'> 
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0}}
        >
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Task Control">
            <ul className="app-list">
              <hr />
              <li>
                <Link to="/all">All Task</Link>
              </li>
              <br /> <hr />
              <li>
                <Link to="/">New Task</Link>
              </li>
              <br /> <hr />
              <li>
                <Link to="/inprogress">Doing Task</Link>
              </li>
              <br /> <hr />
              <li>
                <Link to="/done">Done Task</Link>
              </li>
              <br /> <hr />
            </ul>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }} >
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Body />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Content;
