import SignUpForm from "@/app/components/sign-up/SignUpForm";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "নিবন্ধন | বাজার দর",
    description: "অ্যাপটিতে সম্পূর্ণ অ্যাক্সেস পেতে সাইন আপ করুন",
};


const SignUpPage = () => {

    return (

        <SignUpForm />
    );
};

export default SignUpPage;