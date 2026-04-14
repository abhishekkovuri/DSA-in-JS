const trieNode = () => {
    return {
        children: {},
        eow: false
    }
}

var Trie = function () {
    this.root = trieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let curr = this.root;
    for (let ch of word) {
        if (!curr.children[ch]) {
            curr.children[ch] = trieNode();
        }
        curr = curr.children[ch];
    }
    curr.eow = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let curr = this.root;
    for (const ch of word) {
        if (!curr.children[ch]) {
            return false;
        }
        curr = curr.children[ch];
    }
    return curr.eow;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let curr = this.root;
    for (const ch of prefix) {
        if (!curr.children[ch]) {
            return false;
        }
        curr = curr.children[ch];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */