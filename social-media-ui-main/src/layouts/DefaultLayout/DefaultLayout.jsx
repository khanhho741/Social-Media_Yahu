import Navbar from './components/Navbar';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
const DefaultLayout = ({ children }) => {
    return (
        <div>
            {/* Header */}

            {/* Content page */}
            <div className={cx('default-layout')}>
                <Navbar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
