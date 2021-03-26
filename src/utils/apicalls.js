import API from './api';

export {
    getAllPosts,
    getMyPosts,
    deletePost,
    postNewPost,
    putExistingPost
}

function getAllPosts() {
    //este get nos lo deja hacer AXIOS porque sino no podriamos hacerlo tan facil
    //solo hay que darle como ruta la URL relativa de /posts  para la solucitud GET
    //porque sin AXIOS tendriamos que poner http://.....

    //Aquí no estamos haciendo nada para pedir todos los posts sino que como en la API
    //ya teníamos hecho que si accedias a /posts te daba todos los post pues así lo
    //tenemos ahora, esto nos devolverá todos los posts en formato .json en la variable res
    return API.get('/posts').then(res => res.data); 
}

function getMyPosts(email){
    return API.get('/posts/all/'+email).then(res => res.data);
}

function deletePost(idpost){
    return API.delete('/posts/'+idpost).then(result => result.data);
}

function postNewPost(email, user, image, message) {
    return API.post('/posts', {
      email,
      user,
      image,
      message}).then(result => result.data);
}

function putExistingPost(idpost, message) {
    return API.put('/posts/'+idpost, {
      message}).then(result => result.data);
}