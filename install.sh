# Código creado por @gata_dios      

#!/data/data/com.termux/files/usr/bin/bash 
# Interpretación determinada para la ejecución      

echo -e "\e[35m
　╭━━━━━━╮
 ╭┃ ╭━━━━╮
 ┃┃ ╰━━━━╯
 ┃┃ ┈👉🎮⌨️👍
 ╰┃ ┈┃ ─┌ ┈┃
　╰━╯ ┈ ╰━╯
├┬┴┬┴ ιηι¢ιαη∂σ ιηѕтαℓα¢ισ́η αυтσмάтι ┬┴┬┴┤ \n\e[0m" 

: <<'COMMENT'
...
COMMENT

echo -e "\033[01;93m ＰＲＥＰＡＲＡＮＤＯ ＩＮＳＴＡＬＡＣＩＯＮ...\n\033[0m"
mp3_array=("install_automatic1.mp3" "install_automatic2.mp3" "install_automatic3.mp3" "install_automatic4.mp3" "install_automatic5.mp3" "install_automatic6.mp3" "install_automatic7.mp3" "install_automatic8.mp3" "install_automatic9.mp3" "install_automatic10.mp3" "install_automatic11.mp3" "install_automatic12.mp3")
random_mp3=${mp3_array[$RANDOM % ${#mp3_array[@]}]}
if wget -q https://github.com/GataNina-Li/GataBot-MD/raw/master/musicSH/"$random_mp3"; then
while true; do
mpv --no-terminal "$random_mp3" &
sleep 2
wait
done &
else
 
echo -e "\033[01;32m\033[01m𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙿𝙴𝙽𝙳𝙴𝙲𝙸𝙰𝚂!!!\n\033[0m" 
echo -e "\e[36m
𝐈𝐍𝐒𝐓𝐀𝐋𝐋 𝐆𝐈𝐓\n\e[0m"
if command -v git >/dev/null 2>&1; then
if pkg install git -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install git -y 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar Git. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33mpkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/elrebelde21/NovaBot-MD\ncd NovaBot-MD\nyarn install\nnpm install\nnpm start\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01m 🅖🅘🅣 🅢🅔 🅗🅐 🅘🅝🅢🅣🅐🅛🅐🅓🅞 🅒🅞🅡🅡🅔🅒🅣🅐🅜🅔🅝🅣🅔.\n\033[0m" 
fi
fi
 
echo -e "\e[35m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░ █░
█ █░▀█ ▄█ ░█░ █▀█ █▄ █▄

█▄░█ █▀█ █▀▄ █▀▀ ░█ █▀
█░▀█ █▄█ █▄▀ ██▄ ▄█ ▄█
\n\e[0m"

if command -v node >/dev/null 2>&1; then
if pkg install nodejs -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install nodejs -y 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar Node.js. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33mpkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/elrebelde21/NovaBot-MD\ncd NovaBot-MD\nyarn install\nnpm install\nnpm start\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mNode.js se ha instalado correctamente.\nNode.js has been installed successfully.\n\033[0m" 
fi

echo -e "\e[36m
█ █▄░█ █▀ ▀█▀ ▄▀█ █░ █░
█ █░▀█ ▄█ ░█░ █▀█ █▄ █▄

█▀ █▀ █▀▄▀█ █▀█ █▀▀ █▀▀
█▀ █▀ █░▀░█ █▀▀ ██▄ █▄█\n\e[0m"

if command -v ffmpeg >/dev/null 2>&1; then
if pkg install ffmpeg -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install ffmpeg -y 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar FFmpeg. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33mpkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/elrebelde21/NovaBot-MD\ncd NovaBot-MD\nyarn install\nnpm install\nnpm start\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mFFmpeg se ha instalado correctamente.\nFFmpeg has been installed successfully.\n\033[0m" 
fi

if command -v convert >/dev/null 2>&1; then
if pkg install imagemagick -y 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(pkg install imagemagick -y 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar ImageMagick. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33mpkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/elrebelde21/NovaBot-MD\ncd NovaBot-MD\nyarn install\nnpm install\nnpm start\033[0m"
exit 1
else

if command -v yarn >/dev/null 2>&1; then
if npm install -g yarn 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(npm install -g yarn 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar Yarn. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
echo -e "\033[01;33mpkg install git -y\npkg install nodejs -y\npkg install ffmpeg -y\npkg install imagemagick -y\npkg install -y yarn\ngit clone https://github.com/elrebelde21/NovaBot-MD\ncd NovaBot-MD\nyarn install\nnpm install\nnpm start\033[0m"
exit 1
else
echo -e "\033[01;32m\033[01mYarn se ha instalado correctamente.\nYarn has been installed successfully.\n\033[0m" 
fi

echo -e "\e[36m
🇹 🇴 🇩 🇴  🇨 🇴 🇷 🇷 🇪 🇨 🇹 🇴\n\e[0m"
echo -e "\033[01;32m\033[01m\nTodas las dependencias se han instalado correctamente.\nAll dependencies have been installed successfully.\n\033[0m" 

echo -e "\e[35m🅘🅝🅢🅣🅐🅛🅐🅝🅓🅞 🅖🅘🅣 🅒🅛🅞🅝🅔\n\e[0m"

echo -e "\033[1;35m"
git clone https://github.com/elrebelde21/NovaBot-MD.git
echo -e "\033[01;32m\033[01mLa clonación se ha descargado e instalado correctamente.\nThe clone has been downloaded and installed successfully.\n\033[0m"

echo -e "\033[01;32m\033[01mCambiando al directorio del repositorio!!\nChanging to the repository directory!!\n\033[0m" 
cd NovaBot-MD

echo -e "\e[36m🅘🅝🅢🅣🅐🅛🅛 🅨🅐🅡🅝\n\e[0m"

echo -e "\033[0;34mSe actualizará yarn automáticamente. Espere un momento por favor.\nIt will update yarn automatically. Wait a moment please.\n\033[0m"
if yarn install 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(yarn install 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar yarn. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
else
echo -e "\033[01;32m\033[01mYarn se ha actualizado correctamente.\nYarn has been successfully updated.\n\033[0m" 
fi

echo -e "\e[35m🅘🅝🅢🅣🅐🅛🅛 🅝🅟🅜\n\e[0m"

echo -e "\033[0;34mSe instalará NPM automáticamente. Espere un momento por favor.\nNPM will be installed automatically. Wait a moment please.\n\033[0m"
if npm install 2>&1 >/dev/null | grep -E -i -q '(command not found|unable to locate package|E: Could not get lock|debconf: delaying package configuration|Package not found|Failed to fetch|404 Not Found|Hash sum mismatch|503 Service Unavailable|504 Gateway Timeout|408 Request Timeout|Connection timed out|Temporary failure resolving)'; then
error=$(npm install 2>&1 >/dev/null)
echo -e "\033[0;31mError: $error\033[0m" 
echo -e "\033[0;34mNo se pudo instalar NPM. Verifique su conexión a Internet e inténtelo de nuevo. Si el error continúa, instale de forma manual!!\nIf the error continues, install manually!!\033[0m" 
else
echo -e "\033[01;32m\033[01mNPM se ha instalado correctamente..\n\033[0m" 
fi

: <<'COMMENT'
v="${b}\033[1;32m"
v1="${b}\033[32m"
b="\033[0m"

menu() {
	#NovaBot-MD
	echo -e "${v1} MENÚ DE CONFIGURACIÓN"
	printf "\n"
	printf "${v1}[${b}01${v1}]${v} Visistar Grupo de Actualizaciones\n"
	printf "\n"
	printf "${v1}[${b}02${v1}]${v} Elegir idioma español\n"
	printf "\n"
	printf "${v1}[${b}03${v1}]${v} Elegir idioma inglés\n"
	printf "\n"
	printf "${v1}[${b}04${v1}]${v} Continuar\n"
	printf "\n"
}

menu_ayuda() {
    #printf "${v1}[${b}++${v1}]${v} NovaBot-MD${b}: "
	read opcion
	case $opcion in
            01|1)
                am start -a android.intent.action.VIEW https://chat.whatsapp.com/DVhu9S9Zr7cBFFl26N61U3 &>> /dev/null
                echo -e "${b}[${v1}++${b}]${v} Accediendo al Grupo Oficial\n"
                
                ;;
            02|2)
                echo -e "${b}[${v1}++${b}]${v} Seleccionado idioma español\n"
                
                ;;
            03|3)
                echo -e "${b}[${v1}++${b}]${v} Seleccionado idioma inglés\n"
                
                ;;
	    04|4)
	        iniciar
                echo -e "${b}[${v1}++${b}]${v} Continuando...\n"
                
                ;;
            *)
                echo -e "${v1}Comando: '"${r1}${opcion}${v1}"' invalido."
		echo ""
		inicio
                ;;
        esac
}

menu
menu_ayuda
COMMENT

clear
echo -e "\e[36m
\n\e[0m"

echo -e "\e[31m
　　｡ﾟﾟ･｡･ﾟﾟ｡
         ﾟ。        ｡ﾟ
             ﾟ･｡･ﾟ
       ︵               ︵
    (        ╲       /       /
      ╲          ╲/       /
           ╲          ╲  /
          ╭ ͡   ╲           ╲
     ╭ ͡   ╲        ╲       ﾉ
╭ ͡   ╲        ╲         ╱
 ╲       ╲          ╱
      ╲         ╱
          ︶ 
🅖🅡🅐🅒🅘🅐🅢 🅟🅞🅡 🅢🅤🅢 🅟🅡🅔🅕🅔🅡🅔🅝🅒🅘🅐🅢 💞
\n\e[0m"
    
sleep 15 && pkill mpv > /dev/null 2>&1 && sleep 2 && rm -f /data/data/com.termux/files/home/"$random_mp3" &
echo -e "\033[01;32m\033[01m🅘🅝🅘🅒🅘🅐🅝🅓🅞 🅝🅞🅥🅐🅑🅞🅣-🅜🅓 🚀\n\033[0m"
npm start
