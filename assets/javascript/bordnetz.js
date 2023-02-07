async function init(){
    let JSON = './assets/json/bordnetz.json';
    let responseFromJSON = await fetch(JSON);
    let loadedData = await responseFromJSON.json();
    renderList(loadedData);
}

function renderList(loadedData){ 
    let list = document.getElementById('bordList');
    for (let i = 0; i < loadedData.length; i++){
        const callsign = loadedData[i]['callsign'];
        const description = loadedData[i]['description'];
        const qth = loadedData[i]['qth'];
        const sysop = loadedData[i]['sysop'];
        const type = loadedData[i]['type'];
        generateMemberTable(list, callsign,description,qth, sysop, type);
    }    
} 

function generateMemberTable(list,callsign,description,qth, sysop, type){
    list.innerHTML += `<tr>
                            <td>${callsign.toUpperCase()}</td>
                            <td>${type.toUpperCase()}</td>
                            <td>${description}</td>
                            <td>${qth.toUpperCase()}</td>
                            <td>${sysop.toUpperCase()}</td>
                        </tr>`;
} 