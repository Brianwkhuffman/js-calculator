/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule(){
    var memory = 0;
    var total = 0;
    var calculator = {
        load: function(x){
            if (typeof x === 'number'){
                return total = x;
            }else{
                throw error;
            }
        },
        getTotal: function(){
            return total + memory;
        },
        add: function(x){
            if (typeof x === 'number'){
                return total += x;
            }else{
                throw error;
            }
        },
        subtract: function(x){
            if (typeof x === 'number'){
                return total -= x;
            }else{
                throw error;
            }
        },
        multiply: function(x){
            if (typeof x === 'number'){
                return total *= x;
            }else{
                throw error;
            }
        },
        divide: function(x){
            if (typeof x === 'number'){
                return total /= x;
            }else{
                throw error;
            }
        },
        recallMemory: function(){
            return memory;
        },
        saveMemory: function(){
            memory = total;
        },
        clearMemory: function(){
            memory = 0;
        }
    }
    return calculator;
}

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */

  /**
   * Return the value of `total`
   * @return { Number }
   */


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */


  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

