// Get the slider Number 
let slider = document.querySelector(".slider")

// Get All Images 
let images = document.querySelectorAll(".container img")

let imagesArr = Array.from(images)

// Get lEngth of images 
let imagesLength = imagesArr.length ; 

console.log(imagesLength);
// Get previous Button 
let prevBtn = document.querySelector(".prev")

// Get Next Button 
let nextBtn = document.querySelector(".next")

// Image Number 
let imgNumber = 1 ;

// Get All Indicators 
let indicators = document.querySelector(".controls #indicators ul");



slider.innerHTML = `# slider ${imgNumber}`

for(let i = 1 ; i <= imagesLength ;i++) {

    
    let indicator = document.createElement("li")
    let text  = document.createTextNode(i)
    if(i == 1) {
        indicator.classList.add('active')
    }
    indicator.appendChild(text)
    indicators.appendChild(indicator)
}


let allIndicators = document.querySelectorAll(".controls #indicators ul li");

let arr = Array.from(allIndicators)


imagesArr[imgNumber-1].classList.add("active");

function nextSlide () {
    if(imgNumber < imagesLength) {
        imagesArr.forEach(img => {
            img.classList.remove('active')
        })
        imgNumber++;
        imagesArr[imgNumber-1].classList.add("active");
        slider.innerHTML = `# slider ${imgNumber}`
        allIndicators.forEach(indicator => {
            indicator.classList.remove("active")
        })
        arr[imgNumber-1].classList.add('active')
        prevBtn.classList.remove("disable")
        nextBtn.classList.remove("disable")
    }
    if(imgNumber === imagesLength) {
        nextBtn.classList.add("disable")
    }
}

function prevSlide () {

    
    if(imgNumber >1) {
        imagesArr.forEach(img => {
            img.classList.remove('active')
        })
        imgNumber--;
        imagesArr[imgNumber-1].classList.add("active");
        slider.innerHTML = `# slider ${imgNumber}`
        allIndicators.forEach(indicator => {
            indicator.classList.remove("active")
        })
        arr[imgNumber-1].classList.add('active')
        prevBtn.classList.remove("disable")
        nextBtn.classList.remove("disable")
    }

    if(imgNumber == 1) {
        prevBtn.classList.add("disable")
    }

    
}



nextBtn.onclick = nextSlide ;
prevBtn.onclick = prevSlide ;


