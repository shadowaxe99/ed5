```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from .models import create_all_models
from .views import register_views

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/influencer_db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db = SQLAlchemy(app)
    create_all_models(db)

    register_views(app)

    return app

app = create_app()
```