import sqlite3

# Database connection
def get_db_connection():
    conn = sqlite3.connect('easegym.db')
    conn.row_factory = sqlite3.Row
    return conn

# Create a new inquiry
def create_inquiry(inquiry_data):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("""
        INSERT INTO inquiries (
            firstName, lastName, contactNumber, alternateContact, email, gender, areaAddress, 
            followUpDate, followUpTime, assessmentDate, status, convertibility, 
            sourceOfInquiry, inquiryFor, attendedBy, responseFeedback, sendNotifications
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        inquiry_data['firstName'], inquiry_data['lastName'], inquiry_data['contactNumber'], 
        inquiry_data.get('alternateContact'), inquiry_data['email'], inquiry_data.get('gender'),
        inquiry_data.get('areaAddress'), inquiry_data['followUpDate'], 
        inquiry_data.get('followUpTime'), inquiry_data.get('assessmentDate'), 
        inquiry_data['status'], inquiry_data['convertibility'], inquiry_data['sourceOfInquiry'], 
        inquiry_data['inquiryFor'], inquiry_data['attendedBy'], 
        inquiry_data.get('responseFeedback'), inquiry_data['sendNotifications']
    ))
    
    conn.commit()
    conn.close()

# Retrieve all inquiries
def get_all_inquiries():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM inquiries")
    inquiries = cursor.fetchall()
    
    conn.close()
    return inquiries

def get_inquiry_by_id(inquiry_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM inquiries WHERE id = ?", (inquiry_id,))
    inquiry = cursor.fetchone()
    
    conn.close()
    return dict(inquiry) if inquiry else None

# Update an inquiry
def update_inquiry(inquiry_id, inquiry_data):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("""
        UPDATE inquiries SET
            firstName = ?, lastName = ?, contactNumber = ?, alternateContact = ?, email = ?, 
            gender = ?, areaAddress = ?, followUpDate = ?, followUpTime = ?, 
            assessmentDate = ?, status = ?, convertibility = ?, sourceOfInquiry = ?, 
            inquiryFor = ?, attendedBy = ?, responseFeedback = ?, sendNotifications = ?
        WHERE id = ?
    """, (
        inquiry_data['firstName'], inquiry_data['lastName'], inquiry_data['contactNumber'], 
        inquiry_data.get('alternateContact'), inquiry_data['email'], inquiry_data.get('gender'),
        inquiry_data.get('areaAddress'), inquiry_data['followUpDate'], 
        inquiry_data.get('followUpTime'), inquiry_data.get('assessmentDate'), 
        inquiry_data['status'], inquiry_data['convertibility'], inquiry_data['sourceOfInquiry'], 
        inquiry_data['inquiryFor'], inquiry_data['attendedBy'], 
        inquiry_data.get('responseFeedback'), inquiry_data['sendNotifications'], 
        inquiry_id
    ))
    
    conn.commit()
    conn.close()

# Delete an inquiry
def delete_inquiry(inquiry_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("DELETE FROM inquiries WHERE id = ?", (inquiry_id,))
    
    conn.commit()
    conn.close()
