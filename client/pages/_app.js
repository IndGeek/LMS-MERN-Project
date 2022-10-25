// this file runs before any frontend, so importing bootstrap & ant.design icons to load before

import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'

function MyApp ({Component, pageProps}) {
    return <Component {...pageProps} />;
}

export default MyApp;