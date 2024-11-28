import React, { useState, useEffect } from 'react';
import './CostEstimator.css';
import { toast } from 'react-toastify'; 

const CostEstimator = () => {
  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    email: '', 
    address: '',
    area: '',
    areaOfCompound: '',
    selectedPackage: '',
  });

  const [costs, setCosts] = useState({ basic: null, standard: null, premium: null });

  const [showCosts, setShowCosts] = useState(false);

  const packageCosts = {
    Residential_Building_Packages_Concrete_Blocks: { basic: 1800, standard: 1950, premium: 2100 },
    Residential_Building_Packages_Red_Clay_Bricks: { basic: 2000, standard: 2150, premium: 2350 },
  };

  const calculateCosts = () => {
    try {
      const area = parseFloat(formData.area) || 0;
      const compoundArea = parseFloat(formData.areaOfCompound) || 0;

      const packageCost = packageCosts[formData.selectedPackage];

      if (!packageCost) return; 

      const newCosts = {
        basic: area * packageCost.basic + compoundArea * 450,
        standard: area * packageCost.standard + compoundArea * 450,
        premium: area * packageCost.premium + compoundArea * 450,
      };

      setCosts(newCosts); 
    } catch (error) {
      console.error('Error calculating costs:', error);
    }
  };

  useEffect(() => {
    calculateCosts();
  }, [formData.area, formData.areaOfCompound, formData.selectedPackage]);

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));

    data.append('basic_cost', costs.basic?.toFixed(2) || '0');
    data.append('standard_cost', costs.standard?.toFixed(2) || '0');
    data.append('premium_cost', costs.premium?.toFixed(2) || '0');

    data.append('access_key', '0fb1921d-9ca9-4195-b3c3-7f32725b7166');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      const responseData = await response.json();

      if (response.ok && responseData.success) {
        toast.success('Form Submitted Successfully!');

        setShowCosts(true);

        setFormData({
          phone: '',
          name: '',
          email: '',
          address: '',
          area: '',
          areaOfCompound: '',
          selectedPackage: '',
        });
      } else {
        toast.error(`Error: ${responseData.message || 'Failed to submit form'}`);
      }
    } catch (error) {
      console.error('Submission Error:', error);
      toast.error('An error occurred while submitting the form.');
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handlePackageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedPackage: e.target.value,
    }));
  };

  return (
    <div className="cost-estimator-container">
      <form className="cost-estimator-form" onSubmit={onSubmit}>
        <h2>Cost Estimator</h2>

        <div className="form-group">
          <label htmlFor="phone">Mobile Number</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your mobile number"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Location of Your Plot</label>
          <input
            type="text"
            id="address"
            placeholder="Enter the location"
            required
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="area">Super Built Up Area (sq.ft)</label>
          <input
            type="number"
            id="area"
            min="0"
            placeholder="Enter area in sq.ft"
            required
            value={formData.area}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="areaOfCompound">Compound Area 450 Rs/sq.ft</label>
          <input
            type="number"
            id="areaOfCompound"
            min="0"
            required
            placeholder="Enter area in sq.ft"
            value={formData.areaOfCompound}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="selectedPackage">Select Package</label>
          <select id="selectedPackage" value={formData.selectedPackage} onChange={handlePackageChange}>
            <option value="">-- Select Package --</option> 
            <option value="Residential_Building_Packages_Concrete_Blocks">
              Residential Building Packages (Concrete Blocks)
            </option>
            <option value="Residential_Building_Packages_Red_Clay_Bricks">
              Residential Building Packages (Red Clay Bricks)
            </option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Estimate Cost & Submit</button>
      </form>

      {showCosts && costs.basic !== null && (
        <div className="cost-results">
          <h3>Estimated Costs</h3>
          <div className="cost-result">
            <h4>Basic Package: ₹{costs.basic?.toFixed(2)}</h4>
          </div>
          <div className="cost-result">
            <h4>Standard Package: ₹{costs.standard?.toFixed(2)}</h4>
          </div>
          <div className="cost-result">
            <h4>Premium Package: ₹{costs.premium?.toFixed(2)}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default CostEstimator;
