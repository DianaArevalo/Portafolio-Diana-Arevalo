import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../constants';

export const Services = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                My <span className='rose-gradient_text font-semibold drop-shadow'
                >
                    Projects
                </span>
            </h1>
            <div className='mt-5 flex flex-col gap-3'>
                <p>
                    I've embarked on numerous projects troughout this years, but these are ones I hold closets to my heart.So if you come across something that piques your interest, feel free to explore.
                </p>
            </div>
            <div className='mt-12 flex'>
                <VerticalTimeline>
                    {experiences.map((experience) => (
                        <VerticalTimelineElement
                            key={experience.company_name}
                            date={experience.url}
                            // icon={<div>
                            //     <img
                            //         src={experience.icon}
                            //         alt={experience.company_name}
                            //         className='w-[60%] has-[60%] object-contain'
                            //     />
                            // </div>}
                            iconStyle={{ background: experience.iconBg }}
                            contentStyle={{
                                borderBottom: '8px',
                                borderStyle: 'solid',
                                borderBottomColor: experience.iconBg,
                                boxShadow: 'none'
                            }}
                        >
                            <div>
                                <h3 className='text-black text-xl font-poppins font-semibold'>
                                    {experience.title}
                                </h3>
                                {/* url */}
                                <p className='text-black font-medium font-base'
                                    style={{ margin: 0 }}
                                >
                                    {experience.company_name}
                                </p>

                            </div>
                            <ul className='my-5 list-disc ml-5 space-y-2'>
                                {experience.points.map((point, index) => (
                                    <li
                                        key={`experience-point-${index}`}
                                        className='text-black font-normal pl-1 text-sm'>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>

            <hr />
        </section>
    )
}
