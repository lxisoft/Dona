import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private sqlite: SQLite) { }

  createDatabase() {
    this.sqlite.create({
      name: 'dona.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('create table if not exists user(name VARCHAR(32))', [])
          .then(() => console.log('created table user SQL'))
          .catch(e => console.log(e));
        db.executeSql('create table if not exists role(name VARCHAR(32))', [])
          .then(() => console.log('created table role SQL'))
          .catch(e => console.log(e));
        db.executeSql(
          // tslint:disable-next-line:max-line-length
          'create table if not exists task(id BIGINT PRIMARY KEY AUTOINCREMENT,detail VARCHAR(32),status VARCHAR(32),day VARCHAR(32),role VARCHAR(32))', [])
          .then(() => console.log('created table task SQL'))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }
}
