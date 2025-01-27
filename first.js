
// based on month size 12
const zodiacSigns = [
    "Capricorn", // December 22 - January 19
    "Aquarius",  // January 20 - February 18
    "Pisces" ,    // February 19 - March 20
    "Aries",     // March 21 - April 19
    "Taurus",    // April 20 - May 20
    "Gemini",    // May 21 - June 20
    "Cancer",    // June 21 - July 22
    "Leo",       // July 23 - August 22
    "Virgo",     // August 23 - September 22
    "Libra",     // September 23 - October 22
    "Scorpio",   // October 23 - November 21
    "Sagittarius", // November 22 - December 21
  ];

//   Based on date size of 31
  const compliments = [
    "You have an amazing sense of humor.",
    "Your smile lights up the room.",
    "You are incredibly kind.",
    "Your creativity is inspiring.",
    "You bring out the best in people.",
    "You have such a positive energy.",
    "You're a great listener.",
    "Your hard work is admirable.",
    "You have a heart of gold.",
    "Your confidence is contagious.",
    "You are so thoughtful and caring.",
    "You have a fantastic sense of style.",
    "You make the world a better place.",
    "You're incredibly intelligent.",
    "Your laugh is infectious.",
    "You always know how to make people feel special.",
    "You're an amazing friend.",
    "You have a brilliant mind.",
    "Your determination is inspiring.",
    "You radiate positivity.",
    "You're a natural leader.",
    "You have such a kind spirit.",
    "Your dedication is remarkable.",
    "You have an eye for detail.",
    "You are incredibly brave.",
    "Your passion is inspiring.",
    "You make every moment better.",
    "You're a wonderful person to be around.",
    "You have a unique perspective on things.",
    "You're an amazing problem solver.",
    "You inspire others to do their best."
  ];

//   Size of 20
  const victimCardPhrases = [
    "I always help others, but no one helps me.",
    "I go out of my way for people, but they never notice.",
    "I'm always there for them, but they disappear when I need them.",
    "I give so much, and all I get is disappointment.",
    "I put others first, but no one puts me first.",
    "I support everyone, but they leave me behind.",
    "I listen to everyone’s problems, but no one listens to mine.",
    "I always forgive, but no one forgives me.",
    "I go above and beyond, but it’s never enough.",
    "I sacrifice my happiness, but no one cares.",
    "I work so hard, but others take all the credit.",
    "I’m kind to everyone, but people are so cruel to me.",
    "I’m always honest, but people lie to me.",
    "I open my heart, but others shut me out.",
    "I share everything, but no one shares with me.",
    "I’m patient with everyone, but they lose patience with me.",
    "I give my time, but no one values it.",
    "I’m always understanding, but no one understands me.",
    "I respect everyone, but they disrespect me.",
    "I show love, but all I get is rejection."
  ];
  
//   "Rohit" , "Negi", "Day";
// 5*4*9=180%30=0-29;
// Size of 30
 const recommendations = [
    "Feed a street dog or stray animal.",
    "Plant a tree and care for it as it grows.",
    "Volunteer at a local shelter or food bank.",
    "Help an elderly neighbor with their chores or groceries.",
    "Practice daily gratitude by writing down what you’re thankful for.",
    "Smile at strangers and spread positivity.",
    "Donate unused clothes, toys, or books to those in need.",
    "Read books that inspire and educate you.",
    "Learn a new skill or craft, like painting or cooking.",
    "Spend quality time with family and friends.",
    "Write a kind note or email to someone who’s made a difference in your life.",
    "Meditate or practice yoga to relax your mind and body.",
    "Take regular walks in nature to rejuvenate your spirit.",
    "Support local businesses and artisans by shopping locally.",
    "Pick up trash in your neighborhood or park.",
    "Compliment someone genuinely to make their day.",
    "Mentor or tutor someone who can benefit from your skills.",
    "Cook a meal and share it with someone who needs it.",
    "Adopt or foster a pet if you’re able to provide a loving home.",
    "Conserve energy by turning off lights and appliances when not in use.",
    "Write in a journal to reflect on your thoughts and goals.",
    "Participate in a charity run or event for a good cause.",
    "Give blood if you’re eligible to help save lives.",
    "Organize a community clean-up drive with friends and neighbors.",
    "Share your knowledge or experiences through blogs or talks.",
    "Reconnect with old friends and cherish meaningful relationships.",
    "Practice random acts of kindness daily.",
    "Reduce, reuse, and recycle to protect the environment.",
    "Take breaks from social media to focus on real-life connections.",
    "Forgive someone and let go of grudges to find inner peace."
];

// Size of 20
const predictions = [
    "You will become a crorepati (millionaire) in the near future.",
    "A significant career opportunity is coming your way.",
    "Your creativity will open new doors for you.",
    "You will soon travel to a foreign country.",
    "A big surprise will come to you within the next year.",
    "Your financial situation will dramatically improve.",
    "An important relationship will play a crucial role in your success.",
    "You will soon achieve a major personal goal.",
    "A new business venture will be highly successful.",
    "You will find new ways to balance work and life.",
    "A friend will offer you valuable advice that will change your direction.",
    "You will experience a surge in self-confidence soon.",
    "Your health will improve significantly after a lifestyle change.",
    "You will make a new discovery that will lead to success.",
    "An old project will be completed with great results.",
    "You will be recognized for your hard work and dedication.",
    "An unexpected windfall is coming your way.",
    "A new friendship will enrich your life in unexpected ways.",
    "A spiritual breakthrough will help guide your decisions.",
    "A new chapter in your personal life is about to begin."
];

const form= document.getElementById("dob-form");

form.addEventListener("submit",(event)=>{
event.preventDefault();
const Name=document.getElementById("name").value;
const SurName=document.getElementById("surname").value;
const Day=Number(document.getElementById("day").value);
const Month=Number(document.getElementById("month").value);
const Year=Number(document.getElementById("year").value);

const result=document.getElementById("result");
const first_message=`Hello ${Name} ${SurName}`;
const second_message=`Your Zodiac Sign is ${zodiacSigns[Month-1]}`;
const third_message=compliments[Day-1];
let index=Math.floor(Math.random()*20);
const fourth_message=victimCardPhrases[index];

index=(Name.length * SurName.length * Year)%30;
const fifth_message=recommendations[index];

index=(Day*Month*Year)%20;
const sixth_message=predictions[index];

result.innerText=`${first_message} ${second_message} ${third_message} ${fourth_message} Our Recommendation for you:  ${fifth_message} Your Future Prediction is:  ${sixth_message}`;

// console.log(Name,SurName,Day,Month,Year);


// console.log(Name, SurName);

// console.log("Submitted");
})




  