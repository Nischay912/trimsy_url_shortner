## 🔗 Trimsy - URL Shortener

A modern, efficient URL shortener service built with Next.js and MongoDB that provides simple and reliable link shortening without unnecessary tracking or complications.

## ✨ Features

- **URL Shortening**: Convert long URLs into short, manageable links
- **Custom Short URLs**: Option to create custom short URL identifiers
- **MongoDB Integration**: Efficient database storage for URL mappings
- **Duplicate Prevention**: Prevents creation of duplicate short URLs
- **Redirect System**: Seamless redirection from short URLs to original destinations
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Simple Interface**: Clean, user-friendly interface for quick link shortening

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router and API routes |
| MongoDB | Database for storing URL mappings |
| Next.js Font | Optimized font loading with local font files |
| Tailwind CSS | Modern styling and responsive design |

## 📋 API Endpoints

### POST /api/generate
Creates a new short URL entry.

**Request Body:**
```json
{
  "url": "https://example.com/long-url",
  "shorturl": "custom-alias"
}
```