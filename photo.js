window.addEventListener("scroll", loadMore);

var cnt = 0;

// 난수생성 함수
function generateRandomNumber() {
    // return Math.floor(Math.random() * 100) + 1;
    if (cnt == 100){
        cnt = 0;
    }

    cnt += 1;

    return cnt;
}

// 사진 더 불러오기 (test)

function loadMore() {
    const photo_gallery = document.querySelector(".photo-gallery");

    if (window.innerHeight + window.scrollY + 200 >= document.body.offsetHeight) {
        for (let i = 0; i < 8; i++) {
            var num = generateRandomNumber();
            console.log(num);

            let newImageDiv = document.createElement("div");
            newImageDiv.setAttribute("class", "photo");

            let newImage = document.createElement("img");
            newImageDiv.appendChild(newImage);

            newImage.src = "https://cdn.jsdelivr.net/gh/cignography/cignography.github.io@main/photos/" + num + ".jpeg";

            photo_gallery.appendChild(newImageDiv);
        }
    }  
    
}

// var msnry = new Masonry(".photo-gallery", {
//     itemSelector: ".photo",
//     // columnWidth: 200
//     columnWidth: ".sizer",
//     percentPosition: true,
//     gutter: 20,
//     horizontalOrder: true
// });

// imagesLoaded(".photo-gallery").on("progress", function () {
//     msnry.layout();
// });
