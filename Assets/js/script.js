const textEl = $('.description');

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

// added persistant data to each time slot
for(let i = 9; i <= 17; i++) {
    // retrievs data from local storage for each slot
    $(`#${i}`).siblings('.description').val(localStorage.getItem(`${i}`));
   
    // store current hour in variable
    let currentHour = moment().format('h');
    // turn string in to an actual number to compare to
    currentHour = parseInt(currentHour);
    
    // offset index by nine and store in variable
    let textIndex = textEl[i - 9];
    
    // current hour is greater than current index
    if (currentHour > i) {
        //add class to text area
        textIndex.classList.add("in-the-past");
    }
    // current hour is equal to the text area
    else if (currentHour === i) {
        // add clas to the text
        textIndex.classList.add("in-the-present");

    }else {
        // If any other condition add class to the text area
        textIndex.classList.add("in-the-future");
        
    }
    
}


