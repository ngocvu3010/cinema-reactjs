import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Breadcrumb, Layout, Menu, theme, Button } from "antd";
import {Outlet} from "react-router-dom";

const { Header, Content, Footer } = Layout;

const {
  token: { colorBgContainer },
} = theme.useToken();

const items = [
  {label: "Movies", key: "movies"},
  {label: "Orders", key: "orders"},
  {label: "Users", key: "users"}
]

const AdminLayout = () => {
  return (
    <>
      <ToastContainer />
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items}
          />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content" style={{ background: colorBgContainer }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          TPIV ©2023 Created by Awsome team
        </Footer>
      </Layout>
    </>
  );
}
export default AdminLayout;
