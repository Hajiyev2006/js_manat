document.getElementById("Hesabla").addEventListener("click", () => {
    let amount = parseInt(document.getElementById("amount").value) || 0;

    if (amount <= 0) {
        console.log("Menfi eded daxil etmeyin..");
        return;
    }
    const Vahidler = [500, 200, 100, 50, 20, 10, 5, 1];
    const a = document.querySelector(".container");
    if (a) {
        a.remove();
    }

    const container = document.createElement("div");
    container.classList.add("container");

    Vahidler.forEach(Vahid => {
        let count = Math.floor(amount / Vahid);
        if (count > 0) {
            const div = document.createElement("div");
            div.classList.add(`manat${Vahid}`);

            const img = document.createElement("img");
            img.src = `images/${Vahid}.jpg`;
            img.alt = `${Vahid} Manat`;

            const imgContainer = document.createElement("div");
            imgContainer.appendChild(img);
            if(amuont => Vahid){
                const text =document.createTextNode(`X${count}`)
                imgContainer.appendChild(text)
            }


            div.appendChild(imgContainer);
            container.appendChild(div);

            amount %= Vahid;
        }
    });

    document.body.appendChild(container);
});
