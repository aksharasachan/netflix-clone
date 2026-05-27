// Instructs engine execution parameters to wait securely for native browser thread structural builds
document.addEventListener("DOMContentLoaded", () => {
    
    // Select all interactive question buttons on the page
    const faqQuestions = document.querySelectorAll(".faq-question");
    // Select the main hero landing submission form block
    const emailForm = document.querySelector(".email-form");

    // Loop through every individual accordion item question button discovered
    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            
            // Navigate directly to the wrapping parent node container element ('.faq-item')
            const currentItem = question.parentElement;
            
            // Check if the current clicked card context block already carries the target '.active' indicator
            const isOpen = currentItem.classList.contains("active");

            // Operational Loop: Resets all active instances across alternative containers (Closes standard open frames)
            document.querySelectorAll(".faq-item").forEach(item => {
                item.classList.remove("active");
            });

            // Toggle Engine: If the specific selector node state was closed, switch it active open
            if (!isOpen) {
                currentItem.classList.add("active");
            }
        });
    });

    // Landing UI email submission confirmation interface logic
    if (emailForm) {
        emailForm.addEventListener("submit", (event) => {
            // Nullifies default form reload routing behavior to maintain application processing view state
            event.preventDefault();
            
            // Parse targeted values present across standard structured parameters
            const emailInput = emailForm.querySelector("input[type='email']");
            const userEmail = emailInput.value;

            // Generate an elegant viewport notification validation prompt
            alert(`Registration simulation active! Welcome information packet routing to: ${userEmail}`);
            
            // Clear entry logs to refresh visual interaction elements
            emailInput.value = "";
        });
    }
});