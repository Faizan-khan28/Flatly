import React, { useState } from 'react';

const Chatbot = () => {
    const [step, setStep] = useState(1);
    const [language, setLanguage] = useState('');
    const [property, setProperty] = useState('');
    const [specificOption, setSpecificOption] = useState('');
    const [phone, setPhone] = useState('');
    const [messages, setMessages] = useState([]);

    const addMessage = (text, sender = 'bot') => {
        setMessages((prev) => [...prev, { text, sender }]);
    };

    const handleLanguageSelection = (lang) => {
        setLanguage(lang);
        addMessage(lang === 'English' ? 'You selected English.' : 'आपने हिंदी चुना।');
        addMessage(lang === 'English' ? 'What property are you looking for?' : 'आप किस प्रकार की संपत्ति की तलाश कर रहे हैं?');
        setStep(2);
    };

    const handlePropertySelection = (prop) => {
        setProperty(prop);
        if (prop === 'Flat') {
            addMessage(language === 'English' ? 'What BHK are you looking for?' : 'आप कितने BHK की तलाश कर रहे हैं?');
            setStep(3);
        } else if (prop === 'PG') {
            addMessage(language === 'English' ? 'What type of sharing do you prefer?' : 'आप किस प्रकार का साझा करना पसंद करेंगे?');
            setStep(3);
        } else {
            addMessage(language === 'English' ? 'Please enter your contact number.' : 'कृपया अपना संपर्क नंबर दर्ज करें।');
            setStep(4);
        }
    };

    const handleSpecificOptionSelection = (option) => {
        setSpecificOption(option);
        addMessage(language === 'English' ? 'Please enter your contact number.' : 'कृपया अपना संपर्क नंबर दर्ज करें।');
        setStep(4);
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
                const response = await fetch('https://your-backend-api.com/enquiry', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(inquiry),
                });

                if (response.ok) {
                    addMessage(language === 'English' ? 'Thank you! Your inquiry has been submitted.' : 'धन्यवाद! आपकी पूछताछ जमा कर दी गई है।');
                } else {
                    addMessage(language === 'English' ? 'Something went wrong. Please try again.' : 'कुछ गलत हो गया। कृपया पुन: प्रयास करें।');
                }
            } catch (error) {
                console.error('Error:', error);
                addMessage(language === 'English' ? 'Something went wrong. Please try again.' : 'कुछ गलत हो गया। कृपया पुन: प्रयास करें।');
            }

            setStep(5);
        } else {
            addMessage(language === 'English' ? 'Please enter a valid 10-digit phone number.' : 'कृपया मान्य 10-अंकीय फ़ोन नंबर दर्ज करें।');
        }
    }; 

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow-lg">
            <div className="h-64 overflow-y-auto bg-white p-4 rounded-lg shadow-inner">
                {messages.map((msg, index) => (
                    <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                        <span
                            className={`inline-block px-3 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-900'
                                }`}
                        >
                            {msg.text}
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-4">
                {step === 1 && (
                    <div className="flex space-x-2">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            onClick={() => handleLanguageSelection('English')}
                        >
                            English
                        </button>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                            onClick={() => handleLanguageSelection('Hindi')}
                        >
                            हिंदी
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="flex space-x-2">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            onClick={() => handlePropertySelection('PG')}
                        >
                            {language === 'English' ? 'PG' : 'पीजी'}
                        </button>
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                            onClick={() => handlePropertySelection('Flat')}
                        >
                            {language === 'English' ? 'Flat' : 'फ्लैट'}
                        </button>
                        <button
                            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                            onClick={() => handlePropertySelection('Land')}
                        >
                            {language === 'English' ? 'Land' : 'जमीन'}
                        </button>
                    </div>
                )}

                {step === 3 && property === 'Flat' && (
                    <div className="flex space-x-2">
                        {[1, 2, 3, 4].map((bhk) => (
                            <button
                                key={bhk}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                onClick={() => handleSpecificOptionSelection(`${bhk} BHK`)}
                            >
                                {bhk} BHK
                            </button>
                        ))}
                    </div>
                )}

                {step === 3 && property === 'PG' && (
                    <div className="flex space-x-2">
                        {['Single', 'Double', 'Triple', 'Quadruple'].map((sharing) => (
                            <button
                                key={sharing}
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                                onClick={() => handleSpecificOptionSelection(sharing)}
                            >
                                {language === 'English' ? sharing : sharing === 'Single' ? 'एकल' : sharing === 'Double' ? 'डबल' : sharing === 'Triple' ? 'तीन' : 'चार'}
                            </button>
                        ))}
                    </div>
                )}

                {step === 4 && (
                    <div className="flex items-center space-x-2">
                        <input
                            type="tel"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            placeholder={language === 'English' ? 'Enter your phone number' : 'अपना फ़ोन नंबर दर्ज करें'}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                            onClick={handlePhoneInput}
                        >
                            {language === 'English' ? 'Submit' : 'जमा करें'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Chatbot;
