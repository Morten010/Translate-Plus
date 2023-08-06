/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        TRANSLATE_KEY: process.env.TRANSLATE_KEY,
        TRANSLATE_URL: process.env.TRANSLATE_URL,
    }
}

module.exports = nextConfig
