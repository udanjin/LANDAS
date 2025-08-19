import React from 'react';
import LoginForm from '@/features/auth/components/organisms/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white font-sans p-4">
        <header className="absolute top-10 text-center">
            <h1 className="text-3xl font-bold text-yellow-500 tracking-widest">LANDAS</h1>
        </header>
        <main className="w-full flex items-center justify-center">
            <LoginForm />
        </main>
    </div>
  );
};

export default LoginPage;