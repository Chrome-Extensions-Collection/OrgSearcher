	
(function () {
	var forkButton = document.querySelector('.octicon-repo-forked').closest(".btn.btn-sm.btn-with-count");
	forkButton.style.color = 'green';
	forkButton.addEventListener('click', sendData);
		
	function sendData() {
		// alert("Hello! I am an alert box appeared after a click on a button!");
		document.getElementById('searchInput').focus(); 
		setTimeout ( function timeoutFunction () {
        /* show the cursor */
        document.getElementById('searchInput').focus(); 
    }, 100);
	}
	


	
	var children = document.querySelector('.anim-fade-in.fast.Box.Box--overlay.d-flex.flex-column').children;
	for (var i=0; i < children.length; i++) {
		// alert(children[i].className);
		if (children[i].className = "Box-header") {
			secondChild = children[i];
			secondChild.insertAdjacentHTML('afterend', '<input type="text" id="searchInput"  placeholder="Search for names..">');
			// alert(secondChild.parentNode.tagName); // just to test
			break;
		}
	}
	
	var searchInput = document.getElementById('searchInput');
	searchInput.addEventListener('keyup',searchNames,false);
	
	
var iconUrl = chrome.runtime.getURL("searchicon.png");
// alert(iconUrl);
searchInput.style.backgroundImage = 'url(' + iconUrl + ')';
	
	
	// https://www.w3schools.com/howto/howto_js_filter_lists.asp
	function searchNames() {
	  // Declare variables
	  var input, filter, parentNode, ul, li, a, i, txtValue;
	  input = document.getElementById('searchInput');
	  filter = input.value.toUpperCase();
	  // alert(input.value);
	  parentNode = document.querySelector('.overflow-auto.text-center');
	  ul = parentNode.querySelectorAll('.d-flex.flex-column.flex-items-start');
	  if(ul.length > 1) {
		  li = ul[1].getElementsByTagName('form');
	  }
	  else {
		  li = ul[0].getElementsByTagName('form');
	  }	  
	  // alert(li.length);

	  // Loop through all list items, and hide those who don't match the search query
	  for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("div")[0];
		txtValue = a.textContent || a.innerText;
		// alert(txtValue);
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
		  li[i].style.display = "";
		} else {
		  li[i].style.display = "none";
		}
	  }
	}
		
})(); 