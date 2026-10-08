'use client'
import { useState, useEffect } from "react";
const TodayDate = () => {
    const [currentDate, setCurrentDate] = useState<string | null>(null);
    useEffect(() => {
        setCurrentDate(new Date().toLocaleDateString('bn-BD', { dateStyle: "full" }));
    }, []);
    return (
        <p>{currentDate}</p>
    );
};

export default TodayDate;