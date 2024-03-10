import React, {FC, useState} from 'react';
import cls from './SideBar.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {ToggleTheme} from "widgets/ToggleTheme/ui/ToggleTheme";


interface SideBarProps {
    className?: string
}

export const SideBar: FC<SideBarProps> = ({className}) => {

    const [collapsed, setCollapsed] = useState(false)

    const togle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={togle}>toggle</button>
            <div className={cls.switchers}>
                <ToggleTheme />
            </div>
        </div>
    );
};
