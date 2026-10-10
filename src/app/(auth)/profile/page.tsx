'use client'

import { errorToast, successToast } from '@/app/components/shared/Toast';
import { signOut, updateUser, useSession } from '@/lib/auth-client';
import { FieldError, FieldGroup, Fieldset, Form, Input, Label, TextField } from '@heroui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { IoMdExit } from 'react-icons/io';

const ProfilePage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { data: session } = useSession()
    const router = useRouter();
    const [isLoggingOut, setIsLoggingOut] = useState(false);


    const handleSignOut = async () => {
        setIsLoggingOut(true);
        try {
            await signOut();
            router.push('/');
            router.refresh();
            successToast('সাইন-আউট করা হয়েছে')
        } catch (error) {
            console.error("Logout failed:", error);
            errorToast('সাইন-আউট ব্যর্থ হয়েছে')
        } finally {
            setIsLoggingOut(false);
        }
    };
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isSubmitting) return;

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries())

        setIsSubmitting(true);

        try {
            const { data: resData, error } = await updateUser({
                name: data.name as string,
            });

            if (error) {
                errorToast(error.message || "নাম পরিবর্তন হয়নি");
            } else if (resData) {
                successToast("নাম পরিবর্তন হয়েছে");
            }
        } finally {
            setIsSubmitting(false);
        }

    };

    return (
        <section className='my-5 flex flex-col items-center'>
            <h1 className="text-2xl font-bold ">আমার প্রোফাইল</h1>
            <p className="text-sm lg:text-base text-black/50">
                আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
            </p>

            <div className='w-150 bg-base-200 p-8 rounded-2xl my-5 mx-auto flex gap-2 justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <div>
                        {session?.user.image ? (
                            <div className="">
                                <div className="w-15 h-15 rounded-lg flex items-center justify-center">
                                    <Image className='rounded-lg' width={45} height={45} alt="user image" src={session?.user.image} />
                                </div>
                            </div>
                        ) : (
                            <div className="bg-primary text-primary-content w-15 h-15 rounded-lg flex items-center justify-center">
                                <span className="text-2xl font-semibold text-center">
                                    {session?.user?.name ? session.user.name.charAt(0).toUpperCase() : "U"}
                                </span>
                            </div>
                        )}
                    </div>
                    <div>
                        <h2 className='text-lg font-bold'>{session?.user.name}</h2>
                        <p className='text-black/50'>{session?.user.email}</p>
                    </div>
                </div>
                <div>
                    <button
                        onClick={handleSignOut}
                        disabled={isLoggingOut}
                        className="text-error hover:bg-error/10 mt-1 btn-outline btn border-error "
                    >
                        {isLoggingOut ? <span className="loading loading-spinner loading-xs"></span> : <span className='text-base flex gap-2 items-center'><IoMdExit />সাইন আউট</span>}
                    </button>
                </div>
            </div>



            <div className='w-150 bg-base-200 p-8 rounded-2xl my-5 mx-auto'>

                <Form onSubmit={onSubmit} >
                    <Fieldset>
                        <FieldGroup>
                            <TextField
                                isRequired
                                name="name"
                                validate={(value) => {
                                    if (value.length < 3) {
                                        return "নাম কমপক্ষে ২ অক্ষরের হতে হবে।";
                                    }
                                    return null;
                                }}
                            >
                                <Label className="text-lg">নাম</Label>
                                <Input placeholder="" />
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
                                    "আপডেট"
                                )}
                            </button>

                        </Fieldset.Actions>
                    </Fieldset>
                </Form>
            </div>
        </section>
    );
};

export default ProfilePage;