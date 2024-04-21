import React, { useState } from 'react';
import Popup from './Popup';
import Popup2 from './Popup2';
import discord from '../assets/images/discord.svg';
import slack from '../assets/images/slack.svg';
import terms from '../assets/images/terms.svg';
import whatsapp from '../assets/images/whatsapp.svg';
import zoom from '../assets/images/zoom.svg';
import gmail from '../assets/images/gmail.svg';
import Popup3 from './Popup3';
import card from '../assets/images/credit-card.png';
import cashcard from '../assets/images/cashapp.svg';
import klarna from '../assets/images/klarna.png';
import afterpay from '../assets/images/afterpay.png';
import bank from '../assets/images/bank.svg';
import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/mastercard.png';
import amex from '../assets/images/amex.png';
import elo from '../assets/images/elo.png';

const Form = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [showFirstPopup, setShowFirstPopup] = useState(true);
    const [showSecondPopup, setShowSecondPopup] = useState(false);
    const [showThirdPopup, setShowThirdPopup] = useState(false);
    const [showFourthPopup, setShowFourthPopup] = useState(false);
    const [showFifthPopup, setShowFifthPopup] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
    const [zipCode, setZipCode] = useState('');
    const [cvc, setCvc] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const copyTextToClipboard = () => {
        const textToCopy = "raia.com/bot/x123-ffa/johan";
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                // alert("Text copied to clipboard!");
                const messageSpan = document.getElementById('copyMessage');

                // Update the text content of the span element
                messageSpan.textContent = "Text copied to clipboard!";
            })
            .catch((error) => {
                console.error("Unable to copy text: ", error);
            });
    };

    const handleEmailChange = (event) => {
        const inputValue = event.target.value;
        setEmail(inputValue);
        setIsEmailValid(inputValue !== '');
    };

    const handlePhoneNumberChange = (event) => {
        const inputValue = event.target.value;
        setPhoneNumber(inputValue);
        // Basic validation: Check if the phone number consists of digits and has a length of 10
        const isValid = /^\d{10}$/.test(inputValue);
        setIsPhoneNumberValid(isValid);
        if (!isValid) {
            setPhoneNumberError('Please enter a valid phone number');
        } else {
            setPhoneNumberError('');
        }
    };

    const handleSubmitFifthPopup = (event) => {
        event.preventDefault();
        console.log('Fifth form submitted with phone number:', phoneNumber);
        // Handle submission of the fifth form if needed
    };

    const handleSubmitFirstPopup = (event) => {
        event.preventDefault();
        console.log('First form submitted with email:', email);
        setShowFirstPopup(false);
        setShowSecondPopup(true);
    };

    const handleSubmitSecondPopup = (event) => {
        event.preventDefault();
        console.log('Second form submitted with email:', email);
        setShowSecondPopup(false);
        setShowThirdPopup(true); // Show the fourth popup after submitting the second form
    };

    const handleSubmitThirdPopup = (event) => {
        event.preventDefault();
        console.log('Third form submitted with email:', email);
        // Handle submission of the third form if needed
        setShowThirdPopup(false);
        setShowFourthPopup(true);
    };
    const handleSubmitFourthPopup = (event) => {
        event.preventDefault();
        console.log('Third form submitted with email:', email);
        // Handle submission of the third form if needed
        setShowThirdPopup(false);
        setShowFifthPopup(true);
    };

    // Function to validate the CVC
    function isValidCVC(cvc) {
        // Check if the input consists of 3 or 4 digits
        return /^\d{3,4}$/.test(cvc);
    }

    // Event handler for CVC input change
    function handleCvcChange(event) {
        const { value } = event.target;
        setCvc(value);
        if (isValidCVC(value)) {
            // Valid CVC
            // You can add visual feedback here (e.g., change border color to green)
            console.log("Valid CVC.");
        } else {
            // Invalid CVC
            // You can add visual feedback here (e.g., change border color to red)
            console.log("Invalid CVC.");
        }
    }

    function isValidZip(zip) {
        // Check if the input consists of 5 digits
        return /^\d{5}$/.test(zip);
    }

    // Event handler for zip code input change
    function handleZipCodeChange(event) {
        const { value } = event.target;
        setZipCode(value);
        if (isValidZip(value)) {
            // Valid zip code
            // You can add visual feedback here (e.g., change border color to green)
            console.log("Valid zip code.");
        } else {
            // Invalid zip code
            // You can add visual feedback here (e.g., change border color to red)
            console.log("Invalid zip code.");
        }
    }

    function handleCountryChange(event) {
        setSelectedCountry(event.target.value);
    }

    return (
        <>
            <div className="min-h-screen flex justify-center items-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={togglePopup}>
                    Open Popup
                </button>
                {showFirstPopup && (
                    <Popup isOpen={isOpen} onClose={togglePopup}>
                        <h1 className="ff-poppins font-medium text-lg sm:text-[21px] text-[#2D2E35]">Before Johan calls you...</h1>
                        <p className="text-[#717382] ff-poppins font-normal text-xs sm:text-sm leading-[22px] sm:pt-1">Enter your email below to save your Raia Bot and unlock the call feature.</p>

                        <form onSubmit={handleSubmitFirstPopup} className="flex flex-col items-center">
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="your.email@gmail.com"
                                className="ff-poppins text-sm sm:text-base font-normal text-[#717382] p-3 sm:p-[14px_24px_18px] outline-none rounded-[10px] w-full mt-3 sm:mt-5 border focus:border focus:border-[#7267EF80] focus:shadow-[0px_0px_0px_4px#7267EF1A] border-[#2D2E351A]"
                            />
                            <button
                                type="submit"
                                disabled={!isEmailValid}
                                className={`border border-[#FFFFFF29] shadow-[0px_10px_10px_-10px#0000000D] p-3 sm:p-[14px] w-full mt-2 sm:mt-4 rounded-[10px] text-white text-sm sm:text-base ff-poppins font-medium ${isEmailValid ? 'bg-purple' : ' bg-grey cursor-not-allowed'
                                    }`}
                            >
                                Continue
                            </button>
                        </form>
                    </Popup>
                )}

                {showSecondPopup && (
                    <Popup isOpen={isOpen} onClose={togglePopup}>
                        <h1 className="ff-poppins font-medium text-xl sm:text-[21px] text-[#2D2E35]">Share Johan</h1>
                        <p className="text-[#717382] ff-poppins font-normal text-[14px] leading-[22px]">Copy the link or share via email below.</p>

                        <form className="border border-[#2D2E351A] p-3 xxs:p-[14px_16px_18px_24px] rounded-[10px] placeholder:text-[#2D2E35] mt-4 w-full">
                            <div className="flex">
                                <p className="ff-poppins text-sm sm:text-base font-normal text-[#2D2E35] w-full">raia.com/bot/x123-ffa/johan</p>
                                <button className='relative before:w-[1px] before:h-[50px] xxs:before:h-[54px] before:bg-[#2D2E3514] before:absolute before:top-[-54%] before:left-[-62%]' onClick={copyTextToClipboard}>
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
                                </button>
                            </div>
                        </form>
                        <p id="copyMessage" className='text-red-500'></p>

                        <div className="flex items-center gap-2 pt-3 w-full">
                            <div className="bg-[#2D2E3514] h-[1px] w-1/2 xxs:w-[159px]"></div>
                            <p className="ff-poppins text-[10px] font-semibold text-[#A2A5B5] text-center ">OR</p>
                            <div className="bg-[#2D2E3514] h-[1px] w-1/2 xxs:w-[159px]"></div>
                        </div>

                        <form onSubmit={handleSubmitSecondPopup}>
                            <div className="flex justify-between mt-3 w-full">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Enter an email"
                                    className="font-poppins xxs:w-[286px] w-full font-normal outline-none text-base text-[#A2A5B5] xxs:h-[56px]  border border-[#2D2E351A] p-3 sm:p-[14px_18px_18px_24px] rounded-[10px]"
                                />
                                <button type="submit" className={` ${email ? 'bg-purple' : 'bg-grey'} ms-2 xxs:h-[56px] w-[56px] rounded-[10px] flex justify-center items-center`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4ZM20 8.7L12 14.034L4 8.7V6.297L12 11.63L20 6.297V8.7Z" fill="white" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </Popup>
                )}

                {showThirdPopup && (
                    <Popup2 isOpen={isOpen} onClose={togglePopup}>
                        <div className='flex justify-center flex-col pt-2'>
                            <div className='mx-auto'>
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="28" cy="28" r="28" fill="white" />
                                    <circle cx="28" cy="28" r="27.5" stroke="#2D2E35" stroke-opacity="0.1" />
                                    <path d="M27.5624 19.266C27.6056 19.1876 27.669 19.1222 27.746 19.0767C27.8231 19.0312 27.9109 19.0072 28.0004 19.0072C28.0899 19.0072 28.1778 19.0312 28.2548 19.0767C28.3319 19.1222 28.3953 19.1876 28.4384 19.266L31.3904 24.87C31.4608 24.9998 31.5591 25.1123 31.6781 25.1996C31.7972 25.2869 31.9341 25.3468 32.079 25.3749C32.224 25.403 32.3733 25.3986 32.5164 25.3622C32.6594 25.3257 32.7926 25.258 32.9064 25.164L37.1834 21.5C37.2655 21.4332 37.3667 21.3942 37.4724 21.3886C37.5781 21.383 37.6828 21.411 37.7715 21.4687C37.8602 21.5264 37.9284 21.6108 37.9661 21.7097C38.0038 21.8086 38.0092 21.9169 37.9814 22.019L35.1474 32.265C35.0896 32.4747 34.9649 32.6598 34.7924 32.7922C34.6199 32.9247 34.4089 32.9973 34.1914 32.999H21.8104C21.5928 32.9975 21.3815 32.925 21.2088 32.7925C21.0361 32.66 20.9113 32.4748 20.8534 32.265L18.0204 22.02C17.9927 21.9179 17.998 21.8096 18.0358 21.7107C18.0735 21.6118 18.1416 21.5274 18.2303 21.4697C18.319 21.412 18.4238 21.384 18.5295 21.3896C18.6351 21.3952 18.7363 21.4342 18.8184 21.501L23.0944 25.165C23.2082 25.259 23.3414 25.3267 23.4845 25.3632C23.6275 25.3996 23.7769 25.404 23.9218 25.3759C24.0668 25.3478 24.2037 25.2879 24.3227 25.2006C24.4418 25.1133 24.54 25.0008 24.6104 24.871L27.5624 19.266Z" stroke="#7267EF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21 37H35" stroke="#7267EF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <p className='ff-poppins font-medium text-lg xxs:text-[21px] text-[#2D2E35] pt-1 xxs:pt-4 text-center'>Unlock Calling & More</p>
                            <p className='ff-poppins text-sm font-normal text-[#717382] text-center'>Start your 7 day trial to unlock all the features of the bot. Integrate with your favorite apps.</p>
                            <div className=' bg-purple p-[2px] rounded-[10px] mt-2 xxs:mt-5'>
                                <div className='bg-white p-2 xxs:p-[21px_24px_28px] rounded-[10px]'>
                                    <p className='ff-poppins font-semibold text-sm text-[#2D2E35]'>What you will get:</p>
                                    <div className='flex items-center gap-2 pt-2 xxs:pt-[10px]'>
                                        <div className='w-[26px] h-[26px] bg-[#f1f0fd] rounded-[50px] flex items-center justify-center'>
                                            <p className='font-medium ff-poppins text-sm text-[#7267EF]'>1</p>
                                        </div>
                                        <p className='text-sm font-medium ff-poppins text-[#2D2E35]'>Calling, Texting, Emailing.</p>
                                    </div>
                                    <div className='flex items-center gap-2 pt-1 xxs:pt-2'>
                                        <div className='w-[26px] h-[26px] bg-[#f1f0fd] rounded-[50px] flex items-center justify-center'>
                                            <p className='font-medium ff-poppins text-sm text-[#7267EF]'>2</p>
                                        </div>
                                        <p className='text-sm font-medium ff-poppins text-[#2D2E35]'>Embed on website.</p>
                                    </div>
                                    <div className='flex items-center gap-2 pt-1 xxs:pt-2'>
                                        <div className='w-[26px] h-[26px] bg-[#f1f0fd] rounded-[50px] flex items-center justify-center'>
                                            <p className='font-medium ff-poppins text-sm text-[#7267EF]'>3</p>
                                        </div>
                                        <p className='text-sm font-medium ff-poppins text-[#2D2E35]'>Api integration.</p>
                                    </div>
                                    <div className='flex gap-2 pt-1 xxs:pt-2'>
                                        <div className='w-[26px] h-[26px] bg-[#f1f0fd] rounded-[50px] flex items-center justify-center'>
                                            <p className='font-medium ff-poppins text-sm text-[#7267EF]'>4</p>
                                        </div>
                                        <div className='text-sm font-medium ff-poppins text-[#2D2E35]  max-w-[274px]'>
                                            <div className='flex gap-1 xxs:gap-2 pt-1'>
                                                Integrate with:
                                                <div className='flex items-center gap-1'>
                                                    <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.99994 8.0035C10.0002 8.58042 9.89614 9.15263 9.69275 9.6925C9.15268 9.89586 8.58034 10.0001 8.00325 10.0002H7.9965C7.40225 9.99944 6.83287 9.89081 6.3075 9.69275C6.10398 9.15281 5.9998 8.58052 6 8.0035V7.9965C5.99972 7.41969 6.10368 6.84758 6.30688 6.30775C6.84691 6.10401 7.41937 5.99974 7.99656 6H8.00331C8.58044 5.99972 9.15284 6.10397 9.69281 6.30769C9.89623 6.84747 10.0003 7.4196 10 7.99644V8.00344L9.99994 8.0035ZM15.8889 6.66669H11.2191L14.5209 3.36462C14.2618 3.00057 13.9727 2.65878 13.6567 2.34281V2.34256C13.3407 2.02693 12.999 1.7381 12.6351 1.47906L9.33306 4.78113V0.111375C8.89389 0.0374955 8.44934 0.000242306 8.004 0L7.99575 0C7.54275 0.00025 7.09906 0.03875 6.66669 0.111375V4.78113L3.36462 1.47906C3.00071 1.73803 2.65916 2.02707 2.34356 2.34313L2.34181 2.34437C2.02635 2.65995 1.73766 3.00121 1.47875 3.36462L4.78106 6.66669H0.111375C0.111375 6.66669 0 7.54375 0 7.99725V8.00275C0 8.45625 0.0384375 8.90069 0.111375 9.33331H4.78113L1.47881 12.6354C1.99829 13.3644 2.63562 14.0017 3.36462 14.5212L6.66669 11.2189V15.8889C7.10538 15.9624 7.54938 15.9996 7.99419 16H8.0055C8.45031 15.9996 8.89432 15.9624 9.333 15.8889V11.2189L12.6354 14.5212C12.9992 14.2621 13.3408 13.9731 13.6567 13.6574L13.6574 13.6567C13.973 13.3407 14.2618 12.9991 14.5209 12.6354L11.2186 9.33331H15.8889C15.9616 8.90144 15.9995 8.45831 16 8.00581V7.99419C15.9995 7.54169 15.9616 7.09856 15.8889 6.66669Z" fill="#FF4A00" />
                                                    </svg>
                                                    </span>
                                                    <p>Zapier,</p>
                                                </div>
                                                <div className='flex items-center gap-1'>
                                                    <img src={slack} alt="slack" />
                                                    <p>Slack,</p>
                                                </div>
                                            </div>
                                            <div className='flex gap-1 pt-[1px]'>
                                                <img src={gmail} alt="gmail" />
                                                <p>Gmail,</p>
                                                <img src={terms} alt="terms" />
                                                <p>Teams,</p>
                                                <img src={whatsapp} alt="whatsapp" />
                                                <p>WhatsApp,</p>
                                            </div>
                                            <div className='flex gap-1 pt-[1px]'>
                                                <img src={discord} alt="discord" />
                                                <p>Discord,</p>
                                                <img src={zoom} alt="zoom" />
                                                <p>Zoom & more.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-1 pt-2 xxs:pt-4'>
                                <span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99967 1.33331C4.32367 1.33331 1.33301 4.32398 1.33301 7.99998C1.33301 11.676 4.32367 14.6666 7.99967 14.6666C11.6757 14.6666 14.6663 11.676 14.6663 7.99998C14.6663 4.32398 11.6757 1.33331 7.99967 1.33331ZM7.99967 13.3333C5.05901 13.3333 2.66634 10.9406 2.66634 7.99998C2.66634 5.05931 5.05901 2.66665 7.99967 2.66665C10.9403 2.66665 13.333 5.05931 13.333 7.99998C13.333 10.9406 10.9403 13.3333 7.99967 13.3333Z" fill="#7267EF" />
                                        <path d="M7.33301 7.33335H8.66634V11.3334H7.33301V7.33335ZM7.33301 4.66669H8.66634V6.00002H7.33301V4.66669Z" fill="#7267EF" />
                                    </svg>
                                </span>
                                <p className='ff-poppins font-normal text-sm text-[#717382]'>Free for 7 days then after $39.99/mo to create unlimited bots.</p>
                            </div>
                            <form onSubmit={handleSubmitThirdPopup}>
                                <button type='submit' className='ff-poppins font-medium text-base text-white p-[14px] w-full bg-purple rounded-[10px] mt-3 xxs:mt-5 shadow-[0px_10px_10px_-10px#0000000D]'>Start Free 7 day trial</button>
                            </form>
                            <form onSubmit={handleSubmitFourthPopup} className='mx-auto'>
                                <button type='submit' className='ff-poppins text-sm text-[#7267EF] font-normal relative after:bg-[#7267EF] after:w-[175px]  after:h-[0.5px] after:absolute after:bottom-1 pt-2 xxs:pt-4 after:left-[0]'>No thanks, give me a call</button>
                            </form>
                        </div>
                    </Popup2>
                )}

                {showFourthPopup && (
                    <Popup2 isOpen={isOpen} onClose={togglePopup}>
                        <div className='flex justify-center flex-col pt-2 xxs:pt-0'>
                            <span className='mx-auto'><svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="28" cy="28" r="28" fill="white" />
                                <circle cx="28" cy="28" r="27.5" stroke="#2D2E35" stroke-opacity="0.1" />
                                <path d="M35 19H21C19.8954 19 19 19.8954 19 21V35C19 36.1046 19.8954 37 21 37H35C36.1046 37 37 36.1046 37 35V21C37 19.8954 36.1046 19 35 19Z" stroke="#7267EF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19 25C19 24.4696 19.2107 23.9609 19.5858 23.5858C19.9609 23.2107 20.4696 23 21 23H35C35.5304 23 36.0391 23.2107 36.4142 23.5858C36.7893 23.9609 37 24.4696 37 25" stroke="#7267EF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19 27H22C22.8 27 23.6 27.3 24.1 27.9L25.2 28.8C26.8 30.4 29.3 30.4 30.9 28.8L32 27.9C32.5 27.4 33.3 27 34.1 27H37" stroke="#7267EF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </span>
                            <h2 className='ff-poppins font-medium text-[21px] pt-2 xxs:pt-4 text-[#2D2E35] text-center'>Start Your Trial</h2>
                            <p className='ff-poppins text-sm pt-1 font-normal text-[#717382] leading-[22px]  text-center'>Enter your credit card to start your trial today. After 7 days you will be charged $39.99/mo until you cancel.</p>

                            <div className='flex justify-center xxs:justify-start gap-1 pt-5'>
                                <div className='w-14 xxs:w-[77px] h-[58px] py-1 px-2 border-2 rounded-[5px]'>
                                    <img src={card} alt="card" className='w-[18px] h-5' />
                                    <p className='ff-poppins text-[#2E68D5] text-[10px] font-medium'>Card</p>
                                </div>
                                <div className='w-[70px] xxs:w-[77px] h-[58px] py-1 px-2 border-2 rounded-[5px]'>
                                    <img src={cashcard} alt="cashcard" className='w-[18px] h-5' />
                                    <p className='ff-poppins text-[#72737b] text-[10px] font-medium leading-[9px] pt-[1px]'>Cash App <br />Pay</p>
                                </div>
                                <div className='w-16 xxs:w-[77px] h-[58px] py-1 px-2 border-2 rounded-[5px]'>
                                    <img src={klarna} alt="klarna" className='w-[18px] h-5' />
                                    <p className='ff-poppins text-[#72737b] text-[10px] font-medium leading-[9px] pt-[3px]'>Klarna</p>
                                </div>
                                <div className='w-16 xxs:w-[77px] h-[58px] py-1 px-2 border-2 rounded-[5px]'>
                                    <img src={afterpay} alt="afterpay" className='w-[18px] h-5' />
                                    <p className='ff-poppins text-[#72737b] text-[10px] font-medium leading-[9px] pt-[3px]'>Afterpay</p>
                                </div>
                                <div className='w-8 xxs:w-[29px] h-[58px] p-1 border-2 rounded-[5px]'>
                                    <img src={bank} alt="bank" className='w-[24px] h-6' />
                                </div>
                            </div>

                            <form>
                                <div className=''>
                                    <label For="cardnumber" className='ff-poppins font-medium text-[11px] text-[#717382]'>Card number</label>
                                    <div className='w-full border p-1 xxs:p-2 rounded-md flex justify-between'>
                                        <input required type="text" id='cardnumber' placeholder='1234 1234 1234 1234' className='text-[12px] xxs:text-[16px] outline-none ff-poppins' />
                                        <div className='flex items-center'>
                                            <img src={visa} alt="visa" className='w-8 h-8' />
                                            <img src={mastercard} alt="mastercard" className='w-8 h-8' />
                                            <img src={amex} alt="mastercard" className='w-8 h-8' />
                                            <img src={elo} alt="mastercard" className='w-6 h-5' />
                                        </div>
                                    </div>

                                </div>
                                <div className='flex gap-1'>
                                    <div className='flex flex-col pt-2 w-1/2'>
                                        <label For="expiration" className='ff-poppins font-medium text-[11px] text-[#717382]'>Expiration</label>
                                        <input type="text" id='expiration' placeholder='MM/YY' className='text-[12px] xxs:text-[16px] border p-2 rounded-md outline-none ff-poppins' />
                                    </div>
                                    <div className='flex flex-col pt-2 w-1/2'>
                                        <label for="cvc" className='ff-poppins font-medium text-[11px] text-[#717382]'>CVC</label>
                                        <input type="text" id='cvc'
                                            value={cvc}
                                            onChange={handleCvcChange} placeholder='CVC' maxlength="3" className='text-[12px] xxs:text-[16px] border p-2 rounded-md outline-none ff-poppins' />
                                    </div>
                                </div>
                                <div className='flex gap-1'>
                                    <div className='flex flex-col pt-2 w-1/2'>
                                        <label htmlFor="country" className='ff-poppins font-medium text-[11px] text-[#717382]' >Country</label>
                                        <select id="country" value={selectedCountry} className=' border p-2 rounded-md outline-none ' onChange={handleCountryChange}>
                                            <option value="" className='ff-poppins text-[12px] xxs:text-[16px]'>United States</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="UK">United Kingdom</option>
                                            <option value="JP">Japan</option>

                                        </select>
                                    </div>
                                    <div className='flex flex-col pt-2 w-1/2'>
                                        <label for="zip" className='ff-poppins font-medium text-[11px] text-[#717382]'>ZIP</label>
                                        <input type="text" id='zip' value={zipCode}
                                            onChange={handleZipCodeChange} maxlength="5" placeholder='12345' className='text-[12px] xxs:text-[16px] border p-2 rounded-md outline-none ff-poppins' />
                                    </div>
                                </div>
                                <button className='ff-poppins font-medium text-base text-white bg-purple p-[14px] w-full mt-6 rounded-[10px] hover:opacity-90 duration-300'>Pay $39.99 & Start Trial</button>


                            </form>
                        </div>
                    </Popup2>
                )}

                {showFifthPopup && (
                    <Popup3 isOpen={isOpen} onClose={togglePopup}>
                        <h1 className="ff-poppins font-medium text-lg xxs:text-[21px] text-[#2D2E35]">Get a call from Johan</h1>
                        <p className="text-[#717382] ff-poppins font-normal text-sm leading-[22px] xxs:pt-1">Enter your phone below to have Johan your ai bot give you a phone call.</p>

                        <form onSubmit={handleSubmitFifthPopup}>
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                placeholder="Your phone number"
                                className="ff-poppins text-sm xxs:text-base font-normal text-[#717382] focus:shadow-[0px_0px_0px_4px#7267EF1A] p-3 xxs:p-[14px_24px_18px] outline-none rounded-[10px] w-full mt-4 xxs:mt-5 border focus:border focus:border-[#7267EF80] border-[#2D2E351A]"
                            />
                            {phoneNumberError && (
                                <p style={{ color: 'red' }}>{phoneNumberError}</p>
                            )}
                            <button
                                type="submit"
                                disabled={!isPhoneNumberValid}
                                className={`border border-[#FFFFFF29] shadow-[0px_10px_10px_-10px#0000000D] p-3 xxs:p-[14px] w-full mt-2 xxs:mt-4 rounded-[10px] text-white text-sm xxs:text-base ff-poppins font-medium ${isPhoneNumberValid ? 'bg-purple' : ' bg-grey cursor-not-allowed'}`}
                            >
                                Start Call
                            </button>

                        </form>
                        <p className='ff-poppins font-normal text-sm text-[#A2A5B5] pt-2 xxs:pt-4 text-center max-w-[270px] mx-auto'>You’ll receive a call Johan’s number:
                            +1 888-456-1242</p>
                    </Popup3>
                )}


            </div>
        </>
    );
};

export default Form;
