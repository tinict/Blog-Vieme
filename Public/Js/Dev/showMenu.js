import { Header } from "../View/Header.js";
import { SubNav } from "../View/SubNav.js";
import { PostBlog } from "../Components/BoxBlog.js";
import { Contet_Left } from "../View/Content.js";

//Xử lý giao diện nút thanh Header show menu
Header();

const ElementbtnNavMenu = document.querySelector('.navbar__dropdown__user ');
const ElementbtnLeftNav = document.querySelector('.navbar__left .fa-bars')

ElementbtnNavMenu.onclick = () => {
    alert('Chức năng sẽ sớm được cập nhật !');
};

ElementbtnLeftNav.onclick = () => {
    alert('Chức năng sẽ sớm được cập nhật !');
};

//Xử lý giao diện show menu điện thoại subnavbar
SubNav();

const ElementbtnSubNav = document.querySelector('.btnSubNavbar');

ElementbtnSubNav.onclick = () => {
    alert('Chức năng sẽ sớm được cập nhật !');
};

//Xử lý giao diện menu box blog
PostBlog();
Contet_Left();

export const Logic = () => {
    console.log('Hello')
}