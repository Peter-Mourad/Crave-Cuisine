import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const Login = () => {
    localStorage.removeItem("accessToken");
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/login', data);
            localStorage.setItem("accessToken", response.data.token);
            localStorage.setItem("role", response.data.role);
            navigate('/');
        } catch (error) {
            alert('invalid credentials');
        }
    };

  return (
     <div className="login-form-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <div>
          <label>Username</label>
          <input type="text" {...register('username')} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register('password')} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;