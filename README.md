# SmartCare Web App - Interactive Prototype

A comprehensive healthcare management system designed for low- and middle-income countries (LMICs) with a focus on accessibility, usability, and performance.

## Features

### Authentication & Security
- **Splash Screen**: Clean landing page with SmartCare branding
- **Login System**: Username/password authentication with validation
- **Password Setup**: One-time password setup flow with security validation
- **Session Management**: Secure user session handling

### Core Modules

#### 1. Administrative Unit Management
- **Read-only Hierarchy**: Interactive tree view of Bangladesh administrative structure
- **Expandable/Collapsible**: Navigate through Division → District → Upazila → Union → Village
- **City Corporation Support**: Ward → Area structure for urban areas

#### 2. Location Management
- **Data Upload**: Excel (.xlsx) file upload with validation
- **Table View**: Comprehensive location data display
- **Processing Status**: Real-time upload progress and status updates
- **Error Handling**: Detailed error messages for invalid files

#### 3. Health Facility Management
- **Facility CRUD**: Create, read, update, delete health facilities
- **Facility Types**: Support for 9 different facility types
- **User Assignment**: Required user assignment with validation
- **Detailed Views**: Comprehensive facility information display
- **User Management**: Add/edit/delete users within facilities

#### 4. User Management
- **User CRUD**: Complete user lifecycle management
- **Role-based Access**: Different roles with appropriate permissions
- **Filtering & Search**: Advanced filtering by facility, role, and search terms
- **Password Management**: Secure password change functionality

## Design System

### Color Palette
Extracted from reference image with WCAG AA compliance:
- **Primary**: Deep navy blue (#1F3C73)
- **Secondary**: Soft sky blue (#E6ECF9)
- **Accent**: Magenta/pink (#E0426E)
- **Success**: Muted green (#7A8F6E)
- **Neutral**: Comprehensive grayscale range

### Typography
- **Font Family**: Inter (system fallbacks)
- **Hierarchy**: Clear heading and body text scales
- **Accessibility**: High contrast ratios for readability

### Components
- **Buttons**: Primary, secondary, and link variants
- **Forms**: Comprehensive form controls with validation
- **Tables**: Sortable, paginated data tables
- **Modals**: Accessible modal dialogs
- **Navigation**: Left sidebar navigation
- **Toast Notifications**: Non-intrusive feedback system

## Technical Specifications

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design (desktop-first, mobile-friendly)
- Minimum width: 1280px (scales down gracefully)

### Accessibility
- **WCAG AA Compliance**: Color contrast and keyboard navigation
- **Touch Targets**: Minimum 44px for mobile interaction
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Keyboard Navigation**: Full keyboard accessibility

### Performance
- **Lightweight**: Minimal external dependencies
- **Fast Loading**: Optimized for low-bandwidth connections
- **No Heavy Assets**: Performance-friendly for LMIC contexts

## Getting Started

### Prerequisites
- Modern web browser
- Local web server (optional, for file upload testing)

### Installation
1. Clone or download the project files
2. Open `index.html` in a web browser
3. No additional setup required

### Testing the Prototype

#### Login Credentials
- **Username**: `SK`
- **Password**: Any non-empty password

#### Key Interactions
1. **Splash Screen**: Click "Login" to proceed
2. **Login**: Use credentials above for successful login
3. **Password Setup**: Click "Forgot Password" or "New Password" links
4. **Navigation**: Use left sidebar to switch between modules
5. **File Upload**: Click "Upload (.xlsx)" in Location Management
6. **Facility Management**: Click "Add New Facility" to test form validation
7. **User Management**: Click "Add User" to test user creation

#### Sample Data
The prototype includes realistic sample data for:
- 5 location records
- 15 health facilities
- 10 user records
- Complete administrative hierarchy

## File Structure

```
smartcare-webapp/
├── index.html          # Main application file
├── styles.css          # Complete design system and styles
├── script.js           # Interactive functionality and state management
└── README.md           # This documentation
```

## Key Features Demonstrated

### Form Validation
- **Real-time Validation**: Immediate feedback on form errors
- **Required Field Validation**: Prevents submission with missing data
- **Password Strength**: Enforces password requirements
- **File Type Validation**: Restricts uploads to .xlsx format

### User Experience
- **Single Page Application**: Smooth navigation without page reloads
- **Modal Dialogs**: Contextual actions without leaving current view
- **Toast Notifications**: Non-blocking feedback for user actions
- **Responsive Design**: Works on various screen sizes

### Data Management
- **Sample Data**: Realistic test data for all modules
- **Table Pagination**: Handles large datasets efficiently
- **Search & Filter**: Advanced data discovery tools
- **CRUD Operations**: Complete data lifecycle management

## Accessibility Features

### Visual Design
- **High Contrast**: Meets WCAG AA standards
- **Clear Typography**: Readable fonts and sizing
- **Consistent Spacing**: Predictable layout patterns
- **Focus Indicators**: Clear focus states for keyboard navigation

### Interaction Design
- **Large Touch Targets**: 44px minimum for mobile devices
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper semantic markup
- **Error Messaging**: Clear, actionable error messages

## Browser Compatibility

### Tested Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Responsive Breakpoints
- **Desktop**: 1280px+ (primary design)
- **Tablet**: 768px - 1279px
- **Mobile**: < 768px (stacked layout)

## Performance Considerations

### Optimizations
- **Minimal Dependencies**: Only Google Fonts external resource
- **CSS Variables**: Efficient styling system
- **Vanilla JavaScript**: No framework overhead
- **Compressed Assets**: Optimized for low-bandwidth

### LMIC Considerations
- **Low Bandwidth**: Works on slow connections
- **Older Devices**: Compatible with older hardware
- **Offline Capable**: Can work without constant internet
- **Print Friendly**: Includes print stylesheets

## Future Enhancements

### Planned Features
- **Dark Mode**: Theme switching capability
- **Advanced Filtering**: More sophisticated search options
- **Data Export**: Export functionality for reports
- **Bulk Operations**: Multi-select actions
- **Real-time Updates**: Live data synchronization

### Technical Improvements
- **Progressive Web App**: PWA capabilities
- **Offline Support**: Service worker implementation
- **Data Persistence**: Local storage integration
- **API Integration**: Backend connectivity

## Support

For questions or issues with the prototype:
1. Check browser console for JavaScript errors
2. Ensure JavaScript is enabled
3. Try refreshing the page
4. Clear browser cache if needed

## License

This is a prototype demonstration for design and development purposes.

