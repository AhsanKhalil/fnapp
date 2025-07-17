"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
    name: yup.string().min(3, "Name must be at least 3 characters.").required("Name is required."),
    email: yup.string().email("Enter a valid email address.").required("Email is required."),
    mobile: yup.string().matches(/^\+92[0-9]{10}$/, "Mobile number must be in +92XXXXXXXXXX format.").required("Mobile number is required."),
    subject: yup.string().min(3, "Subject must be at least 3 characters.").required("Subject is required."),
    message: yup.string().min(10, "Message must be at least 10 characters.").required("Message is required.")
}).required();

export default function Contact() {
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver: yupResolver(schema)
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);
        setTimeout(() => {
            alert(`Thank you, ${data.name}. Your request has been submitted. We will call you shortly.`);
            reset();
            setValue("mobile", "+92");
            setLoading(false);
        }, 2000);
    };

    return (
        <section className="bg-white text-black pt-8 pb-12 px-4 md:px-8 flex items-start justify-center min-h-screen">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-2xl border border-gray-200 mt-4">
                <h1 className="text-3xl font-bold mb-6 text-center text-black">Contact Us</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name"
                            {...register("name")}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Your Email"
                            {...register("email")}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Mobile Number (+92XXXXXXXXXX)"
                            {...register("mobile")}
                            defaultValue="+92"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Subject"
                            {...register("subject")}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                    </div>
                    <div>
                        <textarea
                            placeholder="Your Message"
                            {...register("message")}
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`bg-blue-500 text-white font-semibold rounded-lg px-4 py-3 transition-colors flex items-center justify-center ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                    >
                        {loading ? (
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                            </svg>
                        ) : 'Submit'}
                    </button>
                </form>
            </div>
        </section>
    );
}
