
const stars = document.querySelector(".stars")


for (let i = 0; i < 18; i++) {

    const star = document.createElement('a');
    const imgs = document.createElement('img');

    star.href = "https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=gkrwja88&logNo=220560729913";
    star.classList.add('star')
    star.target = "_Blank"

    imgs.src = "image/Star2.png";
    imgs.alt = "크리스마스 트리 별";

    star.appendChild(imgs)
    stars.appendChild(star)

    star.style.transform = `rotateY(${20 * i}deg)`
}

