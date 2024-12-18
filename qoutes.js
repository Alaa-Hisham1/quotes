var qoutes=[
    {qoute:"Be yourself; everyone else is already taken.",author:"_ Oscar Wilde"},
    {qoute:"So many books, so little time.",author:"_ Frank Zappa"},
    {qoute:"Be the change that you wish to see in the world.",author:"_ Mahatma Gandhi"},
    {qoute:"In three words I can sum up everything I've learned about life: it goes on.",author:"― Robert Frost"},
    {qoute:"If you tell the truth, you don't have to remember anything.",author:"― Mark Twain"},
    {qoute:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",author:"Maya Angelou"},
    {qoute:"Always forgive your enemies; nothing annoys them so much.",author:"― Oscar Wilde"},  
]
function getQoutes(){
    var GeneratedNumber=Math.floor(Math.random()*qoutes.length)
    console.log(GeneratedNumber)
    var sum=0
    sum=sum+GeneratedNumber
    console.log(sum)
document.getElementById("qoute").innerHTML=qoutes[GeneratedNumber].qoute;
document.getElementById("author").innerHTML=qoutes[GeneratedNumber].author;
}