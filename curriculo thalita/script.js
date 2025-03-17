// Função para alternar entre modo claro e escuro
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Salvar preferência do usuário no localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Verificar preferência salva ao carregar a página
function loadTheme() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
    }
}

// Adicionar evento de clique ao botão
document.addEventListener("DOMContentLoaded", () => {
    const darkModeButton = document.getElementById("dark-mode-button");
    if (darkModeButton) {
        darkModeButton.addEventListener("click", toggleDarkMode);
    }

    // Carregar tema salvo
    loadTheme();
});