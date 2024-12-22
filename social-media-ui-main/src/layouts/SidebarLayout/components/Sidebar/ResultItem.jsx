import classNames from 'classnames/bind';
import React from 'react';

import AppAvatar from '@/components/Avatar';

import styles from './Sidebar.module.scss';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

const ResultItem = ({ item }) => {
    const navigate = useNavigate();
    return (
        <div
            className={cx('search-result-item')}
            onClick={() => {
                navigate(`/${item.username}`);
            }}
        >
            <div className={cx('result-item-img')}>
                <AppAvatar src={item.avatar} size={40} />
            </div>
            <div className={cx('result-item-info')}>
                <span className={cx('result-item-name')}>{item.name}</span>
                <span className={cx('result-item-username')}>{item.username}</span>
            </div>
        </div>
    );
};
export default ResultItem;
