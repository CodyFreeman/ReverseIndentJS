function ReverseIndent() {

    /**
     * Runs the input string through a reversal of indentation and returns it in a string
     *
     * @param input {string} Data to process
     * @returns {string} Reverse indented input
     */
    this.run = function run(input) {
        //TODO: validate that it is more than one line
        var data = formatInput(input);
        var spaces = countSpaces(data);
        data = removeLeadingSpaces(data);
        data = constructReversal(data, spaces);
        return formatOutput(data);
    };

    /**
     * Splits string into array of lines and removes newline and carriage returns
     *
     * @param input {string} String to split
     * @returns {Array}
     */
    function formatInput(input) {
        var data = input.split("\n");
        for (var i = 0; i < data.length; i++) {
            data[i] = data[i].replace(/\r?\n|\r/gi, '');
        }
        return data;
    }

    /**
     * Counts the leading spaces on each string in supplied array
     *
     * @param data {Array} Array of strings
     * @returns {Array}
     */
    function countSpaces(data) {
        var lines = [];
        for (var i = 0; i < data.length; i++) {
            var match = /^( *)/g.exec(data[i]);
            lines[i] = match[0].length;
        }
        return lines;
    }

    /**
     * Removes leading spaces from each string of an array
     *
     * @param data {Array} Array of strings to remove leading spaces from
     * @returns {Array}
     */
    function removeLeadingSpaces(data) {
        for (var i = 0; i < data.length; i++) {
            data[i] = data[i].replace(/^\s+/g, '')
        }
        return data;

    }

    /**
     * Formates an array of strings into having reverse indentation compared to the provided array of how many spaces each line had
     *
     * @param data {Array} Array of strings
     * @param spaces {Array} Array of spaces counted
     * @returns {Array}
     */
    function constructReversal(data, spaces) {
        var max = findMax(spaces);
        for (var i = 0; i < data.length; i++) { //why does this require var i = 0?
            data[i] = insertSpaces(data[i], max - spaces[i]);
        }
        return data;
    }

    /**
     * Finds the highest number in supplied array
     *
     * @param numbersArray {Array} Array of numbers
     * @returns {number} Highest value found
     */
    function findMax(numbersArray) {
        var max = 0;
        for (var i = 0; i < numbersArray.length; i++) {
            if (numbersArray[i] > max) {
                max = numbersArray[i];
            }
        }
        return max;
    }

    /**
     * Inserts leading spaces in a string
     *
     * @param input {string} String to operate on
     * @param amount {number} Amount of spaces to insert
     * @returns {string}
     */
    function insertSpaces(input, amount) {
        for (var i = 0; i < amount; i++) {
            input = ' ' + input;
        }
        return input;
    }

    /**
     * Joins supplied array with newline characters
     *
     * @param data {Array} Array of strings to join
     * @returns {string}
     */
    function formatOutput(data) {
        return data.join("\n");
    }
}
