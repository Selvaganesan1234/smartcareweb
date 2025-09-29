# SmartCare Mobile App - SK Experience Mockups

## Overview
This repository contains high-fidelity mobile mockups for the SmartCare Mobile App SK (Shasthya Kormi) experience. The designs are based on reference images and optimized for LMIC (Low and Middle Income Country) contexts.

## Files Structure
```
smartcare-webapp/
├── mobile-mockups.html          # Complete mobile app mockups
├── DESIGN_SYSTEM.md             # Design system documentation
├── MOBILE_MOCKUPS_README.md     # This file
└── index.html                   # Original web app
```

## How to View the Mockups

### Option 1: Direct Browser Opening
1. Open `mobile-mockups.html` in any modern web browser
2. The mockups will automatically cycle through screens for demonstration
3. Use browser developer tools to simulate mobile devices

### Option 2: Local Server (Recommended)
1. Start a local server in the project directory:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
2. Open `http://localhost:8000/mobile-mockups.html` in your browser
3. Use browser developer tools to simulate mobile devices (375px width recommended)

## Screen Flow

### 1. SMS Notifications & Onboarding
- **Duration**: 3 seconds (auto-advances)
- **Purpose**: Welcome SK and provide setup instructions
- **Key Features**: SMS bubble design, step-by-step instructions

### 2. Account Setup
- **Purpose**: Password creation with validation
- **Key Features**: Real-time password validation, clear requirements
- **Validation Rules**: 8+ characters, 1 uppercase, 1 lowercase

### 3. Login Screen
- **Purpose**: Authentication with error handling
- **Key Features**: Username/password fields, offline support messaging
- **Error States**: Specific error messages for each field

### 4. PIN Login
- **Purpose**: Quick authentication for repeat logins
- **Key Features**: 4-digit PIN input, auto-advance between fields
- **Fallback**: Password login option available

### 5. Home Screen (Post-Login)
- **Purpose**: Main dashboard with core functions
- **Key Features**: Three main cards, search functionality, QR scan
- **Layout**: Card-based design with clear hierarchy

### 6. Households List
- **Purpose**: Browse and search households
- **Key Features**: Search bar, filter controls, status indicators
- **Navigation**: Tap cards to view details

### 7. Household Details
- **Purpose**: View household information and members
- **Key Features**: Summary card, member list with patient IDs
- **Navigation**: Tap members to view profiles

### 8. Patient Health Profile
- **Purpose**: View patient information and service history
- **Key Features**: Bio data, service history with date filters
- **Empty States**: Clear messaging when no data available

## Design System

### Color Palette
- **Primary Blue**: #1A237E (Headers, navigation)
- **Accent Pink**: #E91E63 (Primary actions, CTAs)
- **Secondary Blue**: #5C6BC0 (Card accents)
- **Light Blue**: #C5CAE9 (Subtle accents)
- **Background**: #F5F5F5 (Main background)
- **Surface**: #FFFFFF (Cards, inputs)

### Typography
- **Font**: Inter (Google Fonts)
- **Sizes**: 12px to 32px scale
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing
- **System**: 4px, 8px, 16px, 24px, 32px, 48px
- **Touch Targets**: Minimum 44px (WCAG AA compliant)

## Accessibility Features

### Visual Accessibility
- **High Contrast**: All text meets WCAG AA standards
- **Color Independence**: Information not conveyed by color alone
- **Focus States**: Clear focus indicators for keyboard navigation
- **Touch Targets**: Minimum 44px for all interactive elements

### Cognitive Accessibility
- **Clear Language**: Simple, jargon-free text
- **Step-by-step Instructions**: Breaking complex tasks into steps
- **Error Prevention**: Real-time validation and clear feedback
- **Consistent Navigation**: Predictable interface patterns

## LMIC Context Optimizations

### Language & Communication
- **Simple Language**: Avoiding technical jargon
- **Visual Hierarchy**: Clear information priority
- **Step-by-step Guidance**: Breaking complex processes
- **Local Context**: Appropriate terminology and examples

### Technical Considerations
- **Lightweight Assets**: Optimized for low bandwidth
- **Offline Support**: Cached data and offline messaging
- **Progressive Loading**: Essential content loads first
- **Data Efficiency**: Minimal data usage for core functions

## Interactive Features

### Navigation
- **Back Buttons**: Consistent left arrow navigation
- **Menu Buttons**: Three dots (⋮) for additional options
- **Search**: Real-time search functionality
- **Filters**: Dropdown and pill-based filtering

### Form Interactions
- **Real-time Validation**: Immediate feedback on input
- **Error States**: Clear error messages with specific guidance
- **Success States**: Confirmation of successful actions
- **Loading States**: Appropriate feedback during processing

### Touch Interactions
- **Tap Targets**: Large, easy-to-tap elements
- **Hover States**: Visual feedback on interaction
- **Press States**: Clear indication of pressed elements
- **Swipe Gestures**: Standard mobile navigation patterns

## Browser Compatibility

### Supported Browsers
- **Chrome**: 90+ (Recommended)
- **Safari**: 14+ (iOS 14+)
- **Firefox**: 88+
- **Edge**: 90+

### Mobile Devices
- **iOS**: iPhone SE (375px) to iPhone Pro Max (414px)
- **Android**: Various screen sizes from 320px to 414px
- **Responsive**: Adapts to different screen sizes

## Development Notes

### CSS Architecture
- **CSS Variables**: For consistent theming
- **Mobile-First**: Designed for mobile devices
- **Progressive Enhancement**: Works without JavaScript
- **Performance**: Optimized for fast loading

### JavaScript Features
- **Screen Navigation**: Smooth transitions between screens
- **Form Validation**: Real-time input validation
- **PIN Input**: Auto-advance between fields
- **Error Handling**: User-friendly error messages

## Testing Recommendations

### Device Testing
1. **iPhone SE (375px)**: Primary target device
2. **iPhone 12/13 (390px)**: Common modern device
3. **iPhone Pro Max (414px)**: Large screen testing
4. **Android Devices**: Various screen sizes

### Browser Testing
1. **Chrome Mobile**: Primary testing browser
2. **Safari Mobile**: iOS compatibility
3. **Firefox Mobile**: Cross-browser compatibility
4. **Edge Mobile**: Windows device compatibility

### Accessibility Testing
1. **Screen Reader**: Test with VoiceOver (iOS) or TalkBack (Android)
2. **Keyboard Navigation**: Test with external keyboard
3. **High Contrast**: Test with system high contrast mode
4. **Zoom**: Test with 200% zoom level

## Future Enhancements

### Planned Features
- **Dark Mode**: Alternative color scheme
- **Internationalization**: Multi-language support
- **Advanced Filtering**: More sophisticated search
- **Data Visualization**: Charts and graphs
- **Offline Sync**: Enhanced offline capabilities

### Performance Optimizations
- **Image Optimization**: WebP format support
- **CSS Optimization**: Minified stylesheets
- **JavaScript Optimization**: Minified scripts
- **Caching**: Browser caching strategies

## Support

### Issues and Feedback
- **Design Issues**: Report visual or UX problems
- **Accessibility Issues**: Report accessibility concerns
- **Performance Issues**: Report slow loading or responsiveness
- **Browser Issues**: Report compatibility problems

### Documentation
- **Design System**: See `DESIGN_SYSTEM.md` for detailed specifications
- **Component Library**: Reusable design components
- **Style Guide**: Visual and interaction guidelines
- **Best Practices**: Implementation recommendations

## License
This project is part of the SmartCare healthcare management system. All designs and code are proprietary and confidential.
