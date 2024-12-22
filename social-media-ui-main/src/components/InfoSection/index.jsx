import { Avatar } from '@mui/material';

import classNames from 'classnames/bind';
import styles from './InfoSection.module.scss';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

const InfoSection = () => {
    const userInfo = useSelector((state) => state.user.user);
    return (
        <div>
            <div className={cx('info-container')}>
                <Avatar className={cx('info-image')} src={userInfo.avatar} />
                <div className={cx('info-content')}>
                    <div className={cx('info-username')}>{userInfo.name}</div>
                    <div className={cx('info-description')}>{userInfo.username}</div>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
