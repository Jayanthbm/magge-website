import { Row, Col, Menu, Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
const { Header } = Layout;
function MainHeader() {
  const logoText = {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '20px',
    textDecoration: 'none',
  };
  return (
    <Header className='header-fixed'>
      <Row>
        <Col xl={12} lg={12} md={12} sm={20} xs={20}>
          <div style={logoText}>Magge</div>
        </Col>
        <Col xl={12} lg={12} md={12} sm={4} xs={4}>
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={['1']}
            breakpoint='lg'
            collapsedWidth='0'
            overflowedIndicator={<MenuOutlined />}
          >
            <Menu.Item key='1'>Home</Menu.Item>
            <Menu.Item key='2'>About</Menu.Item>
            <Menu.Item key='3'>Gallery</Menu.Item>
            <Menu.Item key='4'>Events</Menu.Item>
            <Menu.Item key='5'>How to Reach</Menu.Item>
            <Menu.Item key='6'>Contact</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
}
export default MainHeader;
