import ProfileForm from "@/app/components/profile/ProfileForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "প্রোফাইল | বাজার দর",
  description: "আপনার প্রোফাইলের তথ্য পরিবর্তন করুন",
};


const ProfilePage = () => {

    return (
        <ProfileForm />
    );
};

export default ProfilePage;