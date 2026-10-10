'use client'
import { useState, useEffect } from "react";
const TodayDate = () => {
    const [currentDate, setCurrentDate] = useState<string | null>(null);
    useEffect(() => {
        setCurrentDate(new Date().toLocaleDateString('bn-BD', { dateStyle: "full" }));
    }, []);


    if (!currentDate) {
        return (
            /*
              Using w-40 or w-48 ensures the skeleton is wide enough to match
              a full Bengali date string, preventing layout shift.
              You can also use your custom 'shimmer-skeleton' class here if you prefer.
            */
            <div className="d-skeleton bg-primary/5 h-4 w-40 lg:w-48 rounded mt-1"></div>
        );
    }


    return (
        <p>{currentDate}</p>
    );
};

export default TodayDate;