import React, { useState, useMemo } from 'react';
import './App.css'; // Import the CSS file

// Mock data for the menu (extracted from the HTML)
const menuData = [
    // Non-Veg Foods
    { name: 'Chicken Biryani', category: 'nonveg' },
    { name: 'Mutton Biryani', category: 'nonveg' },
    { name: 'Butter Chicken', category: 'nonveg' },
    { name: 'Chicken 65', category: 'nonveg' },
    { name: 'Chicken Lollipop', category: 'nonveg' },
    { name: 'Chicken Tikka Masala', category: 'nonveg' },
    { name: 'Mutton Rogan Josh', category: 'nonveg' },
    { name: 'Prawns Curry', category: 'nonveg' },
    { name: 'Fish Fry', category: 'nonveg' },
    { name: 'Egg Curry', category: 'nonveg' },
    { name: 'Chicken Manchurian', category: 'nonveg' },
    { name: 'Grilled Chicken', category: 'nonveg' },
    { name: 'Mutton Keema', category: 'nonveg' },
    { name: 'Tandoori Chicken', category: 'nonveg' },
    { name: 'Chicken Shawarma', category: 'nonveg' },
    { name: 'Andhra Kodi Vepudu', category: 'nonveg' },
    { name: 'Chicken Noodles', category: 'nonveg' },
    { name: 'Mutton Sukka', category: 'nonveg' },
    { name: 'Crab Masala', category: 'nonveg' },
    { name: 'Chicken Pakoda', category: 'nonveg' },
    // Veg Foods
    { name: 'Paneer Butter Masala', category: 'veg' },
    { name: 'Veg Biryani', category: 'veg' },
    { name: 'Aloo Gobi', category: 'veg' },
    { name: 'Baingan Bharta', category: 'veg' },
    { name: 'Chole Masala', category: 'veg' },
    { name: 'Palak Paneer', category: 'veg' },
    { name: 'Mix Veg Curry', category: 'veg' },
    { name: 'Kadai Paneer', category: 'veg' },
    { name: 'Rajma Masala', category: 'veg' },
    { name: 'Methi Malai Mutter', category: 'veg' },
    { name: 'Malai Kofta', category: 'veg' },
    { name: 'Bhindi Fry', category: 'veg' },
    { name: 'Tawa Sabzi', category: 'veg' },
    { name: 'Dum Aloo', category: 'veg' },
    { name: 'Veg Kolhapuri', category: 'veg' },
    { name: 'Gobi Manchurian', category: 'veg' },
    { name: 'Mushroom Masala', category: 'veg' },
    { name: 'Sambar Rice', category: 'veg' },
    { name: 'Veg Pulao', category: 'veg' },
    { name: 'Jeera Rice', category: 'veg' },
    // Fast Foods
    { name: 'Chicken Burger', category: 'fastfood' },
    { name: 'Veg Burger', category: 'fastfood' },
    { name: 'French Fries', category: 'fastfood' },
    { name: 'Pizza (Veg/Non-Veg)', category: 'fastfood' },
    { name: 'Grilled Sandwich', category: 'fastfood' },
    { name: 'Cheese Sandwich', category: 'fastfood' },
    { name: 'Club Sandwich', category: 'fastfood' },
    { name: 'Hot Dog', category: 'fastfood' },
    { name: 'Spring Rolls', category: 'fastfood' },
    { name: 'Veg Wrap', category: 'fastfood' },
    { name: 'Chicken Roll', category: 'fastfood' },
    { name: 'Shawarma', category: 'fastfood' },
    { name: 'Chicken Nuggets', category: 'fastfood' },
    { name: 'Cheese Balls', category: 'fastfood' },
    { name: 'Garlic Bread', category: 'fastfood' },
    { name: 'Loaded Nachos', category: 'fastfood' },
    { name: 'Veg Momos', category: 'fastfood' },
    { name: 'Chicken Momos', category: 'fastfood' },
    { name: 'Popcorn Chicken', category: 'fastfood' },
    { name: 'Samosa', category: 'fastfood' },
    // Desserts
    { name: 'Vanilla Ice Cream', category: 'desserts' },
    { name: 'Chocolate Ice Cream', category: 'desserts' },
    { name: 'Butterscotch Ice Cream', category: 'desserts' },
    { name: 'Strawberry Ice Cream', category: 'desserts' },
    { name: 'Mango Ice Cream', category: 'desserts' },
    { name: 'Oreo Ice Cream', category: 'desserts' },
    { name: 'Choco Bar', category: 'desserts' },
    { name: 'Kulfi', category: 'desserts' },
    { name: 'Cassata', category: 'desserts' },
    { name: 'Tiramisu', category: 'desserts' },
    { name: 'Gulab Jamun', category: 'desserts' },
    { name: 'Rasgulla', category: 'desserts' },
    { name: 'Jalebi', category: 'desserts' },
    { name: 'Brownie with Ice Cream', category: 'desserts' },
    { name: 'Ice Cream Sundae', category: 'desserts' },
    { name: 'Gajar Halwa', category: 'desserts' },
    { name: 'Falooda', category: 'desserts' },
    // Soups
    { name: 'Tomato Soup', category: 'soups' },
    { name: 'Sweet Corn Veg Soup', category: 'soups' },
    { name: 'Hot & Sour Soup', category: 'soups' },
    { name: 'Chicken Soup', category: 'soups' },
    { name: 'Cream of Mushroom', category: 'soups' },
    { name: 'Lemon Coriander Soup', category: 'soups' },
    { name: 'Manchow Soup', category: 'soups' },
    { name: 'Veg Clear Soup', category: 'soups' },
    { name: 'Egg Drop Soup', category: 'soups' },
    { name: 'Seafood Soup', category: 'soups' },
    { name: 'Mutton Bone Soup', category: 'soups' },
    // Tiffins
    { name: 'Idli', category: 'tiffins' },
    { name: 'Plain Dosa', category: 'tiffins' },
    { name: 'Masala Dosa', category: 'tiffins' },
    { name: 'Onion Dosa', category: 'tiffins' },
    { name: 'Set Dosa', category: 'tiffins' },
    { name: 'Uttapam', category: 'tiffins' },
    { name: 'Medu Vada', category: 'tiffins' },
    { name: 'Rava Upma', category: 'tiffins' },
    { name: 'Pongal', category: 'tiffins' },
    { name: 'Pesarattu', category: 'tiffins' },
    { name: 'Poori Bhaji', category: 'tiffins' },
    { name: 'Aloo Paratha', category: 'tiffins' },
    { name: 'Chapati with Kurma', category: 'tiffins' },
    { name: 'Appam with Stew', category: 'tiffins' },
    { name: 'Ragi Dosa', category: 'tiffins' },
    { name: 'Neer Dosa', category: 'tiffins' },
    // Beverages
    { name: 'Orange Juice', category: 'beverages' },
    { name: 'Watermelon Juice', category: 'beverages' },
    { name: 'Mosambi Juice', category: 'beverages' },
    { name: 'Grape Juice', category: 'beverages' },
    { name: 'Pineapple Juice', category: 'beverages' },
    { name: 'Carrot Juice', category: 'beverages' },
    { name: 'Apple Juice', category: 'beverages' },
    { name: 'Mango Milkshake', category: 'beverages' },
    { name: 'Strawberry Milkshake', category: 'beverages' },
    { name: 'Chocolate Shake', category: 'beverages' },
    { name: 'Sweet Lassi', category: 'beverages' },
    { name: 'Salted Lassi', category: 'beverages' },
    { name: 'Cold Coffee', category: 'beverages' },
    { name: 'Rose Milk', category: 'beverages' },
    { name: 'Buttermilk', category: 'beverages' },
    { name: 'Coconut Water', category: 'beverages' },
    { name: 'Nimbu Pani', category: 'beverages' },
    { name: 'Masala Soda', category: 'beverages' },
    { name: 'Tender Coconut Shake', category: 'beverages' },
    { name: 'Falooda Drink', category: 'beverages' },
];

const filterButtons = [
    { key: 'all', label: 'All Items' },
    { key: 'nonveg', label: '🍗 Non-Veg' },
    { key: 'veg', label: '🌱 Veg Foods' },
    { key: 'fastfood', label: '🍔 Fast Foods' },
    { key: 'desserts', label: '🍨 Desserts' },
    { key: 'soups', label: '🍲 Soups' },
    { key: 'tiffins', label: '🥞 Tiffins' },
    { key: 'beverages', label: '🧃 Beverages' },
];

function App() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [reservationForm, setReservationForm] = useState({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        reservationDate: '',
        reservationTime: '',
        specialRequests: '',
    });
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [confirmedDetails, setConfirmedDetails] = useState(null);

    // Filter menu items based on the active category
    const filteredMenu = useMemo(() => {
        if (activeCategory === 'all') {
            return menuData;
        }
        return menuData.filter(item => item.category === activeCategory);
    }, [activeCategory]);

    // Update reservation form state
    const handleFormChange = (e) => {
        const { id, value } = e.target;
        setReservationForm(prev => ({
            ...prev,
            [id]: value
        }));
    };

    // Handle form submission
    const submitReservation = (e) => {
        e.preventDefault();

        // Format date and time for display
        const dateObj = new Date(reservationForm.reservationDate);
        const formattedDate = dateObj.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // The time input is in "HH:MM" format. We need to handle time zone appropriately
        const [hour, minute] = reservationForm.reservationTime.split(':').map(Number);
        const timeObj = new Date();
        timeObj.setHours(hour, minute, 0, 0);

        const formattedTime = timeObj.toLocaleTimeString('en-US', {
            hour12: true,
            hour: 'numeric',
            minute: '2-digit'
        });

        setConfirmedDetails({
            name: reservationForm.customerName,
            date: formattedDate,
            time: formattedTime,
            phone: reservationForm.customerPhone,
        });

        setIsConfirmed(true);

        // Scroll to confirmation message
        document.getElementById('orderConfirmation').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    };

    // Reset for another reservation
    const orderAnother = () => {
        setReservationForm({
            customerName: '',
            customerEmail: '',
            customerPhone: '',
            reservationDate: '',
            reservationTime: '',
            specialRequests: '',
        });
        setIsConfirmed(false);
        setConfirmedDetails(null);

        // Scroll to form
        document.getElementById('reservationForm').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    };

    return (
        <div className="App">
            {/* Navbar */}
            <nav className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#reservation">Reservation</a></li>
                    <li><a href="#location">Location</a></li>
                    <li><a href="#blog">Blog</a></li>
                </ul>
            </nav>

            {/* Hero */}
            <div className="hero" id="home">
                <h1>Welcome To</h1>
                <h2>Rich Flavors</h2>
                <a href="#reservation" className="btn">Book a Table</a>
            </div>

            {/* About Us */}
            <section id="about">
                <h2>About Us</h2>
                <p>
                    At <strong>Rich Flavors</strong>, we blend tradition and innovation to bring you an unforgettable dining experience. Our chefs use only the freshest ingredients to craft every dish with love and precision. Whether it's a comforting Indian classic or a fusion twist, every bite tells a story. From cozy family dinners to celebrations with friends, we aim to serve joy on every plate. Come indulge in a culinary journey that awakens your senses and satisfies your soul.
                </p>
            </section>

            {/* Menu */}
            <section id="menu">
                <h2>Our Menu</h2>
                {/* Filter Buttons */}
                <div className="menu-filters">
                    {filterButtons.map((btn) => (
                        <button
                            key={btn.key}
                            className={`filter-btn ${activeCategory === btn.key ? 'active' : ''}`}
                            onClick={() => setActiveCategory(btn.key)}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>

                <div className="menu-items">
                    {filteredMenu.map((item, index) => (
                        <div key={index} className={`menu-item ${item.category}`}>
                            {item.name}
                        </div>
                    ))}
                </div>
            </section>

            {/* Gallery */}
            <section id="gallery">
                <h2>Gallery</h2>
                <div className="gallery-images">
                    <div className="gallery-item">
                        <img src="https://popmenucloud.com/jwutdrmk/67f010e1-4698-4340-9ba4-a1c9428699f1.jpg" alt="Delicious Dish" />
                        <p>Our Signature Dishes</p>
                    </div>
                    <div className="gallery-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqwvl0hlbOJN3FFqAfdMMzw9W_m0DroOPb2g&s" alt="Restaurant Ambience" />
                        <p>Cozy Restaurant Ambience</p>
                    </div>
                    <div className="gallery-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS1GBuPiaWdSGWx9ULelofYRsXp6KEdy9o_w&s" alt="Fine Dining Experience" />
                        <p>Fine Dining Experience</p>
                    </div>
                    <div className="gallery-item">
                        <img src="https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505" alt="Corn Dogs" />
                        <p>Crispy Corn Dogs</p>
                    </div>
                    <div className="gallery-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8RxieOU46ziIzZJ586uuhTHRNWU3_3uScAasj1woQB5ByTv7id9bxuZcSF5Ot41QWXFo&usqp=CAU" alt="Special Cuisine" />
                        <p>Chef's Special</p>
                    </div>
                </div>
            </section>

            {/* Reservation */}
            <section id="reservation">
                <h2>Book a Table</h2>

                {/* Order Confirmation Message */}
                {isConfirmed && confirmedDetails && (
                    <div id="orderConfirmation" className={`order-confirmation ${isConfirmed ? 'show' : ''}`}>
                        <div className="success-icon">🎉</div>
                        <h3>You Have Ordered!</h3>
                        <div className="order-message">Your table booking has been successfully placed!</div>
                        <div className="order-details">
                            <p><strong>👤 Name:</strong> <span id="confirmedName">{confirmedDetails.name}</span></p>
                            <p><strong>📅 Date:</strong> <span id="confirmedDate">{confirmedDetails.date}</span></p>
                            <p><strong>⏰ Time:</strong> <span id="confirmedTime">{confirmedDetails.time}</span></p>
                            <p><strong>📞 Phone:</strong> <span id="confirmedPhone">{confirmedDetails.phone}</span></p>
                        </div>
                        <div className="thank-you">Thank you for choosing Rich Flavors! 🍽️</div>
                        <button className="order-another-btn" onClick={orderAnother}>Order Another Table</button>
                    </div>
                )}

                {/* Booking Form */}
                {!isConfirmed && (
                    <form id="reservationForm" onSubmit={submitReservation}>
                        <input type="text" id="customerName" placeholder="Your Name" value={reservationForm.customerName} onChange={handleFormChange} required />
                        <input type="email" id="customerEmail" placeholder="Your Email" value={reservationForm.customerEmail} onChange={handleFormChange} required />
                        <input type="tel" id="customerPhone" placeholder="Phone Number" value={reservationForm.customerPhone} onChange={handleFormChange} required />
                        <input type="date" id="reservationDate" value={reservationForm.reservationDate} onChange={handleFormChange} required />
                        <input type="time" id="reservationTime" value={reservationForm.reservationTime} onChange={handleFormChange} required />
                        <textarea id="specialRequests" placeholder="Special Requests" value={reservationForm.specialRequests} onChange={handleFormChange}></textarea>
                        <button type="submit">Submit Reservation</button>
                    </form>
                )}
            </section>

            {/* Location */}
            <section id="location">
                <h2>Location</h2>
                <p>besides Vignan University, Vadlamudi, Guntur</p>
            </section>

            {/* Blog */}
            <section id="blog">
                <h2>Blog</h2>
                <p>Stay tuned for updates, recipes, and stories from our kitchen.</p>
            </section>

            {/* Social Media Section */}
            <section className="social-media">
                <h2>Follow Us</h2>
                <p>Stay connected with Rich Flavors! Follow us on social media for the latest updates, mouth-watering food photos, special offers, and behind-the-scenes content from our kitchen.</p>

                <div className="social-icons">
                    <a href="https://facebook.com/richflavors" target="_blank" rel="noopener noreferrer" className="social-icon facebook" title="Follow us on Facebook">
                        📘
                    </a>
                    <a href="https://instagram.com/richflavors" target="_blank" rel="noopener noreferrer" className="social-icon instagram" title="Follow us on Instagram">
                        📷
                    </a>
                    <a href="https://twitter.com/richflavors" target="_blank" rel="noopener noreferrer" className="social-icon twitter" title="Follow us on Twitter">
                        🐦
                    </a>
                </div>

                <p className="social-text">Join our community of food lovers and never miss an update!</p>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>© 2024 Rich Flavors Restaurant. Made with <span className="heart">❤️</span> for food lovers.</p>
            </footer>
        </div>
    );
}

export default App;