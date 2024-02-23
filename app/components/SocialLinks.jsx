import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiUpwork } from 'react-icons/si';

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
                <FaGithub className='text-purple-400 hover:text-purple-300 transition ease-in-200 text-3xl lg:text-4xl' alt='Github' />
            </LinkWithTitle>
            <LinkWithTitle href="https://linkedin.com/in/ayushb04" title="View LinkedIn Profile">
                <FaLinkedin className='text-purple-400 hover:text-purple-300 transition ease-in-200 text-3xl lg:text-4xl' alt='LinkedIn'/>
            </LinkWithTitle>
            <LinkWithTitle href="https://x.com/ayushfromindia" title="View X Profile">
                <FaXTwitter className='text-purple-400 hover:text-purple-300 transition ease-in-200 text-3xl lg:text-4xl' alt='X'/>
            </LinkWithTitle>
            <LinkWithTitle href="https://www.upwork.com/freelancers/~01c4565b4aaa0b5281" title="View Upwork Profile">
                <SiUpwork className='text-purple-400 hover:text-purple-300 transition duration-150 ease-in text-3xl lg:text-4xl' alt='Upwork'/>
            </LinkWithTitle>
        </div>
    );
};

export default SocialLinks;