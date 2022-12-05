$(document).ready(function(){
    $(".btn-primary").click( function() {
    var firstname = document.getElementById("fisrt-name").value;
    var lastname = document.getElementById("last-name").value;
    var username = document.getElementById("username").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    if (firstname != "" && lastname !="" && username !="" && city != "" && state!="" && zip !="") {
        Swal.fire({
            type: 'success',
            title: 'BERHASIL LOG IN!',
        });
    }
    else
    {
        alert('Anda harus mengisi data dengan lengkap !');
    }
    });
});
// function validasi() {
//     $(".btn primary").click( function() {

//     });
    
// }