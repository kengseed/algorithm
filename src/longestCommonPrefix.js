var longestCommonPrefixStringList = function (stringList) {
    //Validate if empty input data
    if ((stringList === undefined) || (stringList == null) || (stringList.length == 0)) return "";

    //Length limit
    var lengthLimit = 200;

    //Check items and word character limit
    stringList = stringList.filter((word) => word.length <= lengthLimit);
    if (stringList.length > lengthLimit) {
        stringList = stringList.slice(0, lengthLimit);
    }

    //Validate English letter and lowercase
    var regex = /^[a-z]+$/;
    if (stringList.findIndex((word) => !regex.test(word)) > -1) return "";

    //Sort array item by ascending to find shortest word
    stringList = stringList.sort((a, b) => a.length - b.length);
    var shortestWord = stringList[0];

    //Use shortest word of array item to checking common prefix to all of items
    while (!stringList.every((word) => word.startsWith(shortestWord))) {
        if (shortestWord.length == 0) return;

        shortestWord = shortestWord.slice(0, -1);
    }

    return shortestWord;
}

//Test data
var testData1 = ["flower", "flow", "flight"];
var testData2 = ["dog", "racecar", "car"];
var testData3 = ["immortal", "imperials", "impossible", "immex"];
var testData4 = [];
for (var i = 0; i < 200; i++) {
    testData4.push("prefixaa");
}
testData4.push("prefixaa_02");
testData4.push("prefixaa_01");


//Run test
console.log("result: " + longestCommonPrefixStringList(testData1));
console.log("result: " + longestCommonPrefixStringList(testData2));
console.log("result: " + longestCommonPrefixStringList(testData3));
console.log("result: " + longestCommonPrefixStringList(testData4));