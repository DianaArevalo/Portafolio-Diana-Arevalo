import React from 'react'
import { skills } from '../constants/index.js'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA.jsx'

export const About = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                Hello, I'm <span className='rose-gradient_text font-semibold drop-shadow'
                >Diana</span>
            </h1>
            <div className='mt-5 flex flex-col gap-3'>
                <p>
                    I'm a Software Development Technician based in Colombia, I've dedicated myself to studies and projects, 
                    showcasing a consistent commitment to self-taught learning. My passion for development drives me to actively seek opportunities for skill application and continual growth.
                </p>
            </div>
            <div className='py-10 flex flex-col'>
                <h3 className='subhead-text'>My Skills</h3>
                <div className='mt-16 flex flex-wrap gap-12'>
                    {skills.map((skill) => (
                        <div className='block-container w-20 h-20'>
                            <div className='btn-back rounded-xl' />
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='py-16'>
                <h3 className='subhead-text'>Certifications</h3>
                <div className='mt-5 flex flex-col gap-3'>
                    <p>You can download my resume to get to know me better and certificates will be provided upon request. </p>
                    <div className='grid grid-cols-2 gap-10'>
                        <button
                            className='btn capitalize items-center '
                        >
                            Download my curriculum
                        </button>
                        <Link
                            className='btn capitalize items-center justify-center'
                            to='/services'
                        >
                            Visit my Portafolio
                        </Link>

                    </div>
                    <hr className='border-rose-300' />

                    <CTA />

                </div>
            </div>
        </section>
    )
}
