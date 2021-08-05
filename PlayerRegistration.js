/**
 * 
 */

 //add player in database

 $("#save").click(function (e) { 
 
    $("#save").attr("disabled",true)
               

 const rbs = document.querySelectorAll('input[name="city"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
 
 const rbs_ = document.querySelectorAll('input[name="skills"]');
            let selectedValue_;
            for (const rb of rbs_) {
                if (rb.checked) {
                    selectedValue_ = rb.value;
                    break;
                }
            }
             
    var data=
    {
     player_id:$("#id").val(),
     full_name:$("#full_name").val(),
     email_id:$("#email_id").val(),
     contact_no:$("#contact_no").val(),
     contact_no2:$("#contact_no2").val(),
     birth_date:$("#birth_date").val(),
     age:$("#age").val(),
     place_of_birth:$("#place_of_birth").val(),
     district:$("#district").val(),
     city:$("#city").val(),
     prefer_team:selectedValue,
     address:$("#address").val(),
     pincode:$("#pincode").val(),
     occupation:$("#occupation").val(),
     height:$("#height").val(),
     weight:$("#weight").val(),
     blood_group:$("#blood_group").val(),
     skill:selectedValue_,


    }
    $.ajax({
        type: "POST",
        url: "https://omnisoftwares1.pythonanywhere.com/mcl/save_player",
        contentType: "application/json; charset=utf-8",
      
        data:JSON.stringify(data),
        success: function (response) {
            swal("","Saved Successfully","success")
            setTimeout(function(){location.reload(),3000})
        }
    }); 
 });
