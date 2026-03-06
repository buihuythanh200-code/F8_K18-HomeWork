// Task 1: Build a login function using Promise
function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "123456") {
        resolve({
          id: 1,
          username: "admin",
          role: "ADMIN",
        });
      } else {
        reject("Sai tài khoản hoặc mật khẩu");
      }
    }, 2000);
  });
}

console.log("Đang gửi request đăng nhập...");
login("admin", "123456")
  .then((res) => {
    console.log(`Đăng nhập thành công:`);
    console.log("User:", res);
  })
  .catch((rej) => {
    console.log(`Lỗi: ${rej}`);
  });
