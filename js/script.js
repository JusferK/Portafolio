const breadcrumbListedItem = ['ABM', 'SKI', 'JOE', 'EDU', 'HOB', 'PRO', 'CER'];
const domSections = ['AM', 'SK', 'JE', 'ED', 'HO', 'PR', 'CT'];
const bothSides = ['toLeft', 'toRight'];
const bothSides_2 = ['toLeft-2', 'toRight-2'];
const presentation = ['one', 'two', 'three', 'four'];
const jobsSection = ['CSR', 'DEV'];
const proyectsSection = ['sub-box', 'sub-box-2', 'sub-box-3', 'sub-box-4'];
const certificationsSections = ['certification-1', 'certification-2'];
const leftAndRightAgain = ['toRight-3', 'toLeft-3'];
const leftAndRightAgain_2 = ['toRight-4', 'toLeft-4'];
const listedItems = [];
const sections = [];
const leftAndRight = [];
const leftAndRight_2 = [];
const leftAndRight_3 = [];
const leftAndRight_4 = [];
const slides = [];
const jobs = [];
const proyects = [];
const certifications = [];
const slideIndicator = document.getElementById('slideIn');
const pageIndicatorS = document.getElementById('pageIndicator');
const proyectIndicator = document.getElementById('proyectIndicator');
const certificationIndicator = document.getElementById('certificationIndicator');
const mailCopyClipboard = document.getElementById('maillogo');

mailCopyClipboard.addEventListener('click', function() {
    navigator.clipboard.writeText('justinearriagam@gmail.com');
    alert('My email has been copy on your clipboard!');
});

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

proyectsSection.forEach(proyect => {
    proyects.push(document.getElementById(proyect));
});

leftAndRightAgain.forEach(side => {
    leftAndRight_3.push(document.getElementById(side));
})

certificationsSections.forEach(certification => {
    certifications.push(document.getElementById(certification));
});

leftAndRightAgain_2.forEach(side => {
    leftAndRight_4.push(document.getElementById(side));
});

const defaultSettings = () => {

    sections[0].style.display = 'block';
    listedItems[0].style.color = 'white';
    slideIndicator.innerHTML = `${1} / 4`;
    jobs[0].style.display = 'grid';
    jobs[1].style.display = 'none'
    pageIndicatorS.innerHTML = `${1} / 2`;
    proyects[0].style.display = 'grid';
    proyectIndicator.innerHTML = `${1} / 4`;
    certifications[0].style.display = 'grid';
    certifications[1].style.display = 'none';
    certificationIndicator.innerHTML = `${1} / 2`;


    for(let i = 1; i < listedItems.length; i++) {
        sections[i].style.display = 'none';
    }

    for(let yz = 1; yz < slides.length; yz++) {
        slides[yz].style.display = 'none';
    }

    for(let o = 1; 0 < proyects.length; o++) {
        proyects[o].style.display = 'none';
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

const currentView = () => {
    let viewingRN;

    proyects.forEach(view => {
        if(window.getComputedStyle(view).display === 'grid') {
            viewingRN = view;
        }
    });

    return viewingRN;
}

const currentCertification = () => {
    let viewingRN;
    certifications.forEach(certification => {
        if(window.getComputedStyle(certification).display === 'grid') {
            viewingRN = certification;
        }
    })
    return viewingRN;
}

for(let a = 0; a < listedItems.length; a++) {
    if(window.screen.width <= 480) {
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
                listedItems[a].style.fontSize = '17px';
                itemTurned.style.fontSize = '16px';
            }
        });
    } else {
        listedItems[a].addEventListener('mouseover', function() {
            listedItems[a].style.fontSize = '20px';
            listedItems[a].style.transition = 'ease-out 0.2s';
        });
    
        listedItems[a].addEventListener('mouseout', function() {
            listedItems[a].style.fontSize = '18px';
            listedItems[a].style.transition = 'ease-in 0.2s';
        })
    
    
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

for(let i = 0; i < leftAndRight_3.length; i++) {
    leftAndRight_3[i].addEventListener('mouseover', function() {
        leftAndRight_3[i].style.opacity = '1';
        leftAndRight_3[i].style.border = '1px solid rgba(0, 0, 0, 1)';
        leftAndRight_3[i].style.cursor = 'pointer';
    })

    leftAndRight_3[i].addEventListener('mouseout', function() {
        leftAndRight_3[i].style.opacity = '0.1';
        leftAndRight_3[i].style.border = '1px solid rgba(0, 0, 0, 0.1)';
    })

    leftAndRight_3[i].addEventListener('click', function() {
        let viewingRn = currentView();
        let indexHolder = proyects.indexOf(viewingRn);

        if(i === 0 && indexHolder < 3) {
            proyects[indexHolder + 1].style.display = 'grid'
            viewingRn.style.display = 'none';
            proyectIndicator.innerHTML = `${(indexHolder + 1) + 1} / 4`;
        } else if(i === 1 && indexHolder > 0) {
            proyects[indexHolder - 1].style.display = 'grid'
            viewingRn.style.display = 'none';
            proyectIndicator.innerHTML = `${(indexHolder + 1) - 1} / 4`;
        }
    })
}

for(let o = 0; o < leftAndRight_4.length; o++) {
    leftAndRight_4[o].addEventListener('mouseover', function() {
        leftAndRight_4[o].style.opacity = '1';
        leftAndRight_4[o].style.border = '1px solid rgba(0, 0, 0, 1)';
        leftAndRight_4[o].style.cursor = 'pointer';
    });

    leftAndRight_4[o].addEventListener('mouseout', function() {
        leftAndRight_4[o].style.opacity = '0.1';
        leftAndRight_4[o].style.border = '1px solid rgba(0, 0, 0, 0.1)';
    });

    leftAndRight_4[o].addEventListener('click', function() {
        let viewingRN = currentCertification();
        let indexHolder = certifications.indexOf(viewingRN);

        if(o === 0 && indexHolder < 2) {
            certifications[indexHolder + 1].style.display = 'grid'
            viewingRN.style.display = 'none';
            certificationIndicator.innerHTML = `${(indexHolder + 1) + 1} / 2`;
        } else if(o === 1 && indexHolder > 0) {
            certifications[indexHolder - 1].style.display = 'grid'
            viewingRN.style.display = 'none';
            certificationIndicator.innerHTML = `${(indexHolder + 1) - 1} / 2`;
        }
    });
}


document.body.onload = defaultSettings;