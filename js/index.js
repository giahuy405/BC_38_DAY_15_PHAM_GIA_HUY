function calPoint() {
    var standardPoint = document.getElementById("standardPoint").value * 1;
    var chooseArea = document.getElementById('chooseArea');
    var chooseObject = document.getElementById('chooseObject');

    var totalPoint = 0;
    var areaPoint = chooseArea.options[chooseArea.selectedIndex].text;
    var objectPoint = chooseObject.options[chooseObject.selectedIndex].text;

    var SubjectPoint1 = document.getElementById('SubjectPoint1').value * 1;
    var SubjectPoint2 = document.getElementById('SubjectPoint2').value * 1;
    var SubjectPoint3 = document.getElementById('SubjectPoint3').value * 1;
    var displayPoint = document.getElementById('displayPoint');

    var alertPoint = document.getElementById('alertPoint');

    // điểm chuẩn nằm trong khoảng 0 - 30 
    if (standardPoint > 30 || standardPoint < 0) {
        alert('Nhập điểm chuẩn không hợp lệ')
    }
    // nếu có 1 môn bất kì 0 điểm thì rớt luôn 
    if (SubjectPoint1 === 0 || SubjectPoint2 === 0 || SubjectPoint3 === 0) {
        displayPoint.innerHTML = 'Bạn đã rớt do có điểm nhỏ hơn hoặc bằng 0';
        // trả về giá trị luôn 
        return;
    }

    if (SubjectPoint1 >= 0 && SubjectPoint1 <= 10 && SubjectPoint2 >= 0 && SubjectPoint2 <= 10 && SubjectPoint3 >= 0 && SubjectPoint3 <= 10) {
        switch (areaPoint) {
            case 'A': {
                areaPoint = 2 * 1;
                break;
            }
            case 'B': {
                areaPoint = 1 * 1;
                break;
            }
            case 'C': {
                areaPoint = 0 * 1.5;
                break;
            }
            default: {
                areaPoint = 0;
            }
        }
        switch (objectPoint) {
            case '1': {
                objectPoint = 2.5 * 1;
                break;
            }
            case '2': {
                objectPoint = 1.5 * 1;
                break;
            }
            case '3': {
                objectPoint = 1 * 1;
                break;
            }
            default: {
                objectPoint = 0;
            }
        }
        totalPoint = SubjectPoint1 + SubjectPoint2 + SubjectPoint3 + areaPoint + objectPoint;
        if (totalPoint >= standardPoint) {
            displayPoint.innerHTML = 'Bạn đã đậu. Tổng điểm = ' + totalPoint;
            // alertPoint.classList.add('alert-success');
            // alertPoint.classList.remove('alert-primary');
            // alertPoint.classList.remove('alert-danger');
            alertPoint.className = 'alert alert-success    ml-2 mr-5 mt-2';
        }
        else {
            displayPoint.innerHTML = 'Bạn đã rớt. Tổng điểm = ' + totalPoint;
            // alertPoint.classList.add('alert-danger');
            // alertPoint.classList.remove('alert-primary');
            // alertPoint.classList.remove('alert-success');
            alertPoint.className = 'alert alert-danger    ml-2 mr-5 mt-2';
        }
    } else {
        alert('Nhập điểm môn không hợp lệ');
    }
}

// bài 2 tính tiền điện
function calElec() {
    var namePayment = document.getElementById('namePayment').value;
    var numberOfKw = document.getElementById('numberOfKw').value * 1;
    var displayElec = document.getElementById('displayElec');

    var money = 0;

    if (numberOfKw <= 50) {
        money = numberOfKw * 500;
    }

    else if (numberOfKw <= 100) {
        money = 50 * 500 + (numberOfKw - 50) * 650;
    }
    //  850 đồng
    else if (numberOfKw <= 200) {
        money = 50 * 500 + 50 * 650 + (numberOfKw - 100) * 850;
    }
    // 1100 đồng
    else if (numberOfKw <= 350) {
        money = 50 * 500 + 50 * 650 + 100 * 850 + (numberOfKw - 200) * 1100;
    }
    // 1300 đồng 
    else {
        money = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (numberOfKw - 350) * 1300;
    }
    if (numberOfKw < 0) {
        alert('Nhập số Kwh không hợp lệ');
    }
    else {
        displayElec.innerHTML = 'Họ tên : ' + namePayment + ', Tiền điện : ' + money.toLocaleString() + 'VNĐ ';
    }

}

/*
// bài 3 tính tiền thuế
function calTax() {
    var taxPayer = document.getElementById('taxPayer').value;
    var income = document.getElementById("income").value * 1;
    var numberOfDependents = document.getElementById('numberOfDependents').value * 1;
    // giảm trừ bản thân 11 triệu
    var deductYourself = 11e+6; // 11 000 000
    // giảm trừ NGƯỜI PHỤ THUỘC 
    var deductNumberOfDependents = numberOfDependents * 4400000;
    // thu nhập tính thuế 
    var incomeAfterTax = income - deductYourself - deductNumberOfDependents;
    var displayTax = document.getElementById('displayTax');

    // tổng thu nhập năm phải lớn hơn 10 triệu 
    // số người phụ thuộc lớn hơn 0
    if (income < 10e+6) {
        alert('Nhập lương không hợp lệ');
        return;
    }
    if (numberOfDependents < 0) {
        alert('Nhập số người phụ thuộc không hợp lệ');
        return;
    }

    // https://thuvienphapluat.vn/tien-ich/tinh-thue-thu-nhap-ca-nhan.html
    // nếu thu nhập tính thuế nhỏ hơn 0 => Không cần đóng thuế
    // nhỏ hơn 5tr, lớn hơn 5tr nhỏ hơn 10tr => xem bảng trong web 
    if (incomeAfterTax <= 0) {
        displayTax.innerHTML = taxPayer + ' Không cần đóng thuế thu nhập cá nhân';
        return;
    }
    else if (incomeAfterTax <= 5e+6 && incomeAfterTax > 0) {
        incomeAfterTax *= 0.05;
    }
    else if (incomeAfterTax > 5e+6 && incomeAfterTax <= 1e+7) {
        incomeAfterTax = incomeAfterTax * 0.1 - 25e+4; // 250,000
    }
    else if (incomeAfterTax > 1e+7 && incomeAfterTax <= 18e+6) {
        incomeAfterTax = incomeAfterTax * 0.15 - 75e+4;
    }
    else if (incomeAfterTax > 18e+6 && incomeAfterTax <= 32e+6) {
        incomeAfterTax = incomeAfterTax * 0.2 - 1650000; // 1,650,000
    }
    else if (incomeAfterTax > 32e+6 && incomeAfterTax <= 52e+6) {
        incomeAfterTax = incomeAfterTax * 0.25 - 3250000; // 3,250,000
    }
    else if (incomeAfterTax > 52e+6 && incomeAfterTax <= 80e+6) {
        incomeAfterTax = incomeAfterTax * 0.3 - 5850000; // 5,850,000
    }
    else {
        incomeAfterTax = incomeAfterTax * 0.35 - 9850000; // 9,850,000
    }
    displayTax.innerHTML = 'Họ tên : ' + taxPayer + ' ; Tiền thuế thu nhập cá nhân ' + incomeAfterTax.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });;
}
*/

// bài 3 tính thuế 
function calTax() {
    var taxPayer = document.getElementById('taxPayer').value;
    var income = +document.getElementById('income').value;
    var numberOfDependents = +document.getElementById('numberOfDependents').value;
    var incomeAfterTax = income - 4e+6 - numberOfDependents * 1600000;

    // kiểm tra hợp lệ 
    if (income < 10e+6) {
        alert('Nhập tổng thu nhập năm không hợp lệ');
        return;
    }
    if (numberOfDependents < 0) {
        alert('Nhập số người phụ thuộc không hợp lệ');
        return;
    }
    if (incomeAfterTax <= 60e+6) {
        incomeAfterTax = incomeAfterTax * 0.05;
    } else if (incomeAfterTax <= 120e+6) {
        incomeAfterTax = 60e+6 * 0.05 + (incomeAfterTax - 60e+6) * 0.1;
    } else if (incomeAfterTax <= 210e+6) {
        incomeAfterTax = 60e+6 * 0.05 + 60e+6 * 0.1 + (incomeAfterTax - 120e+6) * 0.15;
    } else if (incomeAfterTax <= 384e+6) {
        incomeAfterTax = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + (incomeAfterTax - 210e+6) * 0.2;
    } else if (incomeAfterTax <= 624e+6) {
        incomeAfterTax = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + (incomeAfterTax - 384e+6) * 0.25;
    }
    else if (incomeAfterTax <= 960e+6) {
        incomeAfterTax = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + (incomeAfterTax - 624e+6) * 0.3;
    } else {
        incomeAfterTax = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + 336e+6 * 0.3 + (incomeAfterTax - 960e+6) * 0.35;
    }
    displayTax.innerHTML = 'Họ tên : ' + taxPayer + ' ; Tiền thuế thu nhập cá nhân ' + incomeAfterTax.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });;
}


function functionSelect() {
    var mySelect = document.getElementById('mySelect').value;
    if (mySelect === "Doanh nghiệp") {
        numberConnect.style.display = 'block';
    }
    else {
        numberConnect.style.display = 'none';
    }
}

function calCableMoney() {
    var numberChannel = document.getElementById('numberChannel').value * 1;
    var customerCode = document.getElementById('customerCode').value;
    var numberConnect = document.getElementById('numberConnect').value * 1;
    var displayMoneyCable = document.getElementById('displayMoneyCable');
    var moneyCable = 0;
    var mySelect = document.getElementById('mySelect').value;
    // kiểm tra xác thực 
    if (numberConnect < 0 || numberChannel < 0) {
        alert('nhập dữ liệu sai');
        return;
    }
    if (mySelect === "Doanh nghiệp") {
        // nếu số kết nối nhỏ hơn bằng 10 
        if (numberConnect <= 10) {
            moneyCable = 90 + numberChannel * 50;
        } else {
            moneyCable = 90 + numberChannel * 50 + (numberConnect - 10) * 5;
        }
        displayMoneyCable.innerHTML = 'Mã khách hàng : ' + customerCode + '; Tiền cáp : ' + moneyCable.toLocaleString('en-US', { style: 'currency', currency: 'USD', });
    }
    else {
        moneyCable = 25 + numberChannel * 7.5;
        displayMoneyCable.innerHTML = 'Mã khách hàng : ' + customerCode + '; Tiền cáp : ' + moneyCable.toLocaleString('en-US', { style: 'currency', currency: 'USD', });
    }
}