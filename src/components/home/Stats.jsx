import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Award, Users, Trophy, BookOpen, Building, Briefcase } from 'lucide-react'

const stats = [
    {
        icon: Award,
        value: 5,
        suffix: '+',
        label: 'Awards & Recognitions',
        color: 'var(--color-accent)',
    },
    {
        icon: Users,
        value: 150,
        suffix: '+',
        label: 'Expert Faculty',
        color: 'var(--color-primary)',
    },
    {
        icon: BookOpen,
        value: 2000,
        suffix: '+',
        label: 'Students Enrolled',
        color: 'var(--color-success)',
    },
    {
        icon: Briefcase,
        value: 95,
        suffix: '%',
        label: 'Placement Rate',
        color: 'var(--color-primary-dark)',
    },
]

const Counter = ({ value, suffix }) => {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    useEffect(() => {
        if (isInView) {
            const duration = 2000
            const steps = 60
            const increment = value / steps
            let current = 0

            const timer = setInterval(() => {
                current += increment
                if (current >= value) {
                    setCount(value)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(current))
                }
            }, duration / steps)

            return () => clearInterval(timer)
        }
    }, [isInView, value])

    return (
        <span ref={ref}>
            {count.toLocaleString()}{suffix}
        </span>
    )
}

const Stats = () => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: '-50px' })

    return (
        <section className="relative py-16 -mt-16 z-20">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-xl border border-[var(--color-border)] overflow-hidden"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                                className={`relative p-6 md:p-8 text-center ${index < stats.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-[var(--color-border)]' : ''
                                    } ${index === 1 ? 'border-r lg:border-r' : ''}`}
                            >
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                                    style={{ backgroundColor: `${stat.color}15` }}
                                >
                                    <stat.icon size={28} style={{ color: stat.color }} />
                                </div>

                                {/* Value */}
                                <h3
                                    className="text-3xl md:text-4xl font-bold mb-2 font-['Outfit']"
                                    style={{ color: stat.color }}
                                >
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </h3>

                                {/* Label */}
                                <p className="text-[var(--color-text-secondary)] text-sm md:text-base">
                                    {stat.label}
                                </p>

                                {/* Hover Effect */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
                                    style={{
                                        background: `linear-gradient(135deg, ${stat.color}05 0%, ${stat.color}10 100%)`
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Stats
