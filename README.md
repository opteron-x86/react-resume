# Cloud Security Professional Resume Website

A modern, interactive resume website built with React, TypeScript, and AWS Amplify, showcasing professional experience and cloud development skills.

## Features

- **Modern React Frontend**: Built with React, TypeScript, and Vite for a fast, responsive user experience
- **AWS Cloud Architecture**: Leverages AWS Amplify for hosting and AWS services for backend functionality
- **Interactive UI Components**: Dynamic sections for experience, certifications, and projects
- **Secure Certificate Display**: View professional certifications securely stored in S3
- **Contact Form**: Easy-to-use contact form with serverless backend
- **Visitor Analytics**: Anonymous tracking of site visitors with geographic data
- **Admin Dashboard**: Secure admin area for monitoring site statistics
- **Mobile Responsive**: Optimized for all device sizes

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- CSS3 (custom styling)
- Axios for API requests

### Backend (AWS)
- AWS Amplify for hosting and CI/CD
- API Gateway for HTTP API endpoints
- Lambda functions for serverless compute
- DynamoDB for data storage
- S3 for secure asset storage
- SNS for contact form notifications
- CloudWatch for monitoring and logging

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- AWS account (for full functionality)
- AWS CLI configured locally

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/opteron-x86/react-resume.git
   cd react-resume
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root:
   ```
   VITE_API_URL=https://your-api-gateway-url
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view the site in your browser

### Deployment

The site is configured for automatic deployment through AWS Amplify. 
Push changes to the branch to trigger a new build and deployment:

```bash
git add .
git commit -m "Your changes"
git push origin master
```

## Project Structure

```
react-resume/
├── amplify/              # AWS Amplify configuration
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   │   ├── Header.tsx    # Site header with profile photo
│   │   ├── Summary.tsx   # Professional summary section
│   │   ├── Experience.tsx # Work experience timeline
│   │   ├── Skills.tsx    # Skills and competencies
│   │   ├── Projects.tsx  # Featured projects
│   │   ├── Certifications.tsx # Professional certifications
│   │   ├── Education.tsx # Educational background
│   │   ├── Footer.tsx    # Site footer
│   │   └── ContactForm.tsx # Contact form component
│   ├── hooks/            # Custom React hooks
│   ├── types.ts          # TypeScript type definitions
│   ├── App.tsx           # Main application component
│   ├── index.css         # Global styles
│   └── main.tsx          # Application entry point
├── .env                  # Environment variables (git-ignored)
├── index.html            # HTML entry point
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Backend Components

### Certificate Image Lambda

This Lambda function:
- Generates pre-signed URLs for accessing private certificate images stored in S3
- Implements proper access control for sensitive documents
- Secures professional credentials while allowing display in the browser

### Contact Form Lambda

This Lambda function:
- Processes contact form submissions
- Sends notifications via Amazon SNS
- Validates input data and prevents spam
- Provides confirmation responses to the frontend

### Visitor Tracking

This system:
- Anonymously tracks site visitors for analytics
- Stores data in DynamoDB
- Respects user privacy with anonymous metadata collection

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)