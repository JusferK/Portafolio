const breadcrumbListedItem = ['ABM', 'SKI', 'JOE', 'EDU', 'HOB', 'PRO', 'CER'];
const domSections = ['AM', 'SK', 'JE', 'ED', 'HO', 'PR', 'CT'];
const bothSides = ['toLeft', 'toRight'];
const bothSides_2 = ['toLeft-2', 'toRight-2'];
const presentation = ['one', 'two', 'three', 'four'];
const jobsSection = ['CSR', 'DEV'];
const listedItems = [];
const sections = [];
const leftAndRight = [];
const leftAndRight_2 = []
const slides = [];
const jobs = [];
const slideIndicator = document.getElementById('slideIn');
const pageIndicatorS = document.getElementById('pageIndicator');

breadcrumbListedItem.forEach(button => {
    listedItems.push(document.getElementById(button));
});

domSections.forEach(dSection => {
    sections.push(document.getElementById(dSection));
});

bothSides.forEach(side => {
    leftAndRight.push(document.getElementById(side));
});

presentation.forEach(slide => {
    slides.push(document.getElementById(slide));
});

jobsSection.forEach(job => {
    jobs.push(document.getElementById(job));
});

bothSides_2.forEach(side => {
    leftAndRight_2.push(document.getElementById(side));
});

const defaultSettings = () => {

    sections[0].style.display = 'block';
    listedItems[0].style.color = 'white';
    slideIndicator.innerHTML = `${1} / 4`;
    jobs[0].style.display = 'grid';
    jobs[1].style.display = 'none'
    pageIndicatorS.innerHTML = `${1} / 2`;

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

const currentSlide = () => {
    let slideRN; 
    slides.forEach(slide => {
        if(window.getComputedStyle(slide).display === 'grid') {
            slideRN = slide;
        }
    });
    return slideRN;
}

const currentJobSection = () => {
    let slideRN;
    jobs.forEach(slide => {
        if(window.getComputedStyle(slide).display === 'grid') {
            slideRN = slide;
        }
    });
    return slideRN;
}

for(let a = 0; a < listedItems.length; a++) {
    listedItems[a].addEventListener('click', function() {
        let displayingRN = currentShowing();
        let itemTurned = listedItemActive();
        let index = sections.indexOf(displayingRN);
         if(index === a) {
            alert('you are viewing the current section...');
        } else {
            sections[a].style.display = 'block';
            displayingRN.style.display = 'none';
            listedItems[a].style.color = 'white';
            itemTurned.style.color = 'rgb(128, 128, 128)';
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

        if(u === 0 && slideIndex > 0) {
            slides[slideIndex - 1].style.display = 'grid';
            slideActive.style.display = 'none';
            slideIndicator.innerHTML = `${(slideIndex + 1) - 1} / 4`;
        } else if(u === 1 && slideIndex < 3) {
            slides[slideIndex + 1].style.display = 'grid';
            slideActive.style.display = 'none';
            slideIndicator.innerHTML = `${(slideIndex + 1) + 1} / 4`;
        }
    });
}

for(let e = 0; e < leftAndRight_2.length; e++) {
    leftAndRight_2[e].addEventListener('mouseover', function() {
        leftAndRight_2[e].style.opacity = '1';
        leftAndRight_2[e].style.border = '1px solid rgba(0, 0, 0, 1)';
        leftAndRight_2[e].style.cursor = 'pointer';
    });

    leftAndRight_2[e].addEventListener('mouseout', function() {
        leftAndRight_2[e].style.opacity = '0.1';;
        leftAndRight_2[e].style.border = '1px solid rgba(0, 0, 0, 0.1)';
    });

    leftAndRight_2[e].addEventListener('click', function() {
        let slideActive = currentJobSection();
        let slideIndex = jobs.indexOf(slideActive);

        if(e === 0 && slideIndex > 0) {
            jobs[slideIndex - 1].style.display = 'grid';
            slideActive.style.display = 'none';
            pageIndicatorS.innerHTML = `${(slideIndex + 1) - 1} / 2`;
        } else if(e === 1 && slideIndex < 1) {
            jobs[slideIndex + 1].style.display = 'grid';
            slideActive.style.display = 'none';
            pageIndicatorS.innerHTML = `${(slideIndex + 1) + 1} / 2`;
        }
    });
}

document.body.onload = defaultSettings;