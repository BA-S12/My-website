

function SendMail() {
    var params = {
        from_name :document.getElementById('nameInput').value,
        email_id:document.getElementById('emailInput').value,
        subject:document.getElementById('subjectInput').value,
        message:document.getElementById('messageInput').value
    }
    emailjs.send("service_2kzgm6c", "template_v2zymlq", params)
    .then( 
        alert("The Email send Successfully")

        // function CustomAlert(){
        //     this.alert = function(message,title){
        //         document.body.innerHTML = document.body.innerHTML + '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';
            
        //         let dialogoverlay = document.getElementById('dialogoverlay');
        //         let dialogbox = document.getElementById('dialogbox');
                
        //         let winH = window.innerHeight;
        //         dialogoverlay.style.height = winH+"px";
                
        //         dialogbox.style.top = "100px";
            
        //         dialogoverlay.style.display = "block";
        //         dialogbox.style.display = "block";
                
        //         document.getElementById('dialogboxhead').style.display = 'block';
            
        //         if(typeof title === 'undefined') {
        //             document.getElementById('dialogboxhead').style.display = 'none';
        //         } else {
        //             document.getElementById('dialogboxhead').innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> '+ title;
        //         }
        //         document.getElementById('dialogboxbody').innerHTML = message;
        //         document.getElementById('dialogboxfoot').innerHTML = '<button class="pure-material-button-contained active1" onclick="customAlert.ok()">OK</button>';
        //         }
                
        //         this.ok = function(){
        //         document.getElementById('dialogbox').style.display = "none";
        //         document.getElementById('dialogoverlay').style.display = "none";
        //         }
        //     }
        //     let customAlert = new CustomAlert();
            
    )
}



    
    
