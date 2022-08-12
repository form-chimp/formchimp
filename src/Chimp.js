import axios from "axios";


export default class Chimp{
    /**
     * 
     * @param {String} form_id The `id` of the Form Chimp form. Found in the dashboard.
     */
    constructor(form_id){

        this.form_id = form_id
        this.api_link = `https://api.formchimp.app/?form=`

    }


    /**
     * 
     * @param {Object} data The data to submit.
     * @returns `Object` containing the result of the operation.
     */
    async post(data){
        let res =  await axios.post(this.api_link+this.form_id,data)
        .then((x)=>{
            
            return x
        })
        .catch((err)=>{
            return err
        })

        return res
    }
}

