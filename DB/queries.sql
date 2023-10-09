-- Retrieve all members and their email addresses
SELECT first_name, last_name, email FROM members;

-- Retrieve trainers and the classes they teach
SELECT trainers.first_name, trainers.last_name, classes.name
FROM trainers
JOIN classes ON trainers.id = classes.trainer_id;

-- Calculate the total payments made by each member
SELECT members.first_name, members.last_name, SUM(payments.amount) AS total_payments
FROM members
JOIN payments ON members.id = payments.member_id
GROUP BY members.id;

-- Find classes scheduled for a specific time and their trainers
SELECT classes.name, trainers.first_name AS trainer_first_name, trainers.last_name AS trainer_last_name
FROM classes
JOIN trainers ON classes.trainer_id = trainers.id
WHERE classes.schedule_time = '10:00 AM';