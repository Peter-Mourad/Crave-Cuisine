import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import "../styles/register.css";
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().required('Email is required').email('Must be a valid email'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  role: yup.string().required('Role is required'),
});

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/register', data);
      localStorage.setItem("accessToken", response.data.token);
      localStorage.setItem("role", response.data.role);
      navigate('/');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div className="register-form-container">
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Register</h2>
        <div>
          <label>Username</label>
          <input type="text" {...register('username')} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register('password')} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label>Register as:</label>
          <div>
            <label>
              <input type="radio" value="user" {...register('role')} />
              User
            </label>
            <label>
              <input type="radio" value="admin" {...register('role')} />
              Admin
            </label>
          </div>
          {errors.role && <p>{errors.role.message}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;