import { Avatar } from '@mui/material';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

const AccountItem = ({ data }) => {
    return (
        <div className={cx('wrapper-result')}>
            <Avatar className={cx('avatar-account')} src={data.avatar} />
            <div className={cx('info-account')}>
                <h4 className={cx('name-account')}>
                    <span>{data.name}</span>
                </h4>
                <span className={cx('username-account')}>{data.username}</span>
            </div>
        </div>
    );
};

export default AccountItem;
