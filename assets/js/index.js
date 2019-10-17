var send_request = (data) => {
  console.log('Sending ' + data)
  var xhr = new XMLHttpRequest();
  xhr.open("POST", 'http://10.100.1.143:5000/hello', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    data: data
}));
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

  const send_button = document.getElementById("send");
  send_button.addEventListener('click', () => {
    console.log('Button clicked')
    let text = document.getElementById("scan").value
    send_request({"scan":text})
  });

});


