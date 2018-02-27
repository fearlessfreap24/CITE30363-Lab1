
var valid = false;

// 0=fname, 1=lname, 2=idnum, 3=phone, 4=email, 5=class, 6=ccnum, 7=cctype, 8=ccdate

var othertf = [false, false, false, false, false, false, false, false, false];

$(document).ready(function(){

    var msg = "";
    var money = 0;
    var goodmsgclass = "";
    var date = "";

    //reset changes when the reset button is clicked

    $("#reset").click(function(){
        $("input").css({"background":"#d6dbdf", "color":"black"});
    });

    //first name = othertf[0]

    $("#fname").on({
        blur:function () {
            fname = document.getElementById("fname").value;
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
            lname = document.getElementById("lname").value;
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
            idnum = document.getElementById("idnum").value;
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
           phone = document.getElementById("phone").value;
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
           email = document.getElementById("email").value;
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
            ccnum = document.getElementById("ccnum").value;
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
               $(".class").css("color","#f1c40f");
               othertf[7] = true;
           }
           chkotf();
       }
    });

    //class

    $("input[name='class']").on({
        change: function () {
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
            }
            chkotf();
        }
    });

    $(".ccdate").on({
       change: function () {
           var ccmonth = $("#ccmonth :selected").val();
           var ccyear = $("#ccyear :selected").val();
           alert(ccmonth+" "+ccyear);
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

function chkotf(){
    alert(othertf);
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