// function plaindrome(str){
//     const len = string.length;
//     for (let i = 0; i<len/2 ; i++) {
//     if(string[i]!==string[len-1-i]){
//         console.log(`"${string}": It is not a palindrome `);
//     }
//     }
//     console.log(`"${string}": It is a palindrome `);
// }

// plaindrome("141");
// plaindrome("madam");
// plaindrome("City");
// plaindrome("dad");


// function to reverse the string
function reverse(str) {
	// variable holds reverse string
	let rev_str = "";
	for (let i = str.length - 1; i >= 0; i--) {
		rev_str += str[i];
	}
	// return reverse string
	return rev_str;
}

// function checking string is palindrome or not
function is_palindrome(str) {
	reverse_str = reverse(str);
	// condition checking if reverse str is
	// same as string it is palindrome
	// else not a palindrome
	if (reverse_str === str) {
		console.log(`Given string: "${str}" => is palindrome `);
	}
	else {
		console.log(`Given string: "${str}" =>  is not palindrome`)
	}
}
// let test = "hellolleh";
is_palindrome("dad");
is_palindrome("cricket");
is_palindrome("madam");
is_palindrome("city");
is_palindrome("141");
