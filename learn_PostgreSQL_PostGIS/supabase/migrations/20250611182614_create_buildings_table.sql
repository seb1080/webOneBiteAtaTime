CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS buildings (
    id SERIAL PRIMARY KEY DEFAULT gen_random_uuid(),
    provider_Id INT NOT NULL,
    source VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    geometry GEOMETRY(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);