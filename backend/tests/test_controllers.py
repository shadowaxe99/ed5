```python
import pytest
from app import create_app
from models import db, Influencer, IncomeExpense, Contract, Content
from controllers import handle_income_expense, manage_contract, schedule_content

@pytest.fixture
def test_client():
    app = create_app()
    app.config['TESTING'] = True

    with app.test_client() as test_client:
        with app.app_context():
            db.create_all()
        yield test_client

def test_handle_income_expense(test_client):
    influencer = Influencer(name='Test Influencer')
    db.session.add(influencer)
    db.session.commit()

    income_expense = IncomeExpense(influencer_id=influencer.id, income=1000, expense=500)
    handle_income_expense(income_expense)

    assert influencer.income_expenses[0].income == 1000
    assert influencer.income_expenses[0].expense == 500

def test_manage_contract(test_client):
    influencer = Influencer(name='Test Influencer')
    db.session.add(influencer)
    db.session.commit()

    contract = Contract(influencer_id=influencer.id, brand='Test Brand', status='Active')
    manage_contract(contract)

    assert influencer.contracts[0].brand == 'Test Brand'
    assert influencer.contracts[0].status == 'Active'

def test_schedule_content(test_client):
    influencer = Influencer(name='Test Influencer')
    db.session.add(influencer)
    db.session.commit()

    content = Content(influencer_id=influencer.id, title='Test Content', schedule='2022-12-31 23:59:59')
    schedule_content(content)

    assert influencer.contents[0].title == 'Test Content'
    assert influencer.contents[0].schedule == '2022-12-31 23:59:59'
```