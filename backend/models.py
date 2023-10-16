```python
from sqlalchemy import Column, Integer, String, DateTime, Float
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Influencer(Base):
    __tablename__ = 'influencers'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)

class IncomeExpense(Base):
    __tablename__ = 'income_expenses'

    id = Column(Integer, primary_key=True)
    influencer_id = Column(Integer)
    type = Column(String)
    amount = Column(Float)
    date = Column(DateTime)

class Contract(Base):
    __tablename__ = 'contracts'

    id = Column(Integer, primary_key=True)
    influencer_id = Column(Integer)
    brand_name = Column(String)
    contract_details = Column(String)
    status = Column(String)
    renewal_date = Column(DateTime)

class Content(Base):
    __tablename__ = 'contents'

    id = Column(Integer, primary_key=True)
    influencer_id = Column(Integer)
    content_details = Column(String)
    schedule_date = Column(DateTime)

def create_all_models(engine):
    Base.metadata.create_all(engine)
```