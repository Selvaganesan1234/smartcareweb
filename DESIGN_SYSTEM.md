# SmartCare Mobile App - Design System Documentation

## Overview
This document outlines the design system for the SmartCare Mobile App SK (Shasthya Kormi) experience, extracted from reference images and optimized for LMIC contexts.

## Design Tokens

### Color Palette
Extracted from reference images with WCAG AA compliance:

#### Primary Colors
- **Primary Blue**: `#1A237E` - Header backgrounds, primary navigation
- **Accent Pink**: `#E91E63` - Primary action buttons, CTAs
- **Secondary Blue**: `#5C6BC0` - Card accents, secondary elements
- **Light Blue**: `#C5CAE9` - Card backgrounds, subtle accents

#### Background Colors
- **Primary Background**: `#F5F5F5` - Main app background
- **Surface**: `#FFFFFF` - Card backgrounds, input fields
- **Card Background**: `#FFFFFF` - Individual card surfaces

#### Text Colors
- **Primary Text**: `#212121` - Main content, headings
- **Secondary Text**: `#757575` - Labels, descriptions
- **Light Text**: `#BDBDBD` - Placeholder text, disabled states
- **White Text**: `#FFFFFF` - Text on dark backgrounds

#### Accent Colors
- **Yellow**: `#FFF9C4` - Referred task indicator
- **Purple**: `#E1BEE7` - Follow-up task indicator
- **Light Blue**: `#90CAF9` - Graph elements
- **Light Gray**: `#BDBDBD` - Borders, dividers

### Typography
- **Font Family**: Inter (Google Fonts) - Clean, readable sans-serif
- **Font Sizes**:
  - XS: 12px - Small labels, timestamps
  - SM: 14px - Secondary text, descriptions
  - MD: 16px - Body text, form inputs
  - LG: 18px - Section headers
  - XL: 24px - Page titles
  - XXL: 32px - Large numbers, emphasis

### Spacing System
- **XS**: 4px - Minimal spacing
- **SM**: 8px - Small gaps
- **MD**: 16px - Standard spacing
- **LG**: 24px - Section spacing
- **XL**: 32px - Large sections
- **XXL**: 48px - Major sections

### Touch Targets
- **Minimum**: 44px - WCAG AA compliant
- **Large**: 56px - Primary actions, FAB
- **Form Elements**: 44px minimum height

## Component Library

### Cards
- **Border Radius**: 12px for main cards, 8px for list items
- **Shadow**: Subtle elevation with `box-shadow: 0 2px 4px rgba(0,0,0,0.1)`
- **Padding**: 16px standard, 24px for large cards
- **Background**: White (#FFFFFF)

### Buttons
- **Primary**: Pink background (#E91E63), white text
- **Secondary**: Light gray background (#E0E0E0), dark text
- **Border Radius**: 8px
- **Height**: 44px minimum
- **States**: Hover, focus, pressed with appropriate feedback

### Form Elements
- **Input Fields**: White background, light gray border
- **Focus State**: Pink border with subtle glow
- **Error States**: Red text with clear messaging
- **Validation**: Real-time feedback with visual indicators

### Navigation
- **Header**: Dark blue background (#1A237E)
- **Back Button**: White chevron left
- **Menu Button**: Three dots (⋮)
- **Search Bar**: White background with rounded corners

## Screen Specifications

### 1. SMS Notifications & Onboarding
- **Purpose**: Welcome SK and provide setup instructions
- **Key Elements**: SMS bubble design, step-by-step instructions
- **Accessibility**: Clear, jargon-free language
- **LMIC Optimization**: Simple language, visual hierarchy

### 2. Account Setup
- **Purpose**: Password creation with validation
- **Key Elements**: Password requirements, confirmation field
- **Validation**: Real-time feedback, strength indicators
- **Security**: Enforced but simple password rules

### 3. Login Screen
- **Purpose**: Authentication with error handling
- **Key Elements**: Username/password fields, error states
- **Offline Support**: Cached credentials messaging
- **Error Handling**: Specific error messages for each field

### 4. PIN Login
- **Purpose**: Quick authentication for repeat logins
- **Key Elements**: 4-digit PIN input, fallback option
- **UX**: Auto-advance between fields, clear feedback
- **Fallback**: Password login option available

### 5. Home Screen (Post-Login)
- **Purpose**: Main dashboard with core functions
- **Key Elements**: Three main cards (Households, Tasks, Dashboard)
- **Layout**: Card-based design with clear hierarchy
- **Actions**: Search, QR scan, floating action button

### 6. Households List
- **Purpose**: Browse and search households
- **Key Elements**: Search bar, filter controls, household cards
- **Status Indicators**: Red dots for incomplete registrations
- **Navigation**: Tap to view details

### 7. Household Details
- **Purpose**: View household information and members
- **Key Elements**: Summary card, member list
- **Member Cards**: Name, age, gender, patient ID
- **Navigation**: Tap members to view profiles

### 8. Patient Health Profile
- **Purpose**: View patient information and service history
- **Key Elements**: Bio data card, service history list
- **Filtering**: Date-based filters for service history
- **Empty States**: Clear messaging when no data available

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

### Motor Accessibility
- **Large Touch Targets**: Easy to tap on mobile devices
- **Spacing**: Adequate space between interactive elements
- **Gesture Support**: Standard mobile gestures
- **Keyboard Navigation**: Full keyboard accessibility

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

### User Experience
- **Familiar Patterns**: Standard mobile app conventions
- **Error Recovery**: Clear paths to resolve issues
- **Help Integration**: Contextual help and guidance
- **Performance**: Fast loading and responsive interactions

## Implementation Notes

### Responsive Design
- **Mobile First**: Designed for 375px width (iPhone SE)
- **Scalable**: Works on devices from 320px to 414px
- **Touch Optimized**: All interactions designed for touch
- **Orientation**: Portrait orientation primary

### Performance
- **CSS Variables**: Efficient theming and customization
- **Minimal Dependencies**: Only Google Fonts external dependency
- **Optimized Images**: Lightweight icons and graphics
- **Efficient Animations**: Subtle, purposeful transitions

### Browser Support
- **Modern Browsers**: Chrome, Safari, Firefox, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Progressive Enhancement**: Works without JavaScript
- **Fallbacks**: Graceful degradation for older browsers

## Quality Assurance

### Design Review Checklist
- [ ] All colors meet WCAG AA contrast requirements
- [ ] Touch targets are minimum 44px
- [ ] Text is readable at 16px base size
- [ ] Navigation is consistent across screens
- [ ] Error states are clear and helpful
- [ ] Loading states provide appropriate feedback
- [ ] Empty states guide users to next actions

### Testing Considerations
- **Device Testing**: Various screen sizes and orientations
- **Accessibility Testing**: Screen reader compatibility
- **Performance Testing**: Load times and responsiveness
- **User Testing**: Field testing with actual SK users
- **Edge Cases**: Offline scenarios, error conditions

## Future Enhancements

### Planned Improvements
- **Dark Mode**: Alternative color scheme for low-light use
- **Internationalization**: Multi-language support
- **Advanced Filtering**: More sophisticated search options
- **Data Visualization**: Charts and graphs for dashboard
- **Offline Sync**: Enhanced offline capabilities

### Scalability Considerations
- **Component Library**: Reusable design components
- **Theme System**: Easy color and style customization
- **Modular Architecture**: Easy to add new screens
- **Performance Monitoring**: Built-in analytics and monitoring
