import React, {FC} from 'react';
import cls from './NavBar.module.scss'
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";


interface NavBarProps {
    className?: string
}

export const NavBar: FC<NavBarProps> = () => {
    return (
        <div className={classNames(cls.navbar)}>
            <div className={classNames(cls.links)}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={classNames(cls.mainLine)} to={'/about'} >about</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} className={classNames(cls.mainLine)} to={'/'}>main</AppLink>
            </div>
        </div>
    );
};