var authenticated = true;
var nextURL = authenticated ? (
    alert('You will redirect to admin area'),
    '/admin'
) : (
        alert('Access denied'),
        '/403'
    );
// redirect to nextURL here
console.log(nextURL); // '/admin'

var speed = 90;
var message = speed >= 120 ? 'Too Fast' : (speed >= 80 ? 'Fast' : 'OK');
console.log(message);