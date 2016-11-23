//Total word count of the submitted text
//Unique word count of the submitted text
//Average word length in characters of the submitted text
//Average sentence length in characters of the submitted text.

$(document).ready(function(){	
	//add click event to button
	$('button').on('click', function(event){
		//define a variable to store what was typed into the field
		var userText = $(event.currentTarget).prev('#user-text');
		//set the variable to become an array
		$(userText).value;
		//TOTAL WORD COUNT --count the total number of words in the array and show the number
		var arrayLength = userText.length;
		console.log(arrayLength);
		//UNIQUE WORDS ---count how many unique words there are
		//first, make a loop that looks at each word and only counts the first instance
		//then show that number
		var uniqueWords = function(){
			for (i=userText[0]; i<userText.length; i++){
				var totalUniqueWds = 0
				if (i === userText[0]){  //userText[0] is incorrect, needs to loop over the array)
					totalUniqueWds+=1;
				}else{
						continue;
					}
				console.log(totalUniqueWds);
				}
			}
		})
		//AVERAGE WORD LENGTH --splice the original array to find out how many letters there are, ignore spaces
		//divide the number of letters by the variable arrayLength to get the average word length
		
		
		//AVERAGE SENTENCE LENGTH --splice the array using periods as the breakpoints
		//then add up the amount of words within the sentences using spaces as break points
	});

