"use strict";

//Contact Class

(()=>{
    class Contact {

        //getters and setters
      get FullName() 
      {
          return this.m_fullName;
      }
      get ContactNumber() 
      {
          return this.m_conactNumber;
      }
      get EmailAddress() 
      {
          return this.m_emailAddress;
      }
      set FullName(value) 
      {
          this.m_fullName = value;
      }
      set ContactNumber(value) 
      {
          this.m_conactNumber = value;
      }
      set EmailAddress(value) 
      {
          this.m_emailAddress = value;
      }
    
        //Constructor
        /**
         * A Constructor for any Contact objects being instantiated
         * @param {string} fullName 
         * @param {string} contactNumber 
         * @param {string} emailAddress 
         */
        constructor(fullName = "", contactNumber = "", emailAddress = "") 
        {
            this.ContactNumber = contactNumber;
            this.EmailAddress = emailAddress;
            this.FullName = fullName;
        }
    
    
        
        //Methods
        /**
         * Overrides the toString method to print the Contact class
         * @returns {string}
         */
        toString() 
        {
            return `Full Name: ${this.m_fullName}\nPhone: ${this.m_contactNumber}\nEmail: ${this.m_emailAddress}`;
        }
    
        /**
         * This method returns a JSON Object
         * @returns {Object}
         */
        toJSON()
        {
            return {
                "fullName":this.FullName,
                "contactNumber":this.ContactNumber,
                "emailAddress":this.EmailAddress
            }
        }
        /**
         * Method converts the Contact into a comma-seperated value string
         * @returns {String}
         */
        serialize()
        {
            if (this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
            {
                return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`;
            }
            else 
            {
                console.error("Error: One of more of the Contact Properties are empty or null.");
                return null;
            }
            
        }
        /**
         * Method takes a comma-seperated data string and assigns the values to the contact class properties
         * @param {string} data
         * @returns {void} 
         */
        deserialize(data)
        {
            let propertyArray = data.split(",");
            this.FullName = propertyArray[0];
            this.ContactNumber = propertyArray[1];
            this.EmailAddress = propertyArray[2];
        }
    
    }

core.Contact = Contact;

})(core || (core={}));



