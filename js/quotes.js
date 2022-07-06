const quotes = [
{
    quote:"What else is love but understanding and rejoicing in the fact that another person lives, acts, and experiences otherwise than we do?",
    author: "Friedrich Nietzsche",
},
{
    quote:"Disgust with dirt can be so great that it prevents us from cleaning ourselves - from justifying ourselves.",
    author: "Friedrich Nietzsche",
},
{
    quote:"He who despises himself nevertheless esteems himself as a self-despiser.",
    author: "Friedrich Nietzsche",
},
{
    quote:"Experience, as a desire for experience, does not come off. We must not study ourselves while having an experience.",
    author: "Friedrich Nietzsche",
},
{
    quote:"Out of passions grow opinions, mental sloth lets these rigidify into convictions.",
    author: "Friedrich Nietzsche",
},
{
    quote:"They punish you for all your virtues. They forgive you entirely--your mistakes.",
    author: "Friedrich Nietzsche",
},
{
    quote:"In a friend one should have ones best enemy. You should be closest to him with your heart when you resist him.",
    author: "Friedrich Nietzsche",
},
{
    quote:"The man of knowledge must be able not only to love his enemies but also to hate his friends.",
    author: "Friedrich Nietzsche",
},
{
    quote:"But thus do I counsel you, my friends: distrust all in whom the impulse to punish is powerful!",
    author: "Friedrich Nietzsche",
},
{
    quote:"Convictions are more dangerous enemies of truth than lies.",
    author: "Friedrich Nietzsche",
},
]; 

const quote = document.querySelector("#quote span:first-child"); 
const author = document.querySelector("#quote span:last-child"); 

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote; 
author.innerText = todaysQuote.author; 

