import React, { useEffect, useState } from 'react';
import bgImage from './assets/bg2.jpg'; // Adjust the path as necessary
import Button from './component/Button';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';

function MainPage(){
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return(
        <>
            <div className="container mx-auto">
                <div  className="w-full lg:relative">
                    <img src={bgImage} alt="Background" className="w-full lg:h-full xl:full" />
                    <div className='w-full  h-fit lg:absolute lg:w-1/3 lg:h-fit lg:bottom-12 lg: left-8 pl-4 pb-6 bg-gradient-to-tr from-analogous to-lgGreen md:h-56 '>
                        <h2 className='text-3xl font-bold text-white pr-2 pt-6 pb-4 font-inter md:text-4xl'>
                            We Crush Your Competitors, 
                            <br/> Goals, And Sales Records - Without The B.S.
                        </h2>
                        <Button word= "Get free consultation"/>
                    </div>
                </div>
                <div className='grid grid-rows-2 p-4 gap-6 justify-items-center mb-10'>
                    <div className='flex flex-col items-center md:flex-row lg:w-4/5 xl:w-8/12 '>
                        <img src={icon1} className='p-2 w-64 md:w-72 lg:w-96'/>
                        <div className='flex flex-col items-center md:items-start lg:pl-8 xl:pl-16'>
                            <h2 className='text-primaryBG text-center md:text-left text-2xl px-4 font-extrabold font-poppins py-4 md:pl-0' > Web & Mobile App Development</h2>
                            <p className='md text-center md:text-left pb-6 pt-2'>
                            Your web and mobile Apps are pieces of
                            the puzzle to grow your business. 
                            We use frameworks which tailor content 
                            and engagement methods to respond to 
                            different intents shown by your potential customers 
                            who interact with your business online.
                            </p>
                            <Button word="LEARN MORE" />
                        </div>
                    
                    </div>
                   
                        <div className='flex flex-col items-center md:flex-row lg:w-4/5 xl:w-8/12'>
                            {isLargeScreen ? (
                                <>
                                    <div className='flex flex-col items-center md:items-start lg:pr-8 xl:pr-16'>
                                        <h2 className='text-primaryBG text-center md:text-left text-2xl px-4 font-extrabold font-poppins py-4 md:pl-0'> Digital Strategy Consulting</h2>
                                            and engagement methods to respond to
                                        <p className='md text-center md:text-left pb-6 pt-2'>
                                            Your web and mobile Apps are pieces of
                                            the puzzle to grow your business.
                                            We use frameworks which tailor content
                                                different intents shown by your potential customers
                                            who interact with your business online.
                                        </p>
                                        <Button word="LEARN MORE" />
                                    </div>
                                    <img src={icon2} className='p-2 w-64 md:w-72 lg:w-96' />
                                </>
                            ) : (
                                <>
                                    <img src={icon2} className='p-2 w-64 md:w-72 lg:w-96' />
                                    <div className='flex flex-col items-center md:items-start lg:pr-8 xl:pr-16'>
                                        <h2 className='text-primaryBG text-center md:text-left text-2xl px-4 font-extrabold font-poppins py-4 md:pl-0'> Digital Strategy Consulting</h2>
                                        <p className='md text-center md:text-left pb-6 pt-2'>
                                            Your web and mobile Apps are pieces of
                                            the puzzle to grow your business.
                                            We use frameworks which tailor content
                                            and engagement methods to respond to
                                            different intents shown by your potential customers
                                            who interact with your business online.
                                        </p>
                                        <Button word="LEARN MORE" />
                                    </div>
                                </>
                            )}
                        </div>
                

                       
                    </div>
                </div>
        </>
    );
}

export default MainPage;