'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'

const page = () => {
    const PrivacyPolicy = `

# Privacy Policy for Code With Ahad
Effective Date: 25/09/2023

Introduction

Welcome to Code With Ahad. This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information. By using our website and services, you consent to the practices described in this policy.


## Information we collect
Personal Information: We may collect personal information, such as your name, email address, phone number, and any other information you voluntarily provide when you contact us for software development projects or subscribe to our newsletter.
Usage Data: We automatically collect information about how you interact with our website. This may include your IP address, browser type, operating system, referring URLs, and pages viewed.
Comments and Interactions: If you choose to leave comments on our blog posts or interact with our content, we may collect information about your interactions, including your username and profile picture.

## How we use your information
We use the information we collect for the following purposes:
Communication: We may use your contact information to respond to your inquiries, provide project updates, or send newsletters and updates.
Website Improvement: We analyze usage data to enhance the user experience, optimize our content, and improve our website's performance.
Legal Compliance: We may use your information to comply with legal obligations and protect our rights and interests.


## Disclosure of your information
We do not sell or rent your personal information to third parties. However, we may disclose your information in the following circumstances:
Service Providers: We may share your information with third-party service providers who assist us in operating our website, conducting business, or providing services to you.
Legal Obligations: We may disclose your information if required to do so by law, in response to legal requests, or to protect our rights, privacy, safety, or property.

## Your rights
You have the following rights regarding your personal information:
Access: You can request access to the personal information we hold about you.
Correction: You can request that we correct inaccuracies in your personal information.
Deletion: You can request the deletion of your personal information.

## Security
We take reasonable measures to protect your personal information. However, no data transmission over the internet or storage system is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its security.


## Changes to our privacy policy
We reserve the right to update this Privacy Policy from time to time. We will post any changes on this page and update the effective date.


## Contact Us
If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at codewithahad01@gmail.com.
    `
  return (
    <div className="p-6">
      <div className="max-w-3xl mx-auto p-6 rounded-md border border-gray-500">
        <ReactMarkdown>{PrivacyPolicy}</ReactMarkdown>
      </div>
    </div>
  )
}

export default page