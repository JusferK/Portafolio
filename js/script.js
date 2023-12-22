const breadcrumbListedItem = ['ABM', 'SKI', 'JOE', 'EDU', 'HOB', 'PRO', 'CER'];
const domSections = ['AM', 'SK', 'JE', 'ED', 'HO', 'PR', 'CT'];
const squares = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6', 'item-7'];
const listedItems = [];
const sections = [];
const inSection = [];

breadcrumbListedItem.forEach(button => {
    listedItems.push(document.getElementById(button));
});

domSections.forEach(dSection => {
    sections.push(document.getElementById(dSection));
});

squares.forEach(square => {
    inSection.push(document.getElementById(square));
});

const defaultSettings = () => {
    sections[0].style.display = 'block';
    inSection[0].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    for(let i = 1; i < listedItems.length; i++) {
        sections[i].style.display = 'none';
    }
};

document.body.onload = defaultSettings;

const currentShowing = () => {
    let showingRN;
    sections.forEach(element => {
        if(window.getComputedStyle(element).display === 'block') {
            showingRN = element;
        }
    });
    return showingRN;
}

const currentInSection = () => {
    let turnOn;
    inSection.forEach(square => {
        if(window.getComputedStyle(square).backgroundColor === 'rgba(255, 255, 255, 0.5)') {
            turnOn = square;
        }
    });
    return turnOn;
}

for(let a = 0; a < listedItems.length; a++) {
    listedItems[a].addEventListener('click', function() {
        let displayingRN = currentShowing();
        let turnRN = currentInSection();
        let index = sections.indexOf(displayingRN);
         if(index === a) {
            alert('you are viewing the current section...');
        } else {
            sections[a].style.display = 'block';
            displayingRN.style.display = 'none';
            inSection[a].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            inSection[a].style.width = '15px';
            inSection[a].style.height = '15px';
            turnRN.style.backgroundColor = 'black';
            turnRN.style.width = '10px';
            turnRN.style.height = '10px';
        }
    });
}

inSection.forEach(square => {
    square.addEventListener('mouseover', function() {
        square.style.width = '20px';
        square.style.height = '20px';
        square.style.transition = 'ease-in .2s';
        square.style.cursor = 'pointer';
    });

    square.addEventListener('mouseout', function() {
        square.style.width = '10px';
        square.style.height = '10px';
        square.style.transition = 'ease-out .2s';
    })
});

for(let z = 0; z < inSection.length; z++) {
    inSection[z].addEventListener('click', function() {
        let displayingRN = currentShowing();
        let turnRN = currentInSection();
        let turnIndex = inSection.indexOf(turnRN);
        if(turnIndex === z) {
            alert('you are viewing the current section...');
        } else {
            inSection[z].style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            turnRN.style.backgroundColor = 'black';
            turnRN.style.width = '10px';
            turnRN.style.height = '10px';
            sections[z].style.display = 'block';
            displayingRN.style.display = 'none';
        }
    });
}
