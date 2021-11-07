import { valid} from "../src/client/js/check"


describe('valid() must be of the type function' , () => {
    test('its type must be function',() => {
        expect(typeof valid).toBe("function");
    });
});


describe("Making test to the url functionality", () => {
  
    test("Testing the valid() function", () => {
        
           expect(valid).toBeDefined();
})});




