const FloatNavsBtn = document.querySelectorAll('.float_nav a');
const sections = document.querySelectorAll('section, header');
const pageWrapper = document.querySelector('.page-wrapper');

const removeActiveClass = () => {
    FloatNavsBtn.forEach(Btn => {
        Btn.classList.remove('active');
    });
};

FloatNavsBtn.forEach((Btn) => {
    Btn.addEventListener('click', () => {
        removeActiveClass();
        Btn.classList.add('active');
    });
});

if (pageWrapper) {
    pageWrapper.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            
            if (pageWrapper.scrollTop >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        FloatNavsBtn.forEach(link => {
            link.classList.remove('active');
            
            if (link.getAttribute('href') === `#${current}` || 
                (current === '' && link.getAttribute('href') === '#home')) {
                link.classList.add('active');
            }
        });
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target && pageWrapper) {
            pageWrapper.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

const right = document.querySelector('.right');

const expContent = `<h4>Experience</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <ul>
                    <li><h6>2018 - 2019</h6><h5>Intern</h5><p>MTC</p></li>
                    <li><h6>2019 - 2020</h6><h5>Junior Developer</h5><p>Tech Company</p></li>
                    <li><h6>2020 - 2021</h6><h5>Developer</h5><p>Startup Inc</p></li>
                    <li><h6>2021 - Present</h6><h5>CS Student</h5><p>USTHB</p></li>
                </ul>`;

const eduContent = `<h4>Education</h4>
                <p>My academic journey.</p>
                <ul>
                    <li><h6>2021 - Present</h6><h5>Computer Science</h5><p>USTHB University</p></li>
                    <li><h6>2018 - 2021</h6><h5>High School Diploma</h5><p>Science Track</p></li>
                </ul>`;

const skillsContent = `<h4>Skills</h4>
                <p>Technologies I'm proficient with.</p>
                <ul>
                    <li><h5>HTML & CSS</h5></li>
                    <li><h5>JavaScript</h5></li>
                    <li><h5>Git & GitHub</h5></li>
                    <li><h5>Problem Solving</h5></li>
                </ul>`;

const aboutContent = `<h4>About Me</h4>
                <p>Get to know me better!</p>
                <ul>
                    <li><h5>CS Student at USTHB</h5></li>
                    <li><h5>Passionate about coding</h5></li>
                    <li><h5>Love building projects</h5></li>
                    <li><h5>Always learning</h5></li>
                </ul>`;

const left = document.querySelectorAll('.left button');

const removePrimaryClass = () => {
    left.forEach(Btn => {
        Btn.classList.remove('primary');
    });
};

left.forEach((Btn) => {
    Btn.addEventListener('click', () => {
        removePrimaryClass();
        Btn.classList.add('primary');
        
        if (Btn.classList.contains('Experience')) {
            right.innerHTML = expContent;
        } else if (Btn.classList.contains('education')) {
            right.innerHTML = eduContent;
        } else if (Btn.classList.contains('skills')) {
            right.innerHTML = skillsContent;
        } else if (Btn.classList.contains('about')) {
            right.innerHTML = aboutContent;
        }
    });
});

if (right) {
    right.innerHTML = expContent;
}

const containerEl = document.querySelector('.projects_container');

if (containerEl && typeof mixitup !== 'undefined') {
    let mixer = mixitup(containerEl, {
        animation: {
            enable: true,
            duration: 400
        },
        selectors: {
            target: '.projects'
        },
        load: {
            filter: 'all'
        }
    });

    const filterButtons = document.querySelectorAll('.project_cat .btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filterValue = this.getAttribute('data-filter');
            mixer.filter(filterValue);
        });
    });
}
const themetoggle = document.querySelector('.nav_btn')
themetoggle.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables')
    if(document.body.classList == ""){
        themetoggle.innerHTML= `<i class="uil uil-moon"></i>`
        window.localStorage.setItem('portfolio-theme','')
    }else{
         themetoggle.innerHTML= `<i class="uil uil-sun"></i>`
         window.localStorage.setItem('portfolio-theme','dark-theme-variables')
    }
})
const bodyclass = window.localStorage.getItem('portfolio-theme');
document.body.className= bodyclass; 