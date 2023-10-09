-- Create a table for gym members
CREATE TABLE IF NOT EXISTS members (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    join_date DATE
);

-- Create a table for gym trainers
CREATE TABLE IF NOT EXISTS trainers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    specialization VARCHAR(255)
);

-- Create a table for gym classes
CREATE TABLE IF NOT EXISTS classes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    schedule_time TIME,
    trainer_id INT REFERENCES trainers(id)
);

-- Create a table for gym membership payments
CREATE TABLE IF NOT EXISTS payments (
    id SERIAL PRIMARY KEY,
    member_id INT REFERENCES members(id),
    payment_date DATE,
    amount DECIMAL(10, 2)
);