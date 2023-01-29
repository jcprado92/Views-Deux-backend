DROP DATABASE IF EXISTS views_dev;
CREATE DATABASE views_dev;

\c views_dev;

CREATE TABLE views (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    url TEXT,
    location TEXT NOT NULL,
    is_favorite BOOLEAN
);