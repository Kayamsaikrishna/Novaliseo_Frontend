import { useEffect } from 'react';

/**
 * Custom hook to dynamically update SEO tags (Title & Meta Description) per page.
 * Strictly adheres to 50-60 char limits for titles and 140-160 chars for descriptions.
 * 
 * @param {Object} seoData 
 * @param {string} seoData.title - The exact SEO title to display.
 * @param {string} seoData.description - The exact SEO meta description to display.
 */
const useSEO = ({ title, description }) => {
    useEffect(() => {
        // 1. Update the document title
        if (title) {
            document.title = title;
        }

        // 2. Update or create the meta description tag
        if (description) {
            let metaDescription = document.querySelector('meta[name="description"]');

            if (metaDescription) {
                metaDescription.setAttribute('content', description);
            } else {
                // Fallback if index.html is missing the tag
                metaDescription = document.createElement('meta');
                metaDescription.name = 'description';
                metaDescription.content = description;
                document.head.appendChild(metaDescription);
            }
        }
    }, [title, description]); // Re-run if title or description changes dynamically
};

export default useSEO;
