    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption

    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    function triggerModal(txt) {

      modal.style.display = "block";
      modalImg.src = txt;
      // captionText.innerHTML = this.alt;

    }

    // Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    modal.onclick = function() {
      modal.style.display = "none";
    }

    span.onclick = function() {
    modal.style.display = "none";
    }
