const reels = [
  {
    "username": "rahul_vlogs",
    "likeCount": 12450,
    "isLiked": true,
    "commentCount": 320,
    "caption": "Sunset views never get old 🌅",
    "video": "./videos/1.mp4",
    "userProfile": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    "shareCount": 210,
    "isFollowed": true
  },
  {
    "username": "fitwithanita",
    "likeCount": 9850,
    "isLiked": false,
    "commentCount": 150,
    "caption": "Quick home workout 💪",
    "video": "./videos/2.mp4",
    "userProfile": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    "shareCount": 98,
    "isFollowed": false
  },
  {
    "username": "tech_guru_ajay",
    "likeCount": 22300,
    "isLiked": true,
    "commentCount": 540,
    "caption": "Top 5 apps you need in 2026 📱",
    "video": "./videos/3.mp4",
    "userProfile": "https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    "shareCount": 430,
    "isFollowed": true
  },
  {
    "username": "foodie_sneha",
    "likeCount": 15700,
    "isLiked": false,
    "commentCount": 275,
    "caption": "Best street food in Bangalore 😋",
    "video": "./videos/4.mp4",
    "userProfile": "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsfGVufDB8fDB8fHww",
    "shareCount": 189,
    "isFollowed": true
  },
  {
    "username": "travelwithme",
    "likeCount": 30120,
    "isLiked": true,
    "commentCount": 620,
    "caption": "Hidden gems in Himachal 🏔️",
    "video": "./videos/5.mp4",
    "userProfile": "https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1vZGVsfGVufDB8fDB8fHww",
    "shareCount": 510,
    "isFollowed": false
  },
  {
    "username": "dance_with_riya",
    "likeCount": 8700,
    "isLiked": true,
    "commentCount": 140,
    "caption": "Trending dance challenge 🔥",
    "video": "./videos/1.mp4",
    "userProfile": "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1vZGVsfGVufDB8fDB8fHww",
    "shareCount": 75,
    "isFollowed": true
  },
  {
    "username": "daily_memes",
    "likeCount": 45200,
    "isLiked": false,
    "commentCount": 890,
    "caption": "Tag your friend 😂",
    "video": "./videos/2.mp4",
    "userProfile": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG1vZGVsfGVufDB8fDB8fHww",
    "shareCount": 1200,
    "isFollowed": false
  },
  {
    "username": "nature_clicks",
    "likeCount": 11200,
    "isLiked": true,
    "commentCount": 210,
    "caption": "Peaceful forest vibes 🌳",
    "video": "./videos/3.mp4",
    "userProfile": "https://plus.unsplash.com/premium_photo-1669704098876-2a38eb10e56a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1vZGVsfGVufDB8fDB8fHww",
    "shareCount": 134,
    "isFollowed": true
  },
  {
    "username": "coding_life",
    "likeCount": 6400,
    "isLiked": false,
    "commentCount": 95,
    "caption": "Debugging at 2AM be like 😅",
    "video": "  ./videos/4.mp4",
    "userProfile": "https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVsfGVufDB8fDB8fHww",
    "shareCount": 60,
    "isFollowed": false
  },
  {
    "username": "fashion_diva",
    "likeCount": 18900,
    "isLiked": true,
    "commentCount": 410,
    "caption": "Summer outfit ideas ☀️",
    "video": "./videos/5.mp4",
    "userProfile": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    "shareCount": 275,
    "isFollowed": true
  }
];

var sum ='';

reels.forEach(function(elem){
    sum = sum +
    `
    <div class="reel">
        <video autoplay loop muted src="${elem.video}"></video>
        <div class="bottom">
            <div class="user">
                <img src="${elem.userProfile}" alt="">
                <h4>${elem.username}</h4>
                <button>${elem.isFollowed ? `Unfollow` : `Follow`}</button>
            </div>
            <h3>${elem.caption}</h3>
        </div>
        <div class="right">
            <div class="like">
                <h4 class="like-icon icon">${elem.isLiked?`<i class="ri-heart-3-fill love"></i>`:`<i class="ri-heart-3-line"></i>`}</h4>
                <h6>${elem.likeCount}</h6>
            </div>
            
            <div class="comment">
                <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                <h6>${elem.commentCount}</h6>
            </div>
            
            <div class="share">
                <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                <h6>${elem.shareCount}</h6>
            </div>
            
            <div class="menu">
                <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
            </div>                        
        </div>
    </div>`
});

var allReels = document.querySelector(".all-reels");

allReels.innerHTML=sum;