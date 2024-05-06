$('#Customer-section').css({
    display:'none'
});

$('#Item-section').css({
    display:'none'
});

$('#order-section').css({
    display:'none'
});

$('#nav-customer').on('click',()=>{
    $('#Customer-section').css({
        display:'block'
    });
    $('#Item-section').css({
        display: 'none'
    });
    $('#order-section').css({
        display:'none'
    });
});

$('#nav-item').on('click',()=>{
    $('#Item-section').css({
        display:'block'
    });
    $('#Customer-section').css({
        display: 'none'
    });
    $('#order-section').css({
        display:'none'
    });
});

$('#nav-order').on('click',()=>{
    $('#order-section').css({
        display:'block'
    });
    $('#Customer-section').css({
        display: 'none'
    });
    $('#Item-section').css({
        display: 'none'
    });
});