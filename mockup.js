//function to select/deselect checkboxes
function toggle(source) {
    checkboxes = document.querySelectorAll('#newsletter');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
};

//function for checkbox validation and redirect to new website

function check_checkbox() 
{  
  if($('#newsletter').is(':checked')) {
    // window.location.href = 'https://bl45immth4.execute-api.us-east-1.amazonaws.com/production/';
    $('#confirmed').show();
    return true;
  } else {
    alert("To proceed you must check the checkboxes");
    return false;
  }
}


//function for timer

var deadline = new Date("Sept 28, 2019 00:00:00").getTime();
 
var x = setInterval( function() { 
    var now = new Date().getTime(); 
    var t = deadline - now; 
    var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((t%(1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((t % (1000 * 60)) / 1000); 
    document.getElementById("time").innerHTML = days + "d "  
    + hours + "h " + minutes + "m " + seconds + "s "; 
        if (t < 0) { 
            clearInterval(x); 
            document.getElementById("").innerHTML = "EXPIRED"; 
        } 
    }, 1000);



//function for confirmation for reservation



