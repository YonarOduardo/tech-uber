import psycopg2
import pandas as pd

# Database credentials
db_host = "dpg-d2db7v8gjchc73dh5eig-a.oregon-postgres.render.com"
db_name = "tech_uber_db"
db_user = "tech_uber_db_user"
db_password = "e0xLfQAEpw3xyAlNLHQXYms4KC8ZpfXf"
db_port = "5432"

conn = None
cur = None

try:
    # Establish the connection
    conn = psycopg2.connect(
        host=db_host,
        database=db_name,
        user=db_user,
        password=db_password,
        port=db_port,
        sslmode='require'  # obligatorio para Render
    )
    cur = conn.cursor()

    # Query to list tables
    cur.execute("""
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema = 'public'
        ORDER BY table_name;
    """)

    # Fetch the results
    tables = cur.fetchall()

    # Print the table names
    print("Tables in the database:")
    for table in tables:
        print(table[0])

except Exception as e:
    print(f"Error connecting to the database or fetching tables: {e}")

finally:
    # Close the cursor and connection
    if cur is not None:
        cur.close()
    if conn is not None:
        conn.close()
