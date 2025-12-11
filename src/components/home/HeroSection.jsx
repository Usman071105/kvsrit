import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Award, GraduationCap, Building } from 'lucide-react'

const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&h=900&fit=crop',
        title: 'Welcome to Dr. KVSRIT',
        subtitle: 'Excellence in Engineering Education',
        badge: 'NAAC A+ Accredited',
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=900&fit=crop',
        title: 'Shaping Future Engineers',
        subtitle: 'Affiliated to JNTUA & Approved by AICTE',
        badge: 'NBA Accredited Programs',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&h=900&fit=crop',
        title: 'World-Class Infrastructure',
        subtitle: 'State-of-the-art laboratories and facilities',
        badge: 'Top 100 College Rank',
    },
]

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [imagesLoaded, setImagesLoaded] = useState({})

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 6000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        // Preload images
        slides.forEach((slide, index) => {
            const img = new Image()
            img.onload = () => {
                setImagesLoaded((prev) => ({ ...prev, [index]: true }))
            }
            img.src = slide.image
        })
    }, [])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        <section id="home" className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
            {/* Slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    {/* Image with loading state */}
                    <div
                        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${imagesLoaded[currentSlide] ? 'image-loaded' : 'image-loading'
                            }`}
                        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/90 via-[var(--color-primary-dark)]/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/80 via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4 pt-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="max-w-3xl"
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary-light)] rounded-full mb-6"
                            >
                                <Award size={16} className="text-[var(--color-text-primary)]" />
                                <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                                    {slides[currentSlide].badge}
                                </span>
                            </motion.div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-['Outfit'] leading-tight">
                                {slides[currentSlide].title}
                            </h1>

                            {/* Subtitle */}
                            <p className="text-xl md:text-2xl text-[var(--color-primary-light)] mb-8">
                                {slides[currentSlide].subtitle}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <motion.a
                                    href="#admissions"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn bg-[var(--color-accent)] text-[var(--color-text-primary)] hover:bg-[var(--color-accent-light)] font-semibold px-8 py-4 text-lg shadow-lg"
                                >
                                    <GraduationCap size={20} />
                                    Apply Now
                                </motion.a>
                                <motion.a
                                    href="#about"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 font-semibold px-8 py-4 text-lg"
                                >
                                    <Building size={20} />
                                    Explore Campus
                                </motion.a>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-1/2 translate-y-1/2 left-4 right-4 flex justify-between z-20 pointer-events-none">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-colors pointer-events-auto"
                >
                    <ChevronLeft size={24} />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-colors pointer-events-auto"
                >
                    <ChevronRight size={24} />
                </motion.button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === index
                                ? 'w-8 h-3 bg-[var(--color-accent)]'
                                : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                            }`}
                    />
                ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent z-10" />

            {/* Floating Stats (Desktop) */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="hidden lg:block absolute right-10 bottom-32 z-20"
            >
                <div className="glass rounded-2xl p-6 space-y-4 w-64">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center">
                            <GraduationCap className="text-[var(--color-primary)]" size={24} />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-[var(--color-text-primary)]">2000+</p>
                            <p className="text-sm text-[var(--color-text-secondary)]">Students Enrolled</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center">
                            <Award className="text-[var(--color-accent)]" size={24} />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-[var(--color-text-primary)]">150+</p>
                            <p className="text-sm text-[var(--color-text-secondary)]">Expert Faculty</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default HeroSection
