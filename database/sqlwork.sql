


INSERT INTO routes (
    route_id, 
    origin, 
    destination, 
    airline_id
) VALUES
    (gen_random_uuid(), 'Atlanta', 'Beijing', 'ba5ae65c-805f-4f82-935a-7d0a60582028'),
    (gen_random_uuid(), 'Dubai', 'Los Angeles', 'c8ebdc3c-8650-449f-807a-cea3df4bc281'),
    (gen_random_uuid(), 'Tokyo', 'London', '3d3d01c1-11e0-47e3-98c8-09f4e304c9c6'),
    (gen_random_uuid(), 'London', 'New York', '737419fc-d47e-40ca-97f6-1921a451d84c'),
    (gen_random_uuid(), 'Singapore', 'Frankfurt', 'f6f2e7b5-ad9d-400a-8c59-aec71b859f72'),
    (gen_random_uuid(), 'Paris', 'Mumbai', '5a820c70-2375-4bce-8bd0-cbc50209ebe5'),
    (gen_random_uuid(), 'Frankfurt', 'Singapore', 'af8f26c5-f76c-41ba-9dbe-080058818589'),
    (gen_random_uuid(), 'Los Angeles', 'Delhi', '9b9078d9-07f3-4658-a42f-d916130f4633'),
    (gen_random_uuid(), 'New York', 'Tokyo', 'ba5ae65c-805f-4f82-935a-7d0a60582028'),
    (gen_random_uuid(), 'Paris', 'Dubai', '5a820c70-2375-4bce-8bd0-cbc50209ebe5');





INSERT INTO fare_estimates (
    estimate_id, 
    route_id, 
    price, 
    currency
) VALUES
    (gen_random_uuid(), 'ATL-PEK', 1200.00, 'USD'),
    (gen_random_uuid(), 'DXB-LAX', 1500.00, 'USD'),
    (gen_random_uuid(), 'HND-LHR', 1000.00, 'USD'),
    (gen_random_uuid(), 'LHR-JFK', 950.00, 'USD'),
    (gen_random_uuid(), 'SIN-FRA', 1100.00, 'USD'),
    (gen_random_uuid(), 'CDG-DEL', 800.00, 'USD'),
    (gen_random_uuid(), 'FRA-SIN', 1250.00, 'USD'),
    (gen_random_uuid(), 'LAX-DEL', 1300.00, 'USD'),
    (gen_random_uuid(), 'JFK-HND', 1050.00, 'USD'),
    (gen_random_uuid(), 'CDG-DUB', 700.00, 'EUR');
