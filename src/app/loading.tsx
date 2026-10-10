import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
            <span className="loading loading-spinner loading-xl text-primary"></span>

            <p className="text-lg font-bold text-base-content/70 animate-pulse">
                লোড হচ্ছে...
            </p>
        </div>
    );
};

export default Loading;