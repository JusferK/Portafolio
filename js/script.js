const breadcrumbListedItem = ['ABM', 'SKI', 'JOE', 'EDU', 'HOB', 'PRO', 'CER'];
const domSections = ['AM', 'SK', 'JE', 'ED', 'HO', 'PR', 'CT'];
const listedItems = [];
<<<<<<< HEAD
const sections = []
=======
const sections = [];
>>>>>>> 6ce54d86cd0294c6a24c79e83e57d1a4e990d923

breadcrumbListedItem.forEach(button => {
    listedItems.push(document.getElementById(button));
});

domSections.forEach(dSection => {
    sections.push(document.getElementById(dSection));
});

const defaultSettings = () => {
<<<<<<< HEAD
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

currentShowing();

// let showingRightNow = currentShowing();



/* listedItems[1].addEventListener('click', function() {
    console.log(showingRightNow);
    showingRightNow.hidden = true;
    sections[1].hidden = false;
}); */
=======
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
    });
    return showingRN;
}

for(let a = 0; a < listedItems.length; a++) {
    listedItems[a].addEventListener('click', function() {
        let displayingRN = currentShowing();
        let index = sections.indexOf(displayingRN);
         if(index === a) {
            alert('you are viewing the current section...');
        } else {
            sections[a].style.display = 'block';
            displayingRN.style.display = 'none';
        }
    });
}
>>>>>>> 6ce54d86cd0294c6a24c79e83e57d1a4e990d923
