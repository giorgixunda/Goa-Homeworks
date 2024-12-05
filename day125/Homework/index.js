const fs = require('fs');

const words = ['გამარჯობა', 'სალამი', 'Hi', 'goa is the best!', 'როგორ ხარ?'];


function createFiles() {
    for (let i = 1; i <= 20; i++) {
        const fileName = `file_${i}.txt`;
        const randomWord = words[Math.floor(Math.random() * words.length)];
        const content = `${randomWord}, random word!`;

        fs.writeFile(fileName, content, (err) => {
            if (err) {
                console.log(`error ${fileName} `);
            } else {
                console.log(`successfully ${fileName}`);
            }
        });
    }
}

createFiles();