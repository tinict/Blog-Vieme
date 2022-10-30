import { setDisplayContent } from "../View/Content.js";

export const Message = (ClassName) => {
    const Test = document.querySelectorAll('.' + ClassName);
    for (let i = 0; i < Test.length; i++) {
        Test[i].onclick = () => {
            alert('Chức năng đang cập nhật !');
        }
    }
}

export const DisplayBlog̣ = (ClassName) => {
    const Element = document.querySelectorAll('.' + ClassName);
    for (let i = 0; i < Element.length; i++) {
        Element[i].onclick = () => {
            setDisplayContent(0);
            console.log('Chức năng thực hiện thành công !');
        }
    }
}