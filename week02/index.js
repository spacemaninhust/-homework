var USER_DATA = [
    {
      "cover": "imgs/cover-01.jpg",
      "avatar": "imgs/avatar-01.jpg",
      "name": "Steve Wolf",
      "badge": "Pro",
      "likes": "225",
      "views": "32.6k"
    },
    {
      "cover": "imgs/cover-02.png",
      "avatar": "imgs/avatar-02.png",
      "name": "Fireart Studio",
      "badge": "Team",
      "likes": "137",
      "views": "19.9k"
    },
    {
      "cover": "imgs/cover-03.jpg",
      "avatar": "imgs/avatar-03.jpg",
      "name": "Ethan Fender",
      "badge": "Pro",
      "likes": "152",
      "views": "25.9k"
    },
    {
      "cover": "imgs/cover-04.png",
      "avatar": "imgs/avatar-04.gif",
      "name": "Stevan Rodic",
      "badge": "Pro",
      "likes": "96",
      "views": "16.9k"
    },
    {
      "cover": "imgs/cover-05.png",
      "avatar": "imgs/avatar-05.png",
      "name": "Dribbble",
      "badge": "Team",
      "likes": "43",
      "views": "3.5k"
    },
    {
      "cover": "imgs/cover-06.png",
      "avatar": "imgs/avatar-06.jpg",
      "name": "Alfrey Davilla | vaneltia",
      "badge": "Pro",
      "likes": "74",
      "views": "7.4k"
    },
    {
      "cover": "imgs/cover-07.png",
      "avatar": "imgs/avatar-07.png",
      "name": "tubik",
      "badge": "Team",
      "likes": "124",
      "views": "18.2k"
    },
    {
      "cover": "imgs/cover-08.jpg",
      "avatar": "imgs/avatar-08.png",
      "name": "Dlanid",
      "badge": "Pro",
      "likes": "46",
      "views": "7.1k"
    },
    {
      "cover": "imgs/cover-09.png",
      "avatar": "imgs/avatar-09.jpg",
      "name": "The Faces",
      "badge": "Team",
      "likes": "59",
      "views": "7.3k"
    },
    {
      "cover": "imgs/cover-10.png",
      "avatar": "imgs/avatar-10.png",
      "name": "Odama",
      "badge": "Team",
      "likes": "54",
      "views": "1.1k"
    },
    {
      "cover": "imgs/cover-11.jpg",
      "avatar": "imgs/avatar-11.jpg",
      "name": "Matt Naylor",
      "badge": "",
      "likes": "56",
      "views": "8.1k"
    },
    {
      "cover": "imgs/cover-12.png",
      "avatar": "imgs/avatar-12.jpg",
      "name": "Voila",
      "badge": "Team",
      "likes": "164",
      "views": "24.1k"
    }
]
function createdata(){
    for(var i = 0;i < USER_DATA.length; i++){
        let div = document.createElement("div");
        div.className = "userdata";
        div.id = i;
        div.style.display = "block";
        let div2 = document.createElement("div");
        div2.className = "userdata_a_n_b";
        let img1 = create_img("userdata_cover",USER_DATA[i].cover);
        div.append(img1);
        let img2 = create_img("userdata_avatar",USER_DATA[i].avatar);
        let a1 = create_span("userdata_name",USER_DATA[i].name);
        div2.append(img2),div2.append(a1)
        if(USER_DATA[i].badge != ""){
          let span = create_span("userdata_badge",USER_DATA[i].badge);
          let a = document.createElement("a");
          a.className = "userdata_a";
          a.append(span);
          div2.append(a);
        }
        let img3 = create_img("userdata_like","imgs/icon-like.svg");
        let a3 = create_span("userdata_likes",USER_DATA[i].likes);
        let img4 = create_img("userdata_view","imgs/icon-view.svg");
        let a4 = create_span("userdata_views",USER_DATA[i].views);
        let div3 = document.createElement("div");
        div3.className = "userdata_l_l_v_v";
        div3.append(img3),div3.append(a3),div3.append(img4),div3.append(a4);
        let div4 = document.createElement("div");
        div4.className = "userdata_all";
        div4.append(div2),div4.append(div3);
        div.append(div4);
        document.body.append(div);
    }
    create_footer();
}
function create_img(classname,src){
  let img = document.createElement("img");
  img.src = "task/"+src;
  img.className = classname;
  return img;
}
function create_span(classname,innerhtml){
  let a = document.createElement("span");
  a.className = classname;
  a.innerHTML = innerhtml;
  return a;
}
function create_footer(){
  let footer = document.createElement("footer");
  footer.className = "bottom";
  footer.id = "Bottom";
  footer.style.display = "block";
  let img = document.createElement("img");
  img.src = "task/imgs/logo-red.svg";
  img.width = 120;
  let div = document.createElement("div");
  div.className = "bottom_text";
  div.innerHTML = "Dribble is the world's leading<br>community for creatives to share,grow,<br>and get hired."
  footer.appendChild(img);
  footer.appendChild(div);
  document.body.append(footer);
}
function Click(){
  let a1 = document.getElementById("menu");
  let a2 = document.getElementById("close");
  let div = document.getElementById("menus");
  let divs = document.getElementsByClassName("userdata");
  let foot = document.getElementById("Bottom");
  let div2 = document.getElementById("Banner");
  a1.addEventListener("click",() => click_menu(a1,a2,div,divs,foot,div2));
  a2.addEventListener("click",() => click_close(a1,a2,div,divs,foot,div2));
}
function click_menu(a1,a2,div,divs,foot,div2){
  a2.style.display = "block";
  a1.style.display = "none";
  div.style.display = "block";
  for(var i = 0;i < divs.length;i++){
    divs[i].style.display = "none";
  }
  foot.style.display = "none";
  div2.style.display = "none";
}
function click_close(a1,a2,div,divs,foot,div2){
  a2.style.display = "none";
  a1.style.display = "block";
  div.style.display = "none";
  for(var i = 0;i < divs.length;i++){
    divs[i].style.display = "block";
  }
  foot.style.display = "block";
  div2.style.display = "block";
}
createdata();
Click();
