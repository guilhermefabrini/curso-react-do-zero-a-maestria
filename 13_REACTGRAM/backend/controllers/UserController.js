const User = require("../models/User")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const jwtSecret = process.env.JWT_SECRET

// Gerar token de usuário
const generateToken = (id) => {
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: "7d"
    })
}

// Registrar usuário e logar
const register = async (req, res) => {
    
    const { name, email, password } = req.body

    // verifica se usuário existe
    const user = await User.findOne({email})

    if (user) {
        res.status(422).json({errors: ["Por favor, utilize outro e-mail"]})
        return
    }

    // Gera hash da senha
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    // Cria o usuário
    const newUser = await User.create({
        name,
        email,
        password: passwordHash
    })

    // Se o usuário foi criado com sucesso, retorna o token
    if (!newUser) {
        res.status(422).json({errors: ["Houve um erro, por favor tente mais tarde."]})
        return
    }

    res.status(201).json({
        _id: newUser._id,
        token: generateToken(newUser._id)
    })

}

// Sign user in
const login = (req, res) => {
    res.send("login")
}

module.exports = {
    register,
    login
}