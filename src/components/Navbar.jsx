import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "./svg/Menu";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="relative">
            <nav className="bg-gradient-to-l p-5  from-blue-500 via-purple-500 shadow-lg shadow-purple-500 to-pink-500 mb-10">
                {isMobile ? (
                    <> <div className="flex justify-end">
                        <button 
                            className="text-2xl text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? '✕' : <Menu/>}
                        </button>
                        </div>
                        {isMenuOpen && (
                            <div className="flex flex-col items-end gap-5 pt-12">
                                <Link to="/"><p className=" super-navbar">Homepage</p></Link>
                                <Link to="/registration"><p className="super-navbar">Registration</p></Link>
                                <Link to="/pets"><p className="super-navbar">Pets</p></Link>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="flex justify-end items-center gap-5 text-xl">
                        <Link to="/"><p className="super-navbar">Homepage</p></Link>
                        <Link to="/registration"><p className="super-navbar">Registration</p></Link>
                        <Link to="/pets"><p className="super-navbar">Pets</p></Link>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Navbar;