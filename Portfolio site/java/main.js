
const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span');
const ham_menu =  document.querySelector('.ham-menu');


// creating the call back event to open and close the menu button
hamburger.addEventListener('click', () => {
  hamburger_icon.innertext = hamburger_icon.innerText === 'menu'
        ? 'close'
        : 'menu';

    ham_menu.classList.toggle('is-open');    
})









 
let i = 0;
let txt = 'This is an example of using HTML, CSS and JS to transform an element, by adding the onmouseover event to the step six video tag and styling the output of the empty paragraph along with transforming the hover rotation we can create a simple effect with just a little HTML, CSS and JavaScript.';
let speed = 100;


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type3").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



document.getElementById("copyright-year").innerHTML = new Date().getFullYear();


///////////////////////////////// CLOCK  /////////////////////////

function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh > 12){
       session = "PM";
   }

   hh = (hh < 10) ? '0' + hh : hh;
   mm = (mm < 10) ? '0' + mm : mm;
   ss = (ss < 10) ? '0' + ss : ss;


   let time = hh + ":" + mm + ":" + ss + " " + session;

   document.getElementById('clock').innerText = time;
    setTimeout(function(){ currentTime() },  1000);
}
currentTime();






// create a quoteApi variable and connect it to the <p> tag with the ID #quotes
// create a authorApi variable and connect it to the <h3> tag with the ID #author
// create a btnApi variable and connect it to the <h3> tag with the ID #generate
let quoteApi = document.getElementById('quotes');
let authorApi = document.getElementById('author');
let btnApi = document.getElementById('generate');
// create the const url that links to the random quotes API
const url = 'https://api.quotable.io/random';

let getQuote = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) =>  {
        quoteApi.innerHTML = item.content;
        authorApi.innerHTML = item.author;
    });

}
window.addEventListener('load', getQuote);
btnApi.addEventListener('click', getQuote);




const inspire = [ 
    
  '“It is hard to fail but it is worse never to have tried to succeed.” —Theodore Roosevelt',
  '“That which does not kill us makes us stronger.” —Friedrich Nietzsche',
  '“I have not failed. I’ve just found 10,000 ways that won’t work.” —Thomas A. Edison',
  '“Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice.” —Wayne Dyer',
  '“The future belongs to those who believe in the beauty of their dreams.” —Eleanor Roosevelt',
  '“I challenge you to make your life a masterpiece. I challenge you to join the ranks of those people who live what they teach, who walk their talk.” —Anthony Robbins',
  '“The greater damage for most of us is not that our aim is too high and we miss it, but that it it too low and we reach it.” —Michelangelo',
  '“Do not go where the path may lead , go instead where there is no path and leave a trail.” —Ralph Waldo Emerson',
  'Success is not final, failure is not fatal: it is the courage to continue that counts. —Winston Churchill',
  '“I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.’” —Muhammad Ali',
  '“I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game-winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.” —Michael Jordan',
  '“The two most important days in your life are the day you are born and the day you find out why.” —Mark Twain',
  '“When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.” —Henry Ford',
  '“Live each day as if your life had just begun.” —Johann Wolfgang Von Goethe',
  '“The journey of a thousand miles begins with one step.” —Lao Tzu',
  '“Do one thing every day that scares you.” —Eleanor Roosevelt',
  '​“You can waste your lives drawing lines. Or you can live your life crossing them.” —Shonda Rhimes',
  '“Never bend your head. Always hold it high. Look the world straight in the eye.” —Helen Keller',
  '“My mission in life is not merely to survive, but to thrive.”  —Maya Angelou',
  '“The battles that count aren’t the ones for gold medals. The struggles within yourself—the invisible battles inside all of us—that’s where it’s at.” —Jesse Owens'

]
function inspireQuotes() {
  let randomNumber = Math.floor(Math.random() * (inspire.length));
  document.getElementById('quoteDisplay').innerHTML = inspire[randomNumber];
}




const positive = [ 
  
  '“The most important thing is to try and inspire people so that they can be great in whatever they want to do.” —Kobe Bryant',
  '“Keep your face to the sunshine and you cannot see a shadow.” —Helen Keller',
  '“If you look at what you have in life, you’ll always have more.” —Oprah Winfrey',
  '“If you’re not making mistakes, then you’re not doing anything. I’m positive that a doer makes mistakes.” —John Wooden',
  ' “Yesterday is not ours to recover, but tomorrow is ours to win or lose.” —Lyndon B. Johnson',
  '“Act as if what you do makes a difference. It does.” —William James',
  '“Believe you can and you’re halfway there.” —Theodore Roosevelt',
  '“If I cannot do great things, I can do small things in a great way.” —Martin Luther King Jr.',
  '“When you have a dream, you’ve got to grab it and never let go.” —Carol Burnett',
  '“You are never too old to set another goal or to dream a new dream.” —C.S. Lewis',
  '“Try to be a rainbow in someone else’s cloud.” —Maya Angelou',
  '“Inspiration comes from within yourself. One has to be positive. When you’re positive, good things happen.” —Deep Roy',
 '“The most wasted of days is one without laughter.”  —E. E. Cummings',
  '“It isn’t where you came from. It’s where you’re going that counts.”  —Ella Fitzgerald',
  '“Stay close to anything that makes you glad you are alive.” —Hafez',
  '“Some people look for a beautiful place. Others make a place beautiful.” —Hazrat Inayat Khan',
 ' “    Happiness often sneaks in through a door you didn’t know you left open.” —John Barrymore',
  '“You don’t always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.” —Mandy Hale',
 ' “You are enough just as you are.” —Meghan Markle',
 ' “The bad news is time flies. The good news is you’re the pilot.” —Michael Altshuler',
'  “    Dreaming, after all, is a form of planning.” —Gloria Steinem',
 ' “If you can dream it, you can achieve it.” —Zig Ziglar',
 ' “The power of imagination makes us infinite.” —John Muir',
 ' “Be who you are and say what you feel, because those who ind don’t matter and those who matter don’t mind.” —Dr. Suess   '

]
function posQuotes() {
  let randomNumber = Math.floor(Math.random() * (positive.length));
  document.getElementById('quoteDisplay').innerHTML = positive[randomNumber];
}





const fame = [ 
  '“The best and most beautiful things in the world cannot be seen or even touched – they must be felt with the heart.” —Helen Keller',
  '“Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.” —Mark Twain',
  '“Don’t cry because it’s over, smile because it happened.” —Dr. Seuss',
  '“No one can make you feel inferior without your consent.” —Eleanor Roosevelt',
   '“I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” —Maya Angelou',
  '“To live is the rarest thing in the world. Most people exist, that is all.” —Oscar Wilde',
  '“If you don’t stand for something you will fall for anything.” —Malcolm X',
  '“You must be the change you wish to see in the world.” —Mahatma Gandhi',
  '“Life is what happens when you’re busy making other plans.” —John Lennon',
  '“Not all of us can do great things. But we can do small things with great love.” —Mother Teresa',
  '“When you reach the end of your rope, tie a knot and hang on.” —Abraham Lincoln',
  '“You miss 100% of the shots you don’t take.” —Wayne Gretzky',
  '“You only pass through this life once, you don’t come back for an encore.” —Elvis Presley',
  '“Unless you try to do something beyond what you have already mastered, you will never grow.” —Ralph Waldo Emerson',
  '“The greatest glory in living lies not in never falling, but in rising every time we fall.” —Nelson Mandela',
  '“The way to get started is to quit talking and begin doing.” —Walt Disney”',
  '“It does not matter how slowly you go as long as you do not stop.” —Confucius',
  '“Tell me and I forget. Teach me and I remember. Involve me and I learn.” —Benjamin Franklin',
  '“In the end, it’s not the years in your life that count. It’s the life in your years.” —Abraham Lincoln',
  '“Never let the fear of striking out keep you from playing the game.” —Babe Ruth',
  '“Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.” —Robert Frost',
  '“Life is not measured by the number of breaths we take, but by the moments that take our breath away.” —Maya Angelou',
  '“Do, or do not. There is no try.” —Yoda'

]
function fameQuotes() {
  let randomNumber = Math.floor(Math.random() * (fame.length));
  document.getElementById('quoteDisplay').innerHTML = fame[randomNumber];
}





const friend = [ 
  '“Friendship is born at that moment when one person says to another: “What! You too? I thought I was the only one.” —C.S. Lewis',
  '“A real friend is one who walks in when the rest of the world walks out.” —Walter Winchell',
  '“True friendship comes when the silence between two people is comfortable.” —David Tyson',
 ' “Don’t make friends who are comfortable to be with. Make friends who will force you to lever yourself up.” —Thomas J. Watson',
  '“A friend is someone who understands your past, believes in your future, and accepts you just the way you are.” —Unknown',
  '“Ultimately the bond of all companionship, whether in marriage or in friendship, is conversation.” —Oscar Wilde',
  '“A true friend never gets in your way unless you happen to be going down.” —Arnold H. Glasgow',
  '“I don’t need a friend who changes when I change and who nods when I nod; my shadow does that much better.” —Plutarch',
  '“The real test of friendship is can you literally do nothing with the other person? Can you enjoy those moments of life that are utterly simple?” —Eugene Kennedy',
  '“A loyal friend laughs at your jokes when they’re not so good, and sympathizes with your problems when they’re not so bad.” —Arnold H. Glasgow',
  '“Friendship is the hardest thing in the world to explain. It’s not something you learn in school. But if you haven’t learned the meaning of friendship, you really haven’t learned anything.” —Muhammad Ali',
  '“Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.” —Marcel Proust',
  '“Tis the privilege of friendship to talk nonsense, and to have her nonsense respected.” —Charles Lamb',
  '“If you go looking for a friend, you’re going to find they’re very scarce. If you go out to be a friend, you’ll find them everywhere.” —Zig Ziglar',
  '“Friendship is the only cement that will ever hold the world together.” —Woodrow Wilson',
  '“The most beautiful discovery true friends make is that they can grow separately without growing apart.” —Elisabeth Foley',
  '“Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.” —Oprah Winfrey',
  '“Each friend represents a world in us, a world possibly not born until they arrive, and it is only by this meeting that a new world is born.” —Anais Nin',
 ' “A friend knows the song in my heart and sings it to me when my memory fails.” —Donna Roberts',
  '“If you make friends with yourself you will never be alone.” —Maxwell Maltz'
]

function friendQuotes() {
  let randomNumber = Math.floor(Math.random() * (friend.length));
  document.getElementById('quoteDisplay').innerHTML = friend[randomNumber];
}



const family = [ 
  '“Call it a clan, call it a network, call it a tribe, call it a family: Whatever you call it, whoever you are, you need one.”  —Jane Howard',
  '“Family means nobody gets left behind or forgotten.” —David Ogden Stiers',
  '“We may have our differences, but nothing’s more important than family.”  —Coco',
   '“The bond that links your true family is not one of blood, but of respect and joy in each other’s life.” —Richard Bach',
  '“Being a family means you are a part of something very wonderful. It means you will love and be loved for the rest of your life.” —Lisa Weed',
  '“Family faces are magic mirrors. Looking at people who belong to us, we see the past, present, and future.” —Gail Lumet Buckley',
  'Families are the compass that guides us. They are the inspiration to reach great heights, and our comfort when we occasionally falter.” —Brad Henry',
  '“Everyone needs a house to live in, but a supportive family is what builds a home.” —Anthony Liccione',
  'There’s nothing that makes you more insane than family. Or more happy, or more exasperated, or more secure.” —Jim Butcher',
  '“Family is a life jacket in the stormy sea of life.” —J.K. Rowling',
  '“When all the dust is settled and all the crowds are gone, the things that matter are faith, family, and friends.” —Barbara Bush',
  '“In family life, love is the oil that eases friction, the cement that binds closer together, and the music that brings harmony.” —Friedrich Nietzsche',
  '“Other things may change us, but we start and end with the family.” —Anthony Brandt',
  '“Having somewhere to go is home. Having someone to love is family. And having both is a blessing.”  —Unknown',
  '“The only rock I know that stays steady, the only institution I know that works, is the family.” —Lee Iacocca',
  '“The world, we’d discovered, doesn’t love you like your family loves you.” —Louis Zamperini',
  '“You go through life wondering what is it all about but at the end of the day it’s all about family.” —Rod Stewart',
  '“Rejoice with your family in the beautiful land of life.” —Albert Einstein',
  '“Our most basic instinct is not for survival but for family.” —Paul Pearsall',
  '“You don’t choose your family. They are God’s gift to you, as you are to them.” —Desmond Tutu',
]

function familyQuotes() {
  let randomNumber = Math.floor(Math.random() * (family.length));
  document.getElementById('quoteDisplay').innerHTML = family[randomNumber];
}



const randomised = [ 
  '“It is hard to fail but it is worse never to have tried to succeed.” —Theodore Roosevelt',
  '“That which does not kill us makes us stronger.” —Friedrich Nietzsche',
  '“I have not failed. I’ve just found 10,000 ways that won’t work.” —Thomas A. Edison',
  '“Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice.” —Wayne Dyer',
  '“The future belongs to those who believe in the beauty of their dreams.” —Eleanor Roosevelt',
  '“I challenge you to make your life a masterpiece. I challenge you to join the ranks of those people who live what they teach, who walk their talk.” —Anthony Robbins',
  '“The greater damage for most of us is not that our aim is too high and we miss it, but that it it too low and we reach it.” —Michelangelo',
  '“Do not go where the path may lead , go instead where there is no path and leave a trail.” —Ralph Waldo Emerson',
  'Success is not final, failure is not fatal: it is the courage to continue that counts. —Winston Churchill',
  '“I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.’” —Muhammad Ali',
  '“I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game-winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.” —Michael Jordan',
  '“The two most important days in your life are the day you are born and the day you find out why.” —Mark Twain',
  '“When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.” —Henry Ford',
  '“Live each day as if your life had just begun.” —Johann Wolfgang Von Goethe',
  '“The journey of a thousand miles begins with one step.” —Lao Tzu',
  '“Do one thing every day that scares you.” —Eleanor Roosevelt',
  '​“You can waste your lives drawing lines. Or you can live your life crossing them.” —Shonda Rhimes',
  '“Never bend your head. Always hold it high. Look the world straight in the eye.” —Helen Keller',
  '“My mission in life is not merely to survive, but to thrive.”  —Maya Angelou',
  '“The battles that count aren’t the ones for gold medals. The struggles within yourself—the invisible battles inside all of us—that’s where it’s at.” —Jesse Owens',
  '“Call it a clan, call it a network, call it a tribe, call it a family: Whatever you call it, whoever you are, you need one.”  —Jane Howard',
  '“Family means nobody gets left behind or forgotten.” —David Ogden Stiers',
  '“We may have our differences, but nothing’s more important than family.”  —Coco',
   '“The bond that links your true family is not one of blood, but of respect and joy in each other’s life.” —Richard Bach',
  '“Being a family means you are a part of something very wonderful. It means you will love and be loved for the rest of your life.” —Lisa Weed',
  '“Family faces are magic mirrors. Looking at people who belong to us, we see the past, present, and future.” —Gail Lumet Buckley',
  'Families are the compass that guides us. They are the inspiration to reach great heights, and our comfort when we occasionally falter.” —Brad Henry',
  '“Everyone needs a house to live in, but a supportive family is what builds a home.” —Anthony Liccione',
  'There’s nothing that makes you more insane than family. Or more happy, or more exasperated, or more secure.” —Jim Butcher',
  '“Family is a life jacket in the stormy sea of life.” —J.K. Rowling',
  '“When all the dust is settled and all the crowds are gone, the things that matter are faith, family, and friends.” —Barbara Bush',
  '“In family life, love is the oil that eases friction, the cement that binds closer together, and the music that brings harmony.” —Friedrich Nietzsche',
  '“Other things may change us, but we start and end with the family.” —Anthony Brandt',
  '“Having somewhere to go is home. Having someone to love is family. And having both is a blessing.”  —Unknown',
  '“The only rock I know that stays steady, the only institution I know that works, is the family.” —Lee Iacocca',
  '“The world, we’d discovered, doesn’t love you like your family loves you.” —Louis Zamperini',
  '“You go through life wondering what is it all about but at the end of the day it’s all about family.” —Rod Stewart',
  '“Rejoice with your family in the beautiful land of life.” —Albert Einstein',
  '“Our most basic instinct is not for survival but for family.” —Paul Pearsall',
  '“You don’t choose your family. They are God’s gift to you, as you are to them.” —Desmond Tutu',
  '“The most important thing is to try and inspire people so that they can be great in whatever they want to do.” —Kobe Bryant',
  '“Keep your face to the sunshine and you cannot see a shadow.” —Helen Keller',
  '“If you look at what you have in life, you’ll always have more.” —Oprah Winfrey',
  '“If you’re not making mistakes, then you’re not doing anything. I’m positive that a doer makes mistakes.” —John Wooden',
  ' “Yesterday is not ours to recover, but tomorrow is ours to win or lose.” —Lyndon B. Johnson',
  '“Act as if what you do makes a difference. It does.” —William James',
  '“Believe you can and you’re halfway there.” —Theodore Roosevelt',
  '“If I cannot do great things, I can do small things in a great way.” —Martin Luther King Jr.',
  '“When you have a dream, you’ve got to grab it and never let go.” —Carol Burnett',
  '“You are never too old to set another goal or to dream a new dream.” —C.S. Lewis',
  '“Try to be a rainbow in someone else’s cloud.” —Maya Angelou',
  '“Inspiration comes from within yourself. One has to be positive. When you’re positive, good things happen.” —Deep Roy',
 '“The most wasted of days is one without laughter.”  —E. E. Cummings',
  '“It isn’t where you came from. It’s where you’re going that counts.”  —Ella Fitzgerald',
  '“Stay close to anything that makes you glad you are alive.” —Hafez',
  '“Some people look for a beautiful place. Others make a place beautiful.” —Hazrat Inayat Khan',
 ' “    Happiness often sneaks in through a door you didn’t know you left open.” —John Barrymore',
  '“You don’t always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.” —Mandy Hale',
 ' “You are enough just as you are.” —Meghan Markle',
 ' “The bad news is time flies. The good news is you’re the pilot.” —Michael Altshuler',
'  “    Dreaming, after all, is a form of planning.” —Gloria Steinem',
 ' “If you can dream it, you can achieve it.” —Zig Ziglar',
 ' “The power of imagination makes us infinite.” —John Muir',
 ' “Be who you are and say what you feel, because those who ind don’t matter and those who matter don’t mind.” —Dr. Suess   ',
 '“The best and most beautiful things in the world cannot be seen or even touched – they must be felt with the heart.” —Helen Keller',
 '“Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.” —Mark Twain',
 '“Don’t cry because it’s over, smile because it happened.” —Dr. Seuss',
 '“No one can make you feel inferior without your consent.” —Eleanor Roosevelt',
  '“I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” —Maya Angelou',
 '“To live is the rarest thing in the world. Most people exist, that is all.” —Oscar Wilde',
 '“If you don’t stand for something you will fall for anything.” —Malcolm X',
 '“You must be the change you wish to see in the world.” —Mahatma Gandhi',
 '“Life is what happens when you’re busy making other plans.” —John Lennon',
 '“Not all of us can do great things. But we can do small things with great love.” —Mother Teresa',
 '“When you reach the end of your rope, tie a knot and hang on.” —Abraham Lincoln',
 '“You miss 100% of the shots you don’t take.” —Wayne Gretzky',
 '“You only pass through this life once, you don’t come back for an encore.” —Elvis Presley',
 '“Unless you try to do something beyond what you have already mastered, you will never grow.” —Ralph Waldo Emerson',
 '“The greatest glory in living lies not in never falling, but in rising every time we fall.” —Nelson Mandela',
 '“The way to get started is to quit talking and begin doing.” —Walt Disney”',
 '“It does not matter how slowly you go as long as you do not stop.” —Confucius',
 '“Tell me and I forget. Teach me and I remember. Involve me and I learn.” —Benjamin Franklin',
 '“In the end, it’s not the years in your life that count. It’s the life in your years.” —Abraham Lincoln',
 '“Never let the fear of striking out keep you from playing the game.” —Babe Ruth',
 '“Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.” —Robert Frost',
 '“Life is not measured by the number of breaths we take, but by the moments that take our breath away.” —Maya Angelou',
 '“Do, or do not. There is no try.” —Yoda',
 '“Friendship is born at that moment when one person says to another: “What! You too? I thought I was the only one.” —C.S. Lewis',
  '“A real friend is one who walks in when the rest of the world walks out.” —Walter Winchell',
  '“True friendship comes when the silence between two people is comfortable.” —David Tyson',
 ' “Don’t make friends who are comfortable to be with. Make friends who will force you to lever yourself up.” —Thomas J. Watson',
  '“A friend is someone who understands your past, believes in your future, and accepts you just the way you are.” —Unknown',
  '“Ultimately the bond of all companionship, whether in marriage or in friendship, is conversation.” —Oscar Wilde',
  '“A true friend never gets in your way unless you happen to be going down.” —Arnold H. Glasgow',
  '“I don’t need a friend who changes when I change and who nods when I nod; my shadow does that much better.” —Plutarch',
  '“The real test of friendship is can you literally do nothing with the other person? Can you enjoy those moments of life that are utterly simple?” —Eugene Kennedy',
  '“A loyal friend laughs at your jokes when they’re not so good, and sympathizes with your problems when they’re not so bad.” —Arnold H. Glasgow',
  '“Friendship is the hardest thing in the world to explain. It’s not something you learn in school. But if you haven’t learned the meaning of friendship, you really haven’t learned anything.” —Muhammad Ali',
  '“Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.” —Marcel Proust',
  '“Tis the privilege of friendship to talk nonsense, and to have her nonsense respected.” —Charles Lamb',
  '“If you go looking for a friend, you’re going to find they’re very scarce. If you go out to be a friend, you’ll find them everywhere.” —Zig Ziglar',
  '“Friendship is the only cement that will ever hold the world together.” —Woodrow Wilson',
  '“The most beautiful discovery true friends make is that they can grow separately without growing apart.” —Elisabeth Foley',
  '“Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.” —Oprah Winfrey',
  '“Each friend represents a world in us, a world possibly not born until they arrive, and it is only by this meeting that a new world is born.” —Anais Nin',
 ' “A friend knows the song in my heart and sings it to me when my memory fails.” —Donna Roberts',
  '“If you make friends with yourself you will never be alone.” —Maxwell Maltz',
  '“Call it a clan, call it a network, call it a tribe, call it a family: Whatever you call it, whoever you are, you need one.”  —Jane Howard',
  '“Family means nobody gets left behind or forgotten.” —David Ogden Stiers',
  '“We may have our differences, but nothing’s more important than family.”  —Coco',
   '“The bond that links your true family is not one of blood, but of respect and joy in each other’s life.” —Richard Bach',
  '“Being a family means you are a part of something very wonderful. It means you will love and be loved for the rest of your life.” —Lisa Weed',
  '“Family faces are magic mirrors. Looking at people who belong to us, we see the past, present, and future.” —Gail Lumet Buckley',
  'Families are the compass that guides us. They are the inspiration to reach great heights, and our comfort when we occasionally falter.” —Brad Henry',
  '“Everyone needs a house to live in, but a supportive family is what builds a home.” —Anthony Liccione',
  'There’s nothing that makes you more insane than family. Or more happy, or more exasperated, or more secure.” —Jim Butcher',
  '“Family is a life jacket in the stormy sea of life.” —J.K. Rowling',
  '“When all the dust is settled and all the crowds are gone, the things that matter are faith, family, and friends.” —Barbara Bush',
  '“In family life, love is the oil that eases friction, the cement that binds closer together, and the music that brings harmony.” —Friedrich Nietzsche',
  '“Other things may change us, but we start and end with the family.” —Anthony Brandt',
  '“Having somewhere to go is home. Having someone to love is family. And having both is a blessing.”  —Unknown',
  '“The only rock I know that stays steady, the only institution I know that works, is the family.” —Lee Iacocca',
  '“The world, we’d discovered, doesn’t love you like your family loves you.” —Louis Zamperini',
  '“You go through life wondering what is it all about but at the end of the day it’s all about family.” —Rod Stewart',
  '“Rejoice with your family in the beautiful land of life.” —Albert Einstein',
  '“Our most basic instinct is not for survival but for family.” —Paul Pearsall',
  '“You don’t choose your family. They are God’s gift to you, as you are to them.” —Desmond Tutu',
]

function randomisedQuotes() {
  let randomNumber = Math.floor(Math.random() * (randomised.length));
  document.getElementById('quoteDisplay').innerHTML = randomised[randomNumber];
}
function get_random_hex_color() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('quoteDisplay').style.color = color}
    
  }


