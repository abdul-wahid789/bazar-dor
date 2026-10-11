'use client'
import React, { useState }  from 'react';
import { Button, FieldError, FieldGroup, Fieldset, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { signIn } from '@/lib/auth-client';
import { errorToast, successToast } from '@/app/components/shared/Toast';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeftLong } from 'react-icons/fa6';



const SignInForm = () => {
     const router = useRouter();
        const [isPasswordVisible, setIsPasswordVisible] = useState(false);
        const [password, setPassword] = useState("");


        const [isSubmitting, setIsSubmitting] = useState(false);
        const [isSubmittingGoogle, setIsSubmittingGoogle] = useState(false);
        const [isSubmittingGithub, setIsSubmittingGithub] = useState(false);



        const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            if (isSubmitting) return;

            const params = new URLSearchParams(window.location.search);
            const callbackUrl = params.get('callbackUrl') || '/';


            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries())

            setIsSubmitting(true);

            try {
                const { data: resData, error } = await signIn.email({
                    email: data.email as string,
                    password: data.password as string,
                    rememberMe: true,
                    callbackURL: callbackUrl,
                });

                if (error) {
                    errorToast(error.message as string || "সাইন-ইন ব্যর্থ হয়েছে");
                } else if (resData) {
                    successToast("সাইন-ইন সফল হয়েছে")
                    router.push(callbackUrl);
                    router.refresh();
                }
            } finally {
                setIsSubmitting(false);
            }


        };

        const handelGoogle = async () => {
            if (isSubmittingGoogle) return;
            setIsSubmittingGoogle(true);

            const params = new URLSearchParams(window.location.search);
            const callbackUrl = params.get('callbackUrl') || '/';

            try {
                const { data: resData, error } = await signIn.social({
                    provider: "google",
                    callbackURL: callbackUrl,
                });

                if (error) {
                    errorToast(error.message as string || "সাইন-ইন ব্যর্থ হয়েছে");
                } else if (resData) {
                    successToast("সাইন-ইন সফল হয়েছে")
                }
            } finally {
                setIsSubmittingGoogle(false);
            }

        }
        const handelGithub = async () => {
            if (isSubmittingGithub) return;
            setIsSubmittingGithub(true);
            const params = new URLSearchParams(window.location.search);
            const callbackUrl = params.get('callbackUrl') || '/';

            try {
                const { data: resData, error } = await signIn.social({
                    provider: "github",
                    callbackURL: callbackUrl,
                });

                if (error) {
                    errorToast(error.message as string || "সাইন-ইন ব্যর্থ হয়েছে");
                } else if (resData) {
                    successToast("সাইন-ইন সফল হয়েছে")
                }
            } finally {
                setIsSubmittingGithub(false);
            }
        }

    return (

        <section className='my-5 flex flex-col items-center'>
            <h1 className="text-2xl font-bold text-center">সাইন ইন</h1>
            <p className="text-sm lg:text-base text-center text-black/50">
                বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
            </p>

            <div className='lg:w-120 bg-base-200 p-8 rounded-2xl my-5 mx-auto'>

                <Form onSubmit={onSubmit} >
                    <Fieldset>
                        <FieldGroup>
                            <TextField
                                isRequired
                                name="email"
                                type="email"
                                validate={(value) => {
                                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                        return "সঠিক ইমেইল ঠিকানা দিন।";
                                    }
                                    return null;
                                }}
                            >
                                <Label className="text-lg">ইমেইল</Label>
                                <Input placeholder="you@example.com" />
                                <FieldError />
                            </TextField>

                            <TextField
                                isRequired
                                minLength={8}
                                name="password"
                                type="password"
                                value={password}
                                onChange={setPassword}
                                validate={(value) => {
                                    if (value.length < 8) {
                                        return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে।";
                                    }
                                    return null;
                                }}
                            >
                                <Label className="text-lg">পাসওয়ার্ড</Label>
                                <InputGroup>
                                    <InputGroup.Input
                                        className="w-full"
                                        type={isPasswordVisible ? "text" : "password"}
                                        placeholder="কমপক্ষে ৮ অক্ষর"
                                    />
                                    <InputGroup.Suffix className="pe-0">
                                        <Button
                                            isIconOnly
                                            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                                            size="sm"
                                            variant="ghost"
                                            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                                        >
                                            {isPasswordVisible ? (
                                                <BsEye className="size-4" />
                                            ) : (
                                                <BsEyeSlash className="size-4" />
                                            )}
                                        </Button>
                                    </InputGroup.Suffix>
                                </InputGroup>
                                <FieldError />
                            </TextField>

                        </FieldGroup>

                        <Fieldset.Actions>
                            <button
                                type="submit"
                                className="btn-primary btn w-full rounded-2xl"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className="loading loading-spinner loading-sm" />
                                ) : (
                                    "সাইন ইন"
                                )}
                            </button>

                        </Fieldset.Actions>
                    </Fieldset>
                </Form>
                <p className='divider text-black/50'>অথবা</p>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-2'>
                    <button
                        className="btn-outline border-black/10 btn w-full lg:w-1/2 rounded-2xl"
                        disabled={isSubmitting}
                        onClick={handelGoogle}
                    >
                        {isSubmittingGoogle ? (
                            <span className="loading loading-spinner loading-sm" />
                        ) : (
                            <p className='flex items-center gap-1'><FcGoogle /> Google দিয়ে চালিয়ে যান</p>
                        )}
                    </button>
                    <button
                        className="btn-outline border-black/10  btn w-full lg:w-1/2 rounded-2xl"
                        disabled={isSubmitting}
                        onClick={handelGithub}
                    >
                        {isSubmittingGithub ? (
                            <span className="loading loading-spinner loading-sm" />
                        ) : (
                            <p className='flex items-center gap-1'><FaGithub /> GitHub দিয়ে চালিয়ে যান</p>
                        )}
                    </button>
                </div>
               <p className='mt-5 text-center'>অ্যাকাউন্ট নেই? <Link href={'/sign-up'} className='text-primary'>সাইন আপ করুন</Link></p>

            </div>

            <Link href={'/'}><p className='text-center flex items-center gap-2 text-black/50'><FaArrowLeftLong /> হোম পেজে ফিরে যান</p></Link>
        </section>
    );
};

export default SignInForm;