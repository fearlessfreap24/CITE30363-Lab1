
var valid = false;

$(document).ready(function(){

    var msg = "";
    var money = 0;
    var goodmsgclass = "";
    var date = "";


    $("#fname").on({
        blur:function () {
            fname = document.getElementById("fname").value;
            if (fname != ""){
                if (!chkfname(fname)){
                    $(this).css({"background-color": "pink", "color": "red"});
                }

            }
        },

        focus:function(){
            $(this).css({"background":"#d6dbdf", "color":"black"});
        }
    });

    $("#lname").on({
        blur:function () {
            lname = document.getElementById("lname").value;
            if (lname != ""){
                if (!chkfname(lname)){
                    $(this).css({"background-color": "pink", "color": "red"});
                }

            }
        },

        focus:function(){
            $(this).css({"background":"#d6dbdf", "color":"black"});
        }
    });

    $("#idnum").on({
        blur:function () {
            idnum = document.getElementById("idnum").value;
            if (idnum != ""){
                if (!chkid(idnum)){
                    $(this).css({"background-color": "pink", "color": "red"});
                }

            }
        },

        focus:function(){
            $(this).css({"background":"#d6dbdf", "color":"black"});
        }
    });

    $("#phone").on({
       blur:function () {
           phone = document.getElementById("phone").value;
           if (phone != ""){
               if (!chkphone(phone)){
                   $(this).css({"background":"pink", "color":"red"});
               }
           }
       },

       focus:function () {
           $(this).css({"background":"#d6dbdf", "color":"black"});
       }
    });

    $("#email").on({
       blur:function () {
           email = document.getElementById("email").value;
           if (email != ""){
               if (!chkemail(email)){
                   $(this).css({"background-color":"pink","color":"red"});
               }
           }
       },

       focus:function () {
           $(this).css({"background":"#d6dbdf", "color":"black"});
       }
    });

    $("#ccnum").on({
        blur: function () {
            ccnum = document.getElementById("ccnum").value;
            if (ccnum != ""){
                if (!chkccnum(ccnum)){
                    $(this).css({"background-color":"pink","color":"red"});
                }
            }
        },

        focus:function () {
            $(this).css({"background":"#d6dbdf", "color":"black"});
        }


    });

    $("#date").blur(function(){
        date = $("#date :selected").text();
        alert(date);
    });

    $("radio").on({
       blur: function () {
           var typecnt = $(this,":checked").length;
           if (typecnt === 0){
               $("#cctype").css("color","red");
           }
       } ,

       focus: function () {
           $(this).css("color","#f1c40f");
       }
    });

    function validate() {

        // fname = $("fname").text();
        return valid;
    }

    function chkfname(fname) {
        // alert("checkfname function " + fname);
        var fnamegood = fname.search(/^[A-Z][a-z]+$/);
        // alert("fnamegood = " + fnamegood);
        if (fnamegood == 0) return true;
        else {
            msg = "The name " + fname + " is not correct format.\n\n" + msg;
            //fname.style.backgroundColor = pink;
            return false;
        }
    }

    function chkphone(phonenum) {
        var goodphone = phonenum.search(/^\d{3}-\d{3}-\d{4}$/);
        // alert("goodphone = " + goodphone);
        if (goodphone == 0) return true;
        else {
            msg = "The phone number " + phonenum + " is not formatted correctly.\n\n" + msg;
            return false;
        }
    }

    function chkid(id){
        // alert("function checkid " + id);
        var goodid = id.search(/^\d{6}$/);
        // alert("goodid " + goodid);
        if (goodid == 0) return true;
        else {
            msg = "NCHA ID # " + id + " is invaild\n\n" + msg;
            return false;
        }
    }

    function chkemail(email){
        // alert("function chkemail " + email);
        var goodemail = email.search(/^[a-z.-_]{3,}@\w{3,}\.[a-z]{3}$/i);
        // alert("goodemail " + goodemail);
        if (goodemail == 0) return true;
        else {
            msg = "The email address " + email + " is not valid\n\n" + msg;
            return false;
        }
    }

    function chkccnum(ccnum){
        // alert("function ccnum " + ccnum);
        var goodccnum = ccnum.search(/^\d{16}$/);
        // alert("goodccnum " + goodccnum);
        if (goodccnum == 0) return true;
        else {
            msg = "Credit card # " + ccnum + " is invalid\n\n" + msg;
            return false;
        }
    }

    function chkclass(class1, class2,class3,class4,class5,class6){
        var count = 0;
        if (class1) {
            count++;
            money += 300;
            goodmsgclass += "\tOpen\n";
        }
        if (class2) {
            count++;
            money += 300;
            goodmsgclass += "\tNon-Pro\n";
        }
        if (class3) {
            count++;
            money += 250;
            goodmsgclass += "\t25K NNP\n";
        }
        if (class4) {
            count++;
            money += 250;
            goodmsgclass += "\t50K Amateur\n";
        }
        if (class5) {
            count++;
            money += 150;
            goodmsgclass += "\t35K NP\n";
        }
        if (class6) {
            count++;
            money += 150;
            goodmsgclass += "\t15K Amateur\n";
        }

        // alert("class checks " + count);

        if (count == 0) {
            msg = "There were no classes selected\n\n" + msg;
            money = 0;
            return false;
        }
        if (count > 3) {
            msg = "Too many classes were selected\n\n" + msg;
            money = 0;
            return false;
        }
        return true;
    }

    function chkccdate(ccm, ccy){
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var cyear = document.forms["reg"][19].options[ccy].text;

        // alert(year + " " + month + " " + cyear + " " + ccm + "\n");

        if (ccm < month && cyear == year) {
            msg = "Credit card date is invalid.\n\n" + msg;
            return false;
        }

        return true;

    }

    function chkcardtype(cv, cm, cd){
        if (cv || cm || cd) return true;
        else {
            msg = "Credit card type was not selected\n\n" + msg;
            return false;
        }
    }

    if (!valid) $("#submit").hide();

});