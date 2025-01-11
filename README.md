Blood Donation Management System
A web-based platform that connects blood donors with recipients and manages the blood donation process efficiently.
Features
For Donors

Create and manage donor profiles
Submit blood donation applications
View donation history
Receive notifications about donation approval status
Update personal information and availability
Schedule donation appointments

For Recipients

Submit blood requests with required details
Track request status
Receive notifications when blood is available
View delivery status and estimated time
Emergency request prioritization

For Administrators

Manage donor and recipient profiles
Review and approve donation applications
Process blood requests
Track blood inventory levels
Manage blood delivery logistics
Generate reports and analytics
Monitor system activity

Technology Stack

Frontend: React.js
Backend: Node.js with Express
Database: MongoDB
Authentication: JWT
Real-time notifications: Socket.io

Installation

Clone the repository:

bashCopygit clone https://github.com/yourusername/blood-donation-system.git

Install dependencies for backend:

bashCopycd backend
npm install

Install dependencies for frontend:

bashCopycd frontend
npm install

Configure environment variables:


Create .env file in backend directory
Add required variables:
CopyMONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000



Start the development servers:

bashCopy# Start backend server
cd backend
npm run dev

# Start frontend server
cd frontend
npm start
Project Structure
Copyblood-donation-system/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│   └── package.json
└── README.md
API Documentation
Donor Endpoints

POST /api/donors/register - Register new donor
POST /api/donors/apply - Submit donation application
GET /api/donors/history - Get donation history

Recipient Endpoints

POST /api/recipients/request - Submit blood request
GET /api/recipients/status - Check request status
PUT /api/recipients/update - Update request details

Admin Endpoints

GET /api/admin/applications - View pending applications
PUT /api/admin/approve - Approve donation
GET /api/admin/inventory - View blood inventory

Contributing

Fork the repository
Create a new branch (git checkout -b feature/improvement)
Make changes and commit (git commit -am 'Add new feature')
Push to the branch (git push origin feature/improvement)
Create a Pull Request

License
This project is licensed under the MIT License - see the LICENSE.md file for details.
Contact
For any queries or support, please contact:

Email: support@blooddonation.com
Phone: +1-234-567-8900

Acknowledgments

Thanks to all contributors who have helped with the development
Special thanks to medical professionals who provided domain expertise
Gratitude to the open-source community for various tools and libraries used
