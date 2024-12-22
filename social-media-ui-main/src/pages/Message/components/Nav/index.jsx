import { useNavigate } from 'react-router-dom';
import logo from '../../../../assets/images/logo/yahu.ico';
import classNames from 'classnames/bind';
import styles from './Nav.module.scss';

const cx = classNames.bind(styles);

const Nav = () => {
    const navigate = useNavigate();
    return (
        <div className={cx('nav')}>
            <div className={cx('nav-blocks')} onClick={() => navigate('/')}>
                <img src={logo} alt="YaHu" />
            </div>

            <div className={cx('nav-blocks')}></div>
            <div className={cx('nav-blocks')}></div>
        </div>
    );
};

export default Nav;
