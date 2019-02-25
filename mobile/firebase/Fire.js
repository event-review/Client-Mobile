import firebase from 'firebase'
import uuidv4 from 'uuid/v4'
import {Alert} from 'react-native'
import resizeImage from '../helpers/resizeImage'

class Fire {
    constructor() {
        var config = {
            apiKey: "AIzaSyA944lbKA0Y7N6sgtk4cg3mClEP9KO6F70",
            authDomain: "ereviewd.firebaseapp.com",
            databaseURL: "https://ereviewd.firebaseio.com",
            projectId: "ereviewd",
            storageBucket: "ereviewd.appspot.com",
            messagingSenderId: "353943606949"
          };
          firebase.initializeApp(config);
    }


    // Upload Data
    uploadPhotoAsync = async uri => {
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', uri, true);
            xhr.send(null);
        });


        const ref = firebase
            .storage()
            .ref()
            .child(uuidv4());
        const snapshot = await ref.put(blob);

        blob.close();

        return await snapshot.ref.getDownloadURL();
    }

    CreatePhoto = async localUri => {
        try {

            const { uri: resizedImage } = await resizeImage(
                localUri,
            )
            const imageUri = await this.uploadPhotoAsync(resizedImage)
            return imageUri

        } catch ({ message }) {
            // Alert.alert("Error", `${message}`)
        }
    }
}

Fire.shared = new Fire

export default Fire