import angryIcon from '@/assets/images/reactIcon/angry.svg';
import hahaIcon from '@/assets/images/reactIcon/haha.svg';
import likeIcon from '@/assets/images/reactIcon/like.svg';
import loveIcon from '@/assets/images/reactIcon/love.svg';
import sadIcon from '@/assets/images/reactIcon/sad.svg';
import wowIcon from '@/assets/images/reactIcon/wow.svg';
/* eslint-disable no-useless-escape */
export const FORMAT_EMAIL = /[ `!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
export const FORMAT = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
export const TIME_WAITING = 1500;

export const LIST_REACTION = [
    { icon: likeIcon, name: 'LIKE', id: 0 },
    { icon: loveIcon, name: 'LOVE', id: 1 },
    { icon: hahaIcon, name: 'HAHA', id: 2 },
    { icon: wowIcon, name: 'WOW', id: 5 },
    { icon: sadIcon, name: 'SAD', id: 3 },
    { icon: angryIcon, name: 'ANGRY', id: 4 },
];
