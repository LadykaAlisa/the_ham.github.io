"use strict"

const clickLink = document.getElementsByTagName("a");
Array.from(clickLink).forEach((value) => {
    value.addEventListener("click", (evt) => {
        evt.preventDefault();
    })
})

const itemsImageFn = ({name, image}) => `<div class="items-image" data-amazing-items="graphic" style="">
                        <img class="image-amazing item_active" src="images/${image}" alt="graphic-design">
                        <div class="hover-amazing-items">
                            <div class="search-link">
                                <a href="#">
                                    <div class="circle link">
                                        <i class="fas fa-link fa-link-circle"></i>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="circle square-item">
                                        <i class="fa fa-square fa-square-circle"></i>
                                    </div>
                                </a>
                            </div>
                            <p class="hover-creative-design">creative design</p>
                            <p class="hover-web-design">${name}</p>
                        </div>
                    </div>`
;
const menu = [...document.getElementsByClassName("work__item")];
let elementName = "graphic";
const amazingItems = document.getElementById("amazing-items");
const loadMoreButton = document.getElementById("button")
menu.forEach((item) => {
    item.addEventListener("click", (evt) => {
        loadMoreButton.style.display = 'flex';
        let stringElement = '';
        elementName = evt.target.dataset.amazingItems;
        if (elementName === 'all') {
            Object.keys(imagesData).forEach((key) => {
                imagesData[key].images.forEach((image) => {
                    stringElement += itemsImageFn({name: imagesData[key].name, image})
                })
            })
            amazingItems.innerHTML = stringElement;
            return
        }
        const {name, images} = imagesData[elementName];
        images.forEach((image) => {
            stringElement += itemsImageFn({name, image})
        })
        amazingItems.innerHTML = stringElement;
    })
})


const createElement = (html) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = html;
    amazingItems.appendChild(newDiv);
}

loadMoreButton.addEventListener("click", (evt) => {
    const loader = document.getElementById('loader');
    loadMoreButton.style.display = 'none';
    loader.style.display = 'flex';


    setTimeout(() => {
        if (elementName === 'all') {
            Object.keys(imagesDataNew).forEach((key) => {
                imagesDataNew[key].images.forEach((image, i) => {
                    if (i % 4 === 0) {
                        createElement(itemsImageFn({name: imagesDataNew[key].name, image}));
                    }

                })
            })
        } else {
            const {name, images} = imagesDataNew[elementName];
            images.forEach((image) => {
                createElement(itemsImageFn({name, image}));
            })
        }
        loader.style.display = 'none';
    }, 3000);
})
