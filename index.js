var findEmailsInString = function(){
    return {
        findEmails: function(string){
            var wordArray = string.split(" ");
            var result = [];
            wordArray.forEach(function(word){
                if (word.match(/[@]/) !== null) {
                    if (word[word.length - 1].match(/[,:;.!?]/)) {
                        word = word.slice(0, -1);
                    }

                    result.push(word);
                }
            });

            return result;
        }
    };
};

module.exports = findEmailsInString().findEmails;