console.log("CopiaTesto");

function myFunction() {
  /* Get the text field */
  const copyText = document.getElementById("play.versa-hq.xyz");

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}