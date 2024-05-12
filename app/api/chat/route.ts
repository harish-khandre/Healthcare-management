import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { NextResponse } from "next/server"

export const runtime = 'edge'
const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})

export async function POST(req: Request) {

try {
if(!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY')
}}

