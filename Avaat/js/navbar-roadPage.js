$(document).ready(()=>{
    $('#drop').on('mousedown', (e)=>{
        $('.navbar > ul > li').toggleClass('show hide')
        // console.log($(e.target).find('i'))
        $("#drop > i").toggleClass('bi-arrow-bar-up bi-arrow-bar-down')
        console.log($(e.target).find('i'))
    })
})