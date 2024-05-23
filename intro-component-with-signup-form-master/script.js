const form = document.getElementById("form");

form.addEventListener('submit', e => {
    e.preventDefault();

    const firstName = form['firstname'].value;
    const lastName = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if(firstName === '') {
        addErrorTo('firstname', 'First Name is required');
    } else {
        removeErrorFrom('firstname');
    }

    if(lastName === '') {
        addErrorTo('lastname', 'Last Name is required');
    } else {
        removeErrorFrom('lastname');
    }

    if(email === '') {
        addErrorTo('email', 'Email is required');
    } else if (!isValid(email)) {
        addErrorTo('email', 'Email is not valid');
    } else {
        removeErrorFrom('email');
    }

    if(password == '') {
        addErrorTo('password', 'Password is required');
    } else {
        removeErrorFrom('password');
    }
});

function addErrorTo(field, message) {
    const inpSpace = form[field].parentNode;
    inpSpace.classList.add('error');

    const small = inpSpace.querySelector('small') ;
    small.innerText = message;
}

function removeErrorFrom(field) {
    const inpSpace = form[field].parentNode;
    inpSpace.classList.remove('error');
}


function isValid(email) {
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    return re.test(string(email).toLowerCase());
}