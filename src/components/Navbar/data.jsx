import NavbarItem from "./NavbarItem";

const data = ['Home', 'About', 'Projects', 'Thoughts', 'Contact'];
const classes = 'navbar-item-button flex-centered text-centered oxford-blue-background';

const navbarData = [];

for (let i = 0; i < data.length; i++) {
  navbarData.push(new NavbarItem(i, classes, data[i]))
}


export default navbarData;