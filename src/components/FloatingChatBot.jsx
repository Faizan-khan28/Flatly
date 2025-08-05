import React, { useState } from 'react';
import { BsChatDotsFill } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { FiArrowLeft } from 'react-icons/fi';

const FloatingChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1);
    const [language, setLanguage] = useState('');
    const [property, setProperty] = useState('');
    const [specificOption, setSpecificOption] = useState('');
    const [phone, setPhone] = useState('');
    const [messages, setMessages] = useState([]);
    const [previousMessage, setPreviousMessage] = useState('');

    const toggleChatbot = () => setIsOpen(!isOpen);

    const addMessage = (text, sender = 'bot') => {
        setMessages([{ text, sender }]);
    };

    const handleLanguageSelection = (lang) => {
        setLanguage(lang);
        setStep(2);
        setPreviousMessage('Please select a property type / कृपया संपत्ति प्रकार चुनें');
        const welcomeMessage = lang === 'English'
            ? 'Hi! I am your assistant, ready to help you find your perfect property! 😊 What type of property are you looking for?'
            : 'नमस्ते! मैं आपकी सहायक हूँ, आपकी आदर्श संपत्ति ढूँढने में आपकी मदद करने के लिए तैयार! 😊 आप किस प्रकार की संपत्ति की तलाश कर रहे हैं?';
        addMessage(welcomeMessage, 'bot');
    };

    const handlePropertySelection = (prop) => {
        setProperty(prop);
        setStep(prop === 'Flat' ? 3 : 4);
        setPreviousMessage('What specific option do you prefer?');
        const propertyMessage = prop === 'Flat'
            ? (language === 'English' ? 'Great choice! 🏠 What type of flat are you looking for? 😊' : 'अच्छा चयन! 🏠 आप किस प्रकार का फ्लैट पसंद करेंगे? 😊')
            : (language === 'English' ? 'Awesome! 🏡 What sharing option do you prefer for PGs? 😊' : 'शानदार! 🏡 आप पीजी के लिए कौन सा विकल्प पसंद करेंगे? 😊');
        addMessage(propertyMessage, 'bot');
    };

    const handleSpecificOptionSelection = (option) => {
        setSpecificOption(option);
        setStep(5);
        setPreviousMessage('Please enter your phone number so I can get in touch with you. 📞');
        const phoneMessage = language === 'English'
            ? 'Please enter your phone number so I can get in touch with you. 📞'
            : 'कृपया अपना फोन नंबर दर्ज करें ताकि मैं आपसे संपर्क कर सकूं। 📞';
        addMessage(phoneMessage, 'bot');
    };

    const handlePhoneInput = async () => {
        if (phone.trim().length === 10) {
            const inquiry = {
                language,
                property,
                specificOption,
                phone,
            };

            try {
                const response = await fetch('https://backendcrm-tlwh.onrender.com/api/google-sheets/enquiry', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-secret-key': 'Thisismostimportantsecretkey',
                    },
                    body: JSON.stringify(inquiry),
                });

                if (response.ok) {
                    const successMessage = language === 'English'
                        ? 'Yay! 🎉 Your inquiry has been submitted. I will contact you soon! 😊'
                        : 'याय! 🎉 आपकी पूछताछ सबमिट कर दी गई है। मैं जल्द ही आपसे संपर्क करूंगा! 😊';
                    addMessage(successMessage, 'bot');
                } else {
                    const errorMessage = language === 'English'
                        ? 'Oops! Something went wrong. Please try again later. 😕'
                        : 'उफ्फ! कुछ गलत हुआ है। कृपया कुछ समय बाद पुनः प्रयास करें। 😕';
                    addMessage(errorMessage, 'bot');
                }
            } catch (error) {
                console.error('Error:', error);
                const errorMessage = language === 'English'
                    ? 'Oops! Something went wrong. Please try again later. 😕'
                    : 'उफ्फ! कुछ गलत हुआ है। कृपया कुछ समय बाद पुनः प्रयास करें। 😕';
                addMessage(errorMessage, 'bot');
            }

            setStep(6);
        } else {
            const invalidPhoneMessage = language === 'English'
                ? 'Please enter a valid 10-digit phone number. 😊'
                : 'कृपया एक वैध 10 अंकों का फोन नंबर दर्ज करें। 😊';
            addMessage(invalidPhoneMessage, 'bot');
        }
    };

    const handleBack = () => {
        if (step === 2) {
            setStep(1);
            addMessage(previousMessage, 'bot');
        } else if (step === 3 || step === 4) {
            setStep(2);
            addMessage(previousMessage, 'bot');
        } else if (step === 5) {
            setStep(property === 'Flat' ? 3 : 4);
            addMessage(previousMessage, 'bot');
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {isOpen && (
                <div className="w-full sm:w-80 md:w-96 lg:w-96 xl:w-96 bg-white shadow-xl rounded-lg p-4 border border-gray-200 max-w-xs sm:max-w-md md:max-w-lg">
                    <div className="flex items-center justify-between border-b pb-2 mb-3">
                        <div className="flex items-center space-x-2">
                            {step > 1 && (
                                <button
                                    onClick={handleBack}
                                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                >
                                    <FiArrowLeft size={20} />
                                </button>
                            )}
                            <h3 className="text-lg font-semibold text-gray-700">Flatly AI Assistant 🤖</h3>
                        </div>
                        <button
                            onClick={toggleChatbot}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            <IoMdClose size={20} />
                        </button>
                    </div>

                    {step === 1 && (
                        <div className="w-full bg-gray-100 p-3 rounded-lg shadow-inner mb-3">
                            <div className="text-gray-700 font-semibold mb-3">
                                {'Hi! I am your cute assistant! 👋 Please select a language / कृपया एक भाषा चुनें'}
                            </div>
                            <div className="flex space-x-2 w-full">
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600"
                                    onClick={() => handleLanguageSelection('English')}
                                >
                                    English
                                </button>
                                <button
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600"
                                    onClick={() => handleLanguageSelection('Hindi')}
                                >
                                    हिंदी
                                </button>
                            </div>
                        </div>
                    )}

                    {step > 1 && (
                        <div className="h-64 overflow-y-auto bg-gray-50 p-3 rounded-lg shadow-inner mb-3">
                            {messages.map((msg, index) => (
                                <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                    <span
                                        className={`inline-block px-3 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-900'}`}
                                    >
                                        {msg.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="flex mt-3 space-y-2">
                        {step === 2 && (
                            <div className="grid grid-cols-2 gap-2 w-full">
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600"
                                    onClick={() => handlePropertySelection('Flat')}
                                >
                                    Flat
                                </button>
                                <button
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600"
                                    onClick={() => handlePropertySelection('PG')}
                                >
                                    PG
                                </button>
                            </div>
                        )}

                        {step === 3 && property === 'Flat' && (
                            <div className="grid grid-cols-2 gap-2 w-full">
                                {['1 BHK', '2 BHK', '3 BHK', '4 BHK'].map((option) => (
                                    <button
                                        key={option}
                                        className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600"
                                        onClick={() => handleSpecificOptionSelection(option)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}

                        {step === 4 && property === 'PG' && (
                            <div className="grid grid-cols-2 gap-2 w-full">
                                {['Single', 'Double', 'Triple', 'Four'].map((option) => (
                                    <button
                                        key={option}
                                        className="bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600"
                                        onClick={() => handleSpecificOptionSelection(option)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        )}

                        {step === 5 && (
                            <div className="flex items-center space-x-2 w-full">
                                <input
                                    type="text"
                                    maxLength={10}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="border border-gray-300 p-2 rounded-lg w-full"
                                    placeholder="Enter phone number"
                                />
                                <button
                                    onClick={handlePhoneInput}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                >
                                    Submit
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {!isOpen && (
                <div className="bg-blue-500 text-white p-3 rounded-full shadow-lg cursor-pointer" onClick={toggleChatbot}>
                    <BsChatDotsFill size={24} />
                </div>
            )}
        </div>
    );
};

export default FloatingChatbot;
