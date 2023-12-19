const breadcrumbListedItem = ['ABM', 'SKI', 'JOE', 'EDU', 'HOB', 'PRO', 'CER'];
const domSections = ['AM', 'SK', 'JE', 'ED', 'HO', 'PR', 'CT'];
const listedItems = [];
const sections = []

breadcrumbListedItem.forEach(button => {
    listedItems.push(document.getElementById(button));
});

domSections.forEach(dSection => {
    sections.push(document.getElementById(dSection));
});

const defaultSettings = () => {
    sections[0].hidden = false;
    for(let i = 1; i < listedItems.length; i++) {
        sections[i].hidden = true;
    }
}

const currentShowing = () => {
    if(sections[0].hidden === true) {
        console.log(sections[0]);
    }
}



// let showingRightNow = currentShowing();


/* listedItems[1].addEventListener('click', function() {
    console.log(showingRightNow);
    showingRightNow.hidden = true;
    sections[1].hidden = false;
}); */
