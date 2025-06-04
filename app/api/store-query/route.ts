import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const DATA_PATH = path.join(process.cwd(), 'data', 'queries.jsonl')

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const { query } = body
        if (!query || typeof query !== 'string' || !query.trim()) {
            return NextResponse.json({ error: 'Invalid query' }, { status: 400 })
        }
        const entry = JSON.stringify({ query, timestamp: new Date().toISOString() }) + '\n'
        // Ensure the data directory exists
        await fs.mkdir(path.dirname(DATA_PATH), { recursive: true })
        await fs.appendFile(DATA_PATH, entry, 'utf8')
        return NextResponse.json({ success: true })
    } catch (e) {
        return NextResponse.json({ error: 'Server error' }, { status: 500 })
    }
} 