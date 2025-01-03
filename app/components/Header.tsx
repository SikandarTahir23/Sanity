import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <div>
            <header className="bg-gray-100 text-gray-600 body-font shadow-md">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 3h18M9 3v18m6-18v18M3 21h18"
                            />
                        </svg>
                        <span className="ml-3 text-xl font-bold text-indigo-500">E-Store</span>
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-8">
                        <Link href="/" className="hover:text-indigo-500">Home</Link>
                        <Link href="/about" className="hover:text-indigo-500">About</Link>
                        <Link href="/contact" className="hover:text-indigo-500">Contact</Link>
                    </nav>
                    <Link href="/cart" className="inline-flex items-center bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-5 h-5 mr-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 3h18M9 3v18m6-18v18M3 21h18"
                            />
                        </svg>
                        Cart
                    </Link>
                </div>
            </header>
        </div>
    );
}
