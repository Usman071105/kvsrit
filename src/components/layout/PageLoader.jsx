import { motion } from 'framer-motion'

const PageLoader = ({ imagesLoaded }) => {
    return (
        <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-[var(--color-background)] flex flex-col items-center justify-center"
        >
            {/* Logo Animation */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                {/* Outer Ring */}
                <motion.div
                    className="w-32 h-32 rounded-full border-4 border-[var(--color-primary-light)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />

                {/* Inner Logo */}
                <motion.div
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center shadow-2xl relative z-10"
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <span className="text-white font-bold text-4xl font-['Outfit']">K</span>
                </motion.div>

                {/* NAAC Badge */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute top-0 right-[-60px] px-3 py-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-primary-light)] rounded-full"
                >
                    <span className="text-xs font-bold text-[var(--color-text-primary)]">NAAC A+</span>
                </motion.div>
            </motion.div>

            {/* College Name */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-8 text-center"
            >
                <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] font-['Outfit']">
                    Dr. K.V. Subba Reddy
                </h1>
                <p className="text-[var(--color-text-secondary)] mt-1">
                    Institute of Technology
                </p>
            </motion.div>

            {/* Loading Progress */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-10 flex flex-col items-center gap-3"
            >
                {/* Progress Bar */}
                <div className="w-48 h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]"
                        initial={{ width: '0%' }}
                        animate={{ width: imagesLoaded ? '100%' : '60%' }}
                        transition={{ duration: imagesLoaded ? 0.3 : 0.8, ease: 'easeOut' }}
                    />
                </div>

                {/* Loading Text */}
                <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-sm text-[var(--color-text-muted)]"
                >
                    {imagesLoaded ? 'Starting...' : 'Loading...'}
                </motion.p>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Top-left decoration */}
                <motion.div
                    initial={{ x: -100, y: -100, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 0.1 }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[var(--color-primary)]"
                    style={{ filter: 'blur(60px)' }}
                />

                {/* Bottom-right decoration */}
                <motion.div
                    initial={{ x: 100, y: 100, opacity: 0 }}
                    animate={{ x: 0, y: 0, opacity: 0.1 }}
                    transition={{ duration: 1 }}
                    className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[var(--color-accent)]"
                    style={{ filter: 'blur(60px)' }}
                />
            </div>
        </motion.div>
    )
}

export default PageLoader
