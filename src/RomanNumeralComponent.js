import React, {useState} from 'react';

export default function RomanNumeralComponent () {
    const [calculatedAnswer, updateAnswer] = useState("Nulla");
    const [input, updateInput] = useState("");


    const addAndConvertToRomanNumerals = (ints) => {
        /* Implement me! */

        /* set up total variable, and String Roman Numeral to return : */
        var sum = 0;
        var romanNumeral = "";

        /* Iterate through the ints to sum up the numbers and  store into the sum variable */
        for(var i = 0; i < ints.length; i++){
            sum += ints[i];
        }

        /* if Sum is still 0, return "nulla" */
        if(sum === 0){
            romanNumeral = "nulla";
            return romanNumeral;
        }

        /* Once Sum is added, create the conversion to Roman Numeral:
         * Include Edge Cases in Array */
        var romanValues = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
        var romanLetters = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

        /* Iterate to see how many iterations of each letter we are going to use: */
        for(var j = 0; j < romanValues.length; j++){
            var iterations = Math.floor(sum / romanValues[j]);

            //
            sum = sum % romanValues[j];

            //add the letter if the letter was used :
            for(var k = 0; k < iterations; k++){

                romanNumeral += romanLetters[j];
            }

            // Have a check if sum = 0, we can break if the sum is done:
            if(sum === 0){
                break;
            }

        }

        /* Worse Case Scenario:  O(n^2) */
        return romanNumeral;

    }

    const addNumbers = (inputString) => {
        const numbersStringArray = inputString.split(",");
        const numbers = numbersStringArray.map((numberAsString) => { return parseInt(numberAsString, 10) })

        /* numbers is an array of ints. E.g. [1, 2, 3] */
        const answer = addAndConvertToRomanNumerals(numbers)

        return answer;
    }

    const handleChange = (event) => {
        updateInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const answer = addNumbers(input);
        updateAnswer(answer);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label style={{paddingRight: "10px"}}>
                    <span style={{paddingRight: "10px"}}>Numbers (separated by commas):</span>
                    <input type="text" name="input-form" onChange={handleChange}/>
                </label>
                <input type="submit" value="Add Numbers" />
            </form>
            <div>Answer in Roman Numerals: {calculatedAnswer}</div>
        </div>
    )
}