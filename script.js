// ==========================
// ELEMENTS
// ==========================

const giftBox = document.getElementById("giftBox");
const mainContent = document.getElementById("mainContent");

const secretContainer = document.getElementById("secretContainer");
const scrapbook = document.getElementById("scrapbook");
const reasons = document.getElementById("reasons");


// ==========================
// START BUTTON
// ==========================

giftBox.onclick = () => {

    giftBox.classList.add("open");

    setTimeout(()=>{

        document.querySelector(".hero").style.display="none";

        mainContent.classList.remove("hidden");

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    },900);

};


// ==========================
// FLOATING HEARTS
// ==========================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = ["💖","💕","💗","🌸","✨"][Math.floor(Math.random()*5)];

    heart.style.left = Math.random()*100+"vw";

    heart.style.animationDuration = (5+Math.random()*5)+"s";

    heart.style.fontSize = (20+Math.random()*20)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

}

setInterval(createHeart,500);


// ==========================
// SECRET MESSAGES
// ==========================

const messages=[

"You always know how to make people smile ❤️",

"Thank you for being such a wonderful friend 🌸",

"You deserve every happiness in the world 💖",

"Never stop being yourself ✨",

"I hope all your dreams come true 🎂"

];

let currentMessage=0;

function showNextMessage(){

    if(currentMessage>=messages.length)
        return;

    const card=document.createElement("div");

    card.className="secret-card";

    card.innerHTML=`
        <h3>Secret Message ${currentMessage+1}</h3>
        <p>${messages[currentMessage]}</p>
    `;

    secretContainer.appendChild(card);

    currentMessage++;

    if(currentMessage<messages.length){

        const button=document.createElement("button");

        button.innerHTML="Unlock Next Message 🔓";

        button.onclick=()=>{

            button.remove();

            showNextMessage();

        };

        card.appendChild(button);

    }

}

showNextMessage();


// ==========================
// SCRAPBOOK
// ==========================

const memories=[

{
title:"Memory #1",
text:"I will never forget the moments when we used to bunk classes."
},

{
title:"Memory #2",
text:"Do you still remember the time when we danced together lol in class 11 teacher's day?"
},

{
title:"Memory #3",
text:"I still remember when our class eleven results were announced and we both passed.That was such a relief isn't it?"
},

{
title:"Memory #4",
text:"Do you remember the part where i was imperfect?Me neither cause I am always perfect.lollll.Just kidding.Don't know what to write.I have been making it for seven to eight hours now.Really tired loll."
}

];

let memoryIndex=0;

function showMemory(){

    if(memoryIndex>=memories.length)
        return;

    const page=document.createElement("div");

    page.className="scrap-page";

    page.innerHTML=`

        <h3>${memories[memoryIndex].title}</h3>

        <p>${memories[memoryIndex].text}</p>

    `;

    scrapbook.appendChild(page);

    memoryIndex++;

    if(memoryIndex<memories.length){

        const btn=document.createElement("button");

        btn.innerHTML="Open Next Memory 📖";

        btn.style.marginTop="20px";

        btn.onclick=()=>{

            btn.remove();

            showMemory();

        };

        page.appendChild(btn);

    }

}

showMemory();


// ==========================
// 100 REASONS
// ==========================

const reasonsList = [

"You have the cutest smile.",
"You make ordinary days feel special.",
"You're kind even when no one is watching.",
"You always know how to cheer people up.",
"You have a beautiful heart.",
"You're incredibly caring.",
"You make conversations fun.",
"You have an amazing sense of humor.",
"You're stronger than you realize.",
"You inspire the people around you.",
"Your laugh is contagious.",
"You make people feel welcome.",
"You're thoughtful.",
"You never fail to make memories unforgettable.",
"You always try your best.",
"You're genuine.",
"Your positivity is infectious.",
"You have a wonderful personality.",
"You're creative.",
"You're smart.",
"You make life brighter.",
"You deserve all the happiness in the world.",
"You listen without judging.",
"You encourage others.",
"You have a beautiful soul.",
"You make every photo look amazing.",
"You always stay true to yourself.",
"You never give up.",
"You're unforgettable.",
"You have a calming presence.",
"You make everyone smile.",
"You're compassionate.",
"You make even simple moments memorable.",
"You always find something to laugh about.",
"You're dependable.",
"You make life colorful.",
"Your kindness is inspiring.",
"You're full of surprises.",
"You're adorable.",
"You deserve every good thing.",
"You care deeply about people.",
"You make friendships meaningful.",
"You're one of a kind.",
"You have great taste.",
"You always bring positive energy.",
"You're fun to be around.",
"You make people feel appreciated.",
"You're beautiful inside and out.",
"You brighten every room you enter.",
"You have an incredible imagination.",
"Its a secret message oki but take care my friend.",
"You can send me money if you want lol.I know you want to.",
"You always keep learning.",
"You never stop growing.",
"You're supportive.",
"You make others feel important.",
"You are wonderfully unique.",
"You have a beautiful smile.",
"You deserve endless happiness.",
"You're incredibly sweet.",
"You're patient.",
"You make every birthday worth celebrating.",
"You have a golden heart.",
"You spread kindness everywhere.",
"You're thoughtful in little ways.",
"You make people laugh effortlessly.",
"You inspire confidence.",
"You're always worth talking to.",
"You make life feel lighter.",
"You appreciate the little things.",
"You are incredibly lovable.",
"You make ordinary moments magical.",
"You have amazing vibes.",
"You're unforgettable.",
"You have endless potential.",
"You make memories that last forever.",
"You are someone people trust.",
"You deserve every dream to come true.",
"You're full of warmth.",
"You always make an effort.",
"You make people feel seen.",
"You have beautiful eyes.",
"You make every conversation interesting.",
"You always know what to say.",
"You never stop caring.",
"I made with my soul and blood.",
"I was supposed to write a cute message here but you forget my birthdayyyyyyy...",
"You will get the third or fourth best man in the world.Not the second one because you forgot my birthday...",
"Also the first cause its me lol",
"You deserve the biggest smile today.",
"You're full of happiness.",
"You bring joy wherever you go.",
"You are wonderfully talented.",
"You make this world better.",
"You're an amazing friend.",
"You are irreplaceable.",
"You deserve to be celebrated.",
"You make life beautiful.",
"You are absolutely incredible.",
"And finally... because you're Yario ❤️"

];

reasonsList.forEach((reasonText,index)=>{

    const card=document.createElement("div");

    card.className="reason";

    card.innerHTML=`
        <h3>#${index+1}</h3>
        <p>${reasonText}</p>
    `;

    reasons.appendChild(card);

});
// ==========================
// PHOTO LIGHTBOX
// ==========================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.remove("hidden");

        lightboxImg.src=img.src;

    });

});

closeLightbox.onclick=()=>{

    lightbox.classList.add("hidden");

}

lightbox.onclick=(e)=>{

    if(e.target===lightbox)
        lightbox.classList.add("hidden");

}
// ==========================
// FIREWORKS
// ==========================

giftBox.addEventListener("click", () => {

    const container = document.body;

    const fireworks = new Fireworks.default(container, {

        rocketsPoint:50,

        hue:{
            min:0,
            max:360
        },

        delay:{
            min:15,
            max:30
        },

        speed:4,

        acceleration:1.05,

        friction:0.97,

        gravity:1.5,

        particles:120,

        trace:4,

        explosion:6,

        autoresize:true

    });

    fireworks.start();

});