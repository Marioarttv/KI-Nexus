// JavaScript interop functions for KI.nexus

window.scrollToElement = function(elementId) {
    // Remove the hash if present
    const id = elementId.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
        // Scroll to element with smooth animation
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}; 