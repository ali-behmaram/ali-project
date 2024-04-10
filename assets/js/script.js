$('#main_slider').owlCarousel({
loop:true,
margin:10,
nav:true,
responsive:{ // در حالت رسپانسیو:
0:{ //تعداد آیتم های قابل نمایش در نمایشگرهای کوچک
items:5
},
600:{ //تعداد آیتم های قابل نمایش در نمایشگرهای بین 600 تا 1000 پیکسل
items:5
},
1000:{ //تعداد آیتم های قابل نمایش در نمایشگرهای بالای 1000 پیکسل
items:5
}
}
})


const dots = document.querySelector('.owl-dots');
dots.remove();