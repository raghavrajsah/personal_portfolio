const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  console.log('Function called with event:', JSON.stringify(event, null, 2));
  
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the request body
    const { email } = JSON.parse(event.body);
    console.log('Received email:', email);

    // Validate email
    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          success: false, 
          message: 'Invalid email address' 
        })
      };
    }

    // Enhanced debugging for email configuration
    console.log('🔍 Email configuration debug:');
    console.log('EMAIL_USER:', process.env.EMAIL_USER ? `${process.env.EMAIL_USER.substring(0, 3)}***` : 'Not set');
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Set (length: ' + process.env.EMAIL_PASS.length + ')' : 'Not set');
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('❌ Email credentials not configured');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          success: false, 
          message: 'Email service not configured' 
        })
      };
    }

    console.log('📧 Creating email transporter...');

    // Create email transporter with better error handling
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Add timeout settings for better reliability
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
    });

    // Verify transporter configuration
    console.log('📧 Verifying transporter configuration...');
    try {
      await transporter.verify();
      console.log('✅ Transporter verified successfully');
    } catch (verifyError) {
      console.error('❌ Transporter verification failed:', verifyError.message);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          success: false, 
          message: 'Email service authentication failed. Please check your credentials.',
          error: verifyError.message
        })
      };
    }

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

    console.log('📧 Attempting to send email...');

    // Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'rsah@colgate.edu',
      subject,
      html,
      text: `${email} has requested your CV.`
    });

    console.log('✅ Email sent successfully:', info.messageId);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'CV request sent successfully!' 
      })
    };

  } catch (error) {
    console.error('❌ Error in function:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send CV request. Please try again.';
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check your Gmail credentials and ensure you\'re using an App Password if 2FA is enabled.';
    } else if (error.code === 'ETIMEDOUT') {
      errorMessage = 'Email service timeout. Please try again later.';
    }
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false, 
        message: errorMessage,
        error: error.message
      })
    };
  }
}; 