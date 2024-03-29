import React from 'react';
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/TheneProvider";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";
import {SideBar} from "widgets/SideBar";


const App = () => {

    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar />
            <div className="content-page">
                <SideBar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;