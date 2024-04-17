import React, { useState } from 'react'
import Popup from './Popup';

const Form = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [showFirstPopup, setShowFirstPopup] = useState(true);
    const [showSecondPopup, setShowSecondPopup] = useState(false);
    const [showThirdPopup, setShowThirdPopup] = useState(false);

    const [copied, setCopied] = useState(false);

    // Function to handle copying SVG code
    const handleCopy = () => {
        const svgCode = document.getElementById('copyIcon').outerHTML;
        navigator.clipboard.writeText(svgCode)
            .then(() => {
                setCopied(true);
                // Reset copied state after 2 seconds
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            })
            .catch((error) => console.error('Error copying SVG code: ', error));
    };

    // Function to handle changes in the email input field
    const handleEmailChange = (event) => {
        const inputValue = event.target.value;
        setEmail(inputValue);
        setIsEmailValid(inputValue !== ''); // Set isEmailValid to true if input value is not empty
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your logic for form submission here
        console.log('Form submitted with email:', email);
        setShowFirstPopup(false);
        setShowSecondPopup(true);
    };



    return (
        <>
            <div className="min-h-screen flex justify-center items-center">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    onClick={togglePopup}
                >
                    Open Popup
                </button>
                {showFirstPopup && (
                    <Popup isOpen={isOpen} onClose={togglePopup}>
                        {/* Popup content */}
                        <h1 className="ff-poppins font-medium text-[21px] text-[#2D2E35]">Before Johan calls you...</h1>
                        <p className='text-[#717382] ff-poppins font-normal text-[14px] leading-[22px] pt-1'>Enter your email below to save your Raia Bot and unlock the call feature.</p>

                        <form onSubmit={handleSubmit} className="flex flex-col items-center">
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="your.email@gmail.com"
                                className="ff-poppins text-base font-normal text-[#717382] p-[14px_24px_18px] outline-none rounded-[10px] w-full mt-5 border border-[#2D2E351A]"
                            />
                            <button
                                type="submit"
                                disabled={!isEmailValid} // Disable the button if email is not filled
                                className={` border border-[#FFFFFF29] shadow-[0px_10px_10px_-10px#0000000D] p-[14px] w-full mt-4 rounded-[10px] text-white text-base ff-poppins font-medium ${isEmailValid ? 'bg-purple' : ' bg-grey cursor-not-allowed'}`}
                            >
                                Continue
                            </button>
                        </form>
                    </Popup>
                )}


                {showSecondPopup && (
                    <Popup isOpen={isOpen} onClose={togglePopup}>
                        {/* Popup content */}
                        <h1 className="ff-poppins font-medium text-[21px] text-[#2D2E35]">Share Johan</h1>
                        <p className='text-[#717382] ff-poppins font-normal text-[14px] leading-[22px]'>Copy the link or share via email below.</p>

                        <form className='border border-[#2D2E351A] p-[14px_16px_18px_24px] rounded-[10px] placeholder:text-[#2D2E35] mt-4'>
                            <div className='flex'>
                                <p className='ff-poppins text-base font-normal text-[#2D2E35] w-full'>raia.com/bot/x123-ffa/johan</p>
                                <span id="copyIcon"
                                    onClick={handleCopy}
                                    aria-hidden="true"
                                    focusable="false"
                                    className={`relative before:w-[1px] before:h-[54px] before:bg-[#2D2E3514] before:absolute before:top-[-54%] before:left-[-62%]  ${copied ? 'text-green-500' : 'text-gray-500'} `}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 8H4C2.897 8 2 8.897 2 10V20C2 21.103 2.897 22 4 22H14C15.103 22 16 21.103 16 20V10C16 8.897 15.103 8 14 8Z" fill="url(#paint0_linear_17_413)" />
                                        <path d="M20 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V6H16C16.5304 6 17.0391 6.21071 17.4142 6.58579C17.7893 6.96086 18 7.46957 18 8V16H20C20.5304 16 21.0391 15.7893 21.4142 15.4142C21.7893 15.0391 22 14.5304 22 14V4C22 3.46957 21.7893 2.96086 21.4142 2.58579C21.0391 2.21071 20.5304 2 20 2Z" fill="url(#paint1_linear_17_413)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_17_413" x1="2" y1="8" x2="18.8656" y2="15.8182" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#9B93EC" />
                                                <stop offset="1" stop-color="#7267EF" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_17_413" x1="8" y1="2" x2="24.8656" y2="9.8182" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#9B93EC" />
                                                <stop offset="1" stop-color="#7267EF" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <span
                                        id="textToCopy"
                                        className="hidden"
                                    >
                                        Text to be copied
                                    </span>
                                </span>


                                {/* <svg
                                    id="copyIcon"
                                    onClick={handleCopy}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`w-6 h-6 ${copied ? 'text-green-500' : 'text-gray-500'}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    focusable="false"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5h9a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2zm0 0V4a2 2 0 012-2h5a2 2 0 012 2v1M9 12h9M9 16h9" />
                                </svg> */}

                            </div>
                        </form>

                        <div className='flex items-center gap-2 pt-3'>
                            <div className='bg-[#2D2E3514] h-[1px] w-[159px]'></div>
                            <p className='ff-poppins text-[10px] font-semibold text-[#A2A5B5] text-center '>OR</p>
                            <div className='bg-[#2D2E3514] h-[1px] w-[159px]'></div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-wrap gap-2 items-center mt-3 w-full'>
                                <input type="email"
                                    value={email}
                                    onChange={handleEmailChange} placeholder='Enter an email'
                                    className='font-poppins w-[286px] font-normal outline-none text-base text-[#A2A5B5] h-[56px]  border border-[#2D2E351A] p-[14px_18px_18px_24px] rounded-[10px]' />
                                <div className={` ${email ? 'bg-purple' : 'bg-grey'}  h-[56px] w-[56px] rounded-[10px] flex justify-center items-center`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4ZM20 8.7L12 14.034L4 8.7V6.297L12 11.63L20 6.297V8.7Z" fill="white" />
                                    </svg>

                                </div>
                            </div>
                        </form>

                    </Popup>
                )}

                {showThirdPopup && (
                    <Popup isOpen={isOpen} onClose={togglePopup}>
                        {/* Popup content */}
                        <span className='mx-auto'><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="28" cy="28" r="28" fill="white" />
                            <circle cx="28" cy="28" r="27.5" stroke="#2D2E35" stroke-opacity="0.1" />
                            <path d="M27.5624 19.266C27.6056 19.1876 27.669 19.1222 27.746 19.0767C27.8231 19.0312 27.9109 19.0072 28.0004 19.0072C28.0899 19.0072 28.1778 19.0312 28.2548 19.0767C28.3319 19.1222 28.3953 19.1876 28.4384 19.266L31.3904 24.87C31.4608 24.9998 31.5591 25.1123 31.6781 25.1996C31.7972 25.2869 31.9341 25.3468 32.079 25.3749C32.224 25.403 32.3733 25.3986 32.5164 25.3622C32.6594 25.3257 32.7926 25.258 32.9064 25.164L37.1834 21.5C37.2655 21.4332 37.3667 21.3942 37.4724 21.3886C37.5781 21.383 37.6828 21.411 37.7715 21.4687C37.8602 21.5264 37.9284 21.6108 37.9661 21.7097C38.0038 21.8086 38.0092 21.9169 37.9814 22.019L35.1474 32.265C35.0896 32.4747 34.9649 32.6598 34.7924 32.7922C34.6199 32.9247 34.4089 32.9973 34.1914 32.999H21.8104C21.5928 32.9975 21.3815 32.925 21.2088 32.7925C21.0361 32.66 20.9113 32.4748 20.8534 32.265L18.0204 22.02C17.9927 21.9179 17.998 21.8096 18.0358 21.7107C18.0735 21.6118 18.1416 21.5274 18.2303 21.4697C18.319 21.412 18.4238 21.384 18.5295 21.3896C18.6351 21.3952 18.7363 21.4342 18.8184 21.501L23.0944 25.165C23.2082 25.259 23.3414 25.3267 23.4845 25.3632C23.6275 25.3996 23.7769 25.404 23.9218 25.3759C24.0668 25.3478 24.2037 25.2879 24.3227 25.2006C24.4418 25.1133 24.54 25.0008 24.6104 24.871L27.5624 19.266Z" stroke="#7267EF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21 37H35" stroke="#7267EF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </span>
                        <h1 className="ff-poppins font-medium text-[21px] text-[#2D2E35]">Share Johan</h1>
                        <p className='text-[#717382] ff-poppins font-normal text-[14px] leading-[22px]'>Copy the link or share via email below.</p>






                    </Popup>
                )}

            </div>

        </>
    )
}

export default Form