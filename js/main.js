const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const skills = document.querySelectorAll('.skill');

let showMenu = false;

menuBtn.addEventListener('click', toggleBtn);

let skillList = [
    { name: 'CSS', value: '15' },
    { name: 'ReactJS', value: '3' },
    { name: 'React Native', value: '1' },
    { name: 'NodeJS', value: '5' },
    { name: '.Net', value: '10' },
    { name: '.Net Core', value: '2' },
    { name: 'C#', value: '5' },
    { name: 'Laravel', value: '5' },
    { name: 'SASS', value: '1' },
    { name: 'TailwindCSS', value: '1' },
    { name: 'MySQL', value: '6' },
    { name: 'MS SQL', value: '11' },
    { name: 'PostgreSQL', value: '1' },
    { name: 'Mongo', value: '3' },
    { name: 'Jest', value: '3' },
    { name: 'React Testing Library', value: '1' },
    { name: 'CypressIO', value: '1' },
    { name: 'PHPUnit', value: '4' },
    { name: 'AWS', value: '2' },
    { name: 'Azure', value: '1' },
    { name: 'Heroku', value: '3' },
    { name: 'Docker', value: '2' },
    { name: 'Kubernetes', value: '1' },
    { name: 'Agile', value: '10' },
    { name: 'Scrum Master', value: '3' },
    { name: 'Systems Integration', value: '15' },
];

skills.forEach(element => element.addEventListener('mouseover', function (e) {
    let skillName = e.target.innerText;
    e.target.innerText = `${skillName} : ${getValue(skillName)}`;
}));

skills.forEach(element => element.addEventListener('mouseleave', function (e) {
    let shortText = e.target.innerText.split(':');
    e.target.innerText = shortText[0];
}));

function toggleBtn() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        showMenu = false;
    }
}

function getValue(value) {
    let years = skillList.filter( skill => {
        if(skill.name == value) {
            return skill;
        }
    });

    const yearText = years[0].value < 2 ? 'year' : 'years';

    return `${years[0].value} ${yearText}`;
}