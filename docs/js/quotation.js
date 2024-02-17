var confirm = document.getElementsByClassName("quotConfirmation");

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  setTimeout(function(){
    confirm[0].style.display = "block";
   }, 2000);
  console.log("Successfully got into the eventlistener");

  var formData = {
    sender: document.getElementById('email').value,
    naam : document.getElementById('name').value,
    msg : document.getElementById('msg').value,
    contactt : document.getElementById('phone').value,
    product : document.getElementById('producti').value,
    quantity : document.getElementById('quantity').value
  } 

  fetch('https://us-central1-sgglobalrep.cloudfunctions.net/sendQuot', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json' // Set content type to JSON
    },
    body: JSON.stringify(formData) // Convert formData to JSON string
  })
  .then(response => {
    console.log("User Data: " + JSON.stringify(formData));
      if (!response.ok) {
          throw new Error('2 : Not okay Response!');
      }else{
          console.log('2: Okday Response');
      }
      return response.json();
  })
  .then(data => {
      if(data.status == 200){
        console.log('3: Email sent successfully!');
      }else if(data.status == 500){
        throw new Error('3: Email sending functions failed! Response: ');
      }else{
        console.log("3: Response status not between 200 and 405");
      }
      console.log("4: " + data);
  })
  .catch(error => {
      console.error('5: There was a problem with your fetch operation:', error);
      console.log('6: Failed to send email. Please try again later.');
  });
});

var done = document.getElementsByClassName("doneConfirm");
done[0].addEventListener('click', function(){
  setTimeout(function(){
      confirm[0].style.display = "";
  }, 1000);
  location.reload();
})