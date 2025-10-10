document.addEventListener('DOMContentLoaded', () => {

    // --- Logic for Contact Form on index.html ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents the form from actually submitting
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset(); // Clears the form fields
        });
    }

    // --- Logic for Admin Dashboard on admin.html ---
    const dataTableBody = document.getElementById('data-table-body');
    if (dataTableBody) {
        // Dummy data to simulate form entries
        const dummyData = [
            { id: 'REQ-1733891029811', name: 'Jane Doe', email: 'jane@example.com', item: 'Laptop', quantity: '1 piece', date: '2025-10-10' },
            { id: 'REQ-1733890821456', name: 'John Smith', email: 'john@example.com', item: 'Smartphone', quantity: '3 pieces', date: '2025-10-10' },
            { id: 'REQ-1733890512398', name: 'Emily White', email: 'emily@example.com', item: 'Monitor', quantity: '2 kg', date: '2025-10-09' },
            { id: 'REQ-1733889945781', name: 'Chris Green', email: 'chris@example.com', item: 'CPU', quantity: '1 piece', date: '2025-10-09' },
            { id: 'REQ-1733889123456', name: 'Sarah Brown', email: 'sarah@example.com', item: 'Assorted Cables', quantity: '5 kg', date: '2025-10-08' }
        ];

        // Populate the table with dummy data
        dummyData.forEach(entry => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${entry.id}</td>
                <td>${entry.name}</td>
                <td>${entry.email}</td>
                <td>${entry.item}</td>
                <td>${entry.quantity}</td>
                <td>${entry.date}</td>
            `;
            dataTableBody.appendChild(row);
        });
    }
});