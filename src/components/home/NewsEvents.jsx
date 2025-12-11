import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Newspaper, ClipboardList, Briefcase, FileText, Calendar, ExternalLink } from 'lucide-react'

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
        <section id="events" className="section bg-[var(--color-background)]">
            <div className="container mx-auto px-4" ref={containerRef}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title title-underline">Latest Updates</h2>
                    <p className="section-subtitle mt-6">
                        Stay updated with the latest news, events, examination schedules, and important circulars.
                    </p>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8"
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-xl font-medium text-sm transition-all ${activeTab === tab.id
                                    ? 'bg-[var(--color-primary)] text-white shadow-lg'
                                    : 'bg-white text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-primary-light)]'
                                }`}
                        >
                            <tab.icon size={18} />
                            <span className="hidden sm:inline">{tab.label}</span>
                        </button>
                    ))}
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-sm"
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] px-6 py-4">
                                <h3 className="text-lg font-semibold text-white flex items-center gap-2 font-['Outfit']">
                                    {tabs.find((t) => t.id === activeTab)?.icon && (
                                        <span className="p-1.5 bg-white/20 rounded-lg">
                                            {(() => {
                                                const Icon = tabs.find((t) => t.id === activeTab)?.icon
                                                return Icon ? <Icon size={18} /> : null
                                            })()}
                                        </span>
                                    )}
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
                                        className="flex items-center gap-4 px-6 py-4 hover:bg-[var(--color-surface)] transition-colors group"
                                    >
                                        {/* Date */}
                                        <div className="flex-shrink-0 w-20 text-center">
                                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[var(--color-primary)]/10 rounded-lg">
                                                <Calendar size={12} className="text-[var(--color-primary)]" />
                                                <span className="text-xs font-medium text-[var(--color-primary)]">
                                                    {item.date}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <p className="flex-1 text-[var(--color-text-primary)] text-sm group-hover:text-[var(--color-primary)] transition-colors">
                                            {item.title}
                                        </p>

                                        {/* Link Icon */}
                                        <ExternalLink
                                            size={16}
                                            className="flex-shrink-0 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors"
                                        />
                                    </motion.a>
                                ))}
                            </div>

                            {/* View More */}
                            <div className="px-6 py-4 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
                                <a
                                    href="#all-news"
                                    className="text-sm font-medium text-[var(--color-primary)] hover:underline"
                                >
                                    View all {tabs.find((t) => t.id === activeTab)?.label} →
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
