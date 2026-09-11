# AI Fake News Detection System

## Project Overview

The AI Fake News Detection System is a web-based application developed to help users verify the authenticity of online news. Users can either paste a news article link or enter a news paragraph, and the system analyzes the content using Artificial Intelligence. It then compares the information with trusted news sources to determine whether the news is genuine or potentially fake.

The aim of this project is to reduce the spread of misinformation by providing users with a quick, reliable, and easy-to-use fact-checking platform.



## Problem Statement

The rapid spread of fake news through social media and online platforms has become a major concern. False or misleading information can influence public opinion, create panic, and spread misinformation within minutes.

Most users do not have enough time or resources to manually verify every news article they encounter. This project addresses that problem by automating the verification process using AI and trusted news sources.



## Target Users

### General Public
People who want to verify the authenticity of news before believing or sharing it.

### Students & Researchers
Students and researchers who require reliable information for academic purposes.

### Journalists & Content Creators
Professionals who need to verify facts before publishing articles or reports.



## Vision Statement

To develop a reliable AI-powered platform that helps people identify fake news by comparing information with trusted and verified news sources.



## Key Features

- User Registration and Login
- News Verification using URL
- News Verification using Text Input
- AI-based Fake News Detection
- Comparison with Trusted News Sources
- Confidence Score for Predictions
- Links to Verified News Articles
- Search History
- User Dashboard
- Responsive User Interface



## Success Metrics

The project will be considered successful if it can:

- Accurately classify news as real or fake.
- Verify information using trusted news sources.
- Generate results within a few seconds.
- Provide an intuitive and user-friendly interface.
- Help users make informed decisions before sharing information.



## Assumptions

- Users have an active internet connection.
- Trusted news websites and APIs are accessible.
- Users provide valid news links or readable text.
- The AI model is trained using reliable datasets.



## Constraints

- The system depends on the availability of trusted news sources.
- AI predictions may not always be 100% accurate.
- Free APIs may have request limitations.
- Internet connectivity is required for verification.
- The project is developed within a limited academic timeline.



## Technology Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Python
- Flask / FastAPI

### Artificial Intelligence
- Natural Language Processing (NLP)
- Machine Learning

### Database
- MongoDB

### Version Control
- Git & GitHub

### Containerization
- Docker



## Future Enhancements

- Browser Extension for instant verification
- Mobile Application
- Multi-language Support
- Voice-based News Verification
- Real-time Social Media Fact Checking



# Team Members

Work Division: 

Gargi : Vision Document, GitHub Repository Setup, Architecture Diagram, Development Environment Setup, Docker Configuration, HTML Navigation

Ananya :  GitHub Issues (User Stories), MoSCoW Prioritization, Figma Wireframes, Project Planning Board, UI Planning, Documentation Review,README Documentation

We both members collaborated throughout the project by discussing features, reviewing documentation, and validating the overall project design.


## Software Design

The system follows a modular and user-focused software design approach. The frontend is divided into reusable components such as navigation, cards, buttons, analysis sections, and result views. The application separates user interaction, verification logic, and data handling to improve maintainability and support future backend integration.

### Design Principles Applied

- **Abstraction:** Implementation details are hidden behind reusable components and functions. Common elements such as buttons, cards, navigation, and verification signals are represented as reusable UI components.

- **Modularity:** The application is divided into independent sections such as Home, Authentication, Dashboard, Analyzer, Results, and History. This makes individual features easier to develop, test, and modify.

- **Cohesion:** Each component has a focused responsibility. For example, the Analyzer handles news input and analysis initiation, while the Result section focuses on presenting the credibility assessment.

- **Low Coupling:** Components interact through well-defined props, callbacks, and state rather than directly depending on each other's internal implementation. This makes it easier to modify or replace individual components without affecting the entire system.

### Design Decisions

1. **Dark Teal Visual Theme** – A professional and trustworthy visual style was selected because the application deals with news verification and credibility assessment.

2. **Card-Based Layout** – Cards are used to organize credibility scores, verification signals, and related information into easily readable sections.

3. **Clear Navigation Structure** – Separate sections such as Home, Dashboard, Analyzer, and History allow users to access important functionality quickly.

4. **Visual Credibility Indicators** – Scores, icons, colors, and progress indicators communicate verification results quickly and reduce the amount of text users need to interpret.

5. **Reusable UI Components** – Common elements such as buttons, cards, headings, and signal rows are implemented as reusable components to maintain consistency and simplify future development.

### User-Friendly Design

The user interface is designed to minimize complexity and make the verification process easy to understand. Clear navigation, consistent layouts, readable typography, visual feedback, and simple input controls help users analyze news content with minimal effort. The responsive layout also allows the interface to adapt to different screen sizes and devices.

### Software Architecture Approach

The project follows a component-based architecture on the frontend, where individual UI components are responsible for specific tasks. The frontend is designed to communicate with the backend through defined interfaces, allowing AI-based verification logic, trusted-source comparison, and database operations to be integrated without significantly changing the user interface.

### Maintainability and Future Changes

The design prioritizes maintainability by keeping components modular, reusable, and focused on specific responsibilities. This reduces the impact of changes and makes it easier to add new features, modify existing functionality, or replace individual components.

The architecture also supports future expansion such as:

- Integration with a real AI-based fake news detection model
- Backend API integration
- Database connectivity for storing analysis history
- Additional verification and trusted-source APIs
- User authentication and role-based access
- New dashboard and analytics features
- Improved responsive support for different devices
