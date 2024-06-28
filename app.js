const mongoose = require ('mongoose')
const url_bd = 'mongodb://localhost:27017/empresa_Luna'

//Conexion con db
mongoose.connect(url_bd)

//Comprobacion
.then(() => {
    console.log("todo al mero chingazo")
})
.catch((err)=>{
    console.log("todo mongol")
}) 

//Esquemas db
const empresa_Sharon = new mongoose.Schema({
    nombre:{
        type:String
    },
    apellidos:{
        type:String
    },
    edad:{
        type:String
    },
    correo:{
        type:String
    },
    telefono:{
        type:String
    },
    inicio_empresa:{
        type:String
    },
    puesto:{
        type:String
    }

})

//modelo db
const empleados_modelo = new mongoose.model('empleados', empresa_Sharon)

//Crear tabla
empleados_modelo.create({
    nombre:"Daniel",
    apellidos:"Luna",
    edad:"20",
    correo:"dluna9968@gmail.com",
    telefono:"449-413-1429",
    inicio_empresa:"2019",
    puesto:"Gerente de ventas"
})