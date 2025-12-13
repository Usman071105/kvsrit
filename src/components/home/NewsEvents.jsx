import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Newspaper, ClipboardList, Briefcase, FileText, Calendar, ExternalLink, ChevronRight } from 'lucide-react'

const tabs = [
    { id: 'news', label: 'News & Events', icon: Newspaper },
    { id: 'exams', label: 'Examinations', icon: ClipboardList },
    { id: 'placements', label: 'Placements', icon: Briefcase },
    { id: 'circulars', label: 'Circulars', icon: FileText },
]

const newsData = {
    news: [
        { date: '2023-24', title: 'College Admission Application Form', link: '#' },
        { date: '17-06-2023', title: 'Fee Payment for College Account Number', link: '#' },
        { date: '07-12-2023', title: 'Student Transfer Information', link: '#' },
        { date: '25-03-2025', title: 'MCA MBA IV SEM REGISTRATION MARCH-2025', link: '#' },
        { date: '25-03-2025', title: 'MCA MBA IV SEM REGISTRATION MAY-2025', link: '#' },
    ],
    exams: [
        { date: '12-02-2024', title: 'EXTERNAL TIMETABLE FOR-I MBA/MCA I SEM(R-23) MAR-2024', link: '#' },
        { date: '03-02-2024', title: 'NOTIFICATION FOR-I MBA/MCA I SEM(R-23) MAR-2024', link: '#' },
        { date: '08-01-2024', title: 'NOTIFICATION FOR-I B TECH I SEM(R-23) FEB-2024', link: '#' },
        { date: '22-06-2020', title: 'MBA IV Semester Regular & Supply Exam 2020', link: '#' },
        { date: '18-06-2020', title: 'B.Tech IV Year II Semester R15 Exams 2020', link: '#' },
    ],
    placements: [
        { date: '28-01-2020', title: 'List of Gold Medalists for Batch 2015-2019', link: '#' },
        { date: '11-02-2020', title: 'B.Tech III Year I Sem R15 Results Released', link: '#' },
        { date: '30-01-2020', title: 'B.Tech IV Year I Sem R15 Results Released', link: '#' },
        { date: '2024', title: 'Campus Placement Drive - TCS', link: '#' },
        { date: '2024', title: 'Campus Placement Drive - Infosys', link: '#' },
    ],
    circulars: [
        { date: '25-03-2025', title: 'NOTIFICATION FOR PROJECT VIVO VOCE', link: '#' },
        { date: '25-03-2025', title: 'M. TECH. III SEM SUPPLY REGISTRATION', link: '#' },
        { date: '22-05-2020', title: 'JnanaBhumi Scholarships Ineligible List 2019-20', link: '#' },
        { date: '20-01-2020', title: 'M.Tech Academic Calendar 4th Sem (2018-19)', link: '#' },
        { date: '20-01-2020', title: 'B.Tech I Year II Semester Academic Calendar', link: '#' },
    ],
}

const NewsEvents = () => {
    const [activeTab, setActiveTab] = useState('news')
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    return (
        <section id="events" className="py-20 md:py-28 bg-[var(--color-background)]">
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16" ref={containerRef}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] font-['Outfit'] title-underline inline-block">Latest Updates</h2>
                    <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto mt-10 text-lg">
                        Stay updated with the latest news, events, examination schedules, and important circulars.
                    </p>
                </motion.div>

                {/* Tabs - LARGER with better padding */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-wrap justify-center gap-4 md:gap-5 mb-14"
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-3 px-7 md:px-9 py-4 md:py-5 rounded-2xl font-semibold text-base transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-[var(--color-primary)] text-white shadow-xl shadow-[var(--color-primary)]/30'
                                    : 'bg-white text-[var(--color-text-secondary)] border-2 border-[var(--color-border)] hover:border-[var(--color-primary-light)] hover:bg-[var(--color-surface)]'
                                }`}
                        >
                            <tab.icon size={22} strokeWidth={1.5} />
                            <span className="hidden sm:inline">{tab.label}</span>
                        </button>
                    ))}
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="max-w-5xl mx-auto"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-3xl border-2 border-[var(--color-border)] overflow-hidden shadow-lg"
                        >
                            {/* Header with icon */}
                            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] px-10 py-6">
                                <h3 className="text-xl font-bold text-white flex items-center gap-4 font-['Outfit']">
                                    <span className="p-3 bg-white/20 rounded-xl">
                                        {(() => {
                                            const Icon = tabs.find((t) => t.id === activeTab)?.icon
                                            return Icon ? <Icon size={24} strokeWidth={1.5} /> : null
                                        })()}
                                    </span>
                                    {tabs.find((t) => t.id === activeTab)?.label}
                                </h3>
                            </div>

                            {/* Items */}
                            <div className="divide-y divide-[var(--color-border)]">
                                {newsData[activeTab].map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.link}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-center gap-6 px-10 py-6 hover:bg-[var(--color-surface)] transition-colors group"
                                    >
                                        {/* Date Badge - LARGER */}
                                        <div className="flex-shrink-0">
                                            <div className="inline-flex items-center gap-2.5 px-5 py-3 bg-[var(--color-primary)]/10 rounded-xl min-w-[110px] justify-center">
                                                <Calendar size={18} className="text-[var(--color-primary)]" strokeWidth={1.5} />
                                                <span className="text-sm font-bold text-[var(--color-primary)]">
                                                    {item.date}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <p className="flex-1 text-[var(--color-text-primary)] text-base font-medium group-hover:text-[var(--color-primary)] transition-colors leading-relaxed">
                                            {item.title}
                                        </p>

                                        {/* Link Icon - LARGER */}
                                        <ExternalLink
                                            size={22}
                                            strokeWidth={1.5}
                                            className="flex-shrink-0 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors"
                                        />
                                    </motion.a>
                                ))}
                            </div>

                            {/* View More */}
                            <div className="px-10 py-6 bg-[var(--color-surface)] border-t-2 border-[var(--color-border)]">
                                <a
                                    href="#all-news"
                                    className="inline-flex items-center gap-2.5 text-base font-bold text-[var(--color-primary)] hover:gap-4 transition-all"
                                >
                                    View all {tabs.find((t) => t.id === activeTab)?.label}
                                    <ChevronRight size={20} strokeWidth={2} />
                                </a>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}

export default NewsEvents
