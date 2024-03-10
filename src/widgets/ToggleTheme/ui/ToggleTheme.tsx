import React, {FC} from 'react';
import cls from './ToggleTheme.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {Theme, useTheme} from "app/providers/TheneProvider";
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import {Button} from "shared/ui/Button/Button";

interface ToggleThemeProps {
    className?: string
}

export const ToggleTheme: FC<ToggleThemeProps> = ({className}) => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames(cls.ToggleTheme, {}, [className])}>
            <Button onClick={toggleTheme}>
                { theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
            </Button>
        </div>
    );
};
