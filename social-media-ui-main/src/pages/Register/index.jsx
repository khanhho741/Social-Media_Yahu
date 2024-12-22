import React, { useEffect, useState } from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';
import * as constant from '../../constant/index';

import { useNavigate } from 'react-router-dom';
import * as UserService from '../../services/UserService';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';

import 'bootstrap/dist/css/bootstrap.min.css';
import Leaf from '../../assets/images/login/logo.jpg';

const Register = () => {
    const [name, setName] = useState('');
    const [username, setuUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        document.title = 'YaHu | Register';
    });

    const checkResult = (result) => {
        if (result.data) {
            setTimeout(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'You create account successfully',
                    showConfirmButton: false,
                    timer: 1000,
                });
                setTimeout(() => {
                    navigate('/login');
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

    const register = async () => {
        const result = await UserService.registerCustomer({
            name: name.trim(),
            username: username.trim(),
            password: password.trim(),
            email: email.trim(),
            phone: phone.trim(),
        });
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, 'user', username.trim()), {
                uid: res.user.uid,
                name: name.trim(),
                username: username.trim(),
                password: password.trim(),
                date: serverTimestamp(),
                email: email.trim(),
                isOnline: false,
            });
        } catch (error) {
            console.log(error);
        }

        checkResult(result);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (username.trim().length < 8) {
            Swal.fire({
                icon: 'error',
                title: 'Username must be at least 8 characters long',
            });
            return;
        }

        if (constant.FORMAT.test(username.trim())) {
            Swal.fire({
                icon: 'error',
                title: 'Username not allow space or special characters',
            });
            return;
        }

        if (constant.FORMAT_EMAIL.test(email.trim())) {
            Swal.fire({
                icon: 'error',
                title: 'Email not allow space or special characters',
            });

            return;
        }

        if (password.trim().length < 8) {
            Swal.fire({
                icon: 'error',
                title: 'Password must be at least 8',
            });

            return;
        }

        if (password.trim().search(/[0-9]/) < 0) {
            Swal.fire({
                icon: 'error',
                title: 'Password must be contain at least one digit',
            });

            return;
        }

        if (password.trim().search(/[a-z]/) < 0) {
            Swal.fire({
                icon: 'error',
                title: 'Password must be contain at least one lowercase letter',
            });

            return;
        }

        if (password.trim().search(/[A-Z]/) < 0) {
            Swal.fire({
                icon: 'error',
                title: 'Password must be contain at least one uppercase letter',
            });

            return;
        }

        if (password.trim() !== confirm) {
            Swal.fire({
                icon: 'error',
                title: 'Password not match',
            });

            return;
        }
        toast.dark('Waiting for register');
        register();
    };

    return (
        <div className="register">
            <ToastContainer />
            <div className="card">
                <div className="left">
                    <img src={Leaf} alt="" />
                    <p className="slowgan">Vui lòng đăng ký tài khoản!</p>
                    <form onSubmit={handleRegister}>
                        <input
                            type="text"
                            value={name}
                            placeholder="Họ và Tên"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            value={username}
                            placeholder="Tên đăng nhập"
                            onChange={(e) => setuUsername(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="tel"
                            value={phone}
                            placeholder="Số điện thoại"
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            value={password}
                            placeholder="Mật khẩu"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            value={confirm}
                            placeholder="Xác nhận mật khẩu"
                            onChange={(e) => setConfirm(e.target.value)}
                            required
                        />
                        <button type="submit">Đăng ký</button>
                    </form>

                    <p className="align-left">
                        Đã có tài khoản?{' '}
                        <span>
                            <Link to="/login" className="register-now">
                                Đăng nhập
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
