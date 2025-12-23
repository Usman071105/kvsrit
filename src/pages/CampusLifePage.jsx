import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Building, Wifi, BookOpen, Camera, Play, ChevronRight } from 'lucide-react'

const CampusLifePage = () => {
    const location = useLocation()

    useEffect(() => {
        const hash = location.hash.replace('#', '')
        if (hash) {
            document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            window.scrollTo(0, 0)
        }
    }, [location])

    const facilities = [
        { name: 'Library', desc: '50,000+ books and digital resources' },
        { name: 'Computer Labs', desc: 'Modern labs with 500+ systems' },
        { name: 'Sports Complex', desc: 'Indoor and outdoor facilities' },
        { name: 'Hostel', desc: 'Separate hostels for boys & girls' },
        { name: 'Cafeteria', desc: 'Hygienic food at subsidized rates' },
        { name: 'Medical Center', desc: '24/7 medical assistance' }
    ]

    const infrastructure = [
        { name: 'Smart Classrooms', count: '50+' },
        { name: 'Research Labs', count: '20+' },
        { name: 'Seminar Halls', count: '5' },
        { name: 'Auditorium', count: '1000 seats' },
        { name: 'WiFi Campus', count: '100% coverage' }
    ]

    const events = [
        { name: 'SYNERGY - Tech Fest', date: 'February' },
        { name: 'UTSAV - Cultural Fest', date: 'March' },
        { name: 'Sports Meet', date: 'December' },
        { name: 'Fresher\'s Day', date: 'August' }
    ]

    return (
        <div className="min-h-screen bg-[var(--color-background)] pt-32 pb-16">
            <div className="container px-4">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-4">Campus Life</h1>
                    <p className="text-lg text-[var(--color-text-secondary)] w-full">Experience a vibrant campus with world-class facilities</p>
                </motion.div>

                {/* Facilities */}
                <motion.section id="facilities" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
                            <Building className="text-white" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">Facilities</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        {facilities.map((f, i) => (
                            <div key={i} className="bg-[var(--color-background)] rounded-xl p-5">
                                <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">{f.name}</h4>
                                <p className="text-sm text-[var(--color-text-secondary)]">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Infrastructure */}
                <motion.section id="infrastructure" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary-light)] flex items-center justify-center">
                            <Wifi className="text-[var(--color-text-primary)]" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">Infrastructure</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {infrastructure.map((item, i) => (
                            <div key={i} className="bg-[var(--color-background)] rounded-xl p-5 text-center">
                                <p className="text-2xl font-bold text-[var(--color-primary)]">{item.count}</p>
                                <p className="text-sm text-[var(--color-text-secondary)]">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Events */}
                <motion.section id="events" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-8 border border-[var(--color-border)] mb-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
                            <Play className="text-white" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">Events</h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4">
                        {events.map((event, i) => (
                            <div key={i} className="bg-[var(--color-background)] rounded-xl p-5 text-center">
                                <h4 className="font-semibold text-[var(--color-text-primary)] mb-2">{event.name}</h4>
                                <span className="text-sm text-[var(--color-primary)]">{event.date}</span>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Gallery */}
                <motion.section id="gallery" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary-light)] flex items-center justify-center">
                            <Camera className="text-[var(--color-text-primary)]" size={28} />
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit']">Gallery</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Campus View', 'Library', 'Labs', 'Events', 'Sports', 'Auditorium', 'Hostel', 'Cafeteria'].map((item, i) => (
                            <div key={i} className="aspect-square bg-gradient-to-br from-[var(--color-primary-light)] to-[var(--color-background)] rounded-xl flex items-center justify-center">
                                <span className="text-sm font-medium text-[var(--color-text-primary)]">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </div>
    )
}

export default CampusLifePage
