const slider = document.getElementById('amountSlider');
slider.addEventListener('input', function() {
    const value = this.value;
    const percentage = (value / this.max) * 100;
    this.style.background = `linear-gradient(to right, #8a6d3b 0%, #8a6d3b ${percentage}%, #ddd ${percentage}%, #ddd 100%)`;
});


document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    showConfirmModal(
        'Confirm Payment',
        'Are you sure you want to complete this payment?',
        () => {
            console.log('Payment processed');
            alert('Payment successful! Thank you for your donation.');
            window.location.reload();
        }
    );
});

function showConfirmModal(title, message, onConfirm) {
    document.getElementById('confirmTitle').textContent = title;
    document.getElementById('confirmMessage').textContent = message;
    document.getElementById('confirmModal').style.display = 'flex';
    
    const yesBtn = document.getElementById('confirmYesBtn');
    yesBtn.onclick = function() {
        closeConfirmModal();
        onConfirm();
    };
}

function closeConfirmModal() {
    document.getElementById('confirmModal').style.display = 'none';
}

function confirmCancel() {
    showConfirmModal(
        'Cancel Donation',
        'Are you sure you want to cancel this donation?',
        () => {
            console.log('Donation cancelled');
            window.history.back();
        }
    );
}

function showPaymentConfirm() {
    const amount = document.getElementById('amountSlider').value;
    if (amount == 0) {
        alert('Please select an amount greater than $0');
        return;
    }
    document.getElementById('paymentModal').classList.add('show');
}

function closePaymentModal() {
    document.getElementById('paymentModal').classList.remove('show');
}

window.onclick = function(event) {
    const confirmModal = document.getElementById('confirmModal');
    const paymentModal = document.getElementById('paymentModal');
    
    if (event.target === confirmModal) {
        closeConfirmModal();
    }
    if (event.target === paymentModal) {
        closePaymentModal();
    }
}


function goToMainPage() {
    console.log('Navigating to main page...');
    window.location.replace("../../../init/main/index.html");
  }