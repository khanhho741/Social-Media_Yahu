import * as NotifyService from '@/services/NotifyService';
import classNames from 'classnames/bind';
import styles from './NotifyItem.module.scss';
import { Avatar } from '@mui/material';

const cx = classNames.bind(styles);
const NotifyItem = ({ content, changeCount, seenNotify }) => {
    const splitValue = content.value.split('###');

    const seeNotifyApi = async () => {
        const result = await NotifyService.seenNotify({
            ids: [content.id],
        });
        if (result.data) {
            seenNotify(content.id);
            changeCount();
        }
    };
    return (
        <div
            className={cx('wrapper')}
            onClick={() => {
                if (content.status === 'WAITING') {
                    seeNotifyApi();
                }
            }}
        >
            <div className={cx('user-info')}>
                <Avatar src={splitValue[0]} />
                <div className={cx('info')}>
                    <div className={cx('info-name')}>{splitValue[1]}</div>
                </div>
            </div>
            {content.status === 'WAITING' && <div className={cx('dot')}></div>}
        </div>
    );
};

export default NotifyItem;
