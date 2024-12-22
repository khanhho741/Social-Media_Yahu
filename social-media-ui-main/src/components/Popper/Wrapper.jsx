import classNames from 'classnames/bind';
import style from './Popper.module.scss';

const cx = classNames.bind(style);

const Wrapper = ({ children }) => {
    return <div className={cx('wrapper')}>{children}</div>;
};

export default Wrapper;
