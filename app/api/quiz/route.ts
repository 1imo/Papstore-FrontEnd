import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {
    try {
        const data = await request.json()

        // Add timestamp to the data
        const submissionData = {
            ...data,
            timestamp: new Date().toISOString()
        }

        // Convert to JSONL format (single line JSON)
        const jsonlData = JSON.stringify(submissionData) + '\n'

        // Ensure the data directory exists
        const dataDir = path.join(process.cwd(), 'data')
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir)
        }

        // Append to the JSONL file
        const filePath = path.join(dataDir, 'quiz_submissions.jsonl')
        fs.appendFileSync(filePath, jsonlData)

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error saving quiz submission:', error)
        return NextResponse.json(
            { error: 'Failed to save quiz submission' },
            { status: 500 }
        )
    }
} 