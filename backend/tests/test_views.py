```python
import pytest
from flask import url_for

from app import create_app
from views import register_views

@pytest.fixture
def app():
    app = create_app()
    register_views(app)
    return app

def test_income_expense_endpoint(client):
    response = client.get(url_for('income_expense'))
    assert response.status_code == 200

def test_contract_endpoint(client):
    response = client.get(url_for('contract'))
    assert response.status_code == 200

def test_content_endpoint(client):
    response = client.get(url_for('content'))
    assert response.status_code == 200
```