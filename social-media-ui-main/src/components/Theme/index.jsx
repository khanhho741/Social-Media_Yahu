import styles from './Theme.module.scss';
import classNames from 'classnames/bind';

import { IoSunnyOutline  } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { enableDarkMode, disableDarkMode } from '../../action/ThemeAction';

const cx = classNames.bind(styles);

const ThemeComponent = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.theme.isDarkModeEnabled);
    return (
        <div
            className={cx('container')}
            onClick={() => (isDarkMode ? dispatch(disableDarkMode()) : dispatch(enableDarkMode()))}
        >
            <div className={cx('wrapper')}>
                <div className={cx('vertical-line', isDarkMode ? 'sun-line' : 'moon-line')} />
                <div className={cx('icon')}>
                    {isDarkMode ? (
                        <IoSunnyOutline size={25} className={cx('sun-icon')} />
                    ) : (
                        <IoMoonOutline size={25} className={cx('moon-icon')} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ThemeComponent;
