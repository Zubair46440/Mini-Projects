// JavaScript for Bus Management System

// Function to handle bus tracking
function trackBus() {
    const busId = document.getElementById('busIdInput').value;
    if (busId === '') {
        alert('Please enter a Bus ID.');
        return;
    }

    // Example of tracking functionality
    alert('Tracking bus with ID: ' + busId);
    // Here you would integrate with a real map API to show the bus location
}

// Function to handle Bus route management
function searchRoute() {
    // Get the input values
    var startingPoint = document.getElementById('starting-point').value;
    var endingPoint = document.getElementById('ending-point').value;

    // Display an alert popup with the entered route information
    alert("Searching route from " + startingPoint + " to " + endingPoint + ".");

    // You can add more JavaScript here to handle the actual search or other functionalities
}

// Function to handle ticket booking form submission
document.getElementById('ticketForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const route = document.getElementById('route').value;
    const seats = document.getElementById('seats').value;
    const busNumber = document.getElementById('busNumber').value;

    if (name === '' || email === '' || route === '' || seats === '' || busNumber === '') {
        alert('Please fill in all fields.');
        return;
    }

    alert(`Ticket booked successfully for ${name} on bus number ${busNumber}.`);
    // Here you would send the form data to your server
    document.getElementById('ticketForm').reset();
});

// Function to handle ticket cancellation
function cancelTicket() {
    const busNumber = document.getElementById('busNumber').value;
    if (busNumber === '') {
        alert('Please enter the bus number to cancel the ticket.');
        return;
    }

    alert(`Ticket for bus number ${busNumber} has been canceled.`);
    // Here you would integrate with your backend system to cancel the ticket
}

// Function to handle report form submission
document.getElementById('reportForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const issueType = document.getElementById('issueType').value;
    const passenger_name = document.getElementById('passenger_name').value;
    const route_no = document.getElementById('route_no').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;

    if (issueType === '' || passenger_name === '' || route_no === '' || email === '' || description === '') {
        alert('Please fill in all fields.');
        return;
    }

    alert(`Issue reported successfully: ${issueType} - ${description}`);
    // Here you would send the report data to your server
    document.getElementById('reportForm').reset();
});

// Setting option 

document.getElementById('userSettingsBtn').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>User Detail's</h2>
        <p>Manage your account settings here. Update your profile information, change your password, and adjust your privacy settings.</p>
    `;
});

document.getElementById('rewardsBtn').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Rewards</h2>
        <p>View and manage your rewards here. Check your reward balance, redeem points, and view your reward history.</p>
    `;
});

document.getElementById('referEarnBtn').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Refer & Earn</h2>
        <p>Refer friends to earn rewards. Share your referral link, track your referrals, and see your earnings here.</p>
    `;
});

document.getElementById('offersbtn').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Offer's</h2>
        <p>Cheak a latest offer on daily,monthly and yearly pass at low price.</p>
    `;
});

document.getElementById('walletBtn').addEventListener('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Wallet</h2>
        <p>Cheak And Add money on your Wallet for easy and safe travelling.</p>
    `;
});


// // JavaScript for toggling content

document.addEventListener('DOMContentLoaded', function () {
    const toggleLinks = document.querySelectorAll('.nav-links a[data-toggle]');
    const homeContent = document.getElementById('toggleContent0'); // The content for the "Home" section

    // Initially display the Home section content
    homeContent.style.display = 'block';

    toggleLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-toggle');
            const targetContent = document.getElementById(targetId);

            // Hide all other toggle contents
            document.querySelectorAll('.toggle-content').forEach(content => {
                content.style.display = 'none';
            });

            // Show the clicked content
            targetContent.style.display = 'block';
        });
    });
});

