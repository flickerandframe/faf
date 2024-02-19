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
    var amount = getQueryParam('amount');
    var id = getQueryParam('invoiceid');
    var paymentType = getQueryParam('payment');
    // Update the content of the div with id 'amount' and the Venmo link
    if(amount !== null && id !== null && paymentType !== null) {

        
        // Update the Venmo link (This example assumes you have a specific URL format for Venmo payments)
        // Note: As of my last update, Venmo does not officially support direct payment links via URL parameters for web integration.
        // You will need to replace this with your actual payment URL or mechanism.
        var venmoLink = document.getElementById('venmoLink');
        venmoLink.href = "https://account.venmo.com/payment-link?amount="+ amount +"&note=Photoshoot&recipients=flickerandframe&txn=pay"; // Placeholder URL

        var paragraph = document.getElementById('paragraphUpdate');
        if (paragraph) {
            if(paymentType == 'downpayment') {
                paragraph.innerHTML = "We currently do not accept direct card payments.<br>We do cash and checks, but make sure you email us before hand.<br>" +
                    "Invoice ID: " + id + "<br>" +
                    "<br>It appears you are paying your downpayment (25%)!<br>You must pay this before or the day of the shoot.<br>" +
                    "<br>If you have any questions, please reach out to us!<br>" +
                    "Amount Due: $" + amount + "<br>"
            } else if (paymentType == 'full'){
                paragraph.innerHTML = "We currently do not accept direct card payments.<br>We do cash and checks, but make sure you email us before hand.<br>" +
                    "Invoice ID: " + id + "<br>" +
                    "<br>It appears you are paying your full amount!<br>You must pay this before or the day of the shoot, or you can use the link in your email to pay the downpayment.<br>" +
                    "<br>If you have any questions, please reach out to us!<br>" +
                    "Amount Due: $" + amount + "<br>"
            } else if (paymentType == 'downpaid'){
                paragraph.innerHTML = "We currently do not accept direct card payments.<br>We do cash and checks, but make sure you email us before hand.<br>" +
                    "Invoice ID: " + id + "<br>" +
                    "<br>It appears you have paid your downpayment!<br>You must pay the additional 75% in a 30 day timeframe after the photoshoot.<br>" +
                    "<br>If you have any questions, please reach out to us!<br>" +
                    "Amount Due: $" + amount + "<br>"
            } else {
                window.location.href = './'
            }
        }


    } else {
        window.location.href = './'
    }
});
