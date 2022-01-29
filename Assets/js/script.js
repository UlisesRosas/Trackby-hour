const textEl = $('.description');
console.log(textEl);

// Display date on screen
function dayOfTheWeek(){
    // used moment js method to get and format date as a single weekday
    let day = moment().format('dddd');
    // displays the day at this ID
    $('#currentDay').text(day);
};
dayOfTheWeek();

// query selector to make function call on save btn
$(".save-btn").on("click",function() {
    // gets the id from the button that was cliked through the use of "this"
    const time = $(this).attr('id');
    // gets the value of the text area which is a sibling to the button b/c its in the same div
    const value = $(this).siblings('.description').val();
    // stored the key value pair in to local storag
    localStorage.setItem(time, value)
});

// will most likely need to put an if statement to deal with the past, present, future
// collor situation and a momentsjs method to compare task time vs current time
// added persistant data to each time slot
for(let i = 9; i <= 17; i++) {
    // retrievs data from local storage for each slot
    $(`#${i}`).siblings('.description').val(localStorage.getItem(`${i}`));
    
    let currentHour = moment().format('h');
    currentHour = parseInt(currentHour);
    // $(textEl).removeClass('in-the-past in-the-present in-the-future')
     let textIndex = textEl[i - 9];
    if (currentHour > i) {
        console.log('gray');
         console.log(textIndex);
        // .addClass(".in-the-past");
        textIndex.classList.add("in-the-past");

    }
    else if (currentHour === i) {
        console.log('red');
        textIndex.classList.add("in-the-present");

    }else {
        console.log("green");
        textIndex.classList.add("in-the-future");
        
    }
    
}


