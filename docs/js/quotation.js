var confirm = document.getElementsByClassName("quotConfirmation");

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);

  fetch('https://us-central1-sgglobalrep.cloudfunctions.net/sendQuot', {
      method: 'POST',
      body: formData
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      console.log(data);
      alert('Email sent successfully!');
  })
  .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
      alert('Failed to send email. Please try again later.');
  });
});

var done = document.getElementsByClassName("doneConfirm");
done[0].addEventListener('click', function(){
  setTimeout(function(){
      confirm[0].style.display = "";
  }, 1000);
  location.reload();
})