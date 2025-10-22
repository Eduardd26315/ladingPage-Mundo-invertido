// Inicializa o áudio
const audio = document.getElementById('music');
audio.volume = 0.2;

function switchTheme() {
    const theme = document.body.classList;
    
    if (theme.contains('dark-theme')) {
        theme.remove('dark-theme');
        theme.add('light-theme');
        audio.src = 'assets/musics/normal-world.mpeg';
    } else {
        theme.remove('light-theme');
        theme.add('dark-theme');
        audio.src = 'assets/musics/inverted-world.mpeg';
    }
    
    // Tenta reproduzir o áudio
    audio.play().catch(error => {
        console.log("Erro ao reproduzir áudio:", error);
    });
}