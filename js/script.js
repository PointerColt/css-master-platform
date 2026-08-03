const sidebarLinks = document.querySelectorAll('.topic-item');  // Grab all the clickable topics in the sidebar

const contentArea = document.getElementById('dynamic-content-area');  // Grab the empty container where we will inject the HTML


// Function to fetch and load the separate HTML files
async function loadContent(filePath) {
    try {
        const response = await fetch(filePath);
        const html = await response.text();
        
        // Inject the HTML into our empty container on the main screen
        contentArea.innerHTML = html;

        initializeFeatures();
        initializeTopicNavigation(filePath)
        
        // Scroll back to the top
        document.querySelector('.main-content').scrollTo({ top: 0 })
        
    } catch (error) {
        contentArea.innerHTML = '<h2>Error loading content. Check file path.</h2>';
        console.error('Error fetching file:', error);
    }
}


function initializeFeatures() {
    initializeExercise();
    initializeWorkspace();
}


function initializeTopicNavigation(currentFilePath) {
    const linksArray = Array.from(sidebarLinks);
    const currentIndex = linksArray.findIndex(link => link.getAttribute('data-file') === currentFilePath);

    const prevBtn = contentArea.querySelector('#prev-topic-btn');
    const nextBtn = contentArea.querySelector('#next-topic-btn');

    if (!prevBtn || !nextBtn) {
        return;
    }

    const prevLink = linksArray[currentIndex - 1];
    const nextLink = linksArray[currentIndex + 1];

    prevBtn.style.visibility = prevLink ? 'visible' : 'hidden';
    nextBtn.style.visibility = nextLink ? 'visible' : 'hidden';

    prevBtn.addEventListener('click', () => prevLink.click());
    nextBtn.addEventListener('click', () => nextLink.click());
}




// Attach a click event to every sidebar link
sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
        
        // Update Sidebar UI styling
        sidebarLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // Find the file path from the clicked link (e.g., "topics/topic-1-2.html")
        const fileToLoad = this.getAttribute('data-file');
        
        // Run the fetch function
        loadContent(fileToLoad);
    });
});



// Load the very first topic automatically when the website first opens
loadContent('topics/topic-1-1.html');


