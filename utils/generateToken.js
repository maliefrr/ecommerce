import jwt from 'jsonwebtoken'

export const getToken = (id) => {
    return jwt.sign({id},process.env.SECRET,{
        expiresIn: "1d"
    })
}