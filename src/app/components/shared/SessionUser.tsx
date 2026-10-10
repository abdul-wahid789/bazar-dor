'use client'

import { useSession, signOut } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { IoMdExit } from 'react-icons/io';
import { errorToast, successToast } from './Toast';
import { FaUser } from 'react-icons/fa';
import Image from 'next/image';

const SessionUser = () => {
    const { data: session, isPending } = useSession();

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

    if (isPending) {
        return (
            <div className="px-4">
                <span className="loading loading-spinner loading-md text-primary"></span>
            </div>
        );
    }

    return (
        <div className="flex items-center">
            {session ? (
                <div className="flex-none">
                    <div className="dropdown dropdown-end">

                        <div tabIndex={0} role="button" className="btn btn-ghost px-2 flex items-center gap-2">
                            {session.user.image ? (
                                <div className="avatar">
                                    <div className="w-8 rounded-full">
                                        <Image alt="User Avatar" src={session.user.image} width={24} height={24}/>
                                    </div>
                                </div>
                            ) : (
                                <div className="avatar placeholder">
                                    <div className="bg-primary text-primary-content w-8 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-semibold text-center">
                                            {session?.user?.name ? session.user.name.charAt(0).toUpperCase() : "U"}
                                        </span>
                                    </div>
                                </div>
                            )}

                            <span className="font-semibold hidden sm:block">{session?.user?.name}</span>
                            <BsChevronDown className="size-4 opacity-70" />
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                            <li className="menu-title px-4 py-2 border-b border-base-200 mb-1">
                                <span className="font-bold text-base text-base-content">{session.user.name}</span>
                                <span className="text-xs font-normal text-base-content/60">{session.user.email}</span>
                            </li>

                            <li><Link href="/profile" className='text-base'><FaUser className='text-primary' /> আমার প্রোফাইল</Link></li>
                            <li>
                                <button
                                    onClick={handleSignOut}
                                    disabled={isLoggingOut}
                                    className="text-error hover:bg-error/10 mt-1 "
                                >
                                    {isLoggingOut ? <span className="loading loading-spinner loading-xs"></span> : <span className='text-base flex gap-2 items-center'><IoMdExit />সাইন আউট</span>}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : (
                <div className='flex gap-2'>
                    <Link href='/sign-in'>
                        <button className='btn btn-ghost btn-xs lg:btn-md'>সাইন ইন</button>
                    </Link>
                    <Link href='/sign-up'>
                        <button className='btn btn-primary btn-xs lg:btn-md shadow-primary shadow-md'>সাইন আপ</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default SessionUser;