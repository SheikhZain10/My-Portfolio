import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const contentType = request.headers.get('content-type') || ''
    let name = ''
    let email = ''
    let message = ''

    if (contentType.includes('application/json')) {
      const body = await request.json()
      name = body.name || ''
      email = body.email || ''
      message = body.message || ''
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const form = await request.formData()
      name = form.get('name') || ''
      email = form.get('email') || ''
      message = form.get('message') || ''
    }

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const TO = process.env.CONTACT_TO
    const FROM = process.env.CONTACT_FROM || 'onboarding@resend.dev'

    if (!RESEND_API_KEY || !TO) {
      return NextResponse.json({ success: false, message: 'Email service not configured' }, { status: 500 })
    }

    const subject = `New portfolio inquiry from ${name}`
    const html = `
      <div style="font-family: Arial, sans-serif;">
        <h3>New message from portfolio contact form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line">${message}</p>
      </div>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: [email],
        subject,
        html
      })
    })

    if (!res.ok) {
      const err = await res.text()
      return NextResponse.json({ success: false, message: 'Failed to send email', detail: err }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Unexpected server error' }, { status: 500 })
  }
}


