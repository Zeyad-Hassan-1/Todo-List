const e = document.querySelector(".nightMode");
let t = "light";
const o = document.documentElement;
e ? e.addEventListener("click", () => {
    r.classList.contains("fa-moon") ? (r.classList.add("fade-out"), r.addEventListener("animationend", () => {
        r.classList.remove("fa-moon", "fade-out"), r.classList.add("fa-sun", "fall-in")
    }, {once: !0})) : (r.classList.add("fade-out"), r.addEventListener("animationend", () => {
        r.classList.remove("fa-sun", "fade-out"), r.classList.add("fa-moon", "fall-in")
    }, {once: !0})), "light" === t ? (o.style.setProperty("--bodyBackgroundColor", "#1e1e1e"), o.style.setProperty("--headerandFooterColor", "#262626"), o.style.setProperty("--CardColor", "#262626"), o.style.setProperty("--submitTaskBackgroundColor", "#de4c4a"), o.style.setProperty("--pendingTasksNumber", "#de4c4a"), o.style.setProperty("--logoColor", "#de4c4a"), o.style.setProperty("--mainTextColor", "#FFFFFF"), t = "dark", localStorage.setItem("lightOrNight", "night")) : (o.style.setProperty("--bodyBackgroundColor", "#FFFFFF"), o.style.setProperty("--headerandFooterColor", "rgba(242, 234, 234, 1)"), o.style.setProperty("--CardColor", "rgba(240, 209, 168, 1)"), o.style.setProperty("--submitTaskBackgroundColor", "#5C9967"), o.style.setProperty("--pendingTasksNumber", "#C4A49F"), o.style.setProperty("--logoColor", "#F87777"), o.style.setProperty("--mainTextColor", "black"), t = "light", localStorage.setItem("lightOrNight", "light")), console.log(t)
}) : (console.log(t), "night" === localStorage.getItem("lightOrNight") && (o.style.setProperty("--bodyBackgroundColor", "#1e1e1e"), o.style.setProperty("--headerandFooterColor", "#262626"), o.style.setProperty("--CardColor", "#262626"), o.style.setProperty("--submitTaskBackgroundColor", "#de4c4a"), o.style.setProperty("--pendingTasksNumber", "#de4c4a"), o.style.setProperty("--logoColor", "#de4c4a"), o.style.setProperty("--mainTextColor", "#FFFFFF")));
const r = document.querySelector(".nightMode").querySelector("i");
//# sourceMappingURL=index.aa907894.js.map
