import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import { Container, Row, Col } from 'react-bootstrap';
import { onSnapshot, query, collection, where, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';

// Components
import Notification from '../Notification';
import Invitation from '../Invitation';
import Search from '@components/Search';
import Theme from '@components/Theme';
// Assets
import useFirestore from '@/hooks/useFirestore';
import { toast, ToastContainer } from 'react-toastify';
import logoLight from '@/assets/images/logo/logo.jpg';
import { RiMessengerLine } from "react-icons/ri";
import { IoCreateOutline } from "react-icons/io5";


// Styles
import styles from './Navbar.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// Action
import { logoutUser, updateUserListPost } from '@/action/UserAction';
import { updateCurrentRoom } from '@/action/ChatAction';
import { sidebarLayout } from '@/action/ThemeAction';

// Service
import * as UserService from '@/services/UserService';
import AppAvatar from '@components/Avatar';
import CreatePost from '@/components/CreatePost';

const cx = classNames.bind(styles);
const ChangePasswordModal = ({ onClose }) => {
    const userInfo = useSelector((state) => state.user.user);
    const [passwords, setPasswords] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setPasswords({
            ...passwords,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!passwords.oldPassword || !passwords.newPassword || !passwords.confirmPassword) {
            toast.error('Vui lòng điền đầy đủ thông tin!');
            return;
        }
    
        if (passwords.newPassword !== passwords.confirmPassword) {
            toast.error('Mật khẩu mới không khớp!');
            return;
        }
    
        if (passwords.newPassword.length < 6) {
            toast.error('Mật khẩu mới phải có ít nhất 6 ký tự!');
            return;
        }
    
        setLoading(true);
        try {
            const result = await UserService.changePassword(userInfo.username, {
                oldPassword: passwords.oldPassword,
                newPassword: passwords.newPassword,
                confirmNewPassword: passwords.confirmPassword
            });
            
            if (result.success) {
                toast.success('Đổi mật khẩu thành công!');
                onClose();
            } else {
                toast.error(result.message || 'Đổi mật khẩu thất bại!');
            }
        } catch (error) {
            // Xử lý lỗi cụ thể cho mật khẩu cũ không đúng
            if (error.message.includes('không đúng')) {
                toast.error('Mật khẩu hiện tại không đúng!');
            } else {
                toast.error(error.message || 'Đổi mật khẩu thất bại! Vui lòng thử lại sau.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={cx('modal')}>
            <div className={cx('modal-content')}>
                <h2 className={cx('modal-title')}>Đổi mật khẩu</h2>
                <form onSubmit={handleSubmit}>
                    <div className={cx('form-group')}>
                        <input
                            type="password"
                            name="oldPassword"
                            placeholder="Mật khẩu hiện tại"
                            value={passwords.oldPassword}
                            onChange={handleChange}
                            className={cx('form-input')}
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <input
                            type="password"
                            name="newPassword"
                            placeholder="Mật khẩu mới"
                            value={passwords.newPassword}
                            onChange={handleChange}
                            className={cx('form-input')}
                        />
                    </div>
                    <div className={cx('form-group')}>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Xác nhận mật khẩu mới"
                            value={passwords.confirmPassword}
                            onChange={handleChange}
                            className={cx('form-input')}
                        />
                    </div>
                    <div className={cx('button-group')}>
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={loading}
                            className={cx('cancel-button')}
                        >
                            Hủy
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className={cx('submit-button')}
                        >
                            {loading ? 'Đang xử lý...' : 'Đổi mật khẩu'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const Navbar = () => {
    const userInfo = useSelector((state) => state.user.user);
    const isDarkMode = useSelector((state) => state.theme.isDarkModeEnabled);
    //const count = useSelector((state) => state.chat.count);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [count, setCount] = useState(0);
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toProfile = () => {
        listUserPostApi();
    };
    //gọi Api trang Profile User
    const listUserPostApi = async () => {
        const result = await UserService.getUserListPost();
        if (result.success) {
            dispatch(updateUserListPost(result.data));
            navigate('/profile');
        }
    };
    const handleCloseModal = () => {
        setModal(false);
    };

    const handleClosePasswordModal = () => {
        setShowPasswordModal(false);
    };
    //xử lý khi Logout
    const handleLogout = () => {
        toast.dark('Waiting a minute!');
        setTimeout(() => {
            dispatch(updateCurrentRoom({}));
            dispatch(logoutUser());
            navigate('/login');
        }, 1500);
        //set offline in firestore
        updateDoc(doc(db, 'user', userInfo.username), {
            isOnline: false,
            date: serverTimestamp(),
        });
    };

    const roomsCondition = useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: userInfo.username,
        };
    }, [userInfo.username]);
    const rooms = useFirestore('rooms', roomsCondition);

    useEffect(() => {
        setCount(0);
        const chatRoom = (room) => {
            const q = query(collection(db, 'messages'), where('room', '==', room));

            const unsubcribe = onSnapshot(q, (snapshot) => {
                const document = snapshot.docs
                    .filter((doc) => doc.data().user !== userInfo.username && doc.data().status === 'WAITING')
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                if (document.length > 0) {
                    setCount((prev) => prev + 1);
                }
            });
            return unsubcribe;
        };
        rooms.forEach((room) => chatRoom(room.id));
        // eslint-disable-next-line
    }, [rooms]);
    return (
        <div>
            <ToastContainer />
            {modal && <CreatePost onClose={handleCloseModal} />}
            {showPasswordModal && <ChangePasswordModal onClose={handleClosePasswordModal} />}

            <div className={cx(`${isDarkMode ? 'theme-dark' : 'theme-light'}`, 'navbar__barContent')}>
                <Container style={{ maxWidth: 'var(--default-layout-width)' }}>
                    <Row className="d-flex align-items-center justify-content-between">
                        <Col>
                            <Link to="/">
                                <img src={logoLight} alt="logo" height="45px" style={{ paddingTop: '4px' }} />
                            </Link>
                        </Col>
                        <Col>
                            <Search darkMode={isDarkMode} />
                        </Col>
                        <Col className="d-flex align-items-center justify-content-end position-relative">
                            <IoCreateOutline 
                                titleAccess="Create"
                                style={{ fontSize: '3rem', transition: 'all 0.3s' }}
                                className={cx('navbar-icon', 'add')}
                                onClick={() => setModal(true)}
                            />
                            <div className={cx('messages')}>
                                <RiMessengerLine  
                                    style={{ fontSize: '3rem', transition: 'all 0.3s' }}
                                    fontSize="large"
                                    title="Messages"
                                    className={cx('navbar-icon')}
                                    onClick={() => navigate('/messages')}
                                />
                                {count > 0 && (
                                    <div className={cx('count')}>
                                        <span>{count}</span>
                                    </div>
                                )}
                            </div>
                            <Invitation />
                            <Notification />

                            <div className={cx('dropdown')}>
                                <span style={{ display: 'flex' }}>
                                    <Link to="/profile">
                                        <AppAvatar src={userInfo.avatar} size={32} />
                                    </Link>
                                </span>
                                <div className={cx(`${isDarkMode ? 'theme-light' : ''}`, 'dropdown-content')}>
                                    <div className={cx('dropdown-item')} onClick={toProfile}>
                                        Trang cá nhân
                                    </div>
                                    <div
                                        className={cx('dropdown-item')}
                                        onClick={() => {
                                            dispatch(sidebarLayout());
                                        }}
                                    >
                                        <span>Đổi giao diện</span>
                                        <div title="Dark/Light mode" style={{ height: '30px' }}></div>
                                    </div>
                                    <div 
                                        className={cx('dropdown-item')} 
                                        onClick={() => setShowPasswordModal(true)}
                                    >
                                        <span>Đổi mật khẩu</span>
                                    </div>
                                    <div className={cx('dropdown-item')} onClick={handleLogout}>
                                        <span>Đăng xuất</span>
                                    </div>
                                </div>
                            </div>
                            {/* Thêm ThemeComponent */}
                            <Theme />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;
