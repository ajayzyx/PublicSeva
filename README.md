# VMC - Vadodara Municipal Corporation Pothole Management

A mobile application built with React Native and Expo for detecting and managing potholes in Vadodara city.

## 📋 Overview

VMC (Vadodara Municipal Corporation) is a comprehensive pothole detection and resolution system designed to help the municipal corporation efficiently identify, track, and resolve pothole issues across the city. The application enables citizens and municipal workers to report potholes, monitor their status, and ensure timely resolution.

## ✨ Features

### For Surveyors

- **Video-based Pothole Detection**: Record road conditions using the in-app camera
- **Automated Frame Extraction**: Capture multiple frames from recorded videos for analysis
- **Geolocation Tagging**: Automatically tag pothole locations with GPS coordinates
- **Status Tracking**: Monitor the resolution status of reported potholes
- **Activity Feed**: View all reported potholes and their current status

### For Engineers

- **Pothole Assignment**: View and manage assigned pothole repair tasks
- **Status Updates**: Update pothole repair progress and completion status
- **Location Maps**: View pothole locations on an interactive map

### General Features

- **Secure Authentication**: User authentication system with role-based access
- **Real-time Updates**: Stay informed about pothole status changes
- **Image Gallery**: Review captured frames and pothole images
- **Report Generation**: Create and submit detailed pothole reports
- **Offline Support**: Continue working even without internet connectivity

## 🛠️ Tech Stack

- **Framework**: React Native with Expo SDK 54
- **Navigation**: Expo Router 6.0
- **Language**: TypeScript
- **Camera**: Expo Camera & Video
- **Maps**: Expo Maps & React Native Maps
- **State Management**: React Context API
- **Storage**: Async Storage & Expo Secure Store
- **HTTP Client**: Axios
- **UI Components**: React Native base components with custom styling

## 📁 Project Structure

```
VMC/
├── app/                          # Main application screens
│   ├── _layout.tsx               # Root stack layout
│   ├── index.tsx                 # Landing/Login screen
│   ├── engineer/                 # Engineer portal
│   │   ├── feed.tsx              # Activity feed for engineers
│   │   ├── index.tsx             # Engineer dashboard
│   │   └── issue-details.tsx     # Detailed view for a pothole
│   └── surveyor/                 # Surveyor portal
│       ├── _layout.tsx
│       ├── feed.tsx              # Activity feed for surveyors
│       ├── index.tsx             # Surveyor dashboard
│       └── survey.tsx            # Pothole survey capture
├── components/                   # Reusable UI/logic
│   ├── CameraRecorder.tsx        # Video recording and upload
│   ├── FrameGallery.tsx          # Extracted frames gallery
│   ├── ReportContext.tsx         # Report state/context
│   └── UploadButton.tsx          # Upload control
├── styles/                       # Style definitions
│   ├── cameraStyles.ts
│   ├── engineerFeedStyles.ts
│   ├── engineerIssueStyles.ts
│   ├── engineerStyles.ts
│   ├── feedStyles.ts
│   └── surveyorStyles.ts
├── utils/                        # Utility functions
│   ├── api.ts                    # API service layer
│   ├── auth.ts                   # Auth helpers
│   └── auth1.ts                  # Legacy/alternate auth flow
├── assets/                       # Static assets
│   └── images/
└── app-example/                  # Expo starter reference (unused in prod)
   └── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Emulator
- Expo Go app (for testing on physical devices)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd VMC
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   expo start
   ```

### Running the App

- **iOS**: Press `i` in the terminal or run `npm run ios`
- **Android**: Press `a` in the terminal or run `npm run android`
- **Web**: Press `w` in the terminal or run `npm run web`

## 📱 Usage

### For Surveyors

1. **Login** with surveyor credentials
2. Navigate to the **Survey** tab
3. **Record a video** of the road conditions
4. The app will automatically **extract frames** from the video
5. Review frames in the **gallery**
6. **Submit the report** with location data
7. Monitor status in the **Activity Feed**

### For Engineers

1. **Login** with engineer credentials
2. View **assigned potholes** on the dashboard
3. Navigate to pothole locations using the **integrated map**
4. Update pothole **repair status**
5. Mark tasks as **completed** once resolved

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory (if needed for API endpoints):

```env
API_BASE_URL=your_api_endpoint_here
```

### Camera Permissions

The app requires camera and location permissions. Ensure these are granted when prompted on first launch.

## 🧪 Development

### Linting

```bash
npm run lint
```

### Type Checking

```bash
npx tsc --noEmit
```

### Reset Project

```bash
npm run reset-project
```

## 📦 Building for Production

### Android APK

```bash
expo build:android
```

### iOS IPA

```bash
expo build:ios
```

### Using EAS Build (Recommended)

```bash
eas build --platform android
eas build --platform ios
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

Developed for Vadodara Municipal Corporation
