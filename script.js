// function toggleFriendStatus(button) {
//     const cardBody = button.closest('.card-body');
//     const identity = cardBody.querySelector('.status');
//     const isStranger = identity.textContent === 'A Stranger';

//     identity.textContent = isStranger ? 'Friend' : 'A Stranger';
//     identity.classList.toggle("text-success", isStranger);
//     identity.classList.toggle("text-danger", !isStranger);

//     button.textContent = isStranger ? 'Remove Friend' : 'Add Friend';
//     button.classList.toggle("bg-secondary", isStranger);
//     button.classList.toggle("bg-primary", !isStranger);
// }

function toggleFriendStatus(button) {
    // Find the card body that contains the clicked button
    const cardBody = button.closest('.card-body');

    if (cardBody) {
        // Find the status element within the card body
        const identity = cardBody.querySelector('.status');

        if (identity) {
            const isStranger = identity.textContent === 'A Stranger';

            // Update the status text and class
            identity.textContent = isStranger ? 'Friend' : 'A Stranger';
            identity.classList.toggle("text-success", isStranger);
            identity.classList.toggle("text-danger", !isStranger);

            // Update the button text and class
            button.textContent = isStranger ? 'Remove Friend' : 'Add Friend';
            button.classList.toggle("bg-secondary", isStranger);
            button.classList.toggle("bg-primary", !isStranger);
        } else {
            console.error('Status element not found');
        }
    } else {
        console.error('Card body not found');
    }
}
