const QUOTESOURCE = [
    {
        quote: "Be yourself, everyone else is already taken.",
        author: "Oscar Wilde"
    }, {
        quote: "I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.",
        author: "Marilyn Monroe"
    }, {
        quote: "Two things are infinite: the universe and human stupidity; and I am not sure about the universe.",
        author: "Albert Einstein"
    }, {
        quote:"So many books, so little time.",
        author: "Frank Zappa"
    }, {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    }, {
        quote: "Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.",
        author: "Bernard M. Baruch"
    }, {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    }, {
        quote: "If you tell the truth, you dont have to remember anything.",
        author: "Mark Twain"
    }, {
        quote: "I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        author: "Maya Angelou"
    }, {
        quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate:  only love can do that.",
        author: "Martin Luther King Jr"
    }
];
window.onload = init;
function init() {
    generateQuote()
}

function generateQuote() {
    let quoteSize = QUOTESOURCE.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuoteData = QUOTESOURCE[randomIndex];

    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text="

    // Add the Quote
    let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
    twitterLink += quoteInApiFormat

    //Add the Author
    let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
    twitterLink += " - " + authorInApiFormat

    document.getElementById("tweet-quote").href = twitterLink;
    document.getElementById("text").innerText = randomQuoteData.quote;
    document.getElementById("author").innerText = randomQuoteData.author;

}