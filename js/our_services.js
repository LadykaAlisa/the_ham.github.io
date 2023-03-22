"use strict"

const tab = function () {
    const webDesignItems = document.querySelectorAll(".web_design__item");
    const webDesignElements = document.querySelectorAll(".web_design_element");
    let tabName;

    webDesignItems.forEach(item => {
        item.addEventListener("click", selectWebDesignItem)
    })

    function selectWebDesignItem() {
        webDesignItems.forEach(item => {
            item.classList.remove("item_active");
        });
        this.classList.add("item_active");
        tabName = this.getAttribute("data-tab-name");
        selectWebDesignElements(tabName);
        console.log(tabName);
    }

    function selectWebDesignElements(tabName) {
        webDesignElements.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add("element_active") : item.classList.remove("element_active");
            console.log(tabName);
        })
    }
};

tab();
