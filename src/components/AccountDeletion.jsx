import React, { useState } from "react";

const AccountDeletionForm = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    // Handles form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setError("Please enter a valid email address.");
            return;
        }
        try {
            console.log("hiiiii");

            const response = await fetch("https://backend-qlic.onrender.com/api/user/delete-Account", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
            console.log(response);

            if (response.ok) {
                setSubmitted(true);
                setError(""); // Clear error if successful
            } else {
                setError("Failed to submit the request. Please try again.");
            }
        } catch (err) {
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-8">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                {submitted ? (
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Request Submitted</h3>
                        <p className="text-gray-600">Your account deletion request has been submitted. Please check your email to confirm.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Delete Your Account</h3>
                        <p className="text-gray-600 mb-6 text-center">
                            Enter your registered email address to request the deletion of your account and all associated data.
                        </p>

                        {error && (
                            <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-lg">
                                {error}
                            </div>
                        )}

                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-semibold mb-2"
                            >
                                Email Address:
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
                        >
                            Submit Request
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default AccountDeletionForm;
