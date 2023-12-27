const breadcrumbListedItem = ['ABM', 'SKI', 'JOE', 'EDU', 'HOB', 'PRO', 'CER'];
const domSections = ['AM', 'SK', 'JE', 'ED', 'HO', 'PR', 'CT'];
const squares = ['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6', 'item-7'];
const bothSides = ['toLeft', 'toRight'];
const presentation = ['one', 'two', 'three', 'four'];
const listedItems = [];
const sections = [];
const inSection = [];
const leftAndRight = [];
const slides = [];

breadcrumbListedItem.forEach(button => {
    listedItems.push(document.getElementById(button));
});

domSections.forEach(dSection => {
    sections.push(document.getElementById(dSection));
});

squares.forEach(square => {
    inSection.push(document.getElementById(square));
});

bothSides.forEach(side => {
    leftAndRight.push(document.getElementById(side));
});

presentation.forEach(slide => {
    slides.push(document.getElementById(slide));
});

const defaultSettings = () => {
    sections[0].style.display = 'block';
    inSection[0].style.backgroundColor = 'rgb(0, 0, 0)';
    listedItems[0].style.color = 'white';
    for(let i = 1; i < listedItems.length; i++) {
        sections[i].style.display = 'none';
    }

    for(let yz = 1; yz < slides.length; yz++) {
        slides[yz].style.display = 'none';
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
};

const listedItemActive = () => {
    let activeRN;
    listedItems.forEach(item => {
        if(window.getComputedStyle(item).color === 'rgb(255, 255, 255)') {
            activeRN = item;
        }
    })
    return activeRN;
}

const currentInSection = () => {
    let turnOn;
    inSection.forEach(square => {
        if(window.getComputedStyle(square).backgroundColor === 'rgb(0, 0, 0)') {
            turnOn = square;
        }
    });
    return turnOn;
};

const currentSlide = () => {
    let slideRN; 
    slides.forEach(slide => {
        if(window.getComputedStyle(slide).display === 'grid' || window.getComputedStyle(slide).display === 'flex') {
            slideRN = slide;
        }
    });
    return slideRN;
}

for(let a = 0; a < listedItems.length; a++) {
    listedItems[a].addEventListener('click', function() {
        let displayingRN = currentShowing();
        let turnRN = currentInSection();
        let itemTurned = listedItemActive();
        let index = sections.indexOf(displayingRN);
         if(index === a) {
            alert('you are viewing the current section...');
        } else {
            sections[a].style.display = 'block';
            displayingRN.style.display = 'none';
            inSection[a].style.backgroundColor = 'rgb(0, 0, 0)';
            turnRN.style.backgroundColor = 'white';
            listedItems[a].style.color = 'white';
            itemTurned.style.color = 'rgb(0, 0, 0)';
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
        let itemTurned = listedItemActive();
        if(turnIndex === z) {
            alert('you are viewing the current section...');
        } else {
            inSection[z].style.backgroundColor = 'rgb(0, 0, 0)';
            turnRN.style.backgroundColor = 'white';
            sections[z].style.display = 'block';
            displayingRN.style.display = 'none';
            listedItems[z].style.color = 'white';
            itemTurned.style.color = 'rgb(0, 0, 0)';
        }
    });
}

for(let u = 0; u < leftAndRight.length; u++) {
    leftAndRight[u].addEventListener('mouseover', function() {
        leftAndRight[u].style.opacity = '1';
        leftAndRight[u].style.border = '1px solid rgba(0, 0, 0, 1)';
        leftAndRight[u].style.cursor = 'pointer';
    });

    leftAndRight[u].addEventListener('mouseout', function() {
        leftAndRight[u].style.opacity = '0.1';;
        leftAndRight[u].style.border = '1px solid rgba(0, 0, 0, 0.1)';
    });

    leftAndRight[u].addEventListener('click', function() {
        let slideActive = currentSlide();
        let slideIndex = slides.indexOf(slideActive);

        if(slideIndex === 4) {
            console.log(slideIndex)
        } else if(u === 0) {
            slides[slideIndex - 1].style.display = 'grid';
            slideActive.style.display = 'none';
        } else if(u === 1 && slideIndex < 4) {
            slides[slideIndex + 1].style.display = 'grid';
            slideActive.style.display = 'none';
        }
    })
}

document.body.onload = defaultSettings;