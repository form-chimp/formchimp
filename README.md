# Form Chimp API Lib
 A tiny library for interacting with the [Form Chimp](https://formchimp.app) API.<br>
 This is an optional companion to your [Form Chimp](https://formchimp.app) tooling. <br>
 An alternitive would be using [Axios HTTPS](https://axios-http.com/docs/intro).
 
 
 
 
*Form Chimp is a platform that makes working with web forms easiar by <br> 
handling the back-end and allowing you to define the front-end yourself. <br>
So if you decide to impliment your form using Js...this lib is here to help with that.<br>
Enjoy - Anas M.*
 
----------------------------------------

## How to...

### 1 - Add the lib to your project.
Using `npm` install the lib to your project with the below command.
```Bash
npm i formchimp
```
Then, import it to your project like so...
```Js
import Chimp from 'formchimp'
```
<br>
If you want to use the bundled version, include a script tag on your HTML form that points to the bundled version.

```HTML
<script src="https://cdn.jsdelivr.net/npm/formchimp/lib/build.js"></script>
```

### 2 - Submit to form
1. Initialize the `Chimp` object with your form's `id`.

```Js
let myForm = new Chimp(form_ID)
```

2. Once you want to submit to your form...just call the post method on the `Chimp` object.

```Js

myForm.post(data_Object)
.then((successMassage)=>{
    console.log(successMassage);
})
.catch((err)=>{
    console.log(err);
})
```
Once the `post` method is called, the lib will make an API call to your form using your form's ID that you've provided...Submitting the data to your form.

----------

That's all for now...Thank you.<br>
*©2022 Form Chimp and it's creators. View [Licence](https://github.com/form-chimp/formchimp/blob/main/LICENSE)*
