import React from "react";
import { useState, useEffect } from "react";
import "../../css/Navbar.css";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import DarkMode from "../DarkMode/DarkMode";
import { Link } from "react-router-dom";

function NavbarFunction() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Link to="how-it-works">
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal"
                >
                    <a href="#" className="flex items-center">
                        How It Works
                    </a>
                </Typography>
            </Link>

            <Link to="our-work">
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal"
                >
                    <a href="#" className="flex items-center">
                        Our Work
                    </a>
                </Typography>
            </Link>

            <Link to="our-work">
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal"
                >
                    <a href="#" className="flex items-center">
                        Pricing
                    </a>
                </Typography>
            </Link>

            <Link to="start-journey">
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal"
                >
                    <a href="#" className="flex items-center">
                        About Us
                    </a>
                </Typography>
            </Link>
        </ul>
    );

    return (
        <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Link to="/">
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        className="nav-item-container mr-4 cursor-pointer py-1.5 font-normal"
                    >
                        <div className="brand-info">
                            <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="9.5"
                                    cy="9.5"
                                    r="9.5"
                                    fill="#3461FF"
                                />
                            </svg>
                            <svg
                                width="18"
                                height="21"
                                viewBox="0 0 18 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.5192 9.63622C17.1807 10.0221 17.1807 10.9779 16.5192 11.3638L1.50387 20.1227C0.837211 20.5116 -8.75572e-07 20.0308 -8.41836e-07 19.259L-7.61032e-08 1.74104C-4.23671e-08 0.969246 0.837213 0.488374 1.50387 0.877257L9 5.25L16.5192 9.63622Z"
                                    fill="#3461FF"
                                />
                            </svg>
                            <span id="brand-name">Embrace</span>
                        </div>

                        <div className="nav-items hidden lg:block">
                            {navList}
                        </div>
                    </Typography>
                </Link>

                <DarkMode />
                <Button
                    className="try-it-now-btn hidden lg:inline-block"
                    variant="gradient"
                    size="sm"
                >
                    <span>Try It Now</span>
                </Button>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <DarkMode />

                    <Button
                        variant="gradient"
                        size="sm"
                        fullWidth
                        className="try-it-now-btn mb-2"
                    >
                        <span>Try It Now</span>
                    </Button>
                </div>
            </MobileNav>
        </Navbar>
    );
}

export default NavbarFunction;
