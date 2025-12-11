import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Briefcase } from 'lucide-react'

const recruiters = [
    { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/200px-Tata_Consultancy_Services_Logo.svg.png' },
    { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/200px-Infosys_logo.svg.png' },
    { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/200px-Wipro_Primary_Logo_Color_RGB.svg.png' },
    { name: 'Cognizant', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Cognizant%27s_logo.svg/200px-Cognizant%27s_logo.svg.png' },
    { name: 'Tech Mahindra', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Tech_Mahindra_New_Logo.svg/200px-Tech_Mahindra_New_Logo.svg.png' },
    { name: 'HCL', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/HCL_Technologies_logo.svg/200px-HCL_Technologies_logo.svg.png' },
    { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/200px-Accenture.svg.png' },
    { name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Capgemini_201x_logo.svg/200px-Capgemini_201x_logo.svg.png' },
]

const RecruiterLogo = ({ recruiter, index }) => {
    const [imageLoaded, setImageLoaded] = useState(false)
    const [imageError, setImageError] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="min-w-[160px] h-24 bg-white rounded-xl border border-[var(--color-border)] flex items-center justify-center p-4 mx-3 hover:shadow-lg hover:border-[var(--color-primary-light)] transition-all"
        >
            {!imageError ? (
                <img
                    src={recruiter.logo}
                    alt={recruiter.name}
                    className={`max-h-12 max-w-[120px] object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                />
            ) : (
                <span className="text-lg font-semibold text-[var(--color-text-secondary)] font-['Outfit']">
                    {recruiter.name}
                </span>
            )}
            {!imageLoaded && !imageError && (
                <div className="w-20 h-8 skeleton rounded" />
            )}
        </motion.div>
    )
}

const Recruiters = () => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: '-100px' })
    const scrollRef = useRef(null)

    useEffect(() => {
        const scrollContainer = scrollRef.current
        if (!scrollContainer) return

        const scroll = () => {
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                scrollContainer.scrollLeft = 0
            } else {
                scrollContainer.scrollLeft += 1
            }
        }

        const interval = setInterval(scroll, 30)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="recruiters" className="section bg-[var(--color-surface)]">
            <div className="container mx-auto px-4" ref={containerRef}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title title-underline">Our Key Recruiters</h2>
                    <p className="section-subtitle mt-6">
                        Leading companies trust Dr. KVSRIT for hiring talented and industry-ready graduates.
                    </p>
                </motion.div>

                {/* Logo Carousel */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="relative overflow-hidden"
                >
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--color-surface)] to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--color-surface)] to-transparent z-10" />

                    {/* Scrolling Container */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto scrollbar-hide py-4"
                        style={{ scrollBehavior: 'auto' }}
                    >
                        {/* Double the items for seamless loop */}
                        {[...recruiters, ...recruiters].map((recruiter, index) => (
                            <RecruiterLogo key={`${recruiter.name}-${index}`} recruiter={recruiter} index={index} />
                        ))}
                    </div>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { value: '100+', label: 'Recruiting Companies' },
                        { value: '95%', label: 'Placement Rate' },
                        { value: '₹12L', label: 'Highest Package' },
                        { value: '₹4.5L', label: 'Average Package' },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-4 bg-white rounded-xl border border-[var(--color-border)]"
                        >
                            <p className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] font-['Outfit']">
                                {stat.value}
                            </p>
                            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="text-center mt-10"
                >
                    <a
                        href="#placements"
                        className="btn btn-outline inline-flex items-center gap-2"
                    >
                        <Briefcase size={18} />
                        View Placement Record
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Recruiters
