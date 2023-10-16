```python
import pytest
from models import Influencer, IncomeExpense, Contract, Content

def test_influencer_model():
    influencer = Influencer(name="Test Influencer", email="test@test.com")
    assert influencer.name == "Test Influencer"
    assert influencer.email == "test@test.com"

def test_income_expense_model():
    income_expense = IncomeExpense(influencer_id=1, income=5000, expense=2000)
    assert income_expense.influencer_id == 1
    assert income_expense.income == 5000
    assert income_expense.expense == 2000

def test_contract_model():
    contract = Contract(influencer_id=1, brand_name="Test Brand", contract_details="Test Contract", status="Active")
    assert contract.influencer_id == 1
    assert contract.brand_name == "Test Brand"
    assert contract.contract_details == "Test Contract"
    assert contract.status == "Active"

def test_content_model():
    content = Content(influencer_id=1, content_details="Test Content", schedule="2022-12-31 23:59:59")
    assert content.influencer_id == 1
    assert content.content_details == "Test Content"
    assert content.schedule == "2022-12-31 23:59:59"
```