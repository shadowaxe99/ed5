import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContract } from '../redux/actions';

const ContractManager = () => {
    const dispatch = useDispatch();
    const [contract, setContract] = useState({
        brand: '',
        details: '',
        status: '',
        renewalDate: ''
    });

    const handleInputChange = (event) => {
        setContract({
            ...contract,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateContract(contract));
        setContract({
            brand: '',
            details: '',
            status: '',
            renewalDate: ''
        });
    };

    return (
        <div id="contract-manager">
            <form onSubmit={handleSubmit}>
                <label>
                    Brand:
                    <input type="text" name="brand" value={contract.brand} onChange={handleInputChange} required />
                </label>
                <label>
                    Details:
                    <textarea name="details" value={contract.details} onChange={handleInputChange} required />
                </label>
                <label>
                    Status:
                    <select name="status" value={contract.status} onChange={handleInputChange} required>
                        <option value="">Select status</option>
                        <option value="active">Active</option>
                        <option value="pending">Pending</option>
                        <option value="expired">Expired</option>
                    </select>
                </label>
                <label>
                    Renewal Date:
                    <input type="date" name="renewalDate" value={contract.renewalDate} onChange={handleInputChange} required />
                </label>
                <button type="submit">Update Contract</button>
            </form>
        </div>
    );
};

export default ContractManager;