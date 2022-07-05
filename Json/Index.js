module.exports = () => {
    const Bank = { BankName: [], AccountHolderName: [], AccountType: [], Personal_Details: [], User_Details: [] }
    
    Bank.BankName.push({ BankName: "Bank Of Baroda", Barnch: "Mota Varchha" })
    
    Bank.AccountHolderName.push({ AccountHolderName: "Kashil Dobariya" , Account_Number: "0210100133751"})
    
    Bank.AccountType.push({ Type1: "Saving", Type2: "current" , AccountBalance: "50,000"})
    
    Bank.Personal_Details.push({ FirstName: "Kashil", LastName: "Dobariya",Gender: "Male", Age: "21", Mobile_no: "6355023911", Adderss: "Mota Varchha,Surat" })
    
    Bank.User_Details.push({ User_id: "Kashil@123", Password: "******", User_code: "6302544513"})

      return Bank
  }