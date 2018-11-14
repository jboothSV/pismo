
 $('body').on('click','[data-menuid]', function() {
    $(this).toggleClass('active');
})

// Mobile Nav

     $('body').on('click','.hamburger', function() {
        $(this).toggleClass('active');
        $(this).parent().toggleClass('active');
        $('body').find('[data-sv-mainnav]').toggleClass('active');
    });


     $('body').on('click','[data-menu-toggle-parent]',function(){
        $(this).closest("li").toggleClass('active');
    });