$(document).ready(function () {
    var arrayslider = [...$('.slide')]
    arrayslider.forEach(element => {
        $('<div class = "dote bg-slate-100 w-16 h-1 cursor-pointer m-1"></div>').appendTo('.dotes');
    });


    var dotearray = [...$('.dote')]
    let i = 0;
    $('dotearray').each((element, index) => {
        $(element).click(function (e) {
            arrayslider[i].classList.add('hidden')
            dotearray[i].classList.remove('bg-red-600')
            i = index
            dotearray[index].classList.add('bg-red-600')
            arrayslider[index].classList.remove('hidden')
        });
    });
    
    let index1 = 0

    $(arrayslider).each((index, element)=> {
        if ($(element).hasClass("active")) {
          index1 = index
        }
    })
    if (index1 == 0 ) {
         $(dotearray[index1]).addClass("bg-red-600");
     }


    $('.next').click(function () {
        $(arrayslider[index1]).removeClass("active");
        $(dotearray[index1]).removeClass("bg-red-600");
        index1 ++
        if (index1 == arrayslider.length) {
            index1 = 0
        }
        $(arrayslider[index1]).addClass('active')
        $(dotearray[index1]).addClass('bg-red-600')
    });
    $('.prev').click(function () {
        if (index1 > 0) {
            $(arrayslider[index1]).removeClass("active");
            $(dotearray[index1]).removeClass("bg-red-600");
            index1 = index1 - 1
            if (index1 == arrayslider.length) {
                index1 = 0
            }
            $(arrayslider[index1]).addClass('active')
            $(dotearray[index1]).addClass('bg-red-600')
        }
        else {}

    });


    $(".dote").click(e => {
        $(arrayslider[index1]).removeClass('active')
        $(dotearray[index1]).removeClass("bg-red-600");
        index1 = dotearray.indexOf(e.target)
        $(dotearray[index1]).addClass("bg-red-600");
        $(arrayslider[index1]).addClass('active')
    });
    setInterval(function (){
        $(arrayslider[index1]).removeClass("active");
        $(dotearray[index1]).removeClass("bg-red-600");
        index1 ++
        if (index1 == arrayslider.length) {
            index1 = 0
        }
        $(arrayslider[index1]).addClass('active')
        $(dotearray[index1]).addClass('bg-red-600') 
    },5000);
});
