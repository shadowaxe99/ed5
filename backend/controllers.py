```python
from models import Influencer, IncomeExpense, Contract, Content
from datetime import datetime

def handle_income_expense(influencer_id, income=None, expense=None):
    influencer = Influencer.query.get(influencer_id)
    if not influencer:
        return {"error": "Influencer not found"}, 404

    if income:
        income_expense = IncomeExpense(influencer_id=influencer_id, type='income', amount=income, date=datetime.now())
        influencer.income_expenses.append(income_expense)
    if expense:
        income_expense = IncomeExpense(influencer_id=influencer_id, type='expense', amount=expense, date=datetime.now())
        influencer.income_expenses.append(income_expense)

    influencer.save()
    return {"message": "Income/Expense recorded successfully"}, 200

def manage_contract(influencer_id, brand_name, contract_details, status):
    influencer = Influencer.query.get(influencer_id)
    if not influencer:
        return {"error": "Influencer not found"}, 404

    contract = Contract(influencer_id=influencer_id, brand_name=brand_name, details=contract_details, status=status, date=datetime.now())
    influencer.contracts.append(contract)
    influencer.save()
    return {"message": "Contract managed successfully"}, 200

def schedule_content(influencer_id, content_details, post_date):
    influencer = Influencer.query.get(influencer_id)
    if not influencer:
        return {"error": "Influencer not found"}, 404

    content = Content(influencer_id=influencer_id, details=content_details, post_date=post_date)
    influencer.contents.append(content)
    influencer.save()
    return {"message": "Content scheduled successfully"}, 200
```