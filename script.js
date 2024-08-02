function highlight() {
    //Write your code here
	let bold = document.querySelectorAll('strong');

	bold.forEach((ele)=>{
		ele.style.color = 'green'
	})


}


function return_normal() {
    //Write your code here
	let boldElements = document.querySelectorAll('strong');

	boldElements.forEach(ele=>{
		ele.style.color = 'black'
	})

    
}
