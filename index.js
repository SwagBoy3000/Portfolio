// Float nav active state
const FloatNavsBtn = document.querySelectorAll('.float_nav a');
const sections = document.querySelectorAll('section, header'); // All sections + header

const removeActiveClass = () => {
    FloatNavsBtn.forEach(Btn => {
        Btn.classList.remove('active');
    });
};

// Click event (manual navigation)
FloatNavsBtn.forEach((Btn) => {
    Btn.addEventListener('click', () => {
        removeActiveClass();
        Btn.classList.add('active');
    });
});

// ✅ SCROLL DETECTION - Updates active link based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Check if section is in viewport
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    // Update active class based on current section
    FloatNavsBtn.forEach(link => {
        link.classList.remove('active');
        
        // Match href to current section
        if (link.getAttribute('href') === `#${current}` || 
            (current === '' && link.getAttribute('href') === '#')) {
            link.classList.add('active');
        }
    });
});


// Resume section content
const right = document.querySelector('.right');

const expContent = `<h4>Experience</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis est dicta, ullam error possimus dolore.</p>
                <ul>
                    <li>
                        <h6>2018 - 2019</h6>
                        <h5>Intern</h5>
                        <p>MTC</p>
                    </li>
                    <li>
                        <h6>2019 - 2020</h6>
                        <h5>Junior Developer</h5>
                        <p>Tech Company</p>
                    </li>
                    <li>
                        <h6>2020 - 2021</h6>
                        <h5>Developer</h5>
                        <p>Startup Inc</p>
                    </li>
                    <li>
                        <h6>2021 - Present</h6>
                        <h5>CS Student</h5>
                        <p>USTHB</p>
                    </li>
                </ul>`;

const eduContent = `<h4>Education</h4>
                <p>My academic journey and qualifications.</p>
                <ul>
                    <li>
                        <h6>2021 - Present</h6>
                        <h5>Computer Science</h5>
                        <p>USTHB University</p>
                    </li>
                    <li>
                        <h6>2018 - 2021</h6>
                        <h5>High School Diploma</h5>
                        <p>Science Track</p>
                    </li>
                    <li>
                        <h6>2020</h6>
                        <h5>Web Development Course</h5>
                        <p>Online Certification</p>
                    </li>
                </ul>`;

const skillsContent = `<h4>Skills</h4>
                <p>Technologies and tools I'm proficient with.</p>
                <ul>
                    <li>
                        <h5>HTML & CSS</h5>
                        <p>Building responsive and modern websites</p>
                    </li>
                    <li>
                        <h5>JavaScript</h5>
                        <p>Interactive web applications and DOM manipulation</p>
                    </li>
                    <li>
                        <h5>Git & GitHub</h5>
                        <p>Version control and collaboration</p>
                    </li>
                    <li>
                        <h5>Problem Solving</h5>
                        <p>Algorithms and data structures</p>
                    </li>
                </ul>`;

const aboutContent = `<h4>About Me</h4>
                <p>Get to know me better!</p>
                <ul>
                    <li>
                        <h5>Who Am I?</h5>
                        <p>I'm Idir, a passionate CS student at USTHB who loves building cool projects and learning new technologies.</p>
                    </li>
                    <li>
                        <h5>What I Love</h5>
                        <p>Coding, problem-solving, and creating things that make a difference.</p>
                    </li>
                    <li>
                        <h5>My Goals</h5>
                        <p>To become a skilled full-stack developer and contribute to open-source projects.</p>
                    </li>
                    <li>
                        <h5>Hobbies</h5>
                        <p>Gaming, reading tech blogs, and exploring new frameworks.</p>
                    </li>
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

// Set initial content
right.innerHTML = expContent;