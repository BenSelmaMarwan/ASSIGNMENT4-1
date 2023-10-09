-- Insert sample data into the members table
INSERT INTO members (first_name, last_name, email, join_date) VALUES
    ('John', 'Doe', 'john.doe@example.com', '2023-01-15'),
    ('Alice', 'Smith', 'alice.smith@example.com', '2023-02-10');

-- Insert sample data into the trainers table
INSERT INTO trainers (first_name, last_name, specialization) VALUES
    ('Michael', 'Johnson', 'Cardio'),
    ('Sarah', 'Williams', 'Strength Training');


-- Insert sample data into the classes table
INSERT INTO classes (name, schedule_time, trainer_id) VALUES
    ('Yoga', '10:00 AM', 1),
    ('CrossFit', '4:00 PM', 2);

-- Insert sample data into the payments table
INSERT INTO payments (member_id, payment_date, amount) VALUES
    (1, '2023-01-20', 50.00),
    (2, '2023-02-15', 60.00);



