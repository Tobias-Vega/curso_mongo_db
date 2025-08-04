from decouple import config

URL = 'mongodb+srv://tobiasvega1210:{}@cluster0.9wyzxdq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'.format(
    config('MONGODB_PASSWORD', default='password')
)