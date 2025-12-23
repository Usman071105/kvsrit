import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Briefcase, TrendingUp, Users, Calendar, Building, Award, ChevronRight } from 'lucide-react'

const PlacementsPage = () => {
    const location = useLocation()

    useEffect(() => {
        const hash = location.hash.replace('#', '')
        if (hash) {
            document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            window.scrollTo(0, 0)
        }
    }, [location])

    const stats = [
        { label: 'Students Placed', value: '500+', icon: Users },
        { label: 'Highest Package', value: '12 LPA', icon: TrendingUp },
        { label: 'Average Package', value: '4.5 LPA', icon: Award },
        { label: 'Recruiters', value: '100+', icon: Building }
    ]

    const recruiters = ['TCS', 'Infosys', 'Wipro', 'Tech Mahindra', 'HCL', 'Cognizant', 'Accenture', 'IBM', 'Amazon', 'Deloitte', 'Capgemini', 'L&T']

    const internships = [
        { company: 'Amazon', role: 'SDE Intern', stipend: '₹60,000/month' },
        { company: 'Microsoft', role: 'Software Intern', stipend: '₹50,000/month' },
        { company: 'TCS', role: 'Developer Intern', stipend: '₹15,000/month' }
    ]

    return (
        <div className="min-h-screen bg-[var(--color-background)] pt-32 pb-16">
            <div className="container px-4">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-4">Training & Placements</h1>
                    <p className="text-lg text-[var(--color-text-secondary)] w-full">Launching careers through industry partnerships and skill development</p>
                </motion.div>

                {/* Stats */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 border border-[var(--color-border)] text-center">
                            <stat.icon className="mx-auto mb-3 text-[var(--color-primary)]" size={32} />
                            <p className="text-2xl font-bold text-[var(--color-text-primary)]">{stat.value}</p>
                            <p className="text-sm text-[var(--color-text-secondary)]">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* About T&P */}
                <motion.section id="tp" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
                            <Briefcase className="text-white" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">About T&P Cell</h2>
                    </div>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                        The Training and Placement Cell bridges the gap between academia and industry. We provide comprehensive training programs, conduct mock interviews, and facilitate campus recruitment drives throughout the year.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        {['Technical Training', 'Soft Skills', 'Mock Interviews', 'Resume Building', 'Industry Visits', 'Guest Lectures'].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 bg-[var(--color-background)] rounded-lg p-3">
                                <ChevronRight size={16} className="text-[var(--color-primary)]" />
                                <span className="text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Placement Record */}
                <motion.section id="record" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary-light)] flex items-center justify-center">
                            <TrendingUp className="text-[var(--color-text-primary)]" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">Our Recruiters</h2>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                        {recruiters.map((company, i) => (
                            <div key={i} className="bg-[var(--color-background)] rounded-xl p-4 text-center">
                                <span className="text-sm font-medium text-[var(--color-text-primary)]">{company}</span>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Internships */}
                <motion.section id="internships" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
                            <Users className="text-white" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">Internship Opportunities</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        {internships.map((intern, i) => (
                            <div key={i} className="bg-[var(--color-background)] rounded-xl p-6">
                                <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">{intern.company}</h4>
                                <p className="text-sm text-[var(--color-primary)] mb-2">{intern.role}</p>
                                <span className="text-sm text-[var(--color-text-secondary)]">{intern.stipend}</span>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* News & Events */}
                <motion.section id="events" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary-light)] flex items-center justify-center">
                            <Calendar className="text-[var(--color-text-primary)]" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">Upcoming Events</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: 'Campus Drive - TCS', date: 'January 2024' },
                            { title: 'Pool Campus - Infosys', date: 'February 2024' },
                            { title: 'Technical Workshop', date: 'Dec 2023' },
                            { title: 'Career Fair 2024', date: 'March 2024' }
                        ].map((event, i) => (
                            <div key={i} className="flex items-center gap-4 bg-[var(--color-background)] rounded-xl p-4">
                                <Calendar size={20} className="text-[var(--color-primary)]" />
                                <div>
                                    <h4 className="font-semibold text-[var(--color-text-primary)]">{event.title}</h4>
                                    <p className="text-sm text-[var(--color-text-secondary)]">{event.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    )
}

export default PlacementsPage
