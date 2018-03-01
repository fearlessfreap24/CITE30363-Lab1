
var valid = false;

// 0=fname, 1=lname, 2=idnum, 3=phone, 4=email, 5=class, 6=ccnum, 7=cctype, 8=ccdate

var othertf = [false, false, false, false, false, false, false, false, false];

$(document).ready(function(){

    var money = 0;
    var goodmsgclass = "";
    var date = "";

    //reset changes when the reset button is clicked

    $("#reset").click(function(){
        $("input").css({"background":"#d6dbdf", "color":"black"});
        $(".ccdate").css("background-color","#d6dbdf");
        $(".class").css("color","#f1c40f");
        $(".cctype").css("color","#f1c40f");
    });

    //first name = othertf[0]

    $("#fname").on({
        blur:function () {
            fname = $(this).val();
            if (fname != ""){
                if (!chkfname(fname)){
                    $(this).css({"background-color": "pink", "color": "red"});
                    othertf[0] = false;
                }
                else othertf[0] = true;

            }
            chkotf();
        },

        focus:function(){
            $(this).css({"background":"#d6dbdf", "color":"black"});
        }
    });

    //last name = othertf[1]

    $("#lname").on({
        blur:function () {
            lname = $(this).val();
            if (lname != ""){
                if (!chkfname(lname)){
                    $(this).css({"background-color": "pink", "color": "red"});
                    othertf[1] = false;
                }
                else othertf[1] = true;
            }
            chkotf();
        },

        focus:function(){
            $(this).css({"background":"#d6dbdf", "color":"black"});
        }
    });

    //id number

    $("#idnum").on({
        blur:function () {
            idnum = $(this).val();
            if (idnum != ""){
                if (!chkid(idnum)){
                    $(this).css({"background-color": "pink", "color": "red"});
                    othertf[2] = false
                }
                else othertf[2] = true;
            }
            chkotf();
        },

        focus:function(){
            $(this).css({"background":"#d6dbdf", "color":"black"});
        }
    });

    //phone number

    $("#phone").on({
       blur:function () {
           phone = $(this).val();
           if (phone != ""){
               if (!chkphone(phone)){
                   $(this).css({"background":"pink", "color":"red"});
                   othertf[3] = false;
               }
               else othertf[3] = true;
           }
           chkotf();
       },

       focus:function () {
           $(this).css({"background":"#d6dbdf", "color":"black"});
       }
    });

    //email

    $("#email").on({
       blur:function () {
           email = $(this).val();
           if (email != ""){
               if (!chkemail(email)){
                   $(this).css({"background-color":"pink","color":"red"});
                   othertf[4] = false;
               }
               else othertf[4] = true;
           }
           chkotf()
       },

       focus:function () {
           $(this).css({"background":"#d6dbdf", "color":"black"});
       }
    });

    //credit card number

    $("#ccnum").on({
        blur: function () {
            ccnum = $(this).val();
            if (ccnum != ""){
                if (!chkccnum(ccnum)){
                    $(this).css({"background-color":"pink","color":"red"});
                    othertf[6] = false;
                }
                else othertf[6] = true;
            }
            chkotf();
        },

        focus:function () {
            $(this).css({"background":"#d6dbdf", "color":"black"});
        }


    });

    //date

    $("#date").blur(function(){
        date = $("#date :selected").text();
        // alert(date);
    });

    //credit card type

    $("input[name='cctype']").on({
       blur: function () {
           var typecnt = $("input[name='cctype']:checked").length;
           // alert(typecnt);
           if (typecnt === 0){
               $(".cctype").css("color","red");
               othertf[7] = false;
           }
           else {
               $(".cctype").css("color","#f1c40f");
               othertf[7] = true;
           }
           chkotf();
       }
    });

    //class

    $("input[name='class']").on({
        blur: function () {
            var classchk = $("input[name='class']:checked");
            var classcnt = classchk.length;
            //alert(classcnt);
            if (classcnt == 0 || classcnt > 3){
                $(".class").css("color","red");
                othertf[5] = false;
            }
            else {
                $(".class").css("color","#f1c40f");
                othertf[5] = true;
                for (var i=0;i<classcnt;i++){
                    console.log(classchk[i]);
                }
            }
            chkotf();
        }
    });

    //credit card date

    $("#ccmonth").on({
       blur: function () {
           ccmonth = $("#ccmonth :selected").index();
           ccyear = $("#ccyear :selected").text();
           // alert(ccmonth+" "+ccyear);
           if (!chkccdate(ccmonth, ccyear)){
               $(".ccdate").css("background-color", "red");
           }
           else {
               $(".ccdate").css("background-color","#d6dbdf");
               othertf[8] = true;
           }
           chkotf();
       }
    });

    $("#ccyear").on({
        blur: function () {
            ccmonth = $("#ccmonth :selected").index();
            ccyear = $("#ccyear :selected").text();
            // alert(ccmonth+" "+ccyear);
            if (!chkccdate(ccmonth, ccyear)){
                $(".ccdate").css("background-color", "red");
                othertf[8] = false;
            }
            else {
                $(".ccdate").css("background-color","#d6dbdf");
                othertf[8] = true;
            }
            chkotf();
        }
    });

    /*

    validation functions

    */

    function chkfname(fname) {
        // alert("checkfname function " + fname);
        var fnamegood = fname.search(/^[A-Z][a-z]+$/);
        // alert("fnamegood = " + fnamegood);
        if (fnamegood == 0) return true;
        else return false;
    }

    function chkphone(phonenum) {
        var goodphone = phonenum.search(/^\d{3}-\d{3}-\d{4}$/);
        // alert("goodphone = " + goodphone);
        if (goodphone == 0) return true;
        else return false;
    }

    function chkid(id){
        // alert("function checkid " + id);
        var goodid = id.search(/^\d{6}$/);
        // alert("goodid " + goodid);
        if (goodid == 0) return true;
        else return false;
    }

    function chkemail(email){
        // alert("function chkemail " + email);
        var goodemail = email.search(/^[a-z.-_]{3,}@\w{3,}\.[a-z]{3}$/i);
        // alert("goodemail " + goodemail);
        if (goodemail == 0) return true;
        else return false;
    }

    function chkccnum(ccnum){
        // alert("function ccnum " + ccnum);
        var goodccnum = ccnum.search(/^\d{16}$/);
        // alert("goodccnum " + goodccnum);
        if (goodccnum == 0) return true;
        else return false;
    }

    function chkccdate(ccm, ccy){
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();

        // alert(year + " " + month + " " + ccy + " " + ccm + "\n");

        if (ccm < month && ccy == year) return false;

        else return true;

    }

    function chkcardtype(cv, cm, cd){
        if (cv || cm || cd) return true;
        else return false;
    }

    if (!valid) $("#submit").hide();

    // Stall and RV

    var stall = $("#stall :checked");
    if (stall) money += 30;
    var rv = $("#rv :checked");
    if (rv) money += 35;
    // alert(money);

});

function chkotf(){
    // alert(othertf);
    if (othertf[0] && othertf[1] && othertf[2] && othertf[3] && othertf[4] && othertf[5] && othertf[6] && othertf[7] && othertf[8]){
        $("#submit").show();
        return true;
    }
    else return false;
}

function validate() {

    valid = chkotf();
    return valid;
}