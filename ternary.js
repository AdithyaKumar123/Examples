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