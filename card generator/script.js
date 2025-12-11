
    const form = document.querySelector("#form")
    const main = document.querySelector(".profile-seciton")
    const inputs = document.querySelectorAll(".inputs")
    let name;
    let email;
    let profession;
    let url;
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        name = inputs[0].value;
        email = inputs[1].value;
        profession = inputs[2].value;
        url = inputs[3].value;

        console.log(name, email, profession, url)

        const profile = document.createElement("div")
        const imgdiv = document.createElement("div")
        const img = document.createElement("img")
        const h3 = document.createElement("h3")
        const h2 = document.createElement("h2")
        const p = document.createElement("p")

        h2.innerText = name;
        h3.innerText = email
        p.innerText = profession

        profile.appendChild(imgdiv)
        profile.classList.add("profile")

        imgdiv.appendChild(img)
        imgdiv.classList.add("img")
        img.setAttribute("src", url)

        profile.appendChild(h2)

        profile.appendChild(h3)

        profile.appendChild(p)

        main.appendChild(profile)

        inputs.forEach(function (it) {
            if (it.type !== 'submit') {
                it.value = ""
            }
        })

    }) 

