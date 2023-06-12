import * as admin from 'firebase-admin';

//THIS IS A FREE TIER, I HAD AN ISSUE DURING DEPLOYMENT WITH FIREBASE ID ENV SO I HAD DO IT DIRECTLY BUT IT DOES NOT MATTER SINCE IT IS A FREE TIER AND WILL DELETE SOON PROJECT
admin.initializeApp({
  credential: admin.credential.cert({
    privateKey:
      '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCtmvVgImF3gknp\n4Sv1tuxddd+nzdIbkVB1fDs9cqQX5gFC37PM20SGtcLXjW8B/m7pcJdNvByfy6mB\nbFVBmp6UNb2YK8Lp8LeDSIdvGPdaaRgn8mAguOnVrBuqrEmpln5zTjJPdKbLG5HT\nS5bvrxWjK3kqm/8hg8PWOXXiF3xPdZhlqDvkODSeECfrtmy580Hyuoeecr6uj5Z4\noBiMVtKVoBuakoCu1gP8dpH6XD9XKyAfrxgXextC83G222ZOVGoQQUMLKaxgdGFq\n8tslPHAl7Y+Lq0G08O7U72ENBKpU1GWBGF3TbGTjUu1VXpa7mJHWLxBfLpAB54Tl\n7qo4Ir+nAgMBAAECggEAJhKAMoOHtYJUvF5d2iayInL5yB6qr9IH/6Pth/XOx9Dw\nwN43W7tQhWxyHPyO9jR61WYUQH97FY5AD7qW3erPUTiR6j/aoJxiWn+69+HVSTYY\nDpaofzSeT3ZNoPnks7Tl6VqiTOuLsqpKqjh/EvRmPeEIUxBf/NUdSytRz3IQGIqY\nWDWKNgjkHgFsg9S7NL/cvWhe3s4it6mNvoqbRV49+Z3sF4d+/xuT+TkKRNJu8g9M\n2PdpPOGolRdvnUa0rkBDxvjcbuGoCX8UEN5im/NCg4JjyJv4sat7Pju0ypjClR21\ngYMED0Zp+kJxWuMXS48IhXywCnWmAjACfMNiQNakgQKBgQDi7rzC4kvEOuoZoosf\nGSGfOupc3yL1BEyhcZnTBdKuNfZQBB2z7YvCuh9E8v8j8KEhAfuiRJNBy0wKl9lQ\nItDbfq3vx7k+DzOtEHX8+gttBscRcgNKwOS/oQZgHt7CTZgpEbtd25AEjolCEWgJ\nIVVNwCryZjWm1wmsbU3xYFFNgQKBgQDD15YjRyyMw2lpJeyUDm5zafuIo5iunxj+\nhPluwFVBXWlySgY3ACM8mttCfJRavUl5mBTMTcX0S+GQRYCtAEJI+4/l7injhnIT\n41GfB2IX3hzA0r4pYofxOQp2cCxZ3ZqcFJXIWH/LhPznEA003I+x53zqidLGvXvp\nyc6vYYpxJwKBgGK8426cDcFUrPT4bzXZtnJUrRI5mDkpZLo99mMFvpREMGbCU7Ys\n3kmct+xFGlQl58W32ifRVI0lCnH1ff1LGLrYFJAmw2fIL4DWj6/Bj+UhNM5XYC1P\nXngudNqvs9aw8kq0R2TgGnqRFhGkBzMpyLbqrQUJCcENAU1/xZEHiniBAoGBAMLL\nEpjwWE2CqLxfblstp4rApeIY5ur5cIDofrk8MRCc+x8kpd3bEzFazi/pfh5rHEQH\nkthLm1QMjcVUfFKXaVbycQTAyYV32swRVMQbMeSPloXsmBzN1m2G0PNRS6vvEbOh\nfgISlLo4At1JR/mGUJ8ho0wd3jqziibWBfDH0k4NAoGBAM0GgVI6wgxEErWDmRGB\nK0Ds1+fxQmV4sfCJOhK32UJKwh/Ef77Y5vixgo1bjJLT9AFQiWoCcAo+56P+sVck\nIRNahbpUTsFgNq1CVM5rkrwyK7bYDqAFSwNVYHf7bFi0Hgut1bIPo+zEiBJ+DYMO\nmFjQKTk2pT3PussOOFyDTujB\n-----END PRIVATE KEY-----\n'.replace(
        /\\n/g,
        '\n',
      ),
    projectId: 'tasks-8b135',
    clientEmail: 'firebase-adminsdk-ds10r@tasks-8b135.iam.gserviceaccount.com',
  }),
  databaseURL: 'https://tasks-8b135.firebaseio.com',
});

const db = admin.firestore();
export { admin, db };
