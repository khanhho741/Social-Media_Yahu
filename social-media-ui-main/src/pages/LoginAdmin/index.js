import React, { useState } from 'react';

import * as UserService from '@/services/UserService';
import * as constant from '@/constant/index';
import Swal from 'sweetalert2';
import { loginUser } from '@/action/UserAction';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Leaf from '@/assets/images/login/logo.jpg';
import styles from './LoginAdmin.module.scss';
import classNames from 'classnames/bind';
import { toast, ToastContainer } from 'react-toastify';

const cx = classNames.bind(styles);
const LoginAdmin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //Hàm kiểm tra login
    const checkLogin = (result) => {
        if (result.data) {
            setTimeout(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Bạn đã đăng nhập thành công',
                    showConfirmButton: false,
                    timer: 1000,
                });
                setTimeout(() => {
                    dispatch(loginUser(result.data.userInfo, result.data.token));
                    navigate('/admin');
                }, 1000);
            }, constant.TIME_WAITING);
        } else {
            setTimeout(() => {
                Swal.fire({
                    icon: 'error',
                    title: result.message,
                    showConfirmButton: false,
                    timer: 1000,
                });
            }, constant.TIME_WAITING);
        }
        setTimeout(() => {
            toast.dismiss();
        }, constant.TIME_WAITING);
    };
    //Api kiểm tra username, password
    const login = async () => {
        const result = await UserService.loginAdmin({
            loginKey: email.trim(),
            password: password.trim(),
        });
        checkLogin(result);
    };
    //Xử lý khi login
    const handleLogin = (e) => {
        e.preventDefault();
        if (!constant.FORMAT_EMAIL.test(email.trim())) {
            toast.dark('Waiting a minute!');
            login();
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Username not allow space or special characters! Please try again.',
                showConfirmButton: true,
            });
        }
    };
    return (
        <div className={cx('wrapper')}>
            <ToastContainer />
            <div className={cx('form-login')}>
                <div className={cx('logo')}>
                    <img src={Leaf} alt="" />
                </div>
                <h1>Đăng nhập quản trị</h1>
                <form onSubmit={handleLogin}>
                    <input placeholder="Tên đăng nhập..." value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input
                        type="password"
                        placeholder="Mật khẩu..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <button>Đăng nhập</button>
                </form>
            </div>
        </div>
    );
};

export default LoginAdmin;
