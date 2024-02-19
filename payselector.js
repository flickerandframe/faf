document.addEventListener("DOMContentLoaded", function() {
    // Function to get query parameter value by name
    function getQueryParam(name) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(window.location.href);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Get the 'amount' query parameter value
    var total = getQueryParam('total');
    var downpayment = getQueryParam('downpayment');
    var id = getQueryParam('invoiceid');
    // Update the content of the div with id 'amount' and the Venmo link
    if(total !== null && id !== null && downpayment !== null) {
        console.log("yes")
        // Update the Venmo link (This example assumes you have a specific URL format for Venmo payments)
        // Note: As of my last update, Venmo does not officially support direct payment links via URL parameters for web integration.
        // You will need to replace this with your actual payment URL or mechanism.
        var fullAmount = document.getElementById('full');
        fullAmount.href = "pay?amount=" + total + "&invoiceid=" + id + "&payment=full"; // Placeholder URL
        var downpayAmount = document.getElementById('downpay');
        downpayAmount.href = "pay?amount=" + downpayment + "&invoiceid=" + id + "&payment=downpayment"; // Placeholder URL

    } else {
        window.location.href = './'
    }
});
