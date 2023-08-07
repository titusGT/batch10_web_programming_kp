var text_lorem =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quaerat recusandae qui ullam eaque cumque ea fugit, debitis commodi ipsum illo dolorum consequatur sed laudantium suscipit quis magni, maiores in?";
      for (let i = 0; i < 3; i++) {
        document.getElementById("paragraf").innerHTML += `<p>${text_lorem}</p>`;
      }
      const collection = document.getElementById("paragraf").children;
      setInterval(() => {
        setTimeout(() => {
          collection[0].style.color = "red";
          collection[1].style.color = "green";
          collection[2].style.color = "blue";
        }, 1000);
        collection[0].style.color = "black";
        collection[1].style.color = "black";
        collection[2].style.color = "black";
      }, 2000);