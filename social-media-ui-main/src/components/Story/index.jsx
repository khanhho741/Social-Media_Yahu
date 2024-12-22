/* eslint-disable */
import { useEffect, useState, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

import styles from './Story.module.scss';

// import Swiper core and required modules
import { Navigation, EffectCards, Keyboard, Autoplay } from 'swiper';

import { NavigateBefore, NavigateNext, MoreHoriz, Close } from '@mui/icons-material';

import classNames from 'classnames/bind';
import AppAvatar from '../Avatar';
import { useDispatch } from 'react-redux';
import { closeStory } from '../../action/ThemeAction';
const cx = classNames.bind(styles);

// install Swiper modules

const dataTest = [
    {
        id: 1,
        img: 'https://d1hjkbq40fs2x4.cloudfront.net/2019-06-24/files/travel-portrait-photography-tips_1886_b.jpg',
    },
    {
        id: 2,
        img: 'https://i.pinimg.com/originals/0a/9b/66/0a9b66b9cfc9b49a71c4826b6dbfc028.png',
    },
    {
        id: 3,
        img: 'https://200lab-blog.imgix.net/2021/07/1_h5UGPzaL1E4dIy_JWDrsAw.png',
    },

    {
        id: 4,
        img: 'https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/newseventsimage_1675335768700_mainnews2012_x1.jpg',
    },
];

const Story = ({ indexSlide = 0 }) => {
    const dispatch = useDispatch();
    const timeCountdown = 15;
    const [progress, setProgress] = useState(0);

    const swiper = useSwiper();
    const swiperRef = useRef(null);

    useEffect(() => {
        // check ref is null or undefined
        const swiperInstance = swiperRef.current && swiperRef.current.swiper;

        // if change slide event active (next, prev), set timer progress to 0%
        const handleSlideChange = () => {
            setProgress(0);
        };

        const handleKeyDown = (e) => {
            // press Esc key
            if (e.keyCode === 27) {
                dispatch(closeStory());
            }
        };

        // set width % of timer
        const interval = setInterval(() => {
            setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 100 / (timeCountdown * 10) : 100));
        }, 100);

        swiperInstance.slideTo(indexSlide);

        if (swiperInstance) {
            swiperInstance.on('slideChange', handleSlideChange);
        }

        document.addEventListener('keydown', handleKeyDown);

        // cleanup function
        return () => {
            if (swiperInstance) {
                swiperInstance.off('slideChange', handleSlideChange);
            }
            clearInterval(interval);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    useEffect(() => {
        // check if the last slide, timer progress do not change to the next slide
        if (progress === 100 && !swiperRef.current.swiper.isEnd) {
            swiperRef.current.swiper.slideNext(500, true);
        } else if (progress === 100 && swiperRef.current.swiper.isEnd) {
            // auto close story if the end slide and progress = 100%
            dispatch(closeStory());
        }
    }, [progress, dispatch]);

    const btnNextClass = cx('swiper-custom-next');
    const btnPrevClass = cx('swiper-custom-prev');
    const disableClass = cx('swiper-button-disabled');
    return (
        <div className={cx('container')}>
            <div className={cx('close-btn')} title="Exit" onClick={() => dispatch(closeStory())}>
                <Close style={{ fontSize: '3rem' }} />
            </div>
            <div className={btnNextClass}>
                <NavigateNext style={{ fontSize: '4rem' }} />
            </div>
            <div className={btnPrevClass}>
                <NavigateBefore style={{ fontSize: '4rem' }} />
            </div>

            <Swiper
                ref={swiperRef}
                effect="cards"
                keyboard={{ enabled: true }}
                navigation={{ nextEl: `.${btnNextClass}`, prevEl: `.${btnPrevClass}`, disabledClass: disableClass }}
                modules={[Navigation, EffectCards, Keyboard, Autoplay]}
                className={cx('swiper')}
            >
                {dataTest.map((item) => (
                    <SwiperSlide className={cx('swiper-slide')} key={item.id}>
                        <div className={cx('story')}>
                            <header className={cx('story-header')}>
                                <div
                                    className={cx('timer')}
                                    style={{
                                        width: '100%',
                                        height: '2px',
                                        backgroundColor: '#FFFFFF30',
                                        borderRadius: '4px',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: `${progress}%`,
                                            height: '100%',
                                            backgroundColor: 'white',
                                            transition: progress === 0 ? 'none' : 'width 0.2s linear',
                                        }}
                                    />
                                </div>
                                <div className={cx('header-content')}>
                                    <div className={cx('story-info')}>
                                        <AppAvatar
                                            src="https://i.pinimg.com/originals/2a/40/ec/2a40ec0333897aa3309ffbfd5bff47d5.jpg"
                                            size={32}
                                        />
                                        <div className={cx('story-username')}>tampham4002</div>
                                        <div className={cx('story-time')}>2h ago</div>
                                    </div>

                                    <div className={cx('story-action')}>
                                        <MoreHoriz className={cx('icon')} />
                                    </div>
                                </div>
                            </header>
                            <img className={cx('story-img')} src={item.img} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Story;
