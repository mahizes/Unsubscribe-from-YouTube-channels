// JavaScript code to unsubscribe from YouTube channels

(async () => {
    // Define a delay function to pause execution for a specified duration (in milliseconds).
    const delay = (duration) => new Promise(resolve => setTimeout(resolve, duration));

    // Define an asynchronous function to unsubscribe from all channels.
    const unsubscribeFromAll = async () => {
        // Select all unsubscribe buttons by their aria-label attribute, which includes "Unsubscribe from".
        const unsubscribeButtons = document.querySelectorAll('ytd-subscribe-button-renderer [aria-label*="Unsubscribe from"]');
        
        // Iterate through each unsubscribe button found.
        for (let button of unsubscribeButtons) {
            button.click(); // Simulate a click on the unsubscribe button to open the confirmation dialog.
            await delay(500); // Wait for 500 milliseconds to ensure the modal dialog appears.
            
            // Use the detailed structure to accurately target the "Unsubscribe" confirmation button within the dialog.
            const confirmButton = document.querySelector('yt-button-renderer#confirm-button[dialog-confirm] button');
            if (confirmButton) {
                confirmButton.click(); // Click the confirmation button to finalize the unsubscription.
            } else {
                // If the confirmation button is not found, log an error message for debugging.
                console.log('Confirmation button not found');
            }
            await delay(750); // Wait for 750 milliseconds before proceeding to the next unsubscribe action to avoid rate limiting.
        }
    };

    await unsubscribeFromAll(); // Invoke the unsubscribe function to start the process.
    console.log('Unsubscribed from all channels.'); // Log a message once all unsubscribe actions are completed.
})();

