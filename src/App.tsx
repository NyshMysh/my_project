import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {

    const {theme, toggleTheme} = useTheme()


    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/about'} >about</Link>
            <Link to={'/'}>main</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                        <Route path='/' element={<MainPageAsync />}/>
                        <Route path='/about' element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
            <button onClick={toggleTheme}>set Theme</button>
        </div>
    );
};

export default App;