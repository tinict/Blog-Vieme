function BA() {
    return `
        <h1 class="ba">BA</h1>
    `;
}

function TestHTML() {
    return `
        <div class="t">
            <h1>Hello</h1>
            ${BA()}
        </div>
    `
}

const test = document.querySelector('.Test');
test.innerHTML = TestHTML();
const test1 = document.querySelector('.t');
console.log(test1);