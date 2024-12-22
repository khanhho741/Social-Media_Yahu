import { Avatar } from '@mui/material';

const AppAvatar = ({ src, size = 40, alt = '' }) => {
    // default size of avatar is 40px if not have prop size
    return <Avatar src={src} sx={{ width: size, height: size }} alt={alt} />;
};

export default AppAvatar;
