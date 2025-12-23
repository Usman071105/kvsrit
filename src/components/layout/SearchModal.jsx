import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './SearchModal.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const SearchModal = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    // Focus input when modal opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current.focus(), 100);
        }
    }, [isOpen]);

    // Debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            if (query.trim().length >= 2) {
                performSearch(query);
            } else {
                setResults([]);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [query]);

    // Handle escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const performSearch = async (searchQuery) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_URL}/search?q=${encodeURIComponent(searchQuery)}`);
            if (!response.ok) throw new Error('Search failed');
            const data = await response.json();
            setResults(data.results || []);
        } catch (err) {
            console.error('Search error:', err);
            setError('Failed to fetch results. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleResultClick = (result) => {
        onClose();
        // Navigate based on result type
        switch (result.type) {
            case 'news':
                // Assuming news links might be external or internal
                if (result.link && result.link.startsWith('http')) {
                    window.open(result.link, '_blank');
                } else {
                    // Navigate to a news page if it existed, or generic news
                    navigate('/campus-life#events');
                }
                break;
            case 'course':
                // Map course types to URLs or IDs
                // Currently just going to academics page
                navigate('/academics');
                break;
            case 'department':
                if (result.code) {
                    navigate(`/department/${result.code}`);
                }
                break;
            case 'faculty':
                // If we have a faculty detail page, go there.
                // For now, maybe go to the department page of that faculty
                if (result.dept) {
                    navigate(`/department/${result.dept}`);
                }
                break;
            default:
                break;
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="search-modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="search-modal"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="search-header">
                        <Search className="search-icon" size={20} />
                        <input
                            ref={inputRef}
                            type="text"
                            className="search-input"
                            placeholder="Search courses, departments, faculty..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button className="close-button" onClick={onClose}>
                            <X size={20} />
                        </button>
                    </div>

                    <div className="search-results">
                        {isLoading ? (
                            <div className="search-status">
                                <div className="loading-spinner"></div>
                                <p>Searching...</p>
                            </div>
                        ) : error ? (
                            <div className="search-status text-red-500">
                                {error}
                            </div>
                        ) : results.length > 0 ? (
                            results.map((result, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="search-result-item"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleResultClick(result);
                                    }}
                                >
                                    <div className="result-header">
                                        <span className="result-title">{result.title}</span>
                                        <span className="result-type">{result.type}</span>
                                    </div>
                                    <div className="result-subtitle">
                                        {result.type === 'faculty' && `${result.designation} - ${result.dept}`}
                                        {result.type === 'department' && result.code}
                                        {result.type === 'course' && `${result.typeLabel.toUpperCase()} - ${result.name}`}
                                        {result.type === 'news' && result.category}
                                    </div>
                                </a>
                            ))
                        ) : query.length >= 2 ? (
                            <div className="search-status">
                                <p>No results found for "{query}"</p>
                            </div>
                        ) : (
                            <div className="search-status">
                                <p>Type at least 2 characters to search</p>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default SearchModal;
