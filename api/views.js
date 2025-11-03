// Vercel Serverless Function for Visitor Counter
// Simple counter that persists across browsers using Vercel's serverless environment

// Note: This uses a global variable that persists during the serverless function's lifecycle
// For true persistence across deployments, integrate with a database (Upstash Redis, MongoDB, etc.)

let viewCount = 0;
let initialized = false;

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      // Initialize with a base count (you can set this)
      if (!initialized) {
        viewCount = 1000; // Starting count - adjust as needed
        initialized = true;
      }
      
      // Increment the counter
      viewCount += 1;
      
      return res.status(200).json({
        value: viewCount,
        success: true
      });
    } catch (error) {
      return res.status(500).json({ 
        error: error.message,
        value: viewCount || 1
      });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

