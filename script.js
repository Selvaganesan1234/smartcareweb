// SmartCare Web App - Interactive Prototype
// Global state management
const AppState = {
    currentScreen: 'splash',
    currentModule: 'welcome',
    currentUser: 'SK',
    isAuthenticated: false,
    sampleData: {
        locations: [],
        facilities: [],
        users: []
    }
};

// Sample data for demonstration
const sampleData = {
    locations: [
        { division: 'Dhaka', district: 'Dhaka', type: 'Division', cityCorp: 'Dhaka City Corporation', union: 'Dhanmondi', village: 'Dhanmondi 27', code: 'DHK-001' },
        { division: 'Dhaka', district: 'Dhaka', type: 'Division', cityCorp: 'Dhaka City Corporation', union: 'Gulshan', village: 'Gulshan 1', code: 'DHK-002' },
        { division: 'Chittagong', district: 'Chittagong', type: 'Division', cityCorp: 'Chittagong City Corporation', union: 'Panchlaish', village: 'Panchlaish', code: 'CTG-001' },
        { division: 'Sylhet', district: 'Sylhet', type: 'Division', cityCorp: 'Sylhet City Corporation', union: 'Zindabazar', village: 'Zindabazar', code: 'SYL-001' },
        { division: 'Rajshahi', district: 'Rajshahi', type: 'Division', cityCorp: 'Rajshahi City Corporation', union: 'Shah Makhdum', village: 'Shah Makhdum', code: 'RAJ-001' }
    ],
    facilities: [
        { name: 'Dhaka Medical College Hospital', code: 'DMCH-001', type: 'Hospital', parentUnit: 'Dhaka City Corporation', division: 'Dhaka', district: 'Dhaka', id: 1 },
        { name: 'Chittagong Medical College', code: 'CMCH-001', type: 'Hospital', parentUnit: 'Chittagong City Corporation', division: 'Chittagong', district: 'Chittagong', id: 2 },
        { name: 'Community Clinic - Dhanmondi', code: 'CC-DHK-001', type: 'Community Clinic', parentUnit: 'Dhanmondi Union', division: 'Dhaka', district: 'Dhaka', id: 3 },
        { name: 'Upazila Health Complex - Savar', code: 'UHC-SAV-001', type: 'Upazila Health Complex', parentUnit: 'Savar Upazila', division: 'Dhaka', district: 'Dhaka', id: 4 },
        { name: 'BRAC Maternity Center - Gazipur', code: 'BMC-GAZ-001', type: 'BRAC Maternity Center', parentUnit: 'Gazipur District', division: 'Dhaka', district: 'Gazipur', id: 5 },
        { name: 'Sub Center - Narayanganj', code: 'SC-NAR-001', type: 'Sub Center', parentUnit: 'Narayanganj District', division: 'Dhaka', district: 'Narayanganj', id: 6 },
        { name: 'Administrative Office - Dhaka', code: 'AO-DHK-001', type: 'Administrative Office', parentUnit: 'Dhaka Division', division: 'Dhaka', district: 'Dhaka', id: 7 },
        { name: 'Camp - Cox\'s Bazar', code: 'CAMP-CXB-001', type: 'Camp', parentUnit: 'Cox\'s Bazar District', division: 'Chittagong', district: 'Cox\'s Bazar', id: 8 },
        { name: 'Pharmacy - Gulshan', code: 'PH-GUL-001', type: 'Pharmacy', parentUnit: 'Gulshan Union', division: 'Dhaka', district: 'Dhaka', id: 9 },
        { name: 'Laboratory - Uttara', code: 'LAB-UTT-001', type: 'Laboratory', parentUnit: 'Uttara Union', division: 'Dhaka', district: 'Dhaka', id: 10 },
        { name: 'Dispensary - Mirpur', code: 'DIS-MIR-001', type: 'Dispensary', parentUnit: 'Mirpur Union', division: 'Dhaka', district: 'Dhaka', id: 11 },
        { name: 'Community Clinic - Gulshan', code: 'CC-GUL-001', type: 'Community Clinic', parentUnit: 'Gulshan Union', division: 'Dhaka', district: 'Dhaka', id: 12 },
        { name: 'Upazila Health Complex - Tangail', code: 'UHC-TAN-001', type: 'Upazila Health Complex', parentUnit: 'Tangail Upazila', division: 'Dhaka', district: 'Tangail', id: 13 },
        { name: 'BRAC Maternity Center - Mymensingh', code: 'BMC-MYM-001', type: 'BRAC Maternity Center', parentUnit: 'Mymensingh District', division: 'Dhaka', district: 'Mymensingh', id: 14 },
        { name: 'Sub Center - Comilla', code: 'SC-COM-001', type: 'Sub Center', parentUnit: 'Comilla District', division: 'Chittagong', district: 'Comilla', id: 15 },
        { name: 'Sylhet Medical College', code: 'SMC-001', type: 'Hospital', parentUnit: 'Sylhet Sadar City Corporation', division: 'Sylhet', district: 'Sylhet', id: 16 }
    ],
    users: [
        { name: 'Dr. Ahmed Rahman', username: 'ahmed.rahman', email: 'ahmed@smartcare.gov.bd', phone: '+880-1712345678', role: 'Doctor', facility: 'Dhaka Medical College Hospital', gender: 'Male', district: 'Dhaka', upazila: 'Dhaka City Corporation', union: 'Ward 1', village: 'Area A' },
        { name: 'Nurse Fatima Begum', username: 'fatima.begum', email: 'fatima@smartcare.gov.bd', phone: '+880-1712345679', role: 'Nurse', facility: 'Dhaka Medical College Hospital', gender: 'Female', district: 'Dhaka', upazila: 'Dhaka City Corporation', union: 'Ward 1', village: 'Area A' },
        { name: 'Community Health Worker - Karim', username: 'karim.chw', email: 'karim@smartcare.gov.bd', phone: '+880-1712345680', role: 'Community Health Worker', facility: 'Community Clinic - Dhanmondi', gender: 'Male', district: 'Dhaka', upazila: 'Dhanmondi Upazila', union: 'Dhanmondi Union', village: 'Dhanmondi 27' },
        { name: 'Dr. Salma Khatun', username: 'salma.khatun', email: 'salma@smartcare.gov.bd', phone: '+880-1712345681', role: 'Doctor', facility: 'Chittagong Medical College', gender: 'Female', district: 'Chittagong', upazila: 'Chittagong City Corporation', union: 'Ward 1', village: 'Area A' },
        { name: 'Administrator - Hasan', username: 'hasan.admin', email: 'hasan@smartcare.gov.bd', phone: '+880-1712345682', role: 'Administrator', facility: 'Administrative Office - Dhaka', gender: 'Male', district: 'Dhaka', upazila: 'Dhaka City Corporation', union: 'Ward 2', village: 'Area C' },
        { name: 'Lab Technician - Rina', username: 'rina.lab', email: 'rina@smartcare.gov.bd', phone: '+880-1712345683', role: 'Lab Technician', facility: 'Laboratory - Uttara', gender: 'Female', district: 'Dhaka', upazila: 'Dhaka City Corporation', union: 'Ward 2', village: 'Area D' },
        { name: 'Pharmacist - Ali', username: 'ali.pharma', email: 'ali@smartcare.gov.bd', phone: '+880-1712345684', role: 'Pharmacist', facility: 'Pharmacy - Gulshan', gender: 'Male', district: 'Dhaka', upazila: 'Dhanmondi Upazila', union: 'Gulshan Union', village: 'Gulshan 1' },
        { name: 'Community Health Worker - Ayesha', username: 'ayesha.chw', email: 'ayesha@smartcare.gov.bd', phone: '+880-1712345685', role: 'Community Health Worker', facility: 'Community Clinic - Gulshan', gender: 'Female', district: 'Dhaka', upazila: 'Dhanmondi Upazila', union: 'Gulshan Union', village: 'Gulshan 2' },
        { name: 'Dr. Mohammad Ali', username: 'mohammad.ali', email: 'mohammad@smartcare.gov.bd', phone: '+880-1712345686', role: 'Doctor', facility: 'Upazila Health Complex - Savar', gender: 'Male', district: 'Dhaka', upazila: 'Savar Upazila', union: 'Savar Union', village: 'Savar Center' },
        { name: 'Nurse - Nasrin', username: 'nasrin.nurse', email: 'nasrin@smartcare.gov.bd', phone: '+880-1712345687', role: 'Nurse', facility: 'BRAC Maternity Center - Gazipur', gender: 'Female', district: 'Gazipur', upazila: 'Gazipur Upazila', union: 'Gazipur Union', village: 'Gazipur Center' },
        { name: 'SK User', username: 'sk.user', email: 'sk@smartcare.gov.bd', phone: '+880-1712345688', role: 'SK', facility: 'Administrative Office - Dhaka', gender: 'Male', district: 'Dhaka', upazila: 'Dhaka City Corporation', union: 'Ward 1', village: 'Area A' }
    ],
    roles: [
        { name: 'Nurse', type: 'Facility', description: 'Facility-based nurse role', permissions: ['Household Registration', 'RM&CH', 'ELCO'], id: 1 },
        { name: 'District Admin', type: 'Administrative Unit', description: 'District-level oversight', permissions: ['Reporting', 'Administration', 'Dashboard'], id: 2 }
    ]
};

// Administrative Unit Tree Structure
const adminTreeData = {
    name: 'Bangladesh',
    children: []
};

// Utility Functions
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        AppState.currentScreen = screenId;
    }
}

function showModule(moduleId) {
    // Hide all modules
    document.querySelectorAll('.module-content').forEach(module => {
        module.classList.remove('active');
    });
    
    // Show target module
    const targetModule = document.getElementById(moduleId + '-module');
    if (targetModule) {
        targetModule.classList.add('active');
        AppState.currentModule = moduleId;
    }
    
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeNavItem = document.querySelector(`[onclick="showModule('${moduleId}')"]`);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }
}

function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' ? '✓' : type === 'error' ? '✗' : '⚠';
    
    toast.innerHTML = `
        <div class="toast-icon">${icon}</div>
        <div class="toast-message">${message}</div>
        <button class="toast-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    toastContainer.appendChild(toast);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, 5000);
}

function showModal(content) {
    const modalOverlay = document.getElementById('modal-overlay');
    const modal = modalOverlay.querySelector('.modal');
    modal.innerHTML = content;
    modalOverlay.classList.add('active');
}

function closeModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    modalOverlay.classList.remove('active');
}

// Screen Navigation Functions
function showLogin() {
    showScreen('login-screen');
}

function showPasswordSetup() {
    showScreen('password-setup-screen');
}

function showSplash() {
    showScreen('splash-screen');
}

// Login Handler
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Clear previous errors
    document.getElementById('username-error').classList.remove('show');
    document.getElementById('password-error').classList.remove('show');
    
    // Validate credentials
    if (username === 'SK' && password.length > 0) {
        // Successful login
        AppState.isAuthenticated = true;
        showScreen('authenticated-shell');
        showToast('Login successful!', 'success');
        populateTables();
    } else {
        // Show appropriate error messages
        if (username !== 'SK') {
            document.getElementById('username-error').textContent = 'Username is incorrect';
            document.getElementById('username-error').classList.add('show');
        }
        if (password.length === 0) {
            document.getElementById('password-error').textContent = 'Password is required';
            document.getElementById('password-error').classList.add('show');
        } else if (username === 'SK') {
            document.getElementById('password-error').textContent = 'Password is incorrect';
            document.getElementById('password-error').classList.add('show');
        } else {
            document.getElementById('username-error').textContent = 'Username and password are incorrect';
            document.getElementById('username-error').classList.add('show');
        }
    }
}

// Password Setup Handler
function handlePasswordSetup(event) {
    event.preventDefault();
    
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (newPassword !== confirmPassword) {
        showToast('Passwords do not match', 'error');
        return;
    }
    
    if (newPassword.length < 8) {
        showToast('Password must be at least 8 characters long', 'error');
        return;
    }
    
    // Simulate successful password setup
    showScreen('password-success-screen');
}

// Logout Handler
function logout() {
    AppState.isAuthenticated = false;
    showScreen('splash-screen');
    showToast('Logged out successfully', 'success');
}

// Profile Handler
function showProfile() {
    showToast('Profile feature coming soon', 'warning');
}

// Module Navigation
function showModule(moduleId) {
    // Hide all modules
    document.querySelectorAll('.module-content').forEach(module => {
        module.classList.remove('active');
    });
    
    // Show target module
    const targetModule = document.getElementById(moduleId + '-module');
    if (targetModule) {
        targetModule.classList.add('active');
        AppState.currentModule = moduleId;
    }
    
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeNavItem = document.querySelector(`[onclick="showModule('${moduleId}')"]`);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }
    
    // Handle sub-navigation for admin-unit
    if (moduleId === 'admin-unit') {
        // Ensure sub-navigation is visible
        const navItemWithSub = document.querySelector('.nav-item-with-sub');
        if (navItemWithSub) {
            navItemWithSub.classList.add('active');
        }
        // Only show hierarchy by default if no sub-module is currently active
        const currentActiveSub = document.querySelector('.sub-module-content.active');
        if (!currentActiveSub) {
            showSubModule('admin-unit', 'hierarchy');
        }
    }
    
    // Load module-specific data
    if (moduleId === 'admin-unit') {
        loadAdminTree();
    }
}

// Sub Module Navigation
function showSubModule(moduleId, subModuleId) {
    // Hide all sub-modules in the current module
    const module = document.getElementById(moduleId + '-module');
    if (module) {
        module.querySelectorAll('.sub-module-content').forEach(subModule => {
            subModule.classList.remove('active');
        });
    }
    
    // Show target sub-module
    const targetSubModule = document.getElementById(moduleId + '-' + subModuleId);
    if (targetSubModule) {
        targetSubModule.classList.add('active');
    }
    
    // Update sub-navigation
    document.querySelectorAll('.sub-nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    const activeSubNavItem = document.querySelector(`[onclick="showSubModule('${moduleId}', '${subModuleId}')"]`);
    if (activeSubNavItem) {
        activeSubNavItem.classList.add('active');
    }
    
    // Load sub-module specific data
    if (moduleId === 'admin-unit') {
        if (subModuleId === 'hierarchy') {
            loadAdminTree();
        } else if (subModuleId === 'add-unit') {
            populateAdminUnitTable();
        }
    }
}

// Administrative Unit Tree
function loadAdminTree() {
    const treeContainer = document.getElementById('admin-tree');
    console.log('Loading admin tree with data:', adminTreeData);
    treeContainer.innerHTML = renderHierarchy(adminTreeData);
}

function renderHierarchy(node, level = 0) {
    const hasChildren = node.children && node.children.length > 0;
    const nodeType = getNodeType(node.name, level);
    const isUrban = isUrbanArea(node.name, nodeType);
    
    let html = `
        <div class="hierarchy-node">
            <div class="hierarchy-card ${nodeType} ${isUrban ? 'urban' : 'rural'}">
                <div class="hierarchy-card-content">
                    <div class="hierarchy-card-header">
                        <h3 class="hierarchy-title">${node.name}</h3>
                    </div>
                    <div class="hierarchy-actions">
                        <span class="hierarchy-type-badge">${nodeType}</span>
                        <button class="hierarchy-add-btn" onclick="addChildUnit('${node.name}', '${nodeType}')" title="Add Child Unit">+</button>
                    </div>
                </div>
    `;
    
    if (hasChildren) {
        html += '<div class="hierarchy-children">';
        node.children.forEach(child => {
            html += renderHierarchy(child, level + 1);
        });
        html += '</div>';
    }
    
    html += '</div></div>';
    return html;
    
    if (hasChildren) {
        html += '<div class="hierarchy-children" style="display: none;">';
        node.children.forEach(child => {
            html += renderHierarchy(child, level + 1);
        });
        html += '</div>';
    }
    
    html += '</div></div>';
    return html;
}

function getNodeType(name, level) {
    if (name === 'Bangladesh') return 'Country';
    if (name.includes('Division')) return 'Division';
    if (name.includes('District')) return 'District';
    if (name.includes('Upazila') || name.includes('Upazilla')) return 'Upazilla';
    if (name.includes('Union')) return 'Union';
    if (name.includes('Village')) return 'Village';
    if (name.includes('City Corporation')) return 'City Corporation';
    if (name.includes('Ward')) return 'Ward';
    if (name.includes('Area')) return 'Area';
    return 'Unit';
}

function isUrbanArea(name, nodeType) {
    // Urban indicators
    if (name.includes('City Corporation')) return true;
    if (name.includes('Ward')) return true;
    if (name.includes('Area')) return true;
    
    // Rural indicators
    if (name.includes('Upazila') && !name.includes('City Corporation')) return false;
    if (name.includes('Union') && !name.includes('Ward')) return false;
    if (name.includes('Village')) return false;
    
    // Default based on type
    if (nodeType === 'City Corporation' || nodeType === 'Ward' || nodeType === 'Area') return true;
    if (nodeType === 'Upazilla' || nodeType === 'Union' || nodeType === 'Village') return false;
    
    // Division and District are neutral
    return null;
}

function toggleHierarchyNode(element) {
    const children = element.parentElement.parentElement.querySelector('.hierarchy-children');
    const toggle = element.querySelector('.hierarchy-toggle');
    
    if (children) {
        const isExpanded = children.style.display !== 'none';
        children.style.display = isExpanded ? 'none' : 'block';
        element.classList.toggle('expanded', !isExpanded);
        toggle.classList.toggle('expanded', !isExpanded);
    }
}

function addHierarchyNode(name) {
    showToast(`Add functionality for ${name} - Coming soon`, 'warning');
}

function editHierarchyNode(name) {
    showToast(`Edit functionality for ${name} - Coming soon`, 'warning');
}

function deleteHierarchyNode(name) {
    showToast(`Delete functionality for ${name} - Coming soon`, 'warning');
}

// Root Location Management
function saveRootLocation() {
    const rootInput = document.getElementById('root-location');
    const rootName = rootInput.value.trim();
    
    if (!rootName) {
        showToast('Please enter a root location name', 'error');
        return;
    }
    
    // Update the admin tree data
    adminTreeData.name = rootName;
    if (!adminTreeData.children) {
        adminTreeData.children = [];
    }
    
    console.log('Root location updated:', adminTreeData);
    
    // Reload the hierarchy
    loadAdminTree();
    
    showToast(`Root location "${rootName}" saved successfully`, 'success');
}

// Child Unit Creation
function addChildUnit(parentName, parentType) {
    const modalContent = `
        <div class="modal-header">
            <h3 class="modal-title">Add Administrative Unit Hierarchy</h3>
        </div>
        <div class="modal-body">
            <form id="add-child-unit-form">
                <!-- User Collected Parameters -->
                <div class="user-parameters-section">
                    <h4>Parameters</h4>
                    <div class="form-group">
                        <label for="child-unit-name">Administrative Unit Hierarchy *</label>
                        <input type="text" id="child-unit-name" class="form-control" required placeholder="Enter unit name">
                    </div>
                    <div class="form-group">
                        <label for="parent-unit-display">Parent Unit</label>
                        <input type="text" id="parent-unit-display" class="form-control" value="${parentName}" readonly>
                    </div>
                </div>
                
                <!-- Default Attributes Section (View Only) -->
                <div class="default-attributes-section">
                    <h4>Default Attributes</h4>
                    <div class="default-attributes-list">
                        <div class="default-attribute-item">
                            <label>Administrative Unit Hierarchy</label>
                            <div class="attribute-value">Auto-generated from user input</div>
                        </div>
                        <div class="default-attribute-item">
                            <label>Administrative Unit Type</label>
                            <div class="attribute-value">Auto-determined based on hierarchy level</div>
                        </div>
                        <div class="default-attribute-item">
                            <label>Parent Unit</label>
                            <div class="attribute-value">${parentName}</div>
                        </div>
                        <div class="default-attribute-item">
                            <label>Administrative Unit Code</label>
                            <div class="attribute-value">Auto-generated based on hierarchy</div>
                        </div>
                        <div class="default-attribute-item">
                            <label>Description</label>
                            <div class="attribute-value">Auto-generated from unit type and location</div>
                        </div>
                    </div>
                </div>
                
                <!-- Custom Attributes Section -->
                <div class="custom-attributes-section">
                    <div class="form-group">
                        <label>Custom Attributes</label>
                        <button type="button" class="btn btn-secondary" onclick="addCustomAttribute()">Add Parameter</button>
                    </div>
                    <div id="custom-attributes-list">
                        <!-- Custom attributes will be added here -->
                    </div>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="saveChildUnit('${parentName}')">Add Administrative Unit Hierarchy</button>
        </div>
    `;
    
    showModal(modalContent);
}

function getChildUnitTypes(parentType) {
    const typeMap = {
        'Country': ['Division'],
        'Division': ['District'],
        'District': ['Upazila', 'City Corporation'],
        'Upazila': ['Union'],
        'City Corporation': ['Ward'],
        'Union': ['Village'],
        'Ward': ['Area']
    };
    
    return typeMap[parentType] || [];
}

function addCustomAttribute() {
    const container = document.getElementById('custom-attributes-list');
    const attributeDiv = document.createElement('div');
    attributeDiv.className = 'custom-attribute-item';
    attributeDiv.innerHTML = `
        <div class="custom-attribute-form">
            <div class="form-group">
                <label>Parameter Name</label>
                <input type="text" class="form-control" placeholder="Enter parameter name">
            </div>
            <div class="form-group">
                <label>Parameter Type</label>
                <select class="form-control" onchange="toggleRadioOptions(this)">
                    <option value="Text">Text</option>
                    <option value="Number">Number</option>
                    <option value="Alphanumeric">Alphanumeric</option>
                    <option value="Radio">Radio</option>
                </select>
            </div>
            <div class="form-group">
                <label>Required</label>
                <select class="form-control">
                    <option value="Optional">Optional</option>
                    <option value="Mandatory">Mandatory</option>
                </select>
            </div>
            <div class="radio-options" style="display: none;">
                <label>Radio Options</label>
                <div class="radio-options-list">
                    <div class="radio-option-item">
                        <input type="text" class="form-control" placeholder="Option 1">
                        <button type="button" class="btn btn-secondary" onclick="removeRadioOption(this)">Remove</button>
                    </div>
                </div>
                <button type="button" class="btn btn-secondary" onclick="addRadioOption(this)">Add Option</button>
            </div>
            <button type="button" class="btn btn-error" onclick="removeCustomAttribute(this)">Remove</button>
        </div>
    `;
    container.appendChild(attributeDiv);
}

function toggleRadioOptions(select) {
    const radioOptions = select.closest('.custom-attribute-item').querySelector('.radio-options');
    radioOptions.style.display = select.value === 'Radio' ? 'block' : 'none';
}

function addRadioOption(button) {
    const container = button.previousElementSibling;
    const optionDiv = document.createElement('div');
    optionDiv.className = 'radio-option-item';
    optionDiv.innerHTML = `
        <input type="text" class="form-control" placeholder="Option ${container.children.length + 1}">
        <button type="button" class="btn btn-secondary" onclick="removeRadioOption(this)">Remove</button>
    `;
    container.appendChild(optionDiv);
}

function removeRadioOption(button) {
    button.parentElement.remove();
}

function removeCustomAttribute(button) {
    button.closest('.custom-attribute-item').remove();
}

function saveChildUnit(parentName) {
    const form = document.getElementById('add-child-unit-form');
    const unitName = document.getElementById('child-unit-name').value.trim();
    
    if (!unitName) {
        showToast('Please fill in the required field', 'error');
        return;
    }
    
    // Generate auto values for default attributes
    const unitCode = generateUnitCode(unitName, parentName);
    const description = generateDescription(unitName, parentName);
    
    // Create the child node
    const childNode = {
        name: unitName,
        code: unitCode,
        description: description,
        children: []
    };
    
    // Add to hierarchy
    const success = addChildToHierarchy(adminTreeData, parentName, childNode);
    
    if (success) {
        showToast(`Administrative Unit "${unitName}" added successfully under "${parentName}"`, 'success');
        closeModal();
        
        // Reload hierarchy to show new unit
        loadAdminTree();
    } else {
        showToast('Failed to add unit to hierarchy', 'error');
    }
}

function generateUnitCode(unitName, parentName) {
    // Generate a simple code based on unit name and parent
    const prefix = parentName.substring(0, 3).toUpperCase();
    const suffix = unitName.substring(0, 3).toUpperCase();
    return `${prefix}-${suffix}-${Date.now().toString().slice(-4)}`;
}

function generateDescription(unitName, parentName) {
    return `${unitName} under ${parentName} - Created on ${new Date().toLocaleDateString()}`;
}

function addChildToHierarchy(node, parentName, childNode) {
    if (node.name === parentName) {
        if (!node.children) {
            node.children = [];
        }
        node.children.push(childNode);
        console.log(`Added ${childNode.name} to ${parentName}`);
        return true;
    }
    
    if (node.children) {
        for (let child of node.children) {
            if (addChildToHierarchy(child, parentName, childNode)) {
                return true;
            }
        }
    }
    
    return false;
}

// File Upload Handler
function showFileUpload() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.xlsx';
    input.onchange = handleFileUpload;
    input.click();
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    
    if (!file) return;
    
    if (!file.name.endsWith('.xlsx')) {
        showModal(`
            <div class="modal-header">
                <h3 class="modal-title">Invalid File Format</h3>
            </div>
            <div class="modal-body">
                <p>Only .xlsx format is supported.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" onclick="closeModal()">OK</button>
            </div>
        `);
        return;
    }
    
    // Simulate file processing
    showToast('File uploaded successfully. Processing is in progress.', 'success');
    
    // Simulate processing completion
    setTimeout(() => {
        showModal(`
            <div class="modal-header">
                <h3 class="modal-title">Upload Successful</h3>
            </div>
            <div class="modal-body">
                <p>File uploaded successfully. Processing is in progress.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" onclick="closeModal(); refreshLocationTable()">OK</button>
            </div>
        `);
    }, 1000);
}

function refreshLocationTable() {
    // Simulate table refresh with new data
    showToast('Table updated with new data', 'success');
}

// Health Facility Management
function showAddFacility() {
    const modalContent = `
        <div class="modal-header">
            <h3 class="modal-title">Add New Facility</h3>
        </div>
        <div class="modal-body">
            <form id="add-facility-form" onsubmit="handleAddFacility(event)">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div class="form-group">
                        <label for="facility-name">Facility Name *</label>
                        <input type="text" id="facility-name" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="facility-type">Facility Type *</label>
                        <select id="facility-type" class="form-control" required>
                            <option value="">Select Type</option>
                            <option value="Community Clinic">Community Clinic</option>
                            <option value="Upazila Health Complex">Upazila Health Complex</option>
                            <option value="BRAC Maternity Center">BRAC Maternity Center</option>
                            <option value="Sub Center">Sub Center</option>
                            <option value="Administrative Office">Administrative Office</option>
                            <option value="Camp">Camp</option>
                            <option value="Pharmacy">Pharmacy</option>
                            <option value="Laboratory">Laboratory</option>
                            <option value="Dispensary">Dispensary</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="admin-unit-category">Administrative Unit Category *</label>
                        <select id="admin-unit-category" class="form-control" required onchange="updateAdminUnitType()">
                            <option value="">Select Category</option>
                            <option value="Urban">Urban</option>
                            <option value="Rural">Rural</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="admin-unit-type">Administrative Unit Type *</label>
                        <select id="admin-unit-type" class="form-control" required onchange="updateHierarchyDropdowns()">
                            <option value="">Select Type</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="division">Division *</label>
                        <select id="division" class="form-control" required onchange="updateDistrictDropdown()">
                            <option value="">Select Division</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chittagong">Chittagong</option>
                            <option value="Sylhet">Sylhet</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="district">District *</label>
                        <select id="district" class="form-control" required onchange="updateUpazilaDropdown()">
                            <option value="">Select District</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="upazila-city">Upazila / City Corporation *</label>
                        <select id="upazila-city" class="form-control" required onchange="updateUnionDropdown()">
                            <option value="">Select Upazila/City Corporation</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="union-ward">Union / Ward *</label>
                        <select id="union-ward" class="form-control" required onchange="updateVillageDropdown()">
                            <option value="">Select Union/Ward</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="village-area">Village / Area *</label>
                        <select id="village-area" class="form-control" required multiple>
                            <option value="">Select Village/Area</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="address">Address</label>
                        <input type="text" id="address" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="latitude">Latitude</label>
                        <input type="number" id="latitude" class="form-control" step="any">
                    </div>
                    <div class="form-group">
                        <label for="longitude">Longitude</label>
                        <input type="number" id="longitude" class="form-control" step="any">
                    </div>
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea id="description" class="form-control" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label>Create New User</label>
                    <div style="border: 1px solid #ddd; padding: 1rem; border-radius: 4px; background: #f9f9f9;">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                            <div class="form-group">
                                <label for="user-phone">Phone Number *</label>
                                <input type="tel" id="user-phone" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="user-username">Username *</label>
                                <input type="text" id="user-username" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label for="user-gender">Gender *</label>
                                <select id="user-gender" class="form-control" required>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="user-role">Role *</label>
                                <select id="user-role" class="form-control" required>
                                    <option value="">Select Role</option>
                                    <option value="Doctor">Doctor</option>
                                    <option value="Nurse">Nurse</option>
                                    <option value="Community Health Worker">Community Health Worker</option>
                                    <option value="Administrator">Administrator</option>
                                    <option value="Lab Technician">Lab Technician</option>
                                    <option value="Pharmacist">Pharmacist</option>
                                    <option value="SK">SK</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="user-reports-to">Reports To</label>
                                <input type="text" id="user-reports-to" class="form-control" placeholder="Health Facility & Supervisor">
                            </div>
                            <div class="form-group">
                                <label for="user-division">Division *</label>
                                <select id="user-division" class="form-control" required onchange="updateUserDistrict()">
                                    <option value="">Select Division</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Chittagong">Chittagong</option>
                                    <option value="Sylhet">Sylhet</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="user-district">District *</label>
                                <select id="user-district" class="form-control" required onchange="updateUserUpazila()">
                                    <option value="">Select District</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="user-upazila">Upazila / City Corporation *</label>
                                <select id="user-upazila" class="form-control" required onchange="updateUserUnion()">
                                    <option value="">Select Upazila/City Corporation</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="user-union">Union / Ward *</label>
                                <select id="user-union" class="form-control" required onchange="updateUserVillage()">
                                    <option value="">Select Union/Ward</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="user-village">Village / Area *</label>
                                <select id="user-village" class="form-control" required>
                                    <option value="">Select Village/Area</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="user-facility">Health Facility *</label>
                                <select id="user-facility" class="form-control" required>
                                    <option value="">Select Health Facility</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="user-admin-category">Administrative Unit Category *</label>
                                <select id="user-admin-category" class="form-control" required>
                                    <option value="">Select Category</option>
                                    <option value="Urban">Urban</option>
                                    <option value="Rural">Rural</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="user-admin-type">Administrative Unit Type *</label>
                                <select id="user-admin-type" class="form-control" required>
                                    <option value="">Select Type</option>
                                    <option value="Division">Division</option>
                                    <option value="District">District</option>
                                    <option value="Upazila">Upazila</option>
                                    <option value="City Corporation">City Corporation</option>
                                    <option value="Union">Union</option>
                                    <option value="Ward">Ward</option>
                                    <option value="Village">Village</option>
                                    <option value="Area">Area</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Permissions</label>
                            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem;">
                                <label style="display: flex; align-items: center; gap: 0.5rem;">
                                    <input type="checkbox" value="read"> Read
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem;">
                                    <input type="checkbox" value="write"> Write
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem;">
                                    <input type="checkbox" value="delete"> Delete
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem;">
                                    <input type="checkbox" value="admin"> Admin
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem;">
                                    <input type="checkbox" value="report"> Report
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem;">
                                    <input type="checkbox" value="export"> Export
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="handleAddFacility()">Add Facility</button>
        </div>
    `;
    
    showModal(modalContent);
}

// Health Facility Hierarchy Functions
function updateAdminUnitType() {
    const category = document.getElementById('admin-unit-category').value;
    const typeSelect = document.getElementById('admin-unit-type');
    
    typeSelect.innerHTML = '<option value="">Select Type</option>';
    
    if (category === 'Rural') {
        const ruralTypes = ['Division', 'District', 'Upazila', 'Union', 'Village'];
        ruralTypes.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            typeSelect.appendChild(option);
        });
    } else if (category === 'Urban') {
        const urbanTypes = ['Division', 'District', 'City Corporation', 'Ward', 'Area'];
        urbanTypes.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            typeSelect.appendChild(option);
        });
    }
}

function updateHierarchyDropdowns() {
    const type = document.getElementById('admin-unit-type').value;
    
    // Reset all hierarchy dropdowns
    document.getElementById('division').value = '';
    document.getElementById('district').innerHTML = '<option value="">Select District</option>';
    document.getElementById('upazila-city').innerHTML = '<option value="">Select Upazila/City Corporation</option>';
    document.getElementById('union-ward').innerHTML = '<option value="">Select Union/Ward</option>';
    document.getElementById('village-area').innerHTML = '<option value="">Select Village/Area</option>';
    
    // Show/hide appropriate dropdowns based on type
    const divisionGroup = document.getElementById('division').parentElement;
    const districtGroup = document.getElementById('district').parentElement;
    const upazilaGroup = document.getElementById('upazila-city').parentElement;
    const unionGroup = document.getElementById('union-ward').parentElement;
    const villageGroup = document.getElementById('village-area').parentElement;
    
    // Hide all first
    [divisionGroup, districtGroup, upazilaGroup, unionGroup, villageGroup].forEach(group => {
        group.style.display = 'none';
    });
    
    // Show relevant dropdowns based on hierarchy
    if (type === 'Division') {
        divisionGroup.style.display = 'block';
    } else if (type === 'District') {
        divisionGroup.style.display = 'block';
        districtGroup.style.display = 'block';
    } else if (type === 'Upazila' || type === 'City Corporation') {
        divisionGroup.style.display = 'block';
        districtGroup.style.display = 'block';
        upazilaGroup.style.display = 'block';
    } else if (type === 'Union' || type === 'Ward') {
        divisionGroup.style.display = 'block';
        districtGroup.style.display = 'block';
        upazilaGroup.style.display = 'block';
        unionGroup.style.display = 'block';
    } else if (type === 'Village' || type === 'Area') {
        divisionGroup.style.display = 'block';
        districtGroup.style.display = 'block';
        upazilaGroup.style.display = 'block';
        unionGroup.style.display = 'block';
        villageGroup.style.display = 'block';
    }
}

function updateDistrictDropdown() {
    const division = document.getElementById('division').value;
    const districtSelect = document.getElementById('district');
    
    districtSelect.innerHTML = '<option value="">Select District</option>';
    
    const districts = {
        'Dhaka': ['Dhaka', 'Gazipur', 'Narayanganj'],
        'Chittagong': ['Chittagong', 'Cox\'s Bazar'],
        'Sylhet': ['Sylhet', 'Moulvibazar']
    };
    
    if (districts[division]) {
        districts[division].forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

function updateUpazilaDropdown() {
    const district = document.getElementById('district').value;
    const upazilaSelect = document.getElementById('upazila-city');
    
    upazilaSelect.innerHTML = '<option value="">Select Upazila/City Corporation</option>';
    
    const upazilas = {
        'Dhaka': ['Dhanmondi Upazila', 'Savar Upazila', 'Dhaka City Corporation'],
        'Gazipur': ['Gazipur Upazila'],
        'Chittagong': ['Panchlaish Upazila', 'Chittagong City Corporation'],
        'Sylhet': ['Sylhet Sadar City Corporation']
    };
    
    if (upazilas[district]) {
        upazilas[district].forEach(upazila => {
            const option = document.createElement('option');
            option.value = upazila;
            option.textContent = upazila;
            upazilaSelect.appendChild(option);
        });
    }
}

function updateUnionDropdown() {
    const upazila = document.getElementById('upazila-city').value;
    const unionSelect = document.getElementById('union-ward');
    
    unionSelect.innerHTML = '<option value="">Select Union/Ward</option>';
    
    const unions = {
        'Dhanmondi Upazila': ['Dhanmondi Union', 'Gulshan Union'],
        'Savar Upazila': ['Savar Union', 'Aminbazar Union'],
        'Gazipur Upazila': ['Gazipur Union', 'Tongi Union'],
        'Panchlaish Upazila': ['Panchlaish Union', 'Kotwali Union'],
        'Dhaka City Corporation': ['Ward 1', 'Ward 2'],
        'Chittagong City Corporation': ['Ward 1'],
        'Sylhet Sadar City Corporation': ['Zindabar Union']
    };
    
    if (unions[upazila]) {
        unions[upazila].forEach(union => {
            const option = document.createElement('option');
            option.value = union;
            option.textContent = union;
            unionSelect.appendChild(option);
        });
    }
}

function updateVillageDropdown() {
    const union = document.getElementById('union-ward').value;
    const villageSelect = document.getElementById('village-area');
    
    villageSelect.innerHTML = '<option value="">Select Village/Area</option>';
    
    const villages = {
        'Dhanmondi Union': ['Dhanmondi 27', 'Dhanmondi 32'],
        'Gulshan Union': ['Gulshan 1', 'Gulshan 2'],
        'Savar Union': ['Savar Center'],
        'Aminbazar Union': ['Aminbazar Center'],
        'Gazipur Union': ['Gazipur Center'],
        'Tongi Union': ['Tongi Center'],
        'Panchlaish Union': ['Panchlaish Center'],
        'Kotwali Union': ['Kotwali Center'],
        'Ward 1': ['Area A', 'Area B'],
        'Ward 2': ['Area C', 'Area D'],
        'Zindabar Union': ['Zindabazar Ward']
    };
    
    if (villages[union]) {
        villages[union].forEach(village => {
            const option = document.createElement('option');
            option.value = village;
            option.textContent = village;
            villageSelect.appendChild(option);
        });
    }
}

// User Creation Hierarchy Functions
function updateUserDistrict() {
    const division = document.getElementById('user-division').value;
    const districtSelect = document.getElementById('user-district');
    
    districtSelect.innerHTML = '<option value="">Select District</option>';
    
    const districts = {
        'Dhaka': ['Dhaka', 'Gazipur', 'Narayanganj'],
        'Chittagong': ['Chittagong', 'Cox\'s Bazar'],
        'Sylhet': ['Sylhet', 'Moulvibazar']
    };
    
    if (districts[division]) {
        districts[division].forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

function updateUserUpazila() {
    const district = document.getElementById('user-district').value;
    const upazilaSelect = document.getElementById('user-upazila');
    
    upazilaSelect.innerHTML = '<option value="">Select Upazila/City Corporation</option>';
    
    const upazilas = {
        'Dhaka': ['Dhanmondi Upazila', 'Savar Upazila', 'Dhaka City Corporation'],
        'Gazipur': ['Gazipur Upazila'],
        'Chittagong': ['Panchlaish Upazila', 'Chittagong City Corporation'],
        'Sylhet': ['Sylhet Sadar City Corporation']
    };
    
    if (upazilas[district]) {
        upazilas[district].forEach(upazila => {
            const option = document.createElement('option');
            option.value = upazila;
            option.textContent = upazila;
            upazilaSelect.appendChild(option);
        });
    }
}

function updateUserUnion() {
    const upazila = document.getElementById('user-upazila').value;
    const unionSelect = document.getElementById('user-union');
    
    unionSelect.innerHTML = '<option value="">Select Union/Ward</option>';
    
    const unions = {
        'Dhanmondi Upazila': ['Dhanmondi Union', 'Gulshan Union'],
        'Savar Upazila': ['Savar Union', 'Aminbazar Union'],
        'Gazipur Upazila': ['Gazipur Union', 'Tongi Union'],
        'Panchlaish Upazila': ['Panchlaish Union', 'Kotwali Union'],
        'Dhaka City Corporation': ['Ward 1', 'Ward 2'],
        'Chittagong City Corporation': ['Ward 1'],
        'Sylhet Sadar City Corporation': ['Zindabar Union']
    };
    
    if (unions[upazila]) {
        unions[upazila].forEach(union => {
            const option = document.createElement('option');
            option.value = union;
            option.textContent = union;
            unionSelect.appendChild(option);
        });
    }
}

function updateUserVillage() {
    const union = document.getElementById('user-union').value;
    const villageSelect = document.getElementById('user-village');
    
    villageSelect.innerHTML = '<option value="">Select Village/Area</option>';
    
    const villages = {
        'Dhanmondi Union': ['Dhanmondi 27', 'Dhanmondi 32'],
        'Gulshan Union': ['Gulshan 1', 'Gulshan 2'],
        'Savar Union': ['Savar Center'],
        'Aminbazar Union': ['Aminbazar Center'],
        'Gazipur Union': ['Gazipur Center'],
        'Tongi Union': ['Tongi Center'],
        'Panchlaish Union': ['Panchlaish Center'],
        'Kotwali Union': ['Kotwali Center'],
        'Ward 1': ['Area A', 'Area B'],
        'Ward 2': ['Area C', 'Area D'],
        'Zindabar Union': ['Zindabazar Ward']
    };
    
    if (villages[union]) {
        villages[union].forEach(village => {
            const option = document.createElement('option');
            option.value = village;
            option.textContent = village;
            villageSelect.appendChild(option);
        });
    }
}

function handleAddFacility() {
    const form = document.getElementById('add-facility-form');
    
    // Validate required fields
    const facilityName = document.getElementById('facility-name').value;
    const facilityType = document.getElementById('facility-type').value;
    const adminCategory = document.getElementById('admin-unit-category').value;
    const adminType = document.getElementById('admin-unit-type').value;
    
    if (!facilityName || !facilityType || !adminCategory || !adminType) {
        showToast('Please fill in all required fields', 'error');
        return;
    }
    
    // Simulate successful facility creation
    closeModal();
    showToast('Facility added successfully', 'success');
    
    // Refresh facility table
    setTimeout(() => {
        showToast('Facility table updated', 'success');
    }, 500);
}

// User Management
function showAddUser() {
    const modalContent = `
        <div class="modal-header">
            <h3 class="modal-title">Add User</h3>
        </div>
        <div class="modal-body">
            <form id="add-user-form" onsubmit="handleAddUser(event)">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div class="form-group">
                        <label for="first-name">First Name *</label>
                        <input type="text" id="first-name" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="last-name">Last Name *</label>
                        <input type="text" id="last-name" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="user-email">Email ID *</label>
                        <input type="email" id="user-email" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="user-phone">Phone Number *</label>
                        <input type="tel" id="user-phone" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="username">Username *</label>
                        <input type="text" id="username" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="gender">Gender *</label>
                        <select id="gender" class="form-control" required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="role">Role *</label>
                        <select id="role" class="form-control" required onchange="updateRoleFields()">
                            <option value="">Select Role</option>
                            <option value="Doctor">Doctor</option>
                            <option value="Nurse">Nurse</option>
                            <option value="Community Health Worker">Community Health Worker</option>
                            <option value="Administrator">Administrator</option>
                            <option value="Lab Technician">Lab Technician</option>
                            <option value="Pharmacist">Pharmacist</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="reports-to">Reports To</label>
                        <select id="reports-to" class="form-control">
                            <option value="">Select Supervisor</option>
                            <option value="ahmed.rahman">Dr. Ahmed Rahman</option>
                            <option value="hasan.admin">Administrator - Hasan</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="health-facility">Health Facility</label>
                        <select id="health-facility" class="form-control">
                            <option value="">Select Facility</option>
                            <option value="Dhaka Medical College Hospital">Dhaka Medical College Hospital</option>
                            <option value="Community Clinic - Dhanmondi">Community Clinic - Dhanmondi</option>
                            <option value="Upazila Health Complex - Savar">Upazila Health Complex - Savar</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="admin-unit-user">Administrative Unit</label>
                        <select id="admin-unit-user" class="form-control">
                            <option value="">Select Unit</option>
                            <option value="Dhaka Division">Dhaka Division</option>
                            <option value="Chittagong Division">Chittagong Division</option>
                            <option value="Sylhet Division">Sylhet Division</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="location-user">Location</label>
                        <select id="location-user" class="form-control">
                            <option value="">Select Location</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label>Permissions</label>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                        <label><input type="checkbox" value="household"> Household Registration</label>
                        <label><input type="checkbox" value="followup"> Follow-up Tasks</label>
                        <label><input type="checkbox" value="reporting"> Reporting</label>
                        <label><input type="checkbox" value="dashboard"> Dashboard</label>
                        <label><input type="checkbox" value="user-management"> User Management</label>
                        <label><input type="checkbox" value="facility-management"> Facility Management</label>
                    </div>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="handleAddUser()">Add User</button>
        </div>
    `;
    
    showModal(modalContent);
}

function updateRoleFields() {
    const role = document.getElementById('role').value;
    const healthFacility = document.getElementById('health-facility');
    const adminUnit = document.getElementById('admin-unit-user');
    
    // Make fields required based on role
    if (role === 'Community Health Worker') {
        adminUnit.required = true;
        healthFacility.required = false;
    } else if (['Doctor', 'Nurse', 'Lab Technician', 'Pharmacist'].includes(role)) {
        healthFacility.required = true;
        adminUnit.required = false;
    } else {
        healthFacility.required = false;
        adminUnit.required = false;
    }
}

function handleAddUser() {
    const form = document.getElementById('add-user-form');
    
    // Simulate successful user creation
    closeModal();
    showToast('User added successfully', 'success');
    
    // Refresh user table
    setTimeout(() => {
        showToast('User table updated', 'success');
    }, 500);
}

// Table Population
function populateTables() {
    populateAdminUnitTable();
    populateFacilityTable();
    populateUserTable();
    populateRoleTable();
    loadAdminTree(); // Ensure hierarchy is loaded
}

function populateAdminUnitTable() {
    const tbody = document.getElementById('admin-unit-table-body');
    tbody.innerHTML = '';
    
    sampleData.locations.forEach(location => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${location.division}</td>
            <td>${location.district}</td>
            <td>${location.type}</td>
            <td>${location.cityCorp}</td>
            <td>${location.union}</td>
            <td>${location.village}</td>
            <td>${location.code}</td>
            <td>
                <button class="action-icon edit" onclick="editAdminUnit('${location.code}')" title="Edit Unit">✏</button>
                <button class="action-icon delete" onclick="deleteAdminUnit('${location.code}')" title="Delete Unit">🗑</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function populateFacilityTable() {
    populateFacilityTableWithData(sampleData.facilities);
}

function populateFacilityTableWithData(facilities) {
    const tbody = document.getElementById('facility-table-body');
    tbody.innerHTML = '';
    
    facilities.forEach(facility => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="#" onclick="showFacilityDetails(${facility.id})" style="color: var(--accent-500); text-decoration: none;">${facility.name}</a></td>
            <td>${facility.code}</td>
            <td>${facility.type}</td>
            <td>${facility.parentUnit}</td>
            <td>
                <button class="action-icon edit" onclick="editFacility(${facility.id})" title="Edit Facility">✏</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Update district filter based on division selection
function updateFacilityDistrictFilter() {
    const division = document.getElementById('facility-division-filter')?.value;
    const districtSelect = document.getElementById('facility-district-filter');
    
    if (!districtSelect) return;
    
    districtSelect.innerHTML = '<option value="">Filter by District</option>';
    
    if (division) {
        const districts = [...new Set(sampleData.facilities
            .filter(f => f.division === division)
            .map(f => f.district))];
        
        districts.forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}

function populateUserTable() {
    populateUserTableWithData(sampleData.users);
}

function populateUserTableWithData(users) {
    const tbody = document.getElementById('user-table-body');
    tbody.innerHTML = '';
    
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.phone}</td>
            <td>${user.role}</td>
            <td>${user.facility}</td>
            <td>${user.gender}</td>
            <td>
                <button class="action-icon edit" onclick="editUser('${user.username}')" title="Edit User">✏</button>
                <button class="action-icon change-password" onclick="changePassword('${user.username}')" title="Change Password">🔒</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Role Management Functions
function populateRoleTable() {
    populateRoleTableWithData(sampleData.roles);
}

function populateRoleTableWithData(roles) {
    const tbody = document.getElementById('role-table-body');
    tbody.innerHTML = '';
    
    roles.forEach(role => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${role.name}</td>
            <td>${role.type}</td>
            <td>${role.description}</td>
            <td>${role.permissions.join(', ')}</td>
            <td>
                <button class="action-icon edit" onclick="editRole(${role.id})" title="Edit Role">✏</button>
                <button class="action-icon delete" onclick="deleteRole(${role.id})" title="Delete Role">🗑</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function showAddRole() {
    const modalContent = `
        <div class="modal-header">
            <h3 class="modal-title">Add New Role</h3>
        </div>
        <div class="modal-body">
            <form id="add-role-form">
                <div class="form-group">
                    <label for="role-name">Role Name *</label>
                    <input type="text" id="role-name" class="form-control" required placeholder="Enter role name">
                </div>
                <div class="form-group">
                    <label for="role-description">Description *</label>
                    <textarea id="role-description" class="form-control" required placeholder="Enter role description" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label for="role-type">Role Type</label>
                    <select id="role-type" class="form-control">
                        <option value="">Select Type (Optional)</option>
                        <option value="Facility">Facility</option>
                        <option value="Administrative Unit">Administrative Unit</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Permissions</label>
                    <div class="permissions-grid">
                        <label class="permission-item">
                            <input type="checkbox" value="Reporting"> Reporting
                        </label>
                        <label class="permission-item">
                            <input type="checkbox" value="Administration"> Administration
                        </label>
                        <label class="permission-item">
                            <input type="checkbox" value="Household Registration"> Household Registration
                        </label>
                        <label class="permission-item">
                            <input type="checkbox" value="Member Registration"> Member Registration
                        </label>
                        <label class="permission-item">
                            <input type="checkbox" value="RM&CH"> RM&CH
                        </label>
                        <label class="permission-item">
                            <input type="checkbox" value="ELCO"> ELCO
                        </label>
                        <label class="permission-item">
                            <input type="checkbox" value="Dashboard"> Dashboard
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="saveRole()">Add Role</button>
        </div>
    `;
    
    showModal(modalContent);
}

function saveRole() {
    const form = document.getElementById('add-role-form');
    const roleName = document.getElementById('role-name').value.trim();
    const description = document.getElementById('role-description').value.trim();
    const roleType = document.getElementById('role-type').value;
    
    if (!roleName || !description) {
        showToast('Please fill in all required fields', 'error');
        return;
    }
    
    // Get selected permissions
    const permissionCheckboxes = form.querySelectorAll('input[type="checkbox"]:checked');
    const permissions = Array.from(permissionCheckboxes).map(cb => cb.value);
    
    // Create new role
    const newRole = {
        id: Date.now(), // Simple ID generation
        name: roleName,
        type: roleType || 'Not Specified',
        description: description,
        permissions: permissions
    };
    
    // Add to roles array
    sampleData.roles.unshift(newRole); // Add to beginning
    
    // Update table
    populateRoleTable();
    
    showToast('Role added successfully', 'success');
    closeModal();
}

function editRole(roleId) {
    const role = sampleData.roles.find(r => r.id === roleId);
    if (!role) return;
    
    const modalContent = `
        <div class="modal-header">
            <h3 class="modal-title">Edit Role</h3>
        </div>
        <div class="modal-body">
            <form id="edit-role-form">
                <div class="form-group">
                    <label for="edit-role-name">Role Name *</label>
                    <input type="text" id="edit-role-name" class="form-control" required value="${role.name}">
                </div>
                <div class="form-group">
                    <label for="edit-role-description">Description *</label>
                    <textarea id="edit-role-description" class="form-control" required rows="3">${role.description}</textarea>
                </div>
                <div class="form-group">
                    <label for="edit-role-type">Role Type</label>
                    <select id="edit-role-type" class="form-control">
                        <option value="">Select Type (Optional)</option>
                        <option value="Facility" ${role.type === 'Facility' ? 'selected' : ''}>Facility</option>
                        <option value="Administrative Unit" ${role.type === 'Administrative Unit' ? 'selected' : ''}>Administrative Unit</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Permissions</label>
                    <div class="permissions-grid">
                        <label class="permission-item">
                            <input type="checkbox" value="Reporting" ${role.permissions.includes('Reporting') ? 'checked' : ''}> Reporting
                        </label>
                        <label class="permission-item">
                            <input type="checkbox" value="Administration" ${role.permissions.includes('Administration') ? 'checked' : ''}> Administration
                        </label>
                        <label class="permission-item">
                            <input type="checkbox" value="Household Registration" ${role.permissions.includes('Household Registration') ? 'checked' : ''}> Household Registration
                        </label>
                        <label class="permission-item">
                            <input type="checkbox" value="Member Registration" ${role.permissions.includes('Member Registration') ? 'checked' : ''}> Member Registration
                        </label>
                        <label class="permission-item">
                            <input type="checkbox" value="RM&CH" ${role.permissions.includes('RM&CH') ? 'checked' : ''}> RM&CH
                        </label>
                        <label class="permission-item">
                            <input type="checkbox" value="ELCO" ${role.permissions.includes('ELCO') ? 'checked' : ''}> ELCO
                        </label>
                        <label class="permission-item">
                            <input type="checkbox" value="Dashboard" ${role.permissions.includes('Dashboard') ? 'checked' : ''}> Dashboard
                        </label>
                    </div>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="updateRole(${roleId})">Save Changes</button>
        </div>
    `;
    
    showModal(modalContent);
}

function updateRole(roleId) {
    const form = document.getElementById('edit-role-form');
    const roleName = document.getElementById('edit-role-name').value.trim();
    const description = document.getElementById('edit-role-description').value.trim();
    const roleType = document.getElementById('edit-role-type').value;
    
    if (!roleName || !description) {
        showToast('Please fill in all required fields', 'error');
        return;
    }
    
    // Get selected permissions
    const permissionCheckboxes = form.querySelectorAll('input[type="checkbox"]:checked');
    const permissions = Array.from(permissionCheckboxes).map(cb => cb.value);
    
    // Find and update role
    const roleIndex = sampleData.roles.findIndex(r => r.id === roleId);
    if (roleIndex !== -1) {
        sampleData.roles[roleIndex] = {
            ...sampleData.roles[roleIndex],
            name: roleName,
            type: roleType || 'Not Specified',
            description: description,
            permissions: permissions
        };
        
        // Update table
        populateRoleTable();
        
        showToast('Role updated successfully', 'success');
        closeModal();
    }
}

function deleteRole(roleId) {
    const role = sampleData.roles.find(r => r.id === roleId);
    if (!role) return;
    
    const modalContent = `
        <div class="modal-header">
            <h3 class="modal-title">Delete Role</h3>
        </div>
        <div class="modal-body">
            <p>Are you sure you want to delete the role "<strong>${role.name}</strong>"?</p>
            <p>This action cannot be undone.</p>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            <button class="btn btn-error" onclick="confirmDeleteRole(${roleId})">Delete Role</button>
        </div>
    `;
    
    showModal(modalContent);
}

function confirmDeleteRole(roleId) {
    const roleIndex = sampleData.roles.findIndex(r => r.id === roleId);
    if (roleIndex !== -1) {
        sampleData.roles.splice(roleIndex, 1);
        populateRoleTable();
        showToast('Role deleted successfully', 'success');
        closeModal();
    }
}

function searchRoles() {
    const searchTerm = document.getElementById('role-search').value.toLowerCase();
    const filteredRoles = sampleData.roles.filter(role => 
        role.name.toLowerCase().includes(searchTerm)
    );
    populateRoleTableWithData(filteredRoles);
}

// Facility Details
function showFacilityDetails(facilityId) {
    const facility = sampleData.facilities.find(f => f.id === facilityId);
    if (!facility) return;
    
    const modalContent = `
        <div class="modal-header">
            <h3 class="modal-title">${facility.name}</h3>
        </div>
        <div class="modal-body">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem;">
                <div><strong>Facility Name:</strong> ${facility.name}</div>
                <div><strong>Facility Code:</strong> ${facility.code}</div>
                <div><strong>Facility Type:</strong> ${facility.type}</div>
                <div><strong>Parent Unit:</strong> ${facility.parentUnit}</div>
                <div><strong>Address:</strong> 123 Healthcare Street, Medical District</div>
                <div><strong>Phone:</strong> +880-1712345678</div>
                <div><strong>Email:</strong> ${facility.name.toLowerCase().replace(/\s+/g, '.')}@smartcare.gov.bd</div>
                <div><strong>Capacity:</strong> 50 patients</div>
                <div><strong>Description:</strong> Primary healthcare facility serving the community</div>
                <div><strong>Coordinates:</strong> 23.8103°N, 90.4125°E</div>
                <div><strong>Facility ID:</strong> FAC-${facility.id.toString().padStart(3, '0')}</div>
            </div>
            
            <div style="margin-top: 2rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h4>Assigned Users</h4>
                    <button class="btn btn-primary" onclick="addUserToFacility()">Add User</button>
                </div>
                <div class="table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Email ID</th>
                                <th>Phone Number</th>
                                <th>Username</th>
                                <th>Gender</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Dr. Ahmed Rahman</td>
                                <td>Doctor</td>
                                <td>ahmed@smartcare.gov.bd</td>
                                <td>+880-1712345678</td>
                                <td>ahmed.rahman</td>
                                <td>Male</td>
                                <td>
                                    <button class="action-icon edit" title="Edit User">✏</button>
                                    <button class="action-icon delete" title="Delete User">🗑</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal()">Close</button>
            <button class="btn btn-primary" onclick="editFacility(${facilityId})">Edit Facility</button>
        </div>
    `;
    
    showModal(modalContent);
}

function editFacility(facilityId) {
    showToast('Edit facility feature coming soon', 'warning');
}

function addUserToFacility() {
    showToast('Add user to facility feature coming soon', 'warning');
}

function editUser(username) {
    showToast('Edit user feature coming soon', 'warning');
}

function changePassword(username) {
    const modalContent = `
        <div class="modal-header">
            <h3 class="modal-title">Change Password - ${username}</h3>
        </div>
        <div class="modal-body">
            <form id="change-password-form">
                <div class="form-group">
                    <label for="new-password-change">New Password *</label>
                    <input type="password" id="new-password-change" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="confirm-password-change">Confirm Password *</label>
                    <input type="password" id="confirm-password-change" class="form-control" required>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="handleChangePassword()">Update Password</button>
        </div>
    `;
    
    showModal(modalContent);
}

function handleChangePassword() {
    const newPassword = document.getElementById('new-password-change').value;
    const confirmPassword = document.getElementById('confirm-password-change').value;
    
    if (newPassword !== confirmPassword) {
        showToast('Passwords do not match', 'error');
        return;
    }
    
    closeModal();
    showToast('Password updated successfully', 'success');
}

// Administrative Unit Management
function showAddAdminUnit() {
    const modalContent = `
        <div class="modal-header">
            <h3 class="modal-title">Add Administrative Unit</h3>
        </div>
        <div class="modal-body">
            <form id="add-admin-unit-form" onsubmit="handleAddAdminUnit(event)">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div class="form-group">
                        <label for="unit-name">Administrative Unit Hierarchy *</label>
                        <input type="text" id="unit-name" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="unit-category">Administrative Unit Category *</label>
                        <select id="unit-category" class="form-control" required onchange="updateUnitTypeOptions()">
                            <option value="">Select Category</option>
                            <option value="Rural">Rural</option>
                            <option value="Urban">Urban</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="unit-type">Administrative Unit Type *</label>
                        <select id="unit-type" class="form-control" required onchange="updateParentUnitOptions()">
                            <option value="">Select Type</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="parent-unit">Parent Unit *</label>
                        <select id="parent-unit" class="form-control" required>
                            <option value="">Select Parent Unit</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="unit-code">Administrative Unit Code *</label>
                        <input type="text" id="unit-code" class="form-control" required>
                    </div>
                </div>
                <div class="form-group">
                    <label for="unit-description">Description</label>
                    <textarea id="unit-description" class="form-control" rows="3"></textarea>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="handleAddAdminUnit()">Add Unit</button>
        </div>
    `;
    
    showModal(modalContent);
}

function updateUnitTypeOptions() {
    const category = document.getElementById('unit-category').value;
    const typeSelect = document.getElementById('unit-type');
    
    typeSelect.innerHTML = '<option value="">Select Type</option>';
    
    if (category === 'Rural') {
        const ruralTypes = ['Division', 'District', 'Upazila', 'Union', 'Village'];
        ruralTypes.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            typeSelect.appendChild(option);
        });
    } else if (category === 'Urban') {
        const urbanTypes = ['Division', 'District', 'City Corporation', 'Ward', 'Area'];
        urbanTypes.forEach(type => {
            const option = document.createElement('option');
            option.value = type;
            option.textContent = type;
            typeSelect.appendChild(option);
        });
    }
}

function updateParentUnitOptions() {
    const type = document.getElementById('unit-type').value;
    const parentSelect = document.getElementById('parent-unit');
    
    parentSelect.innerHTML = '<option value="">Select Parent Unit</option>';
    
    // Define parent relationships
    const parentMap = {
        'Division': ['Bangladesh'],
        'District': ['Dhaka Division', 'Chittagong Division', 'Sylhet Division'],
        'Upazila': ['Dhaka District', 'Chittagong District'],
        'City Corporation': ['Dhaka District', 'Chittagong District'],
        'Union': ['Dohar Upazila', 'Savar Upazila'],
        'Ward': ['Dhaka City Corporation', 'Chittagong City Corporation'],
        'Village': ['Dhanmondi Union', 'Gulshan Union'],
        'Area': ['Ward 1', 'Ward 2']
    };
    
    if (parentMap[type]) {
        parentMap[type].forEach(parent => {
            const option = document.createElement('option');
            option.value = parent;
            option.textContent = parent;
            parentSelect.appendChild(option);
        });
    }
}

function handleAddAdminUnit() {
    const form = document.getElementById('add-admin-unit-form');
    
    // Simulate successful unit creation
    closeModal();
    showToast('Administrative unit added successfully', 'success');
    
    // Refresh admin unit table
    setTimeout(() => {
        showToast('Admin unit table updated', 'success');
    }, 500);
}

function editAdminUnit(code) {
    showToast(`Edit functionality for ${code} - Coming soon`, 'warning');
}

function deleteAdminUnit(code) {
    showToast(`Delete functionality for ${code} - Coming soon`, 'warning');
}

// Upload Administrative Unit
function showUploadAdminUnit() {
    const modalContent = `
        <div class="modal-header">
            <h3 class="modal-title">Upload Administrative Units</h3>
        </div>
        <div class="modal-body">
            <p>Upload an Excel file (.xlsx) containing administrative unit data.</p>
            <p><strong>Required columns:</strong> Division, District, Administrative Unit Category, Administrative Unit Type, City Corporation, Upazala, Union, Ward, Village, Area, Administrative Unit Code</p>
            <div class="form-group">
                <label for="admin-unit-file">Select Excel File</label>
                <input type="file" id="admin-unit-file" class="form-control" accept=".xlsx" onchange="handleAdminUnitUpload(this)">
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
            <button class="btn btn-primary" onclick="processAdminUnitUpload()">Upload File</button>
        </div>
    `;
    
    showModal(modalContent);
}

function handleAdminUnitUpload(input) {
    const file = input.files[0];
    if (file && !file.name.endsWith('.xlsx')) {
        showToast('Only .xlsx files are allowed', 'error');
        input.value = '';
        return;
    }
}

function processAdminUnitUpload() {
    const fileInput = document.getElementById('admin-unit-file');
    const file = fileInput.files[0];
    
    if (!file) {
        showToast('Please select a file', 'error');
        return;
    }
    
    // Simulate file processing
    showToast('Processing file...', 'warning');
    
    setTimeout(() => {
        closeModal();
        showToast('Administrative Unit added successfully', 'success');
        
        // Refresh the table
        setTimeout(() => {
            showToast('Admin unit table updated', 'success');
        }, 500);
    }, 2000);
}

// Pagination
function previousPage() {
    showToast('Previous page', 'warning');
}

function nextPage() {
    showToast('Next page', 'warning');
}

// Filter Functions
function initializeFilters() {
    // Health Facility Filters
    const facilityDivisionFilter = document.getElementById('facility-division-filter');
    const facilityDistrictFilter = document.getElementById('facility-district-filter');
    const facilityCategoryFilter = document.getElementById('facility-category-filter');
    const facilityTypeFilter = document.getElementById('facility-type-filter');
    const facilitySearch = document.getElementById('facility-search');
    
    if (facilityDivisionFilter) {
        facilityDivisionFilter.addEventListener('change', function() {
            updateFacilityDistrictFilter();
            filterFacilities();
        });
        facilityDistrictFilter.addEventListener('change', filterFacilities);
        facilityCategoryFilter.addEventListener('change', filterFacilities);
        facilityTypeFilter.addEventListener('change', filterFacilities);
        facilitySearch.addEventListener('input', filterFacilities);
    }
    
    // User Management Filters
    const userDistrictFilter = document.getElementById('user-district-filter');
    const userUpazilaFilter = document.getElementById('user-upazila-filter');
    const userUnionFilter = document.getElementById('user-union-filter');
    const userVillageFilter = document.getElementById('user-village-filter');
    const facilityFilter = document.getElementById('facility-filter');
    const roleFilter = document.getElementById('role-filter');
    const userSearch = document.getElementById('user-search');
    
    if (userDistrictFilter) {
        userDistrictFilter.addEventListener('change', filterUsers);
        userUpazilaFilter.addEventListener('change', filterUsers);
        userUnionFilter.addEventListener('change', filterUsers);
        userVillageFilter.addEventListener('change', filterUsers);
        facilityFilter.addEventListener('change', filterUsers);
        roleFilter.addEventListener('change', filterUsers);
        userSearch.addEventListener('input', filterUsers);
    }
    
    // Administrative Unit Filters
    const adminDivisionFilter = document.getElementById('admin-division-filter');
    const adminDistrictFilter = document.getElementById('admin-district-filter');
    const adminCategoryFilter = document.getElementById('admin-category-filter');
    const adminTypeFilter = document.getElementById('admin-type-filter');
    const adminSearch = document.getElementById('admin-search');
    
    if (adminDivisionFilter) {
        adminDivisionFilter.addEventListener('change', filterAdminUnits);
        adminDistrictFilter.addEventListener('change', filterAdminUnits);
        adminCategoryFilter.addEventListener('change', filterAdminUnits);
        adminTypeFilter.addEventListener('change', filterAdminUnits);
        adminSearch.addEventListener('input', filterAdminUnits);
    }
}

function filterFacilities() {
    const division = document.getElementById('facility-division-filter')?.value || '';
    const district = document.getElementById('facility-district-filter')?.value || '';
    const category = document.getElementById('facility-category-filter')?.value || '';
    const type = document.getElementById('facility-type-filter')?.value || '';
    const search = document.getElementById('facility-search')?.value.toLowerCase() || '';
    
    // Filter the data first
    let filteredFacilities = sampleData.facilities.filter(facility => {
        let show = true;
        
        // Search filter
        if (search && !facility.name.toLowerCase().includes(search)) {
            show = false;
        }
        
        // Type filter
        if (type && facility.type !== type) {
            show = false;
        }
        
        // Division filter
        if (division && facility.division !== division) {
            show = false;
        }
        
        // District filter
        if (district && facility.district !== district) {
            show = false;
        }
        
        return show;
    });
    
    // Update the table
    populateFacilityTableWithData(filteredFacilities);
}

function filterUsers() {
    const district = document.getElementById('user-district-filter')?.value || '';
    const upazila = document.getElementById('user-upazila-filter')?.value || '';
    const union = document.getElementById('user-union-filter')?.value || '';
    const village = document.getElementById('user-village-filter')?.value || '';
    const facility = document.getElementById('facility-filter')?.value || '';
    const role = document.getElementById('role-filter')?.value || '';
    const search = document.getElementById('user-search')?.value.toLowerCase() || '';
    
    // Filter the data first
    let filteredUsers = sampleData.users.filter(user => {
        let show = true;
        
        // Search filter
        if (search && !user.name.toLowerCase().includes(search) && 
            !user.username.toLowerCase().includes(search) && 
            !user.phone.includes(search)) {
            show = false;
        }
        
        // Role filter
        if (role && user.role !== role) {
            show = false;
        }
        
        // Facility filter
        if (facility && user.facility !== facility) {
            show = false;
        }
        
        // District filter
        if (district && user.district !== district) {
            show = false;
        }
        
        // Upazila filter
        if (upazila && user.upazila !== upazila) {
            show = false;
        }
        
        // Union filter
        if (union && user.union !== union) {
            show = false;
        }
        
        // Village filter
        if (village && user.village !== village) {
            show = false;
        }
        
        return show;
    });
    
    // Update the table
    populateUserTableWithData(filteredUsers);
}

function filterAdminUnits() {
    const division = document.getElementById('admin-division-filter')?.value || '';
    const district = document.getElementById('admin-district-filter')?.value || '';
    const category = document.getElementById('admin-category-filter')?.value || '';
    const type = document.getElementById('admin-type-filter')?.value || '';
    const search = document.getElementById('admin-search')?.value.toLowerCase() || '';
    
    const tbody = document.getElementById('admin-unit-table-body');
    if (!tbody) return;
    
    const rows = tbody.querySelectorAll('tr');
    
    rows.forEach(row => {
        const name = row.cells[0]?.textContent.toLowerCase() || '';
        const unitType = row.cells[2]?.textContent || '';
        const category = row.cells[3]?.textContent || '';
        
        let show = true;
        
        // Search filter
        if (search && !name.includes(search)) {
            show = false;
        }
        
        // Type filter
        if (type && unitType !== type) {
            show = false;
        }
        
        // Category filter
        if (category && category !== category) {
            show = false;
        }
        
        row.style.display = show ? '' : 'none';
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the splash screen
    showScreen('splash-screen');
    
    // Initialize sub-navigation visibility
    const navItemWithSub = document.querySelector('.nav-item-with-sub');
    if (navItemWithSub) {
        navItemWithSub.classList.add('active');
    }
    
    // Initialize filters
    initializeFilters();
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
    
    // Add click outside to close modals
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    });
});
