let userStyleTag = null;

function initializeWorkspace(){
 
    
const workspaceContainer = document.querySelector(".interactive-workspace");
if (!workspaceContainer) {
    return;
}


const cssInput = workspaceContainer.querySelector("#user-css-input");


const checkButton = workspaceContainer.querySelector("#check-code-btn");

    if (!checkButton) {
        return;
    }



if (!userStyleTag) {
    userStyleTag = document.createElement("style");
    document.head.appendChild(userStyleTag);
}

// 2. Listen for typing in the text area (Live Preview)
cssInput.addEventListener('input', function() {
    userStyleTag.innerHTML = cssInput.value;
});


// 3. Listen for a click on the "Check Code" button
checkButton.addEventListener('click', function() {

    const feedbackBox = workspaceContainer.querySelector('#feedback-message');
    const previewButton = workspaceContainer.querySelector('.preview-box .signup-button');

    feedbackBox.classList.remove('hidden');

    // Read what the browser ACTUALLY rendered, not what the user typed
    const computedStyle = getComputedStyle(previewButton);

    const hasCorrectBg = computedStyle.backgroundColor === 'rgb(180, 90, 8)';
    const hasCorrectColor = computedStyle.color === 'rgb(255, 255, 255)';
    const hasCorrectFont = computedStyle.fontFamily.toLowerCase().includes('georgia');

    if (hasCorrectColor && hasCorrectBg && hasCorrectFont) {
        feedbackBox.innerHTML = "Correct! You perfectly styled the button.";
        feedbackBox.className = "feedback-box success-msg";
    } else {
        feedbackBox.innerHTML = "Not quite. Make sure the button has Amber background (#22466c), White text, and a georgia font.";
        feedbackBox.className = "feedback-box error-msg";
    }
});
}

