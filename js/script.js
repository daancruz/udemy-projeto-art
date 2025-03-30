document.addEventListener("DOMContentLoaded", () => {

    fetch('../data/artes.json')
        .then(res => res.json())
        .then(artes => {
        const section = document.querySelector(".gallery");
        artes.forEach(arte => {
            const card = document.createElement("div");

            card.className = "col-12 col-md-6";
            card.innerHTML = `
                <div class="image mb-3" style="background-image: url(img/g_${arte.id}.jpg);"></div>
                <h3>${arte.title}</h3>
                <p class="secondary__color">Realizada em: ${arte.date}</p>
                <a href="#" class="btn">Detalhes</a>
            `;
            section.appendChild(card);
        })
    })
    .catch(error => console.error("Erro ao carregar o conteúdo: ", error))
});
