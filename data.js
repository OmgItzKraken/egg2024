

async function loadJsonData(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Network response was not ok. Status code: ' + response.status);
    }

    return await response.json();
}

function toDataSet(json) {
    let result = [];

    for (let i = 0; i < json.length; i++) {
        const quantity = json[i].quantity || 1;
        for (let j = 0; j < quantity; j++) {
            result.push(json[i])
        }
    }

    return result
}

const dataSets = {
    items4: [
        'egg 2024',
        'egg 2024',
    ],
    items2: [
        'egg 2024',
        'egg 2024',
    ],
    items3: [
        'egg 2024',
        'egg 2024',
    ],
};

loadJsonData('wheel-items-1.json')
    .then(json => {
        dataSets.items4 = toDataSet(json);
    })
    .catch(error => {
        console.error(error);
    })
;

loadJsonData('wheel-items-2.json')
    .then(json => {
        dataSets.items2 = toDataSet(json);
    })
    .catch(error => {
        console.error(error);
    })
;

loadJsonData('wheel-items-3.json')
    .then(json => {
        dataSets.items3 = toDataSet(json);
    })
    .catch(error => {
        console.error(error);
    })
;


