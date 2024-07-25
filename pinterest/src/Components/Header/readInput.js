// readInput.js
export function readInput() {
    try {
        
        const inputField = document.querySelector('.search-input');
        
        if (!inputField) {
            throw new Error('Input field not found');
        }
    
        const inputValue = inputField.value;
    
        console.log('Input value:', inputValue);
        
        return inputValue;
        
    } catch (error) {
        console.error('Error reading input field:', error);
        return null;
    }
}