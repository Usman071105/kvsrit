import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const ContactSection = () => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    const contactItems = [
        {
            icon: MapPin,
            iconBg: 'bg-[var(--color-primary)]/10',
            iconColor: 'text-[var(--color-primary)]',
            title: 'Address',
            lines: [
                'Dr. K.V. Subba Reddy Institute of Technology,',
                'Kurnool District, Andhra Pradesh, India'
            ]
        },
        {
            icon: Phone,
            iconBg: 'bg-[var(--color-accent)]/10',
            iconColor: 'text-[var(--color-accent)]',
            title: 'Phone',
            lines: [
                { text: '9704333789', href: 'tel:9704333789' },
                { text: '9440006717', href: 'tel:9440006717' },
                { text: '766 000 3356 / 3357', href: 'tel:7660003356' },
                { text: 'TPO: 766 000 3345', small: true }
            ]
        },
        {
            icon: Mail,
            iconBg: 'bg-[var(--color-success)]/10',
            iconColor: 'text-[var(--color-success)]',
            title: 'Email',
            lines: [
                { text: 'drkvsr.principal@gmail.com', href: 'mailto:drkvsr.principal@gmail.com' }
            ]
        },
        {
            icon: Clock,
            iconBg: 'bg-[var(--color-primary-light)]/20',
            iconColor: 'text-[var(--color-primary)]',
            title: 'Office Hours',
            lines: [
                'Mon - Sat: 9:00 AM - 5:00 PM',
                'Sunday: Closed'
            ]
        }
    ]

    return (
        <section id="contact" className="py-20 md:py-28 bg-[var(--color-surface)]">
            <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16" ref={containerRef}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] font-['Outfit'] title-underline inline-block">Contact Us</h2>
                    <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto mt-10 text-lg">
                        Have questions? We'd love to hear from you. Get in touch with us.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-10">
                            Get in Touch
                        </h3>

                        <div className="space-y-6">
                            {contactItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-6 p-7 bg-white rounded-2xl border-2 border-[var(--color-border)] hover:shadow-xl hover:border-[var(--color-primary-light)] transition-all duration-300"
                                >
                                    {/* Icon - LARGER SIZE */}
                                    <div className={`w-16 h-16 rounded-2xl ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                                        <item.icon className={item.iconColor} size={32} strokeWidth={1.5} />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-2 pt-1">
                                        <h4 className="font-bold text-[var(--color-text-primary)] text-xl">{item.title}</h4>
                                        <div className="space-y-1.5">
                                            {item.lines.map((line, lineIdx) => (
                                                typeof line === 'string' ? (
                                                    <p key={lineIdx} className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                                                        {line}
                                                    </p>
                                                ) : line.href ? (
                                                    <a
                                                        key={lineIdx}
                                                        href={line.href}
                                                        className={`block text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors ${line.small ? 'text-sm mt-2 text-[var(--color-text-muted)]' : 'text-base'}`}
                                                    >
                                                        {line.text}
                                                    </a>
                                                ) : (
                                                    <p key={lineIdx} className="text-sm text-[var(--color-text-muted)]">
                                                        {line.text}
                                                    </p>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="bg-white rounded-3xl border-2 border-[var(--color-border)] p-10 md:p-12 shadow-sm">
                            <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-10">
                                Send us a Message
                            </h3>

                            <form className="space-y-7">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                                    <div>
                                        <label className="block text-base font-semibold text-[var(--color-text-primary)] mb-3">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-6 py-4 rounded-xl border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-0 outline-none transition-all bg-[var(--color-background)] text-base"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-base font-semibold text-[var(--color-text-primary)] mb-3">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-6 py-4 rounded-xl border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-0 outline-none transition-all bg-[var(--color-background)] text-base"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-base font-semibold text-[var(--color-text-primary)] mb-3">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-6 py-4 rounded-xl border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-0 outline-none transition-all bg-[var(--color-background)] text-base"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-base font-semibold text-[var(--color-text-primary)] mb-3">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-6 py-4 rounded-xl border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-0 outline-none transition-all bg-[var(--color-background)] text-base"
                                        placeholder="+91 9876543210"
                                    />
                                </div>

                                <div>
                                    <label className="block text-base font-semibold text-[var(--color-text-primary)] mb-3">
                                        Message
                                    </label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-6 py-4 rounded-xl border-2 border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-0 outline-none transition-all bg-[var(--color-background)] resize-none text-base"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full btn btn-primary py-5 text-lg rounded-xl font-semibold"
                                >
                                    <Send size={22} />
                                    Send Message
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Map */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-20"
                >
                    <div className="bg-white rounded-3xl border-2 border-[var(--color-border)] overflow-hidden h-96 shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.6399089686574!2d78.0566!3d15.8167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKurnool%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="College Location"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactSection
