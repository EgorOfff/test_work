const checkInput = () => {
    const url = "https://www.google.com/"

    const markComponent = (component, isValid) => {
        const borderColor = isValid ? "green" : "red";
        const background = isValid ? "rgba(0, 252, 63, 0.1)" : "rgba(255, 5, 5, 0.1)";

        component.style.borderColor = borderColor;
        component.style.background = background;
    }

    const fields = [
        {
            component: document.getElementById('email'),
            regexp: /^[A-z0-9._-]+@[A-z0-9.-]+\.[A-z]{2,4}$/
        },
        {
            component:  document.getElementById('fullName'),
            regexp: /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/
        },
        {
            component: document.getElementById('message'),
            regexp: /^(?!\s*$).+/
        }
    ];

    const testReg = (component, regexp) => regexp.test(component.value);
    fields.forEach(({component, regexp}) => {
        markComponent(component, testReg(component, regexp))
    })
    const isFormValid = fields.every(({ component, regexp }) => testReg(component, regexp))

    if (isFormValid) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send({
            fullName: fullName.value,
            email: email.value,
            message: message.value
        });
        successShow();
    }
}

successShow = () => {
    const popup = document.getElementById('success');
    popup.classList.toggle('active');
    setTimeout(() => { popup.classList.toggle('active'); }, 2000)
}