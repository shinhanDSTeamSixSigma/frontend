import React, { useState } from 'react';
import LoginForm from './LoginForm';
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [error, setError] = useState(null); // 에러 상태 추가
    const handleSubmit = (formData) => {
        axios
            .post('http://localhost:8090/register', formData)
            .then((response) => {
                console.log('Registration successful:', response.data);

                window.location.href = '/login'; // Redirect 방식
                // 등록 성공 시 필요한 작업 수행
            })
            .catch((error) => {
                console.error('Registration failed:', error);

                setError(error); // 에러 상태 설정

                // 등록 실패 시 필요한 작업 수행
            });
    };

    return (
        <div>
            {/* 에러 메시지 출력 */}
            {error && (
                <div
                    style={{
                        paddingTop: '1rem',
                        color: 'red',
                        justifyContent: 'center',
                        display: 'flex',
                        fontSize: '1rem',
                    }}
                >
                    존재하는 이메일입니다!
                </div>
            )}
            <LoginForm onSubmit={handleSubmit} />
            <div style={{ justifyContent: 'center', display: 'flex' }}>
                <Link to="/login">이미 회원이신가요? 로그인</Link>
            </div>
            {/* "/login" 페이지로 이동하는 링크 */}
        </div>
    );
};

export default RegisterPage;
