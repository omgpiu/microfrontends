import faker from 'faker'

const mount = (htmlElement) => {
    let products = ''
    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }
    htmlElement.innerHTML = products
}


//Ситуация 1
//Мы запускаем приложение в девелопменте и изоляции
//Мы используем внтуренний index.html
//У нас точно есть элемент с id dev-products либо любой другой, который мы укажем (public/index.html)
//Мы хотим неемдленно отрендерить  приложение  в элементе с id dev-products
if (process.env.NODE_ENV === 'development') {
    const htmlElement = document.querySelector('#dev-products')
    if (htmlElement) {
        mount(htmlElement)
    }
}

//Ситуация 2
//Мы запускаем наш проект в деве или продакшене при помощи контейнера(бутстрапа)
// Нет гарантии, что элемент dev-products существует в конейнетере
// МЫ не хотим сразу отрендерить наше приложение


export {mount}