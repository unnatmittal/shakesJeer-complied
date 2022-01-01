import React from 'react';
import Video from './video';
import './main.css'
import Card from './card';
import Menu from './menuApi';
const Main = () => {
    const [menuData, setMenuData] = React.useState(Menu);
    return (
        <div className="main">
            <Video />
            <Card menuData={menuData}/>
        </div>
    )
}

export default Main;
