// const Template = require("../../models/template/template.model")
// const firebase = require("firebase/compat");
//
//
// let firebaseConfig = {
//      apiKey: 'AIzaSyAgRmlKdJGE6Rl4-Tyz2bEPbCt8TArLzmQ',
//      authDomain: 'af-project-4e8f8.firebaseapp.com',
//      storageBucket: 'af-project-4e8f8.appspot.com'
// };
// firebase.initializeApp(firebaseConfig);
// let storage = firebase.storage();
//
//
//
// const uploadTemplate = async (req , res)=>{
//
//
//      let metadata = {
//           contentType: req.file.mimetype
//      };
//      let uploadTask = storageRef.child('documents/' + req.file.originalname).put(req.file.buffer, metadata)
//      uploadTask.then((res)=>{
//          console.log(res)
//      }).catch((err)=>{
//          console.error(err)
//      })
//
//
// }
//
//
// module.exports={
//      uploadTemplate
// }
