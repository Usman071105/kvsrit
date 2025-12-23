import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Briefcase } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Recruiters.css'

const recruiters = [
    { name: 'TCS', logo: '/logos/tcs.svg' },
    { name: 'Infosys', logo: '/logos/infosys.svg' },
    { name: 'Wipro', logo: '/logos/wipro.svg' },
    { name: 'Cognizant', logo: '/logos/cognizant.svg' },
    { name: 'Tech Mahindra', logo: '/logos/techmahindra.svg' },
    { name: 'HCL', logo: '/logos/hcl.svg' },
    { name: 'Accenture', logo: '/logos/accenture.svg' },
    { name: 'Capgemini', logo: '/logos/capgemini.svg' },
]

const placementStats = [
    { value: '100+', label: 'Recruiting Companies' },
    { value: '95%', label: 'Placement Rate' },
    { value: '₹12L', label: 'Highest Package' },
    { value: '₹4.5L', label: 'Average Package' },
]

const RecruiterLogo = ({ recruiter, index, isActive, onSelect }) => {
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`recruiter-card ${isActive ? 'recruiter-card-active' : ''}`}
            role="button"
            tabIndex={0}
            aria-label={`View ${recruiter.name} logo`}
            onClick={onSelect}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect()}
        >
            {!error ? (
                <img
                    src={recruiter.logo}
                    alt={recruiter.name}
                    className={`recruiter-logo ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    width="200"
                    height="128"
                    onLoad={() => setLoaded(true)}
                    onError={() => setError(true)}
                />
            ) : (
                <span className="recruiter-name-fallback">
                    {recruiter.name}
                </span>
            )}
            {!loaded && !error && <div className="recruiter-skeleton skeleton rounded-lg" />}
        </motion.div>
    )
}

const Recruiters = () => {
    const containerRef = useRef(null)
    const scrollRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })
    const [activeIndex, setActiveIndex] = useState(2)
    const [autoInterval, setAutoInterval] = useState(5000)
    const touchStartX = useRef(null)
    const touchEndX = useRef(null)

    /* AUTO SCROLL (unchanged) */
    useEffect(() => {
        const el = scrollRef.current
        if (!el) return

        const interval = setInterval(() => {
            if (el.scrollLeft >= el.scrollWidth / 2) {
                el.scrollLeft = 0
            } else {
                el.scrollLeft += 1
            }
        }, 20)

        return () => clearInterval(interval)
    }, [])

    /* ACTIVE ROTATION (new) */
    useEffect(() => {
        const id = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % recruiters.length)
        }, autoInterval)
        return () => clearInterval(id)
    }, [autoInterval])

    const next = () => setActiveIndex((i) => (i + 1) % recruiters.length)
    const prev = () => setActiveIndex((i) => (i - 1 + recruiters.length) % recruiters.length)

    const onTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].clientX
    }
    const onTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].clientX
        const delta = (touchEndX.current ?? 0) - (touchStartX.current ?? 0)
        if (Math.abs(delta) > 40) {
            if (delta < 0) next()
            else prev()
        }
    }

    return (
        <section id="recruiters" className="recruiters-section">

            {/* SAME CENTERING LOGIC AS UNDERGRADUATE PROGRAMS */}
            <div ref={containerRef} className="recruiters-container">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="recruiters-header"
                >
                    <h2 className="recruiters-title title-underline">
                        Our Key Recruiters
                    </h2>
                    <p className="recruiters-description">
                        Leading companies trust Dr. KVSRIT for hiring talented and industry-ready graduates.
                    </p>
                </motion.div>

                {/* ACTIVE LOGO DISPLAY */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4 }}
                    className="active-logo-stage-wrapper"
                >
                    <div
                        className="active-logo-stage"
                        onTouchStart={onTouchStart}
                        onTouchEnd={onTouchEnd}
                    >
                        <button className="logo-nav prev" aria-label="Previous company" onClick={prev} />
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={recruiters[activeIndex].name}
                                src={recruiters[activeIndex].logo}
                                alt={recruiters[activeIndex].name}
                                width="420"
                                height="160"
                                loading="lazy"
                                referrerPolicy="no-referrer"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.35 }}
                                className="active-logo-img"
                            />
                        </AnimatePresence>
                        <button className="logo-nav next" aria-label="Next company" onClick={next} />
                    </div>
                    <div className="active-logo-caption">
                        {recruiters[activeIndex].name}
                    </div>
                </motion.div>

                {/* AUTO-SCROLL (NOW PERFECTLY CENTERED) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="recruiters-scroll-wrapper"
                >
                    <div
                        ref={scrollRef}
                        className="recruiters-scroll-container"
                    >
                        {[...recruiters, ...recruiters].map((r, i) => (
                            <RecruiterLogo
                                key={`${r.name}-${i}`}
                                recruiter={r}
                                index={i}
                                isActive={recruiters[activeIndex].name === r.name}
                                onSelect={() => {
                                    const idx = recruiters.findIndex((x) => x.name === r.name)
                                    if (idx >= 0) setActiveIndex(idx)
                                }}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* SPACER */}
                <div className="h-16" />

                {/* STATS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="recruiters-stats-grid"
                >
                    {placementStats.map((stat, i) => (
                        <div
                            key={i}
                            className="stat-card"
                        >
                            <p className="stat-value">
                                {stat.value}
                            </p>
                            <p className="stat-label">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* SPACER */}
                <div className="h-16" />

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="recruiters-cta-wrapper"
                >
                    <Link
                        to="/placements"
                        className="btn btn-outline recruiters-cta-btn"
                    >
                        <Briefcase size={24} strokeWidth={1.5} />
                        View Placement Record
                    </Link>
                </motion.div>

            </div>
        </section>
    )
}

export default Recruiters
