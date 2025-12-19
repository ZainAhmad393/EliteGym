  document.querySelectorAll(".read-more-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const moreText = btn.previousElementSibling.querySelector(".more-text");
      if(moreText.style.display === "inline"){
        moreText.style.display = "none";
        btn.innerText = "See More";
      } else {
        moreText.style.display = "inline";
        btn.innerText = "See Less";
      }
    });
  });

  