const oneGB = 1024;

let volumeGB = prompt ('Введите обьем флеш карты в GB:');

let conversion = (volumeGB * oneGB) / 820;

alert (`В флеш карту объемом ${volumeGB} GB поместится 
    ${Math.floor(conversion)} файлов, размером 820 MB`)