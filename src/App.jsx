import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import PageLoader from './components/layout/PageLoader'
import HeroSection from './components/home/HeroSection'
import WhyKVSR from './components/home/WhyKVSR'
import CoursesOffered from './components/home/CoursesOffered'
import Recruiters from './components/home/Recruiters'
import NewsEvents from './components/home/NewsEvents'
import Stats from './components/home/Stats'
import ContactSection from './components/home/ContactSection'

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [imagesLoaded, setImagesLoaded] = useState(false)

    useEffect(() => {
        // Simulate image preloading and show content after images load
        const loadImages = async () => {
            // Give images time to start loading
            await new Promise(resolve => setTimeout(resolve, 800))
            setImagesLoaded(true)

            // Then show full content
            await new Promise(resolve => setTimeout(resolve, 400))
            setIsLoading(false)
        }

        loadImages()
    }, [])

    return (
        <div className="min-h-screen bg-[var(--color-background)]">
            <AnimatePresence mode="wait">
                {isLoading && (
                    <PageLoader key="loader" imagesLoaded={imagesLoaded} />
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5 }}
            >
                <Header />
                <main>
                    <HeroSection />
                    <Stats />
                    <WhyKVSR />
                    <CoursesOffered />
                    <Recruiters />
                    <NewsEvents />
                    <ContactSection />
                </main>
                <Footer />
            </motion.div>
        </div>
    )
}

export default App
