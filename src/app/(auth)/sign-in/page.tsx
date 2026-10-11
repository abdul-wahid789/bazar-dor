import React from 'react';
import { Metadata } from 'next';
import SignInForm from '@/app/components/sign-in/SignInForm';

export const metadata: Metadata = {
  title: "সাইন ইন | বাজার দর",
  description: "পণ্যের দাম দেখতে সাইন ইন করুন",
};



const SignInPage = () => {


    return (
        <SignInForm />
    );
};

export default SignInPage;