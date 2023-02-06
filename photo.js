window.addEventListener("scroll", loadMore)

// 난수생성 함수
function generateRandomNumber() {
    return Math.floor(Math.random() * 500) + 1;
}

// 사진 더 불러오기 (test)

function loadMore(){
    // try{
        const photo_gallery = document.querySelector('.photo-gallery');
    // } catch(e){}

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {        
        for (let i = 0; i < 4; i++) {
            var num = generateRandomNumber();
            console.log(num);

            let newImageDiv = document.createElement('div');
            newImageDiv.setAttribute('class', 'photo');
            
            let newImage = document.createElement('img');
            newImageDiv.appendChild(newImage);
    
            newImage.src = '/result/output_'+num+'.jpeg';

            photo_gallery.appendChild(newImageDiv);
        }
    };
}