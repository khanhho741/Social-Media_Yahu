import Sidebar from './components/Sidebar';

import classNames from 'classnames/bind';
import styles from './SidebarLayout.module.scss';
const cx = classNames.bind(styles);
const SidebarLayout = ({ children }) => {
    return (
        <div>
            <div className={cx('sidebar-layout')}>
                <Sidebar />
                {/* Content page */}
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

export default SidebarLayout;
