import Nav from './components/Nav';
import ChatBody from './components/ChatBody';

import classNames from 'classnames/bind';
import styles from './Message.module.scss';

const cx = classNames.bind(styles);
const Message = () => {
    return (
        <div className={cx('message-page')}>
            <div className={cx('wrapper')}>
                <Nav />
                <ChatBody />
            </div>
        </div>
    );
};

export default Message;
