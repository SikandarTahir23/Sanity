import React from 'react'

export default function Header() {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">

                            <circle cx="12" cy="12" r="10" fill="currentColor" className="text-indigo-500" />

                            <path d="M8 10v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6H8z" fill="white" />
                            <path d="M9 10a3 3 0 0 1 6 0" stroke="white" />
                        </svg>

                        <span className="ml-3 text-xl">Sanity-Ecomo</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900">Home</a>
                        <a className="mr-5 hover:text-gray-900">About</a>
                        <a className="mr-5 hover:text-gray-900">Contact</a>
                    </nav>
                </div>
            </header>
        </div>
    )
}
