async function includeHTML(link) {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html");
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text(); 
        } 
    }
}

function openPageMenu(){
    document.body.classList.add('body-overflow-hidden');
    document.getElementById('navigation').style.display = 'flex';
    console.log('Menü geöffnet');
}

function closePageMenu(){
    document.body.classList.remove('body-overflow-hidden');
    document.getElementById('navigation').style.display = 'none';
    console.log('Menü geschlossen');
}