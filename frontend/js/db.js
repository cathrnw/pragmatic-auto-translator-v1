import { MongoClient } from 'mongodb';

export async function connectToDatabase() {

    // if window is undefined, means successfully server side
    if (typeof window === 'undefined') {
        const uri = process.env.MONGODB_URI; // connection URI in environment variables in vercel
        const client = new MongoClient(uri);
        
        try { // try connection
            await client.connect();
            return client.db(process.env.MONGODB_DBNAME);
        } 
        catch (error) {
            console.error('mongodb connection error:', error);
            throw error;
        }
    }
    else {
        throw new Error('for frontend usage, call API routes instead of direct DB access');
    }
    }

    export async function getDbClient() {
    const uri = process.env.MONGODB_URI;
    const client = new MongoClient(uri);
    await client.connect();
    return client;
    }