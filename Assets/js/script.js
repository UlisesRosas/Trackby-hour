// Display date on screen
function dayOfTheWeek(){
    let day = moment().format('dddd');
    $('#currentDay').text(day);
    console.log(day);
};
dayOfTheWeek();
// query selector to make function call on save btn
$(".save-btn").on("click",function() {
    // gets the id from the button that was cliked
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
}
