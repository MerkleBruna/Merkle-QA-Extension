const toggleButton = () => {
  let button = document.getElementById("switch");
  button.addEventListener('click', () => {
      if(button.value=="true"){
          button.value="false";}
      else if(button.value=="false"){
          button.value="true";}

  })
};

const fireMbox = () => {
    adobe.target.getOffer({
        "mbox": "merkle-qacam",
        "params": {
           "qa-mode": "true"
        },
        "success": function(offer) {
              adobe.target.applyOffer( {
                 "mbox": "merkle-qacam",
                 "offer": offer
              });
        },
        "error": function(status, error) {
            console.log('Error', status, error);
        }
      });
};
