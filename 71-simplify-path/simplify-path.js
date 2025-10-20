/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    path = path.split('/')
    const stackPath = []
    for (const part of path) {
        if (part === '' || part === '.') continue;
        if (part === '..') {
            if (stackPath.length > 0) stackPath.pop();
        } else {
            stackPath.push(part);
        }
    }

    return '/' + stackPath.join('/');
};