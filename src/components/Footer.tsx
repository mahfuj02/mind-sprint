import React from 'react';

const Footer = ({ isDarkMode }: { isDarkMode: boolean }) => {
    const paymentMethods = [
        { id: 1, name: 'Visa', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' },
        { id: 2, name: 'Mastercard', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png' },
        { id: 3, name: 'MX', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg' },
    ];

    return (
        <footer className={`bg-${isDarkMode ? 'darkHeaderFooter text-white' : 'lightHeaderFooter text-black'} py-8`}>
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                {/* Payment Methods */}
                <div className="flex items-center space-x-4 mb-6 md:mb-0">
                    <span className="text-lg font-medium">Pay With</span>
                    <div className="flex items-center space-x-4">
                        {paymentMethods.map((method) => (
                            <img
                                key={method.id}
                                src={method.imageUrl}
                                alt={method.name}
                                className="h-8"
                            />
                        ))}
                    </div>
                </div>

                {/* Copyright and Legal Info */}
                <div className="text-center md:text-right space-y-2">
                    <p className="text-sm">
                        Copyright ©2023 Learn with Mahfuj. All rights reserved.
                    </p>
                    <div className="flex justify-center md:justify-end space-x-4">
                        <a href="#" className="text-sm hover:underline">
                            Terms & Conditions
                        </a>
                        <a href="#" className="text-sm hover:underline">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-sm hover:underline">
                            Effort Dialog
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;