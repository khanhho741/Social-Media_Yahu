import ChatList from '../ChatList';
import ChatContent from '../ChatContent';

import classNames from 'classnames/bind';
import styles from './ChatBody.module.scss';

const cx = classNames.bind(styles);

const ChatBody = () => {
    return (
        <div className={cx('chat-body')}>
            <ChatList />
            <ChatContent />
        </div>
    );
};

export default ChatBody;
