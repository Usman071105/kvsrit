import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Academics', href: '#academics' },
    { label: 'Departments', href: '#departments' },
    { label: 'Placements', href: '#placements' },
    { label: 'Campus Life', href: '#campus' },
]

const resources = [
    { label: 'Academic Calendar', href: '#calendar' },
    { label: 'Regulations & Syllabus', href: '#syllabus' },
    { label: 'Exam Cell', href: '#exam' },
    { label: 'IQAC', href: '#iqac' },
    { label: 'Scholarships', href: '#scholarships' },
    { label: 'RTI', href: '#rti' },
]

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-gradient-to-b from-[var(--color-primary-dark)] to-[#3D2914] text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* College Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary-light)] flex items-center justify-center">
                                <span className="text-[var(--color-text-primary)] font-bold text-xl font-['Outfit']">K</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold font-['Outfit']">Dr. K.V. Subba Reddy</h3>
                                <p className="text-sm text-[var(--color-primary-light)]">Institute of Technology</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                            An intellectual destination that draws inspired scholars, keeping Dr.KVSRIT at the nexus of ideas that challenge and change the world.
                        </p>
                        <div className="flex items-center gap-3 px-4 py-2 bg-white/10 rounded-lg inline-block">
                            <span className="text-sm font-semibold">Affiliated to JNTUA</span>
                            <span className="text-[var(--color-accent)]">|</span>
                            <span className="text-sm font-semibold">NAAC A+</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 font-['Outfit'] relative">
                            Quick Links
                            <span className="absolute bottom-[-8px] left-0 w-12 h-0.5 bg-[var(--color-accent)]"></span>
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-[var(--color-accent)] transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-light)] group-hover:bg-[var(--color-accent)] transition-colors"></span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 font-['Outfit'] relative">
                            Resources
                            <span className="absolute bottom-[-8px] left-0 w-12 h-0.5 bg-[var(--color-accent)]"></span>
                        </h4>
                        <ul className="space-y-3">
                            {resources.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-[var(--color-accent)] transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-light)] group-hover:bg-[var(--color-accent)] transition-colors"></span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 font-['Outfit'] relative">
                            Contact Us
                            <span className="absolute bottom-[-8px] left-0 w-12 h-0.5 bg-[var(--color-accent)]"></span>
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-[var(--color-accent)] flex-shrink-0 mt-1" />
                                <span className="text-sm text-gray-300">
                                    Dr. K.V. Subba Reddy Institute of Technology,<br />
                                    Kurnool, Andhra Pradesh, India
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-[var(--color-accent)] flex-shrink-0" />
                                <div>
                                    <a href="tel:9704333789" className="text-sm text-gray-300 hover:text-[var(--color-accent)] transition-colors block">
                                        9704333789
                                    </a>
                                    <a href="tel:9440006717" className="text-sm text-gray-300 hover:text-[var(--color-accent)] transition-colors block">
                                        9440006717
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-[var(--color-accent)] flex-shrink-0" />
                                <a href="mailto:drkvsr.principal@gmail.com" className="text-sm text-gray-300 hover:text-[var(--color-accent)] transition-colors">
                                    drkvsr.principal@gmail.com
                                </a>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="flex items-center gap-3 mt-6">
                            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors group"
                                >
                                    <Icon size={16} className="text-white group-hover:text-[var(--color-text-primary)]" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-400 text-center md:text-left">
                            © {new Date().getFullYear()} Dr. K.V. Subba Reddy Institute of Technology. All Rights Reserved.
                        </p>
                        <p className="text-sm text-gray-400">
                            Maintained By Dr. G. Sunkanna
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[var(--color-primary)] text-white shadow-lg flex items-center justify-center hover:bg-[var(--color-primary-dark)] transition-colors z-40"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <ArrowUp size={20} />
            </motion.button>
        </footer>
    )
}

export default Footer
