1.Project description:-

    Made a fully responsive website on the different charactes of the show Rick and Morty calling it as Rick and Monty wiki.

    Made three different pages for three different funcctions-

       a=> First page to display a 3X2 grid view of characters and implemented pagination.

       b=> Second added a button to fetch a random character everytime whenever the button is clicked.

       c=> Third for full details of a character made a seperate page, whenever someone will click on more details on the card of a character, they will be redirected to the next page and will get the full details of the characters.


After this I added a fully functional clock on the footer of every page.

2.Setup instructions:-

    Started with the main page, fetching the whole api and storing every characters data in an array, so there will be no api calls after loading the page for the first time. Then implemented pagination to get a 3X2 grid view on every page handling all possible edge cases.

    After completing the main page started working on see more details button of every character where I used local storage to store the id of the character clicked and then fetched the data of that character and appended it to the container to show every detail of characters

    After that implemented random character fetching button using using Math.random to generate a unique id everytime the button is clicked.

    After implementing all the functionalities started to style every page to have a style of their own but kept it simple gave it a color combination of Rick and Morty logo to make it more interesting to the viewers of the show and added responsiveness.


    3.Any challenges faced and how you overcame them:-

        Started working on the website without a proper roadmap due to which my functions kept fetching errors, after some attempts I sat and made a roadmap and started working and made progress, got stuck while implementing see details functions then my cousin gave me a hint, at first i didn't got it but when Iwent through implementing it, I understood where he was pointing and successfully implemented the function.

        The other challenge for me was to add the clock, I knew about the new Date() function but didn't knew how to get hours, minutes, day, year etc. seperately for this I'll not lie, I asked ChatGpt about it and got the idea from there of how to destructure Date() function but I had the Idea of implementing a functional clock by using setInterval and Span tag, did the same set the interval of 1000m/s and got the fully fuctional clock.



        Netlify Link;-
        https://rickandmortywikki.netlify.app/