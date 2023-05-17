CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) DEFAULT NULL,
    password VARCHAR(255) DEFAULT NULL,
    is_activated BOOLEAN DEFAULT 0,
    activation_link VARCHAR(255),
    created_at TIMESTAMP DEFAULT now()
)

CREATE TABLE tokens (
    id SERIAL PRIMARY KEY,
    refresh_token VARCHAR(550),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users (id)
)

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now(),
    url VARCHAR(255),
    parent_category INTEGER,
    is_deleted BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (parent_category_id) REFERENCES categories (id)
)

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    category_id INTEGER,
    description TEXT,
    discount_rate DECIMAL(10,2),
    sku VARCHAR(255),
    stock INTEGER,
    title VARCHAR(255),
    merchant VARCHAR(255),
    price NUMERIC(10,2) DEFAULT 0,
    promo_start_date TIMESTAMP DEFAULT NULL,
    promo_end_date TIMESTAMP DEFAULT NULL,
    is_sold BOOLEAN,
    is_deleted BOOLEAN,
    is_free_product BOOLEAN,
    is_promoted BOOLEAN,
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now(),
    rating INTEGER CHECK(rating>0 AND rating<=5),
    FOREIGN KEY (category_id) REFERENCES categories (id),
);

CREATE TABLE product_categories (
    category_id INTEGER,
    product_id INTEGER,
    FOREIGN KEY (category_name) REFERENCES categories (name),
    FOREIGN KEY (product_id) REFERENCES products (id)
)

CREATE TABLE general_slider_content (
    id SERIAL PRIMARY KEY,
    image VARCHAR(255) DEFAULT NULL,
    image_mobile VARCHAR(255) DEFAULT NULL,
    button_text VARCHAR(255) DEFAULT NULL,
    title VARCHAR(255) DEFAULT NULL,
    description VARCHAR(1000) DEFAULT NULL
)
