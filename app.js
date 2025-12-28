// Import news data
import { newsArticles } from './src/TextContent.js';

// Function to render news articles
function renderNewsArticles() {
    const newsGrid = document.getElementById('newsGrid');
    
    if (!newsGrid) return;
    
    newsGrid.innerHTML = newsArticles.map(article => `
        <div class="news-card">
            <div class="news-card-image">
                <img src="${article.image}" alt="${article.title}" onerror="this.src='assets/placeholder.jpg'">
            </div>
            <div class="news-card-content">
                <span class="news-card-category">${article.category}</span>
                <h3>${article.title}</h3>
                <p class="news-card-text">${article.description}</p>
                <div class="news-card-meta">
                    <span>${article.timestamp}</span>
                    <span>${article.reads} reads</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderNewsArticles();
    
    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Optional: Add search functionality
function searchNews(query) {
    const filtered = newsArticles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.description.toLowerCase().includes(query.toLowerCase()) ||
        article.category.toLowerCase().includes(query.toLowerCase())
    );
    return filtered;
}

// Optional: Filter news by category
function filterNewsByCategory(category) {
    return newsArticles.filter(article =>
        article.category.toLowerCase() === category.toLowerCase()
    );
}

// Make functions globally available if needed
window.searchNews = searchNews;
window.filterNewsByCategory = filterNewsByCategory;
