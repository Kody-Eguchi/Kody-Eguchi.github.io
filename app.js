const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".mainContent");

function PageTransition(){
    //Button Click Active Class
    for (let i =0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.activeBtn');
            currentBtn[0].className = currentBtn[0].className.replace('activeBtn', '');
            this.className += ' activeBtn';
        })
    }


    //SECTIONS ACTIVE CLASS
    allSections.addEventListener('click', (event) => {
            const id = event.target.dataset.id;
            if (id) {

                sectBtns.forEach((btn) => {
                    btn.classList.remove('active')
                })
                event.target.classList.add('active')

                sections.forEach((section) => {
                    section.classList.remove('active')
                })

                const element = document.getElementById(id);
                element.classList.add('active');
            }
        })
}

PageTransition();
