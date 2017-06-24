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



    //split string into array of words dropping punctuation
    var sentence = "The quick; brown, brown fox jumped. over the lazy dog"
    var arrayOfWords = sentence.split(/\W+/);

    console.log('The original string is: "' + sentence + '"');
    console.log(arrayOfWords);

    //create an object that counts the words in an array of words 
    var wordFrequency = _.countBy(arrayOfWords);
    console.log(wordFrequency);

    var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

    // These variables will hold the results we get from the user's inputs via HTML
    var searchTerm = "";
    var numResults = 0;
    var startYear = 0;
    var endYear = 0;

    // queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
    // the user hits the search button
    var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
        authKey + "&q=";

    // Counter to keep track of article numbers as they come in
    var articleCounter = 0;

    // FUNCTIONS
    // ==========================================================

    // This runQuery function expects two parameters:
    // (the number of articles to show and the final URL to download data from)
    function runQuery(numArticles, queryURL) {

        // The AJAX function uses the queryURL and GETS the JSON data associated with it.
        // The data then gets stored in the variable called: "NYTData"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(NYTData) {

            // Logging the URL so we have access to it for troubleshooting
            console.log("------------------------------------");
            console.log("URL: " + queryURL);
            console.log("------------------------------------");

            // Log the NYTData to console, where it will show up as an object
            console.log(NYTData);
            console.log("------------------------------------");


            // Built by LucyBot. www.lucybot.com
            /*var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
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
            });*/
        });
    };
    var finalURL = queryURL + 'trump';
    var nytResults = runQuery(1, finalURL);
    console.log("NYT Call Results: " + nytResults);
});
