const bcrypt = require('bcrypt')

const hashPassword = async (password)=>{
    const salt = await bcrypt.genSalt(5)
    const salt2 = await bcrypt.genSalt(31)
    const hash = await bcrypt.hash(password, salt)
    const hash2 = await bcrypt.hash(password, salt2)
    console.log({salt});
    console.log({salt2});
    console.log({hash});
    console.log({hash2});
    return hash;
}

const comparePass = async (plaintext, hash)=>{
    const isValid = await bcrypt.compare(plaintext, hash)
    console.log(isValid);
}

const hash = "$2b$10$sRjhTFwtg2NbHfEm/LfULuNDbSjmjKtHk64uzeu0iOn7uTeZVzWuu";

// hashPassword("12345678")
hashPassword("123456780")
