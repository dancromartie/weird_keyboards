// global vars cause I don't care!             
presses = [];
checker = null;

key_mappings = {
    "k": "a",
    "kd": "b",
    "dfkj": "c",
    "dfj": "d",
    "j": "e",
    "dkdf": "f",
    "dfjk": "g",
    "fd": "h",
    "d": "i",
    "fj": "j",
    "jf": "k",
    "kjdf": "l",
    "dfd": "m",
    "df": "n",
    "f": "o",
    "dkdfkj": "p",
    "jdj": "q",
    "kjf": "r",
    "jk": "s",
    "kj": "t",
    "kjk": "u",
    "dk": "v",
    "kdkj": "w",
    "kjfd": "x",
    "kdkjdf": "y",
    "kdjfkdj": "z"
}

function check_letters() {
    var keys = presses.join("");
    // We have a list of digits like "7568" that needs to become "gd"                                                                                                                                                                                                                                                           
    keys = keys.replace(/75/g, "k")
        .replace(/74/g, "j")
        .replace(/68/g, "d")
        .replace(/70/g, "f");

    // act confused if it's not in the mapping                                                                                                                                                                                                                                                                                  
    var letter = "?";
    if (keys in key_mappings) {
        letter = key_mappings[keys];
    }

    // Clear out our current key presses                                                                                                                                                                                                                                                                                        
    presses = [];
    $("#translation").append("<span>" + letter + "</span>");
}

function add_and_check(e) {
    clearTimeout(checker);
    var unicode = e.keyCode ? e.keyCode : e.charCode;
    presses.push(unicode);
    checker = setTimeout(check_letters, 200);
}

$("#input-area").keyup(function (e) {
    add_and_check(e);
});

for (var key in key_mappings) {
    $("<div></div>").text(key + " = " + key_mappings[key]).appendTo("#mappings");
}
