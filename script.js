var slider = document.getElementById("slider");
var pageViewCount = document.getElementById('page-views-count');
var pageViewPrice = document.getElementById('page-view-price');

function setDefaultValues() {
    var percent = (slider.value / 1000000) * 100;
    var color = 'linear-gradient(90deg, rgba(169,245,233,1) ' + percent + '%, rgba(233,240,250,1) ' + percent + '%)';
    slider.style.background = color;
}
setDefaultValues();

function setPagesViewCounts(sliderValue) {
    if (sliderValue < 1000000) {
        pageViewCount.innerText = parseInt(sliderValue / 1000) + "K";

        if (sliderValue <= 10000) {
            pageViewPrice.innerText = parseFloat(8).toFixed(2) + "$";
        } else if (sliderValue > 10000 && sliderValue <= 50000) {
            pageViewPrice.innerText = parseFloat(12).toFixed(2) + "$";
        } else if (sliderValue > 50000 && sliderValue <= 100000) {
            pageViewPrice.innerText = parseFloat(16).toFixed(2) + "$";
        } else if (sliderValue > 100000 && sliderValue <= 500000) {
            pageViewPrice.innerText = parseFloat(24).toFixed(2) + "$";
        } else {
            pageViewPrice.innerText = parseFloat(36).toFixed(2) + "$";
        }
    } else {
        pageViewCount.innerText = parseInt(sliderValue / 1000000) + "M";
    }
}
setPagesViewCounts(slider.value);

slider.addEventListener("mousemove" , function () {
    var slider = document.getElementById("slider");
    
    setDefaultValues();
    setPagesViewCounts(slider.value);
});