
import "babel-polyfill";


import { submit } from "../src/client/js/submit"


describe("Testing the submit functionality", () => {
  
    test("Testing the submit() function", () => {
         
           expect(submit).toBeDefined();
})});



describe('Test, the function "submit()" should be a function' , () => {
    test('It should return true',() => {
        expect(typeof submit).toBe("function");
    });
});
