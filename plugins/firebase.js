import firebase from "firebase";

// firebaseの初期化に必要なデータ(プロジェクトID)をconstでconfigという名前で初期化
const config = {
  projectId: process.env.FIREBASE_PROJECT_ID
};

// このifで二重に初期化が行われないようにして、
// firebase.initializeAppメソッドを呼び出して初期化を行う
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// 他の場所からfirebaseを使用できるようにする
export default firebase;
