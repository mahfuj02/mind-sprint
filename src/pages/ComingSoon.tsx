

// pages/ComingSoon.tsx
import React, { useState, useEffect } from 'react';
//   import SubscribeForm from '../components/SubscribeForm';

interface Props {
    isDarkMode: boolean;
}

const ComingSoon: React.FC<Props> = ({ isDarkMode }) => {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Set launch date to 30 days from now
    useEffect(() => {
        const launchDate = new Date();
        launchDate.setDate(launchDate.getDate() + 30);

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = launchDate.getTime() - now;

            setCountdown({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const CountdownBox = ({ value, label }: { value: number; label: string }) => (
        <div className={`text-center p-4 rounded-lg ${isDarkMode ? "bg-darkHeaderFooter" : "bg-lightHeaderFooter"
            }`}>
            <div className={`text-3xl font-bold mb-1 ${isDarkMode ? "text-textDark" : "text-textLight"
                }`}>
                {value.toString().padStart(2, '0')}
            </div>
            <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                {label}
            </div>
        </div>
    );

    return (
        <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? "bg-darkMainBg" : "bg-lightMainBg"
            }`}>
            <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                {/* Logo */}
                <div className="mb-12">

                    <h3 className={`text-4xl md:text-6xl lg:text-7xl font-bold ${isDarkMode ? "text-textDark" : "text-textLight"
                        }`}>
                        <span className="text-primary">mind</span>Sprint
                    </h3>
                </div>

                {/* Main Content */}
                <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isDarkMode ? "text-textDark" : "text-textLight"
                    }`}>
                    Something Amazing Is Coming Soon
                </h1>

                <p className={`text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                    We're working hard to bring you the best learning experience.
                    Stay tuned for something amazing!
                </p>

                {/* Countdown Timer */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    <CountdownBox value={countdown.days} label="Days" />
                    <CountdownBox value={countdown.hours} label="Hours" />
                    <CountdownBox value={countdown.minutes} label="Minutes" />
                    <CountdownBox value={countdown.seconds} label="Seconds" />
                </div>

                {/* Subscription Form */}
                <div className="mb-12">
                    <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-textDark" : "text-textLight"
                        }`}>
                        Get Notified When We Launch
                    </h3>
                    {/* <SubscribeForm isDarkMode={isDarkMode} /> */}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-6">
                    {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                        <a
                            key={social}
                            href="#"
                            className={`text-sm hover:text-primary transition-colors ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                }`}
                        >
                            {social}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;