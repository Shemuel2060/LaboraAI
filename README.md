# LaboraAI 🧪🤖

**LaboraAI** is an innovative educational platform that bridges the gap between traditional laboratory work and modern artificial intelligence. It serves as an intelligent assistant for students and educators in chemistry, physics, and biology, helping them design, execute, and analyze scientific experiments more effectively.

## 🚀 Features

- **Intelligent Experiment Design**: AI-powered suggestions for experiment parameters and materials.
- **Lab Assistant**: Step-by-step guidance through experimental procedures.
- **Real-time Analysis**: Instant interpretation of results and data visualization.
- **Knowledge Base**: Access to a rich database of scientific concepts and methodologies.

## 🛠️ Tech Stack

### Backend
- **Framework**: Spring Boot (Java)
- **Database**: PostgreSQL (via Supabase)
- **AI Integration**: Google Generative AI

### Frontend
- **Framework**: React.js 
- **Language**: TypeScript
- **Styling**: Tailwind CSS

## 🚀 Getting Started

### Prerequisites
- Java 17+
- Node.js 18+
- PostgreSQL (or access to Supabase)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd laboraAI
   ```

2. **Backend Setup**
   ```bash
   cd backend
   # Configure application.properties with your database credentials
   mvn clean install
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

### Running the Application

1. **Start Backend**
   ```bash
   cd backend
   mvn spring-boot:run
   ```

2. **Start Frontend**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Access the App**
   Open your browser and navigate to `http://localhost:5173`

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
