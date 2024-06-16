class CommonPage {
   generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  // Hàm tạo email ngẫu nhiên
   generateRandomEmail() {
    const randomString = this.generateRandomString(10);
    return `${randomString}@example.com`;
  }
}
export const commonPage = new CommonPage();