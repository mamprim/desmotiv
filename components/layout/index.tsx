import React, {ReactNode} from "react";
import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import { Menu } from 'antd';
import { Space, Typography } from 'antd';

const { Text, Link } = Typography;

interface ApplicationLayoutProps{
    children: ReactNode;
}

const items = [
    { label: 'Frases', key: 'item-1' }, // remember to pass the key prop
    { label: 'Sobre', key: 'item-2' } // which is required
  ];

export default function ApplicationLayout({children}: ApplicationLayoutProps){
    return  (
        <Layout>
      <Header><Menu mode="horizontal" theme="dark">
  <Menu.Item><Link href="/frases" >
  Frases
    </Link></Menu.Item>
  <Menu.Item><Link href="/about" >
  Sobre
    </Link></Menu.Item>
</Menu>;</Header>
      <Content>{children}</Content>
      <Footer><Text code>Desenvolvido por um <Text delete>des</Text>motivado</Text> 
          </Footer>
    </Layout>
        );
    
}

