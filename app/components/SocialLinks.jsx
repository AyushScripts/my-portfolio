import React from 'react';
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from 'react-icons/fa6';
import { SiUpwork } from 'react-icons/si';
import { BiLogoTelegram } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa";


const SocialLinks = () => {
    const LinkWithTitle = ({ href, title, children }) => {
        return (
            <a href={href} title={title} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    };

    return (
        <div className='flex gap-3 justify-center lg:justify-start flex-wrap'>
            <LinkWithTitle href="https://github.com/AyushScripts" title="View Github Profile">
                <FiGithub className='text-purple-400 transition ease-in-200 text-2xl md:text-3xl lg:text-4xl' alt='Github' />
            </LinkWithTitle>
            <LinkWithTitle href="https://linkedin.com/in/ayushb04" title="View LinkedIn Profile">
                <FaLinkedinIn className='text-purple-400 transition ease-in-200 text-2xl md:text-3xl lg:text-4xl' alt='LinkedIn'/>
            </LinkWithTitle>
            <LinkWithTitle href="https://t.me/ayyushhhhhhh" title="View Telegram Profile">
                <BiLogoTelegram className='text-purple-400 transition ease-in-200 text-2xl md:text-3xl lg:text-4xl' alt='LinkedIn'/>
            </LinkWithTitle>
            <LinkWithTitle href="https://x.com/ayushfromindia" title="View X Profile">
                <FaXTwitter className='text-purple-400 transition ease-in-200 text-2xl md:text-3xl lg:text-4xl' alt='X'/>
            </LinkWithTitle>
            <LinkWithTitle href="https://discord.com/channels/@ayushb04" title="View X Profile">
                <FaDiscord className='text-purple-400 transition ease-in-200 text-2xl md:text-3xl lg:text-4xl' alt='X'/>
            </LinkWithTitle>
            <LinkWithTitle href="https://www.upwork.com/freelancers/~01c4565b4aaa0b5281" title="View Upwork Profile">
                <SiUpwork className='text-purple-400 transition duration-150 ease-in text-2xl md:text-3xl lg:text-4xl' alt='Upwork'/>
            </LinkWithTitle>
        </div>
    );
};

export default SocialLinks;