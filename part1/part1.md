1. The length of ```prices``` will be printed because it is a ```var``` meaning that it's declaration is hoisted and does not follow block-scope.

2. The ```discountPrice``` of the final element in ```prices``` will be printed because it is a ```var``` meaning that it does not follow block-scope.

3. The value ```finalPrice``` of ```prices``` will be printed because it is a ```var``` meaning that it does not follow block-scope.

4. The function will return the array of ```[50, 100, 150]``` because all variables are ```var``` variables and, assuming correct code execution, discounted will be returned.

5. The function will throw an error because ```i``` is a ```let``` variable indicating that it has block-scope. Therefore, the only block that can access the declaration of ```i``` is the ```for``` loop.

6. The function will throw an error because ```discountedPrice``` is a ```let``` variable indicating that it has block-scope. Therefore, the only block that can access the declaration of ```discountedPrice``` will be the ```for``` loop.

7. The line will print the ```finalPrice``` of ```prices``` since ```finalPrice``` is declared outside of the ```for``` loop and is accessible within the entire function scope.

8. The function will return the array of ```[50, 100, 150]``` because even though the variables are ```let``` variables, the ```discounted``` array is accessible throughout the entire function. Assuming correct code execution, the ```discountedPrice``` and ```i``` will still be used when determining the ```finalPrice``` of an item. These will still be pushed to ```discounted``` - which, once again, has the entire function as its block scope - which will be returned at the end.

9. The function will throw an error because ```i``` is a ```let``` variable indicating that it has block-scope. Therefore, the only block that can access the declaration of ```i``` is the ```for``` loop.

10. The function will throw an error because ```discountedPrice``` is a ```const``` variable and ```const``` variables also have block-scope. Therefore, the only block that can access the declaration of ```discountedPrice``` is the ```for``` loop.

11. The function will throw an error because ```finalPrices``` is a ```const``` variable but is being reassigned at ```line 7```. Since ```const``` variables cannot be reassigned after declaration, an error will be thrown.

12. Assuming that the code does not throw any errors, ```[]``` should be returned because the ```discount``` variable is also a ```const``` variable and is declared to be ```[]```.

13.
    <ol type="a">
        <li><code>student.name</code></li>
        <li><code>student["Grad Year"]</code></li>
        <li><code>student.greeting()</code></li>
        <li><code>student["Favorite Teacher"].name</code></li>
        <li><code>student.courseLoad[0]</code></li>
    </ol>

14.
    <ol type="a">
        <li>The output will be "32" because 2 will be converted into a string and then be concatenated to the end of "3", resulting into "32".</li>
        <li>The output will be 1 because "3" will be converted into a Number and then be subtracted by 2, resulting into 1.</li>
        <li>The output will be 3 since null will be converted into a Number (which is 0) and then be added by 3, resulting into 3.</li>
        <li>The output will be "3null" because null will be converted into a String ("null") and will be concatenated at the end of "3", resulting in "3null".</li>
        <li>The output will be 4 because true will be converted into a Number (1) and will be added by 3, resulting in 4.</li>
        <li>The output will be 0 because both values will be converted into a Number (0) and will be added together, resulting in 0.</li>
        <li>The output will be "3undefined" because undefined will be converted into a String ("undefined") and will be concatenated at the end of "3", resulting in "3undefined".</li>
        <li>The output will be <code>NaN</code> because undefined will be converted into a Number (NaN) and will be added to 3, resulting in the special case of NaN.</li>
    </ol>

15.
    <ol type="a">
        <li>This equates to true since "2" gets casted to the Number 2 which is greater than 1.</li>
        <li>This equates to false since they are both strings. Lexographically, '1' comes before '2' meaning that the string '12' comes lexographically after '2', therefore the expression equates to false.</li>
        <li>This equates to true since the equality used allows for type conversion. '2' is converted to a Number 2 which is equivalent to 2.</li>
        <li>This equates to false since the equality does not allow type conversion. Since they are '2' and 2 are different types, the expression evaluates to false.</li>
        <li>This equates to false since true converted to a Number is 1. <code>Since 1 != 2</code>, the expression evaluates to false.</li>
        <li>This equates to true since Boolean(2) is evaluated to become true. The expression reduces down to <code>true === true</code>.</li>
    </ol>

16. The difference between ```==``` and ```===``` is that ``==`` allows for automatic type conversion while ```===``` does not. Using the ```===``` operator makes the expression immediately equivalent to false if the two compared values are different types, while ```==``` will attempt to convert them to solve the expression.

17. ```"How are you?"``` is printed out in the console because ```2 != true``` but 2 is a truthy value. This is because ```true``` will be converted to the Number 1 and ``` 2 != 1```. However, 2 is a truthy value, so the second branch will run.

18. See js file.

19. The result will be ```[6, 8, 10]```. We arrive at this conclusion since ```modifyArray``` iterates over the array ```[1, 2, 3]``` and performs the following operation where ```num``` is the current element we are iterating through: ```(num + 2) * 2```. We get to this operation by going through the callback functions where ```modifyArray``` callbacks ```doSomething``` which adds the element by two and then callbacks the anonymous function which multiples the element by two. 

20. See js file.

21. 1 4 3 2 (each printed out as a different statement)