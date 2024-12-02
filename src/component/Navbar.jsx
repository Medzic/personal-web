import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className="h-14 sticky top-0 z-50 flex items-center justify-between font-mono font-bold bg-gray-100 px-4">
            {/* Burger Menu Button */}
            <button
                className="lg:hidden text-black text-2xl flex flex-col ml-auto focus:outline-none"
                onClick={toggleMenu}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-4 absolute inset-x-0 mx-auto justify-center">
                <a href="#profile" className="hover:text-blue-500 transition">Profile</a>
                <a href="#project" className="hover:text-blue-500 transition">Project</a>
                <a href="#hobby" className="hover:text-blue-500 transition">Hobby</a>
                <a href="#article" className="hover:text-blue-500 transition">Article</a>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="absolute top-14 left-0 w-full bg-gray-200 flex flex-col items-center space-y-2 py-4 z-10 lg:hidden">
                    <a href="#profile" className="hover:text-blue-500 transition">Profile</a>
                    <a href="#project" className="hover:text-blue-500 transition">Project</a>
                    <a href="#hobby" className="hover:text-blue-500 transition">Hobby</a>
                    <a href="#article" className="hover:text-blue-500 transition">Article</a>
                </div>
            )}
        </nav>
    )
}
