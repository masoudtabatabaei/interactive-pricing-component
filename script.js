var slider = document.getElementById("slider");
var pageViewCount = document.getElementById('page-views-count');
var pageViewPrice = document.getElementById('page-view-price');
var discountSlider = document.getElementById("discount");

var discount = false;

function checkExistDiscount() {
    if (discountSlider.checked) {
        console.log("Checked");
        discount = true;
    } else {
        console.log("Not Checked");
        discount = false;
    }
}
checkExistDiscount();

function setDefaultValues() {
    var percent = (slider.value / 1000000) * 100;
    var color = 'linear-gradient(90deg, rgba(169,245,233,1) ' + percent + '%, rgba(233,240,250,1) ' + percent + '%)';
    slider.style.background = color;
}
setDefaultValues();

function setPagesViewCounts(sliderValue) {
    if (sliderValue < 1000000) {
        pageViewCount.innerText = parseInt(sliderValue / 1000) + "K";

        var discountVal = 1;
        var price;

        if (discount) {
            discountVal = 0.25;
        }

        if (sliderValue <= 10000) {
            price = 8 * discountVal;
        } else if (sliderValue > 10000 && sliderValue <= 50000) {
            price = 12 * discountVal;
        } else if (sliderValue > 50000 && sliderValue <= 100000) {
            price = 16 * discountVal;
        } else if (sliderValue > 100000 && sliderValue <= 500000) {
            price = 24 * discountVal;
        } else {
            price = 36 * discountVal;
        }

        pageViewPrice.innerText = parseFloat(price).toFixed(2) + "$";
    } else {
        pageViewCount.innerText = parseInt(sliderValue / 1000000) + "M";
    }
}
setPagesViewCounts(slider.value);

discountSlider.addEventListener("input" , function () {
    if (this.checked) {
        console.log("Checked");
        discount = true;
    } else {
        console.log("Not Checked");
        discount = false;
    }

    setPagesViewCounts(slider.value);
});

slider.addEventListener("mousemove" , function () {
    var slider = document.getElementById("slider");
    
    setDefaultValues();
    setPagesViewCounts(slider.value);
});