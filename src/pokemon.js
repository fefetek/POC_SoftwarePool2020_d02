const fs = require('fs')

function transform(oldfile, newfile) {
    if (!oldfile) {
        console.log('av 2 missing');
        return;
    }
    if (!newfile) {
        console.log('av 3 missing');
        return;
    }
    const content = fs.readFileSync(oldfile);
    fs.appendFile(newfile, content, function (err) {
        if (!err)
            console.log('Saved');
        return;
    });
}

transform(process.argv[2], process.argv[3]);
