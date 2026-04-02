const User = require("../models/User")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

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
const login = async (req, res) => {
    
    const { email, password } = req.body

    const user = await User.findOne({email})

    // Verifica se o usuário existe
    if (!user) {
        res.status(404).json({errors: ["Usuário não encontrado"]})
        return
    }

    // Verifica se a senha está correta
    if (!(await bcrypt.compare(password, user.password))) {
        res.status(422).json({errors: ["Senha inválida"]})
        return
    }

    // Retorna usuário com o token
    res.status(201).json({
        _id: user._id,
        profileImage: user.profileImage,
        token: generateToken(newUser._id)
    })

}

// Capturar o usuário logado atual
const getCurrentUser = async (req, res) => {
    const user = req.user
    res.status(200).json(user)
}

// Atualiza um usuário
const update = async (req, res) => {
    const {name, password, bio} = req.body
    let profileImage = null
    if (req.file) {
        profileImage = req.file.filename
    }
    const reqUser = req.user
    const user = await User.findById(mongoose.Types.ObjectId(reqUser._id)).select("-password")
    if (name) {
        user.name = name
    }
    if (password) {
        // Gerar hash de senha
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)
        user.password = passwordHash
    }
    if (profileImage) {
        user.profileImage = profileImage
    }
    if (bio) {
        user.bio = bio
    }
    await user.save()
    res.status(200).json(user)
}

module.exports = {
    register,
    login,
    getCurrentUser,
    update
}