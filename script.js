
const killers = {
    manson: {
        name: '<h2>You are Charles Manson.</h2>',
        info: '<p>You are a social butterfly and can influence others very easily. You are charismatic but can have trouble showing empathy for others. You refuse to take responsibility for your actions, and are dangerous from a distance. Manson was responsible for the murders of more than 12 people.</p>',
        image: '<img src="assets/manson.jpg">'
    },
    aileen: {
        name: '<h2>You are Aileen Wuornos.</h2>',
        info: '<p>You are a vengeful person with a thirst for blood. You have very little remorse and live life by your own rules. Aileen Wuornos was responsible for murdering 7 men in cold blood between 1989 and 1990.</p>',
        image: '<img src="assets/aileen.jpg">'
    }, 
    dahmer: {
        name: '<h2>You are Jeffrey Dahmer.</h2>',
        info: '<p>You have a high chance at being a psychopathic criminal who would stop at nothing to get you want. You are an oddball, that\'s for sure. Dahmer was responsible for the murders of 17 people, and sentenced to death in 1994.</p>',
        image: '<img src="assets/dahmer.jpg">'
    }, 
    zodiac: {
        name: '<h2>You are the Zodiac Killer.</h2>',
        info: '<p>You are an elusive and thrill-seeking person.  You like being in the shadows, yet won’t shy away from the attention behind the scenes. You haven’t been caught yet but taking this quiz probably wasn’t a bright idea then, was it?</p>',
        image: '<img src="assets/zodiac.jpg">'
    }
}


    //Enable smooth scrolling

$(function () {
    $('a').smoothScroll({

    });

    //Event listener for submission of the form

    
    $('form').on('submit', function(event){

        event.preventDefault(); 

        //retrieve value of checked input for each question


        const answer1 = Number($("input[name=q1]:checked").val());
        const answer2 = Number($("input[name=q2]:checked").val());
        const answer3 = Number($("input[name=q3]:checked").val());
        const answer4 = Number($("input[name=q4]:checked").val());
        const answer5 = Number($("input[name=q5]:checked").val());
        const answer6 = Number($("input[name=q6]:checked").val());


        const answerSum = answer1 + answer2 + answer3 + answer4 + answer5 + answer6;

        if (answerSum >= 2101 && answerSum <= 2800) {
            $('.results').html(killers.manson.name + killers.manson.info + killers.manson.image);
            console.log('it works!');
        };

        if (answerSum >= 2801 && answerSum <= 4200) {
            $('.results').html(killers.dahmer.name + killers.dahmer.info + killers.dahmer.image);
            console.log('it works!');
        };

        if (answerSum >= 1400 && answerSum <= 1800) {
            $('.results').html(killers.aileen.name + killers.aileen.info + killers.aileen.image);
            console.log('it works!');
        };

        if (answerSum >= 1801 && answerSum <= 2100) {
            $('.results').html(killers.zodiac.name + killers.zodiac.info + killers.zodiac.image);
            console.log('it works');
        };

       
        console.log(answerSum);

    })

    //Scroll down to the results upon form submission//

    $('#button').on('click', function (e) {
        var target = $('.results').text();
        $('html, body').animate({
            scrollTop: $('#button' + target).offset().top
        }, 1500);
    });


    //Reset the form and scroll back to the top//


    $('.reset-btn').on('click', function (e) {

    $('html,body').animate(
        { scrollTop: 0 }, 1000);

    });

});



// create a new array which lists all the values

// write an if statement that says 'if between these numbers, display this property of Answer object'



// check that all values are checked -- good

//  Add values of checked items

// Based on checked values, display result that matches the range