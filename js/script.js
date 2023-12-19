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
    sections[0].style.display = 'block';
    for(let i = 1; i < listedItems.length; i++) {
        sections[i].style.display = 'none';
    }
};

const currentShowing = () => {
    let showingRN;
    sections.forEach(element => {
        if(window.getComputedStyle(element).display === 'block') {
            showingRN = element;
        }
    })
    return showingRN;
}

for(let a = 0; a < listedItems.length; a++) {
    listedItems[a].addEventListener('click', function() {
        let displayingRN = currentShowing();
        let indexholder = sections.indexOf(displayingRN);
         if(indexholder === a) {
            alert('you are viewing the current sections...');
        } else {
            sections[a].style.display = 'block';
            displayingRN.style.display = 'none'
        }
    });
}