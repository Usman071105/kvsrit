import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const ContactSection = () => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })

    return (
        <section id="contact" className="section bg-[var(--color-surface)]">
            <div className="container mx-auto px-4" ref={containerRef}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title title-underline">Contact Us</h2>
                    <p className="section-subtitle mt-6">
                        Have questions? We'd love to hear from you. Get in touch with us.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] font-['Outfit'] mb-6">
                            Get in Touch
                        </h3>

                        <div className="space-y-6">
                            {/* Address */}
                            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[var(--color-border)] hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-[var(--color-primary)]" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">Address</h4>
                                    <p className="text-[var(--color-text-secondary)] text-sm">
                                        Dr. K.V. Subba Reddy Institute of Technology,<br />
                                        Kurnool District, Andhra Pradesh, India
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[var(--color-border)] hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="text-[var(--color-accent)]" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">Phone</h4>
                                    <p className="text-[var(--color-text-secondary)] text-sm space-y-1">
                                        <a href="tel:9704333789" className="block hover:text-[var(--color-primary)]">9704333789</a>
                                        <a href="tel:9440006717" className="block hover:text-[var(--color-primary)]">9440006717</a>
                                        <a href="tel:7660003356" className="block hover:text-[var(--color-primary)]">766 000 3356, 766 000 3357</a>
                                        <span className="block text-xs text-[var(--color-text-muted)]">TPO: 766 000 3345</span>
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[var(--color-border)] hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-success)]/10 flex items-center justify-center flex-shrink-0">
                                    <Mail className="text-[var(--color-success)]" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">Email</h4>
                                    <a
                                        href="mailto:drkvsr.principal@gmail.com"
                                        className="text-[var(--color-text-secondary)] text-sm hover:text-[var(--color-primary)]"
                                    >
                                        drkvsr.principal@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[var(--color-border)] hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-light)]/30 flex items-center justify-center flex-shrink-0">
                                    <Clock className="text-[var(--color-primary)]" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">Office Hours</h4>
                                    <p className="text-[var(--color-text-secondary)] text-sm">
                                        Monday - Saturday: 9:00 AM - 5:00 PM<br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 md:p-8 shadow-sm">
                            <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] font-['Outfit'] mb-6">
                                Send us a Message
                            </h3>

                            <form className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all bg-[var(--color-surface)]"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all bg-[var(--color-surface)]"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all bg-[var(--color-surface)]"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all bg-[var(--color-surface)]"
                                        placeholder="+91 9876543210"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all bg-[var(--color-surface)] resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full btn btn-primary py-4 text-base"
                                >
                                    <Send size={18} />
                                    Send Message
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Map Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-12"
                >
                    <div className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden h-80">
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
