import assert from 'assert';

describe('webdriver.io page', function () {
   
    beforeEach(()=> {
        browser.url('http://automationpractice.com/index.php?controller=authentication&back=my-account')
    }) 
  
    //01
    it('should have the inputs email and password empty', () => {
        var email = $('input[name="email"]').getValue(); 
        var password = $('input[name="passwd"]').getValue();        
        assert.strictEqual(email, '');
        assert.strictEqual(password,'');
    })

    //02
    it('inputs email and password contains their respective values', () => {

        $('input[name="email"]').setValue('test@nicasource.com'); 
        $('input[name="passwd"]').setValue('test123');     

        var email = $('input[name="email"]').getValue(); 
        var password = $('input[name="passwd"]').getValue();     
                
        assert.strictEqual(email,'test@nicasource.com');
        assert.strictEqual(password,'test123');
    })

    //03
    it('user logins successfully', () => {

        $('input[name="email"]').setValue('test@nicasource.com'); 
        $('input[name="passwd"]').setValue('test123');     
        var btnSubmit = $('button[name="SubmitLogin"]');   
        
        btnSubmit.click();

        var newURL = browser.getUrl().includes('http://automationpractice.com/index.php?controller=my-account')

        assert.equal(newURL,true);
        

    })
})