import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

// スキーマ作成
// name(String)とage(Number)の２つのフィールド
const CharacterSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// モデルの作成
// 第一引数の複数形の名前のコレクションが生成される
const Character = mongoose.model('Character', CharacterSchema);

export default Character;
