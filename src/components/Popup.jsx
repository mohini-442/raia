import React from 'react';

const Popup = ({ isOpen, onClose, children }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed min-h-screen inset-0 flex items-center justify-center z-50 ">
                    <div className="fixed inset-0 bg-gray-800 opacity-50" onClick={onClose}></div>
                    <div className="relative bg-white mx-5 sm:mx-0 w-[400px] rounded-[20px] p-[20px_24px_24px] border border-[#2D2E3514] z-50">
                        {/* Close button */}
                        <button
                            className="absolute top-[-4%] right-0 m-4 text-3xl text-[#D7D8DD] hover:text-gray-800"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                        {/* Popup content */}
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;