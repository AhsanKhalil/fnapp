import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const registerSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  contact: yup.string().matches(/^\d{10}$/, 'Must be 10 digits').required(),
  password: yup.string().min(6).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required(),
});

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(isRegister ? registerSchema : loginSchema),
  });

  const onSubmit = async (data) => {
    if (isRegister) {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      alert(json.message);
      if (res.ok) {
        reset();
        setIsRegister(false);
      }
    } else {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok) {
        alert('Login success');
        if (json.role === 'Admin') {
          window.location.href = '/admin/dashboard';
        } else {
          window.location.href = '/employee/dashboard';
        }
      } else {
        alert(json.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isRegister ? 'Register' : 'Sign In'}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {isRegister && (
            <>
              <input {...register('name')} placeholder="Name" className="input" />
              <p className="text-red-500 text-sm">{errors.name?.message}</p>

              <input {...register('contact')} placeholder="Contact" className="input" />
              <p className="text-red-500 text-sm">{errors.contact?.message}</p>
            </>
          )}

          <input {...register('email')} placeholder="Email" className="input" />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>

          <input type="password" {...register('password')} placeholder="Password" className="input" />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>

          {isRegister && (
            <>
              <input type="password" {...register('confirmPassword')} placeholder="Confirm Password" className="input" />
              <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
            </>
          )}

          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg">
            {isRegister ? 'Register' : 'Sign In'}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button onClick={() => { reset(); setIsRegister(!isRegister); }} className="text-blue-600 underline">
            {isRegister ? 'Sign In' : 'Register'}
          </button>
        </p>
      </div>
    </div>
  );
}
