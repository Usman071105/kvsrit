import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    const contactInfo = [
        { icon: MapPin, label: 'Address', value: 'Dupadu, Kurnool - 518218, Andhra Pradesh, India' },
        { icon: Phone, label: 'Phone', value: '+91 9704333789' },
        { icon: Mail, label: 'Email', value: 'drkvsr.principal@gmail.com' },
        { icon: Clock, label: 'Working Hours', value: 'Mon - Sat: 9:00 AM - 5:00 PM' }
    ]

    return (
        <div className="min-h-screen bg-[var(--color-background)] pt-32 pb-16">
            <div className="container px-4">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-4">Contact Us</h1>
                    <p className="text-lg text-[var(--color-text-secondary)] w-full">We'd love to hear from you. Reach out for any queries.</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-6">Send us a Message</h2>
                        {submitted ? (
                            <div className="text-center py-12">
                                <CheckCircle size={48} className="text-[var(--color-success)] mb-4" />
                                <p className="text-lg font-medium text-[var(--color-text-primary)]">Message Sent Successfully!</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Name</label>
                                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)] outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Email</label>
                                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)] outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Subject</label>
                                    <input type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)] outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Message</label>
                                    <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary-light)] outline-none transition-all resize-none" />
                                </div>
                                <button type="submit" className="btn btn-primary w-full">
                                    <Send size={18} /> Send Message
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                        <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
                            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] font-['Outfit'] mb-6">Contact Information</h2>
                            <div className="space-y-4">
                                {contactInfo.map((info, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-[var(--color-background)] flex items-center justify-center flex-shrink-0">
                                            <info.icon size={20} className="text-[var(--color-primary)]" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-[var(--color-text-secondary)]">{info.label}</p>
                                            <p className="font-medium text-[var(--color-text-primary)]">{info.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white rounded-2xl p-4 border border-[var(--color-border)] overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.1910415155726!2d78.0071323!3d15.7410298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5deb02adc9707%3A0x61f652c89f45b6ec!2sDr.K.V.Subba%20Reddy%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1766397286060!5m2!1sen!2sin"
                                width="100%" height="250" style={{ border: 0, borderRadius: '12px' }} allowFullScreen="" loading="lazy"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
