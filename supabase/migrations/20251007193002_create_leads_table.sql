/*
  # Create leads table

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `name` (text) - Lead's full name
      - `email` (text) - Lead's email address
      - `phone` (text, optional) - Lead's phone number
      - `company` (text, optional) - Lead's company name
      - `message` (text) - Lead's message/inquiry
      - `created_at` (timestamptz) - Timestamp when lead was created
      
  2. Security
    - Enable RLS on `leads` table
    - Add policy for anonymous users to insert their own leads
    - Add policy for authenticated users to read all leads (for admin access)

  3. Important Notes
    - This table stores contact form submissions from the website
    - Anonymous users can only insert data (submit forms)
    - Only authenticated users can read the leads (admin access)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);
