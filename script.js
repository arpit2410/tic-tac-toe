let boxes = document.querySelectorAll(".box");
let res = document.querySelector(".res");
let turn0 = true;
let show = document.querySelector(".msg-container");
let newg = document.querySelector("#new-gm");
let win = document.querySelector(".msg");
const winpar = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const disableboxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}
const enableboxes = () => {
    for (box of boxes) {
        box.disabled = false;
    }
}
const resetgame = () => {
    turn0 = true;
    for (box of boxes) {
        box.innerText = "";
    }
    enableboxes();
    show.classList.add("msg-container");
}
newg.addEventListener("click", resetgame);
res.addEventListener("click", resetgame);
checkWin = () => {
    for (let pat of winpar) {
        let val1 = boxes[pat[0]].innerText;
        let val2 = boxes[pat[1]].innerText;
        let val3 = boxes[pat[2]].innerText;
        if (val1 != "" & val2 != "" & val3 != "") {
            if (val1 === val2 & val2 === val3) {
                win.innerText = `Congratulations🥳🥳🥳🥳\n The Winner is ${val1}`;
                show.classList.remove("msg-container");
                disableboxes();
                console.log("Winner", val1);
            }
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0 === true) {
            box.innerText = "X";
            turn0 = false;
        }
        else {
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;
        checkWin();
    })
})

