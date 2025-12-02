from flask import Flask, render_template, request, redirect, url_for
import boto3
import uuid

app = Flask(__name__)

# DynamoDB setup
dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
table = dynamodb.Table('Users')  # your table name

@app.route('/')
def index():
    try:
        response = table.scan()
        tasks = response.get('Items', [])
    except Exception as e:
        tasks = []
        print("Error fetching tasks:", e)
    return render_template('index.html', tasks=tasks)

@app.route('/add', methods=['POST'])
def add_task():
    task_id = request.form['TaskID']
    title = request.form['Title']
    status = request.form['Status']
    
    table.put_item(Item={
        'TaskID': task_id,
        'Title': title,
        'Status': status
    })
    return redirect(url_for('index'))

@app.route('/edit/<task_id>', methods=['POST'])
def edit_task(task_id):
    title = request.form['Title']
    status = request.form['Status']
    
    table.update_item(
        Key={'TaskID': task_id},
        UpdateExpression="SET Title = :t, #S = :s",
        ExpressionAttributeNames={"#S": "Status"},
        ExpressionAttributeValues={':t': title, ':s': status}
    )
    return redirect(url_for('index'))


@app.route('/delete/<task_id>')
def delete_task(task_id):
    table.delete_item(Key={'TaskID': task_id})
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)

