import mongoose, {Schema} from 'mongoose';

const recetaSchema = new Schema({
    titulo: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
        unique : true
    },
    imagen: {
      type:String,
      required:true,
      validate:{
          validator: function(valor){
              return /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i.test(valor)
          },
          message: props => `${props.value} no es una url de imagen valida.`
      }
    },
    descripcion: {  
        type: String,
        required: true,
        minLength: 10,
        maxLength: 100,
    },
});

const Receta = mongoose.model('Receta', recetaSchema);

export default Receta;