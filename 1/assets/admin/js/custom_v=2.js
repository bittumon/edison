jQuery(document).ready(function () {
    $(".summernote").summernote({ 
        height: 250, 
        minHeight: null, 
        maxHeight: null, 
        toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['para', ['ul', 'ol', 'paragraph']]
        ]
    });

    $("input.btn-radio:checked").parent().removeClass("btn-outline-primary").addClass("btn-primary");
    $('input.btn-radio').change(function () {
        $("input.btn-radio").parent().removeClass("btn-primary").addClass("btn-outline-primary");
        $("input.btn-radio:checked").parent().removeClass("btn-outline-primary").addClass("btn-primary");
    });

    $('[data-toggle="input-mask"]').each(function (t, e) {
        var n = $(e).data("maskFormat"),
            a = $(e).data("reverse");
        null != a ? $(e).mask(n, {
            reverse: a
        }) : $(e).mask(n)
    });
    
   
    $(".clockpicker").clockpicker();
    
    $('.tagsinput').tagsinput();
	

//ALl Checkbox in Datatable
    $('#selecctall').click(function(event) {  //on click

        if(this.checked) { // check select status

            $('.checkbox1').each(function() { //loop through each checkbox

                this.checked = true;  //select all checkboxes with class "checkbox1"              

            });

        }else{

            $('.checkbox1').each(function() { //loop through each checkbox

                this.checked = false; //deselect all checkboxes with class "checkbox1"                      

            });        

        }

    });
    
    window.setInterval( function() {
         var d = new Date(); // for now
            var hours = d.getHours(); 
            var minutes = d.getMinutes(); 
            var seconds = d.getSeconds();
            if(hours >= 5 && hours <= 21){
                window.location.reload(true);
            }
    }, 20*60000);
    
    /*setInterval(function(){ 
       // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        //console.log(timezone); // Asia/Karachi
        var minutes = (new Date()).getMinutes()
        if ( !minutes%15 ) location.reload(); // if minutes is a multiple of 15
    
    },60000); // 60.000 milliseconds = 1 minute */


});