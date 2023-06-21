import * as admin from 'firebase-admin';

//Put your own keys
admin.initializeApp({
  credential: admin.credential.cert({
    privateKey:
      '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQClsBI/OMu8O6gt\nvGNkuKdtBlD5TllD6PBxh1lHfmOc2LZ+fSEQv/gbFwQtgihaFhpGWL+MHOfAOMEg\nZPEilYXWRW+gaEixiTet5JFQpMHrMkAQPb1YYhN89qxmC0hMFSQ8JBA75b+HRnzQ\nkWCdRmPTtJyh0lPFSi++aBb5FBGCIxM1KCrFQl1ezCpJHziUqBuxvGuorawnI3TO\nbJI2ob6G3WgtImLF5CpxwLzMnKBjTHJDD70/+phbEqlHK5+rRlM5/8qplHw7LoXb\nHkruZ0xXhO+uVlMFHiarBWoGKMRTrer6EacYtj4FUxCulNpjgmFeBjx2vL+PlrL3\n6o04h0VdAgMBAAECggEAAlQryOn8l6r+/ZNKklj87ykS/tvGfEcDB96c28atSOTM\nB0jR0HFQBJF1G0oSMEQ/Q3AlCjn5NaFNcQln42SNerxfHCRbGBFu0A5Rztc42WVv\n/IFPXJDyDAi91d8OJ18JRaFp2P/2QTLH3AsvDits0qGCrYOXSdV1rTCXD8ks/vc+\nBgUEwzSbaSSeYxMSplAlf6eLXdYcJFu5PC19c1nGmrlRaqZxm6DjXDm+IpQdz67+\nbygmLh6/bi5wVmnz1O3TdW69tT64+NVuBqvI+nyOQiI0gLuOKCWT2HTSPAqJCSrh\nxjn6Qep1riNSmN9AVlx+ZAp0VYq4xfcAjplafz9gAQKBgQDPDF6VFoT0XPenUTfw\nD0dWgWPTHHhEt5dAztp2ETERW4bw9n8tuYV4FQ6m36jTXdjeqNRwp288uB2d+MYn\nSEAkkbFjKdiUWDFpLjx2QnI+EQcnyZOeHUohHlcQzGKvjfsX4c9X7heAAzawm3Wq\ng8a/Faqh0RiK3dT4zdv737xW3QKBgQDM3FlT35cLnhcGOtUtI2jr/llYKfjTDrYp\ni1v64V4HZIfQ8wYSzg7wJZmbtlTiMs5NmvFmKy9LVq+UcGFaNNOSwRq2bk3ezJB8\naLnohtiUrKKvksyLOLxcfO62XZwD3L+qIbKciTrOCmhmNtEI1dCL5p0/LJLjMYBk\nHwtnkmWAgQKBgQC0rMGYbddFeh7uVdRvWpXQ6gYXQf+9T0vg1OEUKHpeADWn7iIa\n34qVuCJaAlBLadiGrGL9j05lePD3WhBoVQcMIkreErUY9kDf3OYL+H3CpY9N6/wx\n/LMkZVpqoT/4m/gh5f3OaEj/f05pHK+4RVfYhWqp3FIDVAK1vsYZbCrozQKBgQCr\nP4dslXuuOnkEvCl3kiIjJHuLN4rI44NjNxusnLf9dgwSnxR0o8vY85V0lPZgIBhU\nxzEENxVR5STg8RBwV7iE9OdfmNV/aYFefizqM87YeXeFTTGvL75Fkin6SEYi9GVD\n0ud78zs1AX5D847J0/KBAEZyiNBBGyA4kbr22WoAAQKBgQCDzNbv8A5wMupwZtio\n0Riewmr+OnNQhisPYFUevG8qE15+x8+FCdq0fIfEkut0ckLTWwE34MNeCwWLvxTs\n4yHu+1RpsKB0eTP82pjBX2SbQMOOPBNgkHLCNFWDyIG2EYQRha5Itq8yf/tRad4W\nNuyzluBrefRfGzHr7OU+uHFzRQ==\n-----END PRIVATE KEY-----\n'.replace(
        /\\n/g,
        '\n',
      ),
    projectId: 'api-nest-cb9c5',
    clientEmail:
      'firebase-adminsdk-4lowo@api-nest-cb9c5.iam.gserviceaccount.com',
  }),
  databaseURL: 'https://api-nest-cb9c5.firebaseio.com',
});

const db = admin.firestore();
export { admin, db };
