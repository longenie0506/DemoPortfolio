
function navigateTo(page) {
    if (page === 'products.html') {
        localStorage.setItem('lastVisitedPage', 'products.html');
    } else {
        localStorage.setItem('lastVisitedPage', 'index.html');
    }
        window.location.href = page;
}

window.onload = function() {
    let lastPage = localStorage.getItem('lastVisitedPage');
    if (lastPage) {
        console.log("Trang cuối cùng bạn đã truy cập là: " + lastPage);
    }
}
// Hàm điều hướng trang bằng JavaScript
function navigateTo(page) {
    // Điều hướng đến trang đã chỉ định
    window.location.href = page;
}
