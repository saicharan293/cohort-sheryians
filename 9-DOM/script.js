const users = [
  {
    fullName: "Aarav Reddy",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Software Engineer",
    description: "Full-stack developer based in Bengaluru, passionate about building scalable web apps.",
    tags: ["JavaScript", "React", "Node.js", "Startup"]
  },
  {
    fullName: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profession: "UI/UX Designer",
    description: "Designs intuitive user experiences with a focus on Indian digital products.",
    tags: ["Figma", "UX Research", "Design Systems", "Mobile Apps"]
  },
  {
    fullName: "Rohit Verma",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Photographer",
    description: "Captures street life, culture, and festivals across India.",
    tags: ["Street Photography", "Travel", "Culture", "Editing"]
  },
  {
    fullName: "Ananya Iyer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Digital Marketer",
    description: "Specializes in social media growth and brand strategy for Indian startups.",
    tags: ["SEO", "Content Marketing", "Social Media", "Branding"]
  },
  {
    fullName: "Karan Malhotra",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    profession: "Entrepreneur",
    description: "Founder of a fintech startup aiming to simplify digital payments in India.",
    tags: ["Fintech", "Startups", "Leadership", "Innovation"]
  }
];

let main = document.querySelector("main");
let allCards = ''

// users.forEach(function(user){
//     let card = document.createElement("div");
//     card.classList.add("card");

//     let image = document.createElement("img");
//     image.setAttribute("src",user.image);
//     card.append(image);

//     let fullName = document.createElement("h3");
//     fullName.textContent = user.fullName;
//     card.append(fullName);


//     let desig = document.createElement("h4");
//     desig.textContent = user.profession;
//     card.append(desig);

//     let paratags = document.createElement("p");
//     paratags.textContent = user.tags.join(", ");
//     card.append(paratags);
//     main.appendChild(card);
// });

users.forEach(function(elem){
    allCards += `
        <div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>
    `
});

main.innerHTML = allCards;