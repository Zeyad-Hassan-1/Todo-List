function e(e, t, n, a) {
    Object.defineProperty(e, t, {get: n, set: a, enumerable: !0, configurable: !0})
}

var t = globalThis, n = {}, a = {}, l = t.parcelRequire9e43;
null == l && ((l = function (e) {
    if (e in n) return n[e].exports;
    if (e in a) {
        var t = a[e];
        delete a[e];
        var l = {id: e, exports: {}};
        return n[e] = l, t.call(l.exports, l, l.exports), l.exports
    }
    var r = Error("Cannot find module '" + e + "'");
    throw r.code = "MODULE_NOT_FOUND", r
}).register = function (e, t) {
    a[e] = t
}, t.parcelRequire9e43 = l), (0, l.register)("6o2C7", function (t, n) {
    function a(e, t) {
        e.classList.add("completed"), t()
    }

    function l(e, t, n, a) {
        Swal.fire({
            showCancelButton: !0,
            title: "Multiple inputs",
            html: '<label for="title"> Enter The Title of the task </label><input id="swal-input1" class="swal2-input title" name="title" type="text"><label for="details">Enter details about the Task</label><input id="swal-input2" class="swal2-input details" name="details" type="text"><label for="date">Enter the date of the Task</label><input type="date" name="date" id="swal-input3" class="swal2-input date">',
            focusConfirm: !1,
            preConfirm: () => [document.querySelector("#swal-input1").value, document.querySelector("#swal-input2").value, document.querySelector("#swal-input3").value]
        }).then(l => {
            e.innerText = l.value[0], t.innerText = l.value[1], n.innerText = l.value[2], a()
        })
    }

    function r(e) {
        let t = document.querySelectorAll(".fa-trash-can");
        console.log(t), t.forEach(t => {
            t.addEventListener("click", () => {
                console.log(t), t.parentElement.parentElement.remove(), e()
            })
        })
    }

    e(t.exports, "done", () => a), e(t.exports, "editTasks", () => l), e(t.exports, "deleteElement", () => r)
});
var r = l("6o2C7");
const i = document.querySelector(".projectCreate"), o = document.querySelector(".projects-page");

function c() {
    document.querySelectorAll(".deleteBtn").forEach(e => {
        e.addEventListener("click", () => {
            e.parentElement.parentElement.remove(), s()
        })
    })
}

function d() {
    document.querySelectorAll(".AddTaskButton").forEach(e => {
        e.addEventListener("click", () => {
            let t = document.createElement("div");
            t.classList.add("taskCard");
            let n = document.createElement("i"), a = document.createElement("i"), l = document.createElement("i");
            n.classList.add("fa-regular", "fa-circle-check"), a.classList.add("fa-solid", "fa-pen-to-square"), l.classList.add("fa-regular", "fa-trash-can");
            let i = document.createElement("div");
            i.classList.add("detailsContainer");
            let o = document.createElement("div");
            o.append(n, a, l), o.classList.add("IconsContainer");
            let c = document.createElement("h3"), d = document.createElement("p"), u = document.createElement("p");
            i.append(c, d, u), t.append(i, o), e.parentElement.parentElement.querySelector(".tasksContainer").append(t), Swal.fire({
                title: "Create A new Task",
                html: '<label for="title">Title Of Your New Task</label><input id="swal-input1" type="text" class="swal2-input title" name="title"><label for="details">Enter details about the Task</label><input id="swal-input2" type="text" class="swal2-input details" name="details"><label for="Date">Enter Date of the Task</label><input id="swal-input3" type="date" class="swal2-input date" name="date">',
                focusConfirm: !1,
                preConfirm: () => [document.querySelector("#swal-input1").value, document.querySelector("#swal-input2").value, document.querySelector("#swal-input3").value]
            }).then(e => {
                e.isConfirmed && (c.innerHTML = e.value[0], d.innerHTML = e.value[1], u.innerHTML = e.value[2], s())
            }), n.addEventListener("click", () => {
                (0, r.done)(i, s)
            }), a.addEventListener("click", () => {
                (0, r.editTasks)(c, d, u, s)
            }), l.addEventListener("click", () => {
                l.parentElement.parentElement.remove(), s()
            })
        })
    })
}

function s() {
    localStorage.setItem("Projects", o.innerHTML)
}

i && i.addEventListener("click", () => {
    Swal.fire({
        title: "Create Project",
        html: '<label for="title">Title Of Your New Project</label><input id="swal-input1" type="text" class="swal2-input title" name="title"><label for="details">Enter details about the Task</label><input id="swal-input2" type="text" class="swal2-input details" name="details">',
        focusConfirm: !1,
        preConfirm: () => [document.querySelector("#swal-input1").value, document.querySelector("#swal-input2").value]
    }).then(e => {
        e.isConfirmed && (function (e, t) {
            let n = document.createElement("div"), a = document.createElement("div"), l = document.createElement("h3"),
                r = document.createElement("div"), i = document.createElement("p"),
                d = document.createElement("button"), u = document.createElement("button"),
                p = document.createElement("div"), m = document.createTextNode("Add task"),
                f = document.createTextNode("Delete Project"), E = document.createTextNode(e),
                v = document.createTextNode(t);
            a.classList.add("tasksContainer"), u.classList.add("deleteBtn"), d.classList.add("AddTaskButton"), u.append(f), d.append(m), p.append(d), p.append(u), p.classList.add("ButtonContainer"), r.append(l, i), l.appendChild(E), i.appendChild(v), n.append(r), n.append(p), n.append(a), n.classList.add("projectCard"), o.append(n), s(), c()
        }(e.value[0], e.value[1]), d())
    })
}), window.onload = () => {
    let e = localStorage.getItem("Projects");
    console.log(e), e && (o.innerHTML = e);
    let t = document.querySelectorAll(".fa-pen-to-square");
    document.querySelectorAll(".fa-circle-check").forEach(e => {
        e.addEventListener("click", () => {
            (0, r.done)(e.parentElement.parentElement.querySelector(".detailsContainer"), s)
        })
    }), t.forEach(e => {
        e.addEventListener("click", () => {
            let t = e.parentElement.parentElement.querySelector(".detailsContainer");
            (0, r.editTasks)(t.querySelector("h3"), t.querySelector("p:nth-child(2)"), t.querySelector("p:nth-child(3)"), s)
        })
    }), (0, r.deleteElement)(s), d(), c()
};
//# sourceMappingURL=Projects.da76c2f9.js.map
