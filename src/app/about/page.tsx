"use client"
import React from 'react'

function AboutPage() {
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

                {/* Personal Interests */}
                <section className="my-14 text-sm">
                    <h3 className="mb-6">Currently</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                            <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-600 dark:text-amber-400">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                                </svg>
                            </div>
                            <div className="flex-1">
                                <div className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">The Design of Everyday Things</div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400">by Don Norman • A timeless exploration of user-centered design</div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                            <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600 dark:text-green-400">
                                    <circle cx="12" cy="12" r="2"/>
                                    <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/>
                                </svg>
                            </div>
                            <div className="flex-1">
                                <div className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">Ambient Soundscapes</div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400">Bon Iver, Nils Frahm, Ólafur Arnalds • Perfect for deep work sessions</div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600 dark:text-blue-400">
                                    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
                                </svg>
                            </div>
                            <div className="flex-1">
                                <div className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">Three.js & WebGL</div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400">Exploring immersive 3D web experiences and interactive design</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hobbies & Interests */}
                <section className="my-14 text-sm">
                    <h3 className="mb-6">Beyond Work</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                            <div className="w-6 h-6 rounded bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center flex-shrink-0">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-rose-600 dark:text-rose-400">
                                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                                    <circle cx="12" cy="13" r="3"/>
                                </svg>
                            </div>
                            <div>
                                <div className="font-medium text-zinc-900 dark:text-zinc-100">Film Photography</div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400">Leica M6 • 35mm</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                            <div className="w-6 h-6 rounded bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-600 dark:text-amber-400">
                                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z"/>
                                    <line x1="6" y1="1" x2="6" y2="4"/>
                                    <line x1="10" y1="1" x2="10" y2="4"/>
                                    <line x1="14" y1="1" x2="14" y2="4"/>
                                </svg>
                            </div>
                            <div>
                                <div className="font-medium text-zinc-900 dark:text-zinc-100">Coffee Brewing</div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400">V60 Pour-over</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                            <div className="w-6 h-6 rounded bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-600 dark:text-emerald-400">
                                    <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14l4-2 4 2Z"/>
                                </svg>
                            </div>
                            <div>
                                <div className="font-medium text-zinc-900 dark:text-zinc-100">Trail Running</div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400">Mountain paths</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                            <div className="w-6 h-6 rounded bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-violet-600 dark:text-violet-400">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"/>
                                </svg>
                            </div>
                            <div>
                                <div className="font-medium text-zinc-900 dark:text-zinc-100">Sketching</div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400">Pen & Paper</div>
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

                {/* Books */}
                <section className="my-14 text-sm">
                    <h3 className="mb-6">Recent Reads</h3>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-2 flex-shrink-0"></div>
                            <div>
                                <div className="font-medium text-zinc-900 dark:text-zinc-100">Atomic Habits</div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400">James Clear</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-2 flex-shrink-0"></div>
                            <div>
                                <div className="font-medium text-zinc-900 dark:text-zinc-100">The Midnight Library</div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400">Matt Haig</div>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-2 flex-shrink-0"></div>
                            <div>
                                <div className="font-medium text-zinc-900 dark:text-zinc-100">Klara and the Sun</div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400">Kazuo Ishiguro</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Fun Fact */}
                <section className="my-14 text-sm border-t border-zinc-200 dark:border-zinc-800 pt-8">
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-600 dark:text-amber-400">
                                <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z"/>
                                <line x1="6" y1="1" x2="6" y2="4"/>
                                <line x1="10" y1="1" x2="10" y2="4"/>
                                <line x1="14" y1="1" x2="14" y2="4"/>
                            </svg>
                        </div>
                        <div className="text-center">
                            <div className="text-zinc-900 dark:text-zinc-100 font-medium">Coffee beans from 23 countries</div>
                            <div className="text-xs text-zinc-500 dark:text-zinc-400">Each trip, a new flavor to discover</div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default AboutPage