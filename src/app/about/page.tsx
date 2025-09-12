"use client"
import React, { useState } from 'react'

function AboutPage() {
    const activities = ['watch movies', 'read books',  'play games'];
    const [currentActivity, setCurrentActivity] = useState(activities[0]);
    const [direction, setDirection] = useState('');
    return (
        <div>
            <style jsx>{`
                .link-arrow {
                    transition: transform 0.3s ease;
                }
                .group:hover .link-arrow {
                    transform: translateX(4px) scaleX(1.2);
                }
            `}</style>
            <main className="relative max-w-[600px] px-4 sm:px-6 py-8 min-h-screen mx-auto font-light">
                <section className="flex items-center">
                    <img
                        alt="Author"
                        loading="lazy"
                        width="80"
                        height="80"
                        decoding="async"
                        data-nimg="1"
                        className="rounded-full object-cover"
                        style={{ color: 'transparent' }}
                        srcSet="/_next/image?url=https%3A%2F%2Fgithub.com%2Fandreypopp.png&w=96&q=75 1x, /_next/image?url=https%3A%2F%2Fgithub.com%2Fandreypopp.png&w=256&q=75 2x"
                        src="/_next/image?url=https%3A%2F%2Fgithub.com%2Fandreypopp.png&w=256&q=75"
                    />
                    <div className="ml-4 flex-1">
                        <h1 className="mb-0.5 text-xl">John Doe</h1>
                        <p className="text-muted-foreground text-sm">
                            Senior Full Stack Developer
                        </p>
                        <span className="text-muted-foreground bg-secondary rounded-full px-2 py-1 text-xs">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://vercel.com/"
                            >
                                vercel.com/
                            </a>
                        </span>
                    </div>
                    <a
                        href="/Resume/Anandu A Pillai-cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors"
                    >
                        View Resume
                        <svg className="link-arrow w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 18"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </section>
                <section className="my-9 text-sm">
                    <h3 className="mb-1">About</h3>
                    <div className="text-muted-foreground space-y-3">
                        <p>
                            Icon sommelier 🍷 Senior Icon Designer at Font Awesome. Before
                            that, I made all manner of digital and physical things for
                            MetaLab.
                        </p>
                        <p>
                            I'm passionate about creating meaningful digital experiences that bridge the gap between design and technology. When I'm not crafting pixels or writing code, you'll find me exploring new coffee shops, experimenting with analog photography, or getting lost in a good book.
                        </p>
                        <p>
                            Currently based in San Francisco, I believe in the power of thoughtful design to solve real problems. I'm always curious about emerging technologies and how they can enhance human creativity.
                        </p>
                    </div>
                </section>
                <section className="my-14 text-sm">
                    <h3 className="mb-6">Work Experience</h3>
                    <div className="flex flex-col gap-6">
                        <div className="flex">
                            <div className="text-muted-foreground mr-8 w-full max-w-[100px]">
                                2020 - Present
                            </div>
                            <div className="flex flex-1 flex-col">
                                <h4>Senior Designer at Font Awesome</h4>
                                <p className="text-muted-foreground">Remote</p>
                                <p className="text-muted-foreground mt-2">
                                    Making icons &amp; illustrations — sometimes writing about
                                    them too
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="text-muted-foreground mr-8 w-full max-w-[100px]">
                                2016 - 2020
                            </div>
                            <div className="flex flex-1 flex-col">
                                <h4>Front-End Developer at Freelance</h4>
                                <p className="text-muted-foreground">Remote</p>
                                <p className="text-muted-foreground mt-2">
                                    Working for clients around the world.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="my-14 text-sm">
                    <h3 className="mb-6">Education</h3>
                    <div className="flex flex-col gap-6">
                        <div className="flex">
                            <div className="text-muted-foreground mr-8 w-full max-w-[100px]">
                                2015 - 2016
                            </div>
                            <div className="flex flex-1 flex-col">
                                <h4>Master's Degree in Computer Science</h4>
                                <p className="text-muted-foreground">University of Paris</p>
                                <p className="text-muted-foreground mt-2">
                                    Specialized in web development.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="text-muted-foreground mr-8 w-full max-w-[100px]">
                                2012 - 2015
                            </div>
                            <div className="flex flex-1 flex-col">
                                <h4>Bachelor's Degree in Computer Science</h4>
                                <p className="text-muted-foreground">University of Paris</p>
                                <p className="text-muted-foreground mt-2">
                                    Specialized in web development.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="my-14 text-sm">
                    <h3 className="mb-6">Contact</h3>
                    <div className="flex flex-col gap-6">
                        <div className="flex">
                            <div className="mr-8 w-full max-w-[100px] text-slate-400 dark:text-slate-400">
                                Email
                            </div>
                            <div className="flex flex-1 flex-col text-slate-900 dark:text-slate-100">
                                <a
                                    href="mailto:john.doe@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex hover:underline"
                                >
                                    john.doe@gmail.com
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                                            className="fill-current text-slate-900 dark:text-slate-100"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-8 w-full max-w-[100px] text-slate-400 dark:text-slate-400">
                                Github
                            </div>
                            <div className="flex flex-1 flex-col text-slate-900 dark:text-slate-100">
                                <a
                                    href="https://github.com/iamdooboy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex hover:underline"
                                >
                                    iammdooby
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                                            className="fill-current text-slate-900 dark:text-slate-100"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-8 w-full max-w-[100px] text-slate-400 dark:text-slate-400">
                                Read.cv
                            </div>
                            <div className="flex flex-1 flex-col text-slate-900 dark:text-slate-100">
                                <a
                                    href="https://read.cv/iamdooboy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex hover:underline"
                                >
                                    iamdooby
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                                            className="fill-current text-slate-900 dark:text-slate-100"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                

                {/* Tools & Stack */}
                <section className="my-14 text-sm">
                    <h3 className="mb-6">Favorite Tools</h3>
                    <div className="flex flex-wrap gap-2">
                        <div className="flex items-center gap-2 px-3 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs">
                            <div className="w-4 h-4 rounded bg-orange-500"></div>
                            <span>Figma</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs">
                            <div className="w-4 h-4 rounded bg-blue-500"></div>
                            <span>Linear</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs">
                            <div className="w-4 h-4 rounded bg-gray-800 dark:bg-gray-200"></div>
                            <span>Notion</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs">
                            <div className="w-4 h-4 rounded bg-green-500"></div>
                            <span>Spotify</span>
                        </div>
                    </div>
                </section>

                {/* Writings */}
                <section className="my-14 text-sm">
                    <h3 className="mb-6">Writings</h3>
                    <div className="flex flex-col gap-6">
                        <div className="flex">
                            <div className="mr-8 w-full max-w-[100px] text-slate-400 dark:text-slate-400">
                                Hashnode
                            </div>
                            <div className="flex flex-1 flex-col text-slate-900 dark:text-slate-100">
                                <a
                                    href="https://hashnode.com/@yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex hover:underline"
                                >
                                    @yourusername
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                                            className="fill-current text-slate-900 dark:text-slate-100"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-8 w-full max-w-[100px] text-slate-400 dark:text-slate-400">
                                Dev.to
                            </div>
                            <div className="flex flex-1 flex-col text-slate-900 dark:text-slate-100">
                                <a
                                    href="https://dev.to/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex hover:underline"
                                >
                                    @yourusername
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                                            className="fill-current text-slate-900 dark:text-slate-100"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mr-8 w-full max-w-[100px] text-slate-400 dark:text-slate-400">
                                Blog
                            </div>
                            <div className="flex flex-1 flex-col text-slate-900 dark:text-slate-100">
                                <a
                                    href="https://yourpersonalblog.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex hover:underline"
                                >
                                    yourpersonalblog.com
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                                            className="fill-current text-slate-900 dark:text-slate-100"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Interactive Statement */}
                <section className="my-14 text-sm">
                    <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                        <span>I like to</span>
                        <div className="relative inline-flex items-center gap-1">
                            <div className="relative h-5 overflow-hidden min-w-[85px]">
                                <div 
                                    key={currentActivity}
                                    className="absolute inset-0 flex items-center transition-all duration-300 ease-out"
                                    style={{
                                        transform: direction === 'up' ? 'translateY(-20px)' : direction === 'down' ? 'translateY(20px)' : 'translateY(0px)',
                                        opacity: direction ? 0 : 1
                                    }}
                                >
                                    <span className="text-zinc-900 dark:text-zinc-100 font-medium whitespace-nowrap">
                                        {currentActivity}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-0.5 ml-1">
                                <button 
                                    onClick={() => {
                                        setDirection('up');
                                        setTimeout(() => {
                                            const currentIndex = activities.indexOf(currentActivity);
                                            const nextIndex = currentIndex === 0 ? activities.length - 1 : currentIndex - 1;
                                            setCurrentActivity(activities[nextIndex]);
                                            setDirection('');
                                        }, 150);
                                    }}
                                    className="w-3 h-3 flex items-center justify-center text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
                                >
                                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M1 4l3-3 3 3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                                <button 
                                    onClick={() => {
                                        setDirection('down');
                                        setTimeout(() => {
                                            const currentIndex = activities.indexOf(currentActivity);
                                            const nextIndex = currentIndex === activities.length - 1 ? 0 : currentIndex + 1;
                                            setCurrentActivity(activities[nextIndex]);
                                            setDirection('');
                                        }, 150);
                                    }}
                                    className="w-3 h-3 flex items-center justify-center text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
                                >
                                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M1 1l3 3 3-3" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <span>sometimes.</span>
                    </div>
                </section>

                
            </main>
        </div>
    )
}

export default AboutPage