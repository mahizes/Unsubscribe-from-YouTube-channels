# YouTube Unsubscribe Script

This script automates the process of unsubscribing from channels on YouTube. It's designed to work with the English version of YouTube. Please use this script responsibly and ensure you comply with YouTube's Terms of Service.

## Instructions

Follow these steps carefully to use the script:

1. **Navigate to YouTube Subscribed Channels Page**:
   Open your web browser and go to [YouTube Subscribed Channels](https://www.youtube.com/feed/channels).

2. **Ensure YouTube is in English**:
   Verify that YouTube is set to English, as the script is designed to work with the English UI.

   ![YouTube Language Settings](https://github.com/mahizes/Unsubscribe-from-YouTube-channels/assets/120032248/4b6a6ea0-fdde-4b68-8e21-058fa2102cb6)

3. **Load All Subscriptions**:
   Scroll down to the bottom of the page to ensure all subscribed channels are loaded. YouTube dynamically loads content, so you may need to scroll several times until you see all channels.

4. **Open Developer Tools**:
   Press `F12` on your keyboard, or right-click on the page and select `Inspect` to open your browser's developer tools.

5. **Access the Console Tab**:
   In the developer tools window, locate and click on the `Console` tab. This is where you will execute the script.

   ![Google Chrome Console Tab](https://github.com/mahizes/Unsubscribe-from-YouTube-channels/assets/120032248/de1ffaff-b50a-45bb-9961-32f8f5e3bf47)

   ![Mozilla Firefox Console Tab](https://github.com/mahizes/Unsubscribe-from-YouTube-channels/assets/120032248/b0d8b7d8-0393-4e28-b0a6-3d8169b323db)

6. **Copy and Paste the Script**:
   Copy the unsubscribe script provided below. Then, click inside the console command line, paste the script, and press `Enter` to run it.

   ![Chrome Command Line Script Pasted](https://github.com/mahizes/Unsubscribe-from-YouTube-channels/assets/120032248/3003d596-019d-4dab-ac15-b85b6a0bc1f7)

8. **Wait for Completion**:
   After executing the script, wait for the process to complete. The script will automatically unsubscribe from channels, and a message will be logged to the console once all channels have been unsubscribed from.

### Important Notes

- This script is intended for use with the **English version of YouTube**. If you're using YouTube in another language, the script may not work as expected due to potential differences in UI elements and aria-labels.

### Script

```javascript
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
```
