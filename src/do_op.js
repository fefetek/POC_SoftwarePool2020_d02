function doOp(nb1, op, nb2, callback) {
    nb1 = parseInt(nb1);
    nb2 = parseInt(nb2);
    switch (op) {
    case '+':
        callback(undefined, nb1 + nb2);
        break;
    case '-':
        callback(undefined, nb1 - nb2);
        break;
    case '*':
        callback(undefined, nb1 * nb2);
        break;
    case '/':
        callback(undefined, nb1 / nb2);
        break
    case '%':
        callback(undefined, nb1 % nb2);
        break;
    }
}

function CallBack(err, res) {
    if (res !== undefined) 
	console.log(res);
    else if (err !== undefined)
	console.error(err);
}

doOp(process.argv[2], process.argv[3], process.argv[4], CallBack);
