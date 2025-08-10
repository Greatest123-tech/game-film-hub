const gamingPosts=[{title:"Elden Ring DLC Announced!",img:"https://picsum.photos/400/200?random=1",desc:"FromSoftware teases a dark new adventure."},{title:"GTA VI Gameplay Leak",img:"https://picsum.photos/400/200?random=2",desc:"Rockstar Games reveals first look at Vice City return."}];const moviePosts=[{title:"Deadpool 3 Trailer Breaks Records",img:"https://picsum.photos/400/200?random=3",desc:"Ryan Reynolds is back in Marvel's most chaotic film yet."},{title:"Avatar 3 Filming Wraps",img:"https://picsum.photos/400/200?random=4",desc:"James Cameron promises a bigger, more emotional sequel."}];function renderPosts(posts,containerId){const container=document.getElementById(containerId);posts.forEach(post=>{container.innerHTML+=`
      <div class="col-md-6 col-lg-4">
        <div class="card shadow-sm">
          <img src="${post.img}" class="card-img-top" alt="${post.title}">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.desc}</p>
            <a href="#" class="btn btn-primary btn-sm">Read More</a>
          </div>
        </div>
      </div>
    `})}
renderPosts(gamingPosts,"gaming-posts");renderPosts(moviePosts,"movie-posts")