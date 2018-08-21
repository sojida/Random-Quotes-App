var quotes = new XMLHttpRequest();
    quotes.onreadystatechange = run;
    
    document.addEventListener("load", run)
    function run() {   
        if (quotes.readyState == 4 && quotes.status == 200){
            var quotesObj = JSON.parse(quotes.responseText);
            console.log(quotesObj);

          
           
            
     
            rnd = randomNum();
            console.log(rnd)
            r = Math.floor(randomNum() / 6.41)
            console.log(r)
            g = Math.floor(randomNum() / 6.41)
            console.log(g)
            b = Math.floor(randomNum() / 6.41)
            console.log(b)

            quoteAut.innerHTML = quotesObj[rnd].quoteAuthor
            quoteTxt.innerHTML = quotesObj[rnd].quoteText
            
            quoteBox.style.backgroundColor = "rgb("+ r +","+ g + "," + b + ")"
            clickButton.style.color = "rgb("+ r +","+ g + "," + b + ")"
            clickTwittwer.style.color = "rgb("+ r +","+ g + "," + b + ")"


            function share(){
               file = window.open('https://twitter.com/intent/tweet?&text=' + encodeURIComponent('"' +  quotesObj[rnd].quoteText + '" ' + "\n" + " -"+ quotesObj[rnd].quoteAuthor ));
               return file
               
            }
            clickTwittwer.addEventListener("click", share)

        }
      
    }

    

quotes.open("GET", "quotes.json", true);
quotes.send();

quoteBox = document.querySelector(".quotes-box");
quoteTxt= quoteBox.querySelector(".quoteAuthor");
quoteAut= quoteBox.querySelector(".quoteText");


clickButton = document.querySelector(".btn");
clickButton.addEventListener("click", run);
clickTwittwer = document.querySelector(".twt");



function randomNum(){
    n = Math.floor (Math.random() * 1641)
    return n
}
