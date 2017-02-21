const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function shiftCheck(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked){
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        console.log('Checking');
        inBetween = !inBetween;
      };

      if (inBetween) {
        checkbox.checked = true;
      };

    })
  }

  lastChecked = this;
}

checkboxes.forEach(box => box.addEventListener('click', shiftCheck));
