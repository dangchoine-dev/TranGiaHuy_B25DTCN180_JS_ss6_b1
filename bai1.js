let orderCode = "";
let total = 0;
let isValid = false;

do {
    console.log("\n===== MENU =====");
    console.log("1. Nhập và chuẩn hóa mã đơn hàng");
    console.log("2. Tính tiền và in hóa đơn");
    console.log("3. Thoát chương trình");

    let choice = prompt("Chọn chức năng: ");

    switch (choice) {
        case "1":
            orderCode = prompt("Nhập mã đơn hàng: ");

            orderCode = orderCode.trim().toUpperCase();

            if (orderCode.length >= 8) {
                isValid = true;
                console.log("Mã đơn hàng hợp lệ:", orderCode);
            } else {
                isValid = false;
                console.log("Mã đơn hàng không hợp lệ!");
            }
            break;

        case "2":
            if (!isValid) {
                console.log("Vui lòng nhập mã đơn hàng hợp lệ trước!");
                break;
            }

            let shaker = Number(prompt("Số lượng SHAKER: "));
            let gloves = Number(prompt("Số lượng GLOVES: "));
            let strap = Number(prompt("Số lượng STRAP: "));
            let vip = prompt("Khách có thẻ VIP? (Y/N): ").toUpperCase();

            let moneyShaker = shaker * 120000;
            let moneyGloves = gloves * 180000;
            let moneyStrap = strap * 150000;

            total = moneyShaker + moneyGloves + moneyStrap;

            let discount = 0;

            if (vip == "Y") {
                discount = total * 0.1;
            }

            let finalTotal = total - discount;

            console.log("\n" + "-".repeat(40));
            console.log("          HÓA ĐƠN BÁN LẺ");
            console.log("-".repeat(40));
            console.log("Mã đơn hàng :", orderCode);
            console.log("SHAKER      :", shaker, "x 120000 =", moneyShaker);
            console.log("GLOVES      :", gloves, "x 180000 =", moneyGloves);
            console.log("STRAP       :", strap, "x 150000 =", moneyStrap);
            console.log("-".repeat(40));
            console.log("Tạm tính    :", total, "VNĐ");
            console.log("Giảm giá VIP:", discount, "VNĐ");
            console.log("THANH TOÁN  :", finalTotal, "VNĐ");
            console.log("-".repeat(40));
            break;

        case "3":
            console.log("Đã thoát chương trình!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ!");
    }

} while (choice != "3");