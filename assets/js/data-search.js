const ITEM_MODE = {
    LIST:'list',
    CARD:'card'
}

const TABS = {
   APARTMENTS :"apartments",
   PARKING_SPACES :"parking-spaces",
   MOTORCYCLE :"motorcycle",
    STOREROOMS:"storerooms"
}

const items = document.getElementsByClassName('real-estate-js')
const itemsMode = document.getElementsByClassName('select-params');
const searchTabs = document.getElementsByClassName('real-estate-click');

let selectedMode = ITEM_MODE.CARD
let activeTab = TABS.APARTMENTS

if(items.length){

    updateActiveMode(selectedMode);
    updateActiveTab(activeTab)
    updateActiveItem(activeTab)
}

function updateActiveTab(active){
    updateSelectedTab(active)

    for (let i = 0; i < searchTabs.length; i++) {
        searchTabs[i].addEventListener('click', function(){
            const dataType = searchTabs[i].dataset.search
            activeTab = dataType
            updateSelectedTab(dataType)
            updateActiveItem(dataType)
        })
    }
}

function updateActiveMode(activeMode){
    updateSelectedMode(activeMode)
    for (let i = 0; i < itemsMode.length; i++) {
        itemsMode[i].addEventListener('click', function(){
            const dataType = itemsMode[i].dataset.type
            selectedMode = dataType

            updateSelectedMode(dataType)
            updateSelectedItem(activeTab)
        })
    }
}

function updateActiveItem(activeMode){
    updateSelectedItem(activeMode)
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function(){
            const dataType = items[i].dataset.search
            updateSelectedItem(dataType)
        })
    }
}

function updateSelectedMode(activeMode){
    for (let i = 0; i < itemsMode.length; i++) {
        itemsMode[i].classList.remove('params-active');
        const dataType = itemsMode[i].dataset.type

        if(dataType===activeMode){
            itemsMode[i].classList.add('params-active');
        }
    }
}

function updateSelectedTab(activeTab){
    for (let i = 0; i < searchTabs.length; i++) {
        searchTabs[i].classList.remove('real-estate-active');
        const dataType = searchTabs[i].dataset.search

        if(dataType===activeTab){
            searchTabs[i].classList.add('real-estate-active');
        }
    }
}

function updateSelectedItem(activeTab){
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active-cat');
        const dataType = items[i].dataset.search

        if(dataType===activeTab){
            items[i].classList.add('active-cat');
        }

        updateSelectedItemMode(items[i])
    }
}

function updateSelectedItemMode( parentElement){
    const items = parentElement.querySelectorAll('.apartments-boxes')

    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active-box');
        const dataType = items[i].dataset.type

        if(dataType===selectedMode){
            items[i].classList.add('active-box');
        }
    }
}
