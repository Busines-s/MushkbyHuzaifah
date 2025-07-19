function setupScrollButtons(listId, leftBtnClass, rightBtnClass) {
    const list = document.getElementById(listId);
    const leftBtn = document.querySelector(leftBtnClass);
    const rightBtn = document.querySelector(rightBtnClass);

    function toggleButtons() {
        if (window.innerWidth <= 768) {
            leftBtn.style.display = 'none';
            rightBtn.style.display = 'none';
            return;
        }

        const canScrollRight = list.scrollWidth > list.clientWidth + list.scrollLeft;
        rightBtn.style.display = canScrollRight ? 'block' : 'none';
        leftBtn.style.display = list.scrollLeft > 0 ? 'block' : 'none';
    }

    leftBtn.addEventListener('click', () => {
        list.scrollBy({ left: -300, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
        list.scrollBy({ left: 300, behavior: 'smooth' });
    });

    list.addEventListener('scroll', toggleButtons);
    window.addEventListener('resize', toggleButtons);
    setTimeout(toggleButtons, 200);
}

// Setup scroll buttons for all product sections
setupScrollButtons('premiumList', '.scroll-button.left.premium', '.scroll-button.right.premium');
setupScrollButtons('classicList', '.scroll-button.left.classic', '.scroll-button.right.classic');
setupScrollButtons('casualList', '.scroll-button.left.casual', '.scroll-button.right.casual');
setupScrollButtons('organicList', '.scroll-button.left.organic', '.scroll-button.right.organic'); // ✅ NEW

// Mobile "View More" button logic
document.querySelectorAll('.view-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const listId = btn.dataset.target;
        const productList = document.getElementById(listId);
        productList.classList.remove('hidden');
        btn.style.display = 'none';
    });
});

// Hide extra items on mobile initially
function applyMobileHiddenClass() {
    const listIds = ['premiumList', 'classicList', 'casualList', 'organicList']; // ✅ Updated
    listIds.forEach(id => {
        const list = document.getElementById(id);
        if (!list) return;

        if (window.innerWidth <= 768) {
            list.classList.add('hidden');
        } else {
            list.classList.remove('hidden');
        }
    });
}

applyMobileHiddenClass();
window.addEventListener('resize', applyMobileHiddenClass);
