import {Menu} from 'antd';
import Link from 'next/Link';
import {AppstoreOutlined, LoginOutlined, UserAddOutlined} from '@ant-design/icons';

const {Item} = Menu; 

const TopNav = ()=>{
    return(
        <Menu mode="horizontal">
            <Item icon={<AppstoreOutlined/>}>
                <Link href="/">
                    <a className = "nav-items">Home</a>
                </Link>
            </Item>

            <Item icon={<LoginOutlined/>}>
                <Link href="/login">
                    <a className = "nav-items">Login</a>
                </Link>
            </Item>

            <Item icon={<UserAddOutlined/>}>
                <Link href="/register">
                    <a className = "nav-items">Register</a>
                </Link>
            </Item>
        </Menu>
    )
}

export default TopNav;