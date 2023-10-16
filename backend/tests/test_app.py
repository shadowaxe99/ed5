```python
import pytest
from app import create_app

@pytest.fixture
def app():
    app = create_app()
    return app

def test_create_app(app):
    assert app is not None, "App creation failed."

def test_app_route(app):
    client = app.test_client()
    response = client.get('/')
    assert response.status_code == 200, "Root route failed."
```