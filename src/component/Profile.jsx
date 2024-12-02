import React, { forwardRef, useState } from 'react'
import { BsHourglassTop } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import 'devicon/devicon.min.css';


export const Profile = forwardRef((props,ref) => {
    const [style, setStyle] = useState({});
    const [shadow, setShadow] = useState('');
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left; // Cursor X position within the card
        const y = e.clientY - rect.top;  // Cursor Y position within the card
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation and shadow offset
        const rotateX = -(y - centerY) / 20;
        const rotateY = (x - centerX) / 20;
        const shadowX = (x - centerX) / 10;
        const shadowY = (y - centerY) / 10;

        setStyle({
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        });


        setShadow(`${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.3)`);
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: 'rotateX(0deg) rotateY(0deg)',
            transition: 'transform 0.3s ease-out',
        });

        setShadow('0 5px 15px rgba(0, 0, 0, 0.2)');
    };

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <section ref={ref} className="h-screen top-4 flex items-center justify-center bg-gray-800">
            {/* Card Wrapper */}
            <div
                className={`relative w-4/5 sm:h-4/5 xsm:h-[520px] transition-transform duration-700 transform ${isFlipped ? 'rotate-y-180' : ''
                    }`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front Side */}
                <div
                    className="absolute inset-0 gap-3 text-sm font-mono bg-slate-400 lg:grid lg:grid-cols-3 xsm:flex xsm:flex-col items-center justify-center text-center shadow-2xl rounded-lg overflow-hidden backface-hidden"
                    style={{
                        ...style,
                        boxShadow: shadow,
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleCardClick}
                >
                    <div className="flex flex-col items-center">
                        <img
                            src="/me-eat.jpg"
                            alt="me eating"
                            className="lg:h-64 lg:w-48 sm:h-28 sm:w-28 xsm:w-20 xsm:h-20 xsm:rounded-full object-cover lg:text-center  lg:rounded-lg shadow-2xl border-2 border-black"
                        />
                        <h2 className="lg:mt-4 lg:text-xl sm:text-lg font-semibold xsm:text-[12px]">Ade Rizal Pambudi</h2>
                    </div>
                    <p className="lg:col-span-2 p-3 lg:text-left lg:leading-4 sm:text-sm sm:leading-3 xsm:text-[10px] xsm:leading-3 xsm:text-justify" >
                        Hi! I’m Rizal, a web developer with a passion for solving riddles and puzzles, which is why I enjoy coding—it’s like solving a complex riddle every day! <br />

                        I started by learning the basics of web programming, including HTML, CSS, and JavaScript. But I didn’t stop there; I’ve also worked with tools and frameworks like React.js and Express.js.
                        Sometimes i rely on AI tools like ChatGPT and Blackbox to assist with coding, but there are moments when they make things more complicated rather than helpful! <br />

                        When that happens, I rely on my experience and skills to solve problems and develop effective websites. Right now,
                        I’m diving into Laravel and revisiting PHP programming to sharpen my skills further. <br />

                        I have experience creating websites and managing CMS platforms like Joomla and WordPress.
                        I’m also a proud graduate of the Bangkit 2023 independent study program, specializing in Cloud Computing. <br />

                        In my free time, aside from learning new skills, I also work as a freelance web developer, creating websites for clients.

                    </p>
                    <div></div>
                    <div className='lg:col-span-2 lg:text-right lg:pr-6 lg:pb-6 lg:text-sm sm:text-[13px] xsm:pr-0 xsm:text-[10px] '>
                        Flip me
                    </div>
                </div>

                {/* Back Side */}
                {/* Change grid row for adding new items */}
                <div
                    className="absolute inset-0 xsm:text-[12px] bg-blue-500 grid grid-rows-6 grid-cols-6 gap-2 shadow-2xl rounded-lg transform rotate-y-180 backface-hidden card-shine-effect"
                    onClick={handleCardClick}

                >
                    <h1 className='col-span-6 font-bold pl-6 pt-6 '>Skills</h1>
                    <br />
                    <div className='bg-slate-300 rounded-md gap-4 p-3 col-span-2 flex items-center '>
                        {/* logo */}
                        <div className='xsm:hidden lg:block sm:block' >
                            <i className="devicon-react-original colored" style={{ fontSize: '50px' }}></i>
                        </div>
                        <div className=' flex-col items-center'>
                            <h2 className='font-mono font-semibold '>React JS</h2>
                            {/* icon mastery or learning */}
                            <br />
                            <FaCheck className='text-green-600' />
                        </div>
                    </div>
                    <div className='bg-slate-300 rounded-md gap-4 p-2 col-span-2 flex items-center'>
                        {/* logo */}
                        <div className='xsm:hidden lg:block sm:block' >
                            <i className="devicon-javascript-plain colored bg-black" style={{ fontSize: '50px' }}></i>
                        </div>
                        <div className=' flex-col items-center'>
                            <h2 className='font-mono font-semibold '>Javascript</h2>
                            {/* icon mastery or learning */}
                            <br />
                            <FaCheck className='text-green-600' />
                        </div>
                    </div>

                    <br />
                    <div></div>
                    <div className='bg-slate-300 rounded-md gap-4 p-3 col-span-2 flex items-center'>
                        {/* logo */}
                        <div className='xsm:hidden lg:block sm:block' >
                            <i className="devicon-express-original colored" style={{ fontSize: '50px' }}></i>
                        </div>
                        <div className=' flex-col items-center'>
                            <h2 className='font-mono font-semibold '>Express JS</h2>
                            {/* icon mastery or learning */}
                            <br />
                            <FaCheck className='text-green-600' />
                        </div>
                    </div>
                    <div className='bg-slate-300 rounded-md gap-4 p-3 col-span-2 flex items-center'>
                        {/* logo */}
                        <div className='xsm:hidden lg:block sm:block' >
                            <i className="devicon-git-plain colored" style={{ fontSize: '50px' }}></i>
                        </div>
                        <div className=' flex-col items-center'>
                            <h2 className='font-mono font-semibold '>Git</h2>
                            {/* icon mastery or learning */}
                            <br />
                            <FaCheck className='text-green-600' />
                        </div>
                    </div>
                    <br />
                    <div></div>
                    <div className='bg-slate-300 rounded-md gap-4 p-3 col-span-2 flex items-center'>
                        {/* logo */}
                        <div className='xsm:hidden lg:block sm:block' >
                            <i className="devicon-nodejs-plain-wordmark colored" style={{ fontSize: '50px' }}></i>
                        </div>
                        <div className=' flex-col items-center'>
                            <h2 className='font-mono font-semibold '>Node JS</h2>
                            {/* icon mastery or learning */}
                            <br />
                            <FaCheck className='text-green-600' />
                        </div>
                    </div>
                    <div className='bg-slate-300 rounded-md gap-4 p-3 col-span-2 flex items-center'>
                        {/* logo */}
                        <div className='xsm:hidden lg:block sm:block' >
                            <i className="devicon-php-plain colored" style={{ fontSize: '50px' }}></i>
                        </div>
                        <div className=' flex-col items-center'>
                            <h2 className='font-mono font-semibold '>PHP</h2>
                            {/* icon mastery or learning */}
                            <br />
                            <FaCheck className='text-green-600' />
                        </div>
                    </div>
                    <br />
                    <div></div>
                    <div className='bg-slate-300 rounded-md gap-4 p-3 col-span-2 flex items-center'>
                        {/* logo */}
                        <div className='xsm:hidden lg:block sm:block' >
                            <i className="devicon-mysql-plain-wordmark colored" style={{ fontSize: '50px' }}></i>
                        </div>
                        <div className=' flex-col items-center'>
                            <h2 className='font-mono font-semibold '>MySQL</h2>
                            {/* icon mastery or learning */}
                            <br />
                            <FaCheck className='text-green-600' />
                        </div>
                    </div>
                    <div className='bg-slate-300 rounded-md gap-4 p-3 col-span-2 flex items-center'>
                        {/* logo */}
                        <div className='xsm:hidden lg:block sm:block' >
                            <i className="devicon-laravel-original colored" style={{ fontSize: '50px' }}></i>
                        </div>
                        <div className=' flex-col items-center'>
                            <h2 className='font-mono font-semibold '>Laravel</h2>
                            {/* icon mastery or learning */}
                            <br />
                            <BsHourglassTop className='text-yellow-500' />
                        </div>
                    </div>
                    <div className="pl-6 pt-6  mt-4 col-span-4">
                        <span className="italic font-mono">
                            *the <BsHourglassTop className="inline text-yellow-500" /> means I'm still learning
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
})
