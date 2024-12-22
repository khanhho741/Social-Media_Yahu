import { useEffect,useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout';
import SidebarLayout from '../../layouts/SidebarLayout/SidebarLayout';
import MainContent from '../../components/MainContent';
import Story from '../../components/Story';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '@/action/UserAction';
import { useNavigate } from 'react-router-dom';
import { IoCreateOutline } from "react-icons/io5";
import CreatePost from '@/components/CreatePost';
const cx = classNames.bind(styles);

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.user.user);
    const storyVisible = useSelector((state) => state.story.isOpen);
    const indexSlide = useSelector((state) => state.story.indexSlide);
    const isHeaderLayout = useSelector((state) => state.layout.isHeaderLayout);
    const [showCreatePost, setShowCreatePost] = useState(false);
    useEffect(() => {
        document.title = 'YaHu';
        if (userInfo && userInfo.role.name === 'ADMIN') {
            dispatch(logoutUser());
            navigate('/login');
        }
        // eslint-disable-next-line
    }, []);
    return (
        <div className={cx('home')}>
            {/*{storyVisible && (*/}
            {/*    <div className={cx('story')}>*/}
            {/*        <Story indexSlide={indexSlide} />*/}
            {/*    </div>*/}
            {/*)}*/}
            {isHeaderLayout ? (
                <DefaultLayout>
                    <MainContent />
                </DefaultLayout>
            ) : (
                <SidebarLayout>
                    <MainContent />
                </SidebarLayout>
            )}
                        {/* Floating Create Post Button */}
                        <button
                className={cx('floating-create-btn')}
                onClick={() => setShowCreatePost(true)}
                title="Create Post"
            >
                <IoCreateOutline size={24} />
            </button>

            {/* Create Post Modal */}
            {showCreatePost && <CreatePost onClose={() => setShowCreatePost(false)} />}

        </div>
    );
};

export default Home;
