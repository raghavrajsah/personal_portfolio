const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the request body
    const { email } = JSON.parse(event.body);

    // Validate email
    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          success: false, 
          message: 'Invalid email address' 
        })
      };
    }

    // Create email transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
    });

    // Email content
    const subject = `CV Request from ${email}`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">CV Request</h2>
        <p><strong>${email}</strong> has requested your CV.</p>
        <p>You can send them your CV or contact them directly.</p>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
        <p style="color: #666; font-size: 12px;">
          This is an automated notification from your portfolio website.
        </p>
      </div>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'rsah@colgate.edu',
      subject,
      html,
      text: `${email} has requested your CV.`
    });

    console.log('Email sent successfully:', info.messageId);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'CV request sent successfully!' 
      })
    };

  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        success: false, 
        message: 'Failed to send CV request. Please try again.' 
      })
    };
  }
}; 