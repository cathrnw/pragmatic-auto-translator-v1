// =====================================
// API CONFIGURATION - LOCAL DEVELOPMENT
// =====================================

// This file is gitignored and won't affect GitHub Pages deployment

// JINA API Configuration for Local Development
export const JINA_CONFIG = {
  // Your JINA API key for local usage
  API_KEY: 'jina_API-KEY',  // Replace with your actual Jina AI API key
  
  // API endpoints
  BASE_URL: 'https://api.jina.ai/v1',
  EMBEDDINGS_ENDPOINT: '/embeddings'
};

// DeepSeek API Configuration for Local Development
export const DEEPSEEK_CONFIG = {
  // Your DeepSeek API key for local usage
  API_KEY: 'sk-API-KEY', // Replace with your actual DeepSeek API key
  
  // API endpoints
  BASE_URL: 'https://api.deepseek.com/v1',
  CHAT_ENDPOINT: '/chat/completions'
};

// Export for local use in automatic translation
export default {
  JINA_CONFIG,
  DEEPSEEK_CONFIG
};