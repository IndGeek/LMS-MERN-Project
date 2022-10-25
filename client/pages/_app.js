// this file runs before any frontend, so importing bootstrap & ant.design icons to load before

import TopNav from '../components/TopNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import '../public/css/styles.css'

function MyApp ({Component, pageProps}) {
    return (
        <>
            <TopNav/>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;