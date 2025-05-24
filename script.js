document.addEventListener("DOMContentLoaded", function() {
    fetch("/api/ultimo_ticket")
        .then(response => response.json())
        .then(data => {
            document.getElementById("id_ticket").value = data.nuevo_id;
        })
        .catch(error => console.error("Error al obtener el último ticket:", error));
});
