$(document).ready(function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAfPrXNiyLnAF9X7NscB0kXXAwyz4evTB4",
        authDomain: "newsbusters-14959.firebaseapp.com",
        databaseURL: "https://newsbusters-14959.firebaseio.com",
        projectId: "newsbusters-14959",
        storageBucket: "newsbusters-14959.appspot.com",
        messagingSenderId: "801909748364"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    var analizedWord = "";
    var positivityScore = "";

    var word = {
        value: "Clinton",
        score: 50
    }

    // database.ref().push(word);

    // Attaching APIs

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC&limit=10";

    // Performing our AJAX GET request
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        // After the data comes back from the API
        .done(function(response) {
            console.log(response);
        });

    //split string into array of words dropping punctuation
    var textBlock = "The quick; brown, brown fox jumped. over the lazy dog"
    var arrayOfWords = textBlock.split(/\W+/);

    // convert the array of words to lower case
    for (var i = 0; i < arrayOfWords.length; i++) {
        arrayOfWords[i] = arrayOfWords[i].toLowerCase();
    }

    console.log('The original string is: "' + textBlock + '"');
    console.log(arrayOfWords);

    //create an object that counts the words in an array of words 
    var wordFrequency = _.countBy(arrayOfWords);
    console.log(wordFrequency);

    // Built by LucyBot. www.lucybot.com
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
        'begin_date': "20170101",
        'end_date': "20170102"
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        console.log(result);
    }).fail(function(err) {
        throw err;
    });
});
