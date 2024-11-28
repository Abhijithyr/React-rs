import React, { useState } from 'react';
import './Modal.css'; // Import your CSS file for styling
import { toast } from 'react-toastify'; // Import toast for notifications

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true); // State to control modal visibility
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    area: '',
    areaOfCompound: '',
    selectedPackage: '',
  });
  const [costs, setCosts] = useState({ basic: null, standard: null, premium: null });
  const [submittedData, setSubmittedData] = useState(null); // State to hold submitted data

  // Package cost constants
  const packageCosts = {
    Residential_Building_Packages_Concrete_Blocks: { basic: 1800, standard: 1950, premium: 2100 },
    Residential_Building_Packages_Red_Clay_Bricks: { basic: 2000, standard: 2150, premium: 2350 },
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handlePackageChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedPackage: event.target.value,
    }));
  };

  const calculateCosts = () => {
    const area = parseFloat(formData.area) || 0;
    const compoundArea = parseFloat(formData.areaOfCompound) || 0;
    const packageCost = packageCosts[formData.selectedPackage];

    if (!packageCost) return { basic: 0, standard: 0, premium: 0 };

    return {
      basic: (area * packageCost.basic) + (compoundArea * 450),
      standard: (area * packageCost.standard) + (compoundArea * 450),
      premium: (area * packageCost.premium) + (compoundArea * 450),
    };
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const calculatedCosts = calculateCosts();
    setCosts(calculatedCosts);

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));

    data.append('basic_cost', calculatedCosts.basic.toFixed(2));
    data.append('standard_cost', calculatedCosts.standard.toFixed(2));
    data.append('premium_cost', calculatedCosts.premium.toFixed(2));
    data.append('access_key', '0fb1921d-9ca9-4195-b3c3-7f32725b7166');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      const responseData = await response.json();
      if (response.ok && responseData.success) {
        toast.success('Form Submitted Successfully!');
        // Set submitted data to be visible
        setSubmittedData({ ...formData, costs: calculatedCosts });
        // Reset form data without closing modal
        setFormData({
          name: '',
          phone: '',
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

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Talk To Our Experts</h5>
          <button type="button" className="close" onClick={() => setIsOpen(false)} aria-label="Close">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <form className="form lets-build-form" onSubmit={onSubmit} autoComplete="off">
            <div className="modal_form__group">
              <input 
                type="text" 
                id="name" 
                className="modal_form__field" 
                placeholder="Name*" 
                value={formData.name} 
                onChange={handleChange} 
                maxLength="30" 
                required 
              />
              <label htmlFor="name" className="form__label">Name*</label>
            </div>
            <div className="modal_form__group">
              <input 
                id="phone" 
                placeholder="Mobile Number*" 
                className="modal_form__field" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
              <label htmlFor="phone" className="form__label">Mobile Number*</label>
            </div>
            <div className="modal_form__group">
              <input 
                type="email" 
                id="email" 
                className="modal_form__field" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleChange} 
                maxLength="60" 
              />
              <label htmlFor="email" className="form__label">Email</label>
            </div>
            <div className='modal_subhd'>
              <h4>Take a Look of Estimated Cost</h4>
            </div>
            <div className="modal_form__group">
              <input 
                type="text" 
                id="address" 
                className="modal_form__field" 
                placeholder="Location of your Plot*" 
                value={formData.address} 
                onChange={handleChange} 
                required 
              />
              <label htmlFor="address" className="form__label">Location of your Plot*</label>
            </div>

            <div className="modal_form__group">
              <input
                type="number"
                id="area"
                className="modal_form__field"
                placeholder="Super Built Up Area (sq.ft)*"
                required
                value={formData.area}
                onChange={handleChange}
              />
              <label htmlFor="area">Super Built Up Area (sq.ft)*</label>
            </div>

            <div className="modal_form__group">
              <input
                type="number"
                id="areaOfCompound"
                className="modal_form__field"
                placeholder="Compound Area (450 Rs/sq.ft)*"
                required
                value={formData.areaOfCompound}
                onChange={handleChange}
              />
              <label htmlFor="areaOfCompound">Compound Area (450 Rs/sq.ft)*</label>
            </div>

            <div className="modal_form__group">
              <select
                id="selectedPackage"
                className="modal_form__field"
                value={formData.selectedPackage}
                onChange={handlePackageChange}
                required
              >
                <option value="">Select Package</option>
                <option value="Residential_Building_Packages_Concrete_Blocks">
                  Residential Building Packages (Concrete Blocks)
                </option>
                <option value="Residential_Building_Packages_Red_Clay_Bricks">
                  Residential Building Packages (Red Clay Bricks)
                </option>
              </select>
              <label htmlFor="selectedPackage">Select Package*</label>
            </div>

            <button type="submit" className="btn btn-primary btn-lg btn-block modal_submit_btn">
              Estimate Cost & Submit
            </button>
          </form>

          {/* Display submitted data and costs */}
          {submittedData && (
            <div className="submitted-data">
              {/* <h3>Submitted Data</h3>
              <p>Name: {submittedData.name}</p>
              <p>Phone: {submittedData.phone}</p>
              <p>Email: {submittedData.email}</p>
              <p>Location: {submittedData.address}</p>
              <p>Super Built Up Area: {submittedData.area} sq.ft</p>
              <p>Compound Area: {submittedData.areaOfCompound} sq.ft</p> */}
              <h4>Estimated Costs</h4>
              <p>Basic Package: ₹{submittedData.costs.basic?.toFixed(2)}</p>
              <p>Standard Package: ₹{submittedData.costs.standard?.toFixed(2)}</p>
              <p>Premium Package: ₹{submittedData.costs.premium?.toFixed(2)}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
