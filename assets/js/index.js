var is_good = (xhr, data) => {
  console.log(xhr.status)
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log('Request sent');
  }else{
    console.log('Request failed, rescheduling')
    setTimeout(function() {send_request(data)}, 10000)    
  }
}

var send_request = (data) => {
  console.log('Sending ' + data)
  var xhr = new XMLHttpRequest();
  xhr.open("POST", 'http://10.100.1.143:5000/hello', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  try{
    xhr.send(JSON.stringify({data: data}));
  }catch(error){
    console.log('Error on sending ${error}')
  }

  setTimeout(function() {is_good(xhr, data) }, 1000);


}

window.addEventListener('load', ()=>{
  const sounds=document.querySelectorAll(".sound");
  const pads=document.querySelectorAll(".pads div");

  if('serviceWorker' in navigator){
    try {
      navigator.serviceWorker.register('serviceWorker.js');
      console.log("Service Worker Registered");
    } catch (error) {
      console.log("Service Worker Registration Failed");
    }
  }
});

  const send_button = document.getElementById("send");
  
  send_button.addEventListener('click', () => {
    
    let text = document.getElementById("scan").value
    send_request({"scan":text})
    

});


