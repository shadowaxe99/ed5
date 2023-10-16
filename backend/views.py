```python
from flask import Blueprint, request
from .controllers import handle_income_expense, manage_contract, schedule_content

bp = Blueprint('views', __name__)

@bp.route('/income_expense', methods=['POST'])
def add_income_expense():
    data = request.get_json()
    return handle_income_expense(data)

@bp.route('/contract', methods=['POST', 'PUT'])
def manage_contracts():
    data = request.get_json()
    return manage_contract(data)

@bp.route('/content', methods=['POST'])
def schedule_contents():
    data = request.get_json()
    return schedule_content(data)

def register_views(app):
    app.register_blueprint(bp)
```