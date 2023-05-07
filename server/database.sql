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

CREATE TABLE general_slider_content (
    id SERIAL PRIMARY KEY,
    image VARCHAR(255) DEFAULT NULL,
    image_mobile VARCHAR(255) DEFAULT NULL,
    button_text VARCHAR(255) DEFAULT NULL,
    title VARCHAR(255) DEFAULT NULL,
    description VARCHAR(1000) DEFAULT NULL
)
