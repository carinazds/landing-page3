function enrollCourse(courseName) {
    alert("Você está inscrito no curso: " + courseName);
}

document.getElementById("enrollmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    alert("Inscrição enviada para " + name + " com o email " + email);
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
});
