import fs from 'fs';
import sitemap from 'sitemap'; // Default import

const { SitemapStream, streamToPromise } = sitemap;

// Create a new sitemap stream
const sitemapStream = new SitemapStream({ hostname: 'https://yourdomain.com' });

const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/facilities', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/learn-more', changefreq: 'monthly', priority: 0.8 },
  // Add more URLs as needed
];

// Write URLs to the sitemap
urls.forEach(({ url, changefreq, priority }) => {
  sitemapStream.write({ url, changefreq, priority });
});

sitemapStream.end();

// Convert the stream to a string and write to the file
streamToPromise(sitemapStream).then((data) => {
  fs.writeFileSync('public/sitemap.xml', data.toString());
  console.log('Sitemap written to public/sitemap.xml');
}).catch((err) => {
  console.error('Error writing sitemap:', err);
});
