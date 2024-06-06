import React from 'react';
import NavButton from "../nav-button";
import {BsPostcard} from "react-icons/bs";
import {FiUsers} from "react-icons/fi";
import {FaUsers} from "react-icons/fa";

const Navbar = () => {
    return (
        <nav>
            <nav>
                <ul className="flex flex-col gap-5">
                    <li>
                        <NavButton href="/" icon={<BsPostcard />}>
                            Posts
                        </NavButton>
                    </li>
                    <li>
                        <NavButton href="following" icon={<FiUsers />}>
                            Following
                        </NavButton>
                    </li>
                    <li>
                        <NavButton href="followers" icon={<FaUsers />}>
                            Followers
                        </NavButton>
                    </li>
                </ul>
            </nav>
        </nav>
    );
};

export default Navbar;