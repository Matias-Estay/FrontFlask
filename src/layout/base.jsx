import { useState } from 'react';
import { Outlet} from 'react-router'
import { Avatar } from 'antd';
import {
  DesktopOutlined,
} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from 'antd';

const Base = () => {
  const { Header, Content, Footer, Sider } = Layout;
  function getItem(label, key, icon) {
    return {
      label,
      key,
      icon
    };
  }
  const items = [
    getItem('Supermercados', '1',   <Avatar size={30} src="../chile.jpg" />),
    getItem('Option 2', '2', <DesktopOutlined />),
    // getItem('User', 'sub1', <UserOutlined />, [
    //   getItem('Tom', '3'),
    //   getItem('Bill', '4'),
    //   getItem('Alex', '5'),
    // ]),
    // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    // getItem('Files', '9', <FileOutlined />),
  ];
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const ClickMenu = (e) => {
    switch(e.key){
      case '1':
        navigate('/homechile')
        break
      default:
        navigate('/test')
    }
    console.log('click ', e);
  };
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" style={{marginTop:'60px'}}/>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={ClickMenu}/>
      </Sider>
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Outlet/>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          La información es obtenida de fuentes publicas, la mantención es dependiende de los cambios de cada fuente utilizada. No se garantiza disponibilidad del 100%
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Base;