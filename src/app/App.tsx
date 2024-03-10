import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/TheneProvider";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";


const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/about'} >about</Link>
            <Link to={'/'}>main</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                        <Route path='/' element={<MainPage />}/>
                        <Route path='/about' element={<AboutPage />} />
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>set Theme</button>
        </div>
    );
};

export default App;