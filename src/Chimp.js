import axios from "axios";


export default class Chimp{
    /**
     * 
     * @param {String} formURL The `url` of the Form Chimp form.
     */
    constructor(formURL){

        this.formURL = formURL

    }


    /**
     * 
     * @param {Object} data The data to submit.
     * @returns `Object` containing the result of the operation.
     */
    async post(data){
        let res =  await axios.post(this.formURL,data)
        .then((x)=>{
            
            return x
        })
        .catch((err)=>{
            return err
        })

        return res
    }
}

