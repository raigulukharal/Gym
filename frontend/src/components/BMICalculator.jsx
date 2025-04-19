import React, { useState } from 'react';
import { toast } from 'react-toastify';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [gender, setGender] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');

  const convertToCm = () => {
    const f = parseFloat(feet);
    const i = parseFloat(inches);
    if (isNaN(f) || isNaN(i)) {
      toast.error('Please enter valid feet and inches!');
      return;
    }
    const cm = (f * 30.48 + i * 2.54).toFixed(2);
    setHeight(cm);
    toast.success(`Your height in cm is ${cm} cm`);
  };

  const calculatedBMI = (e) => {
    e.preventDefault();
    if (!weight || !height || !gender) {
      toast.error('Please fill all fields');
      return;
    }

    const heightInMeters = parseFloat(height / 100);
    const w = parseFloat(weight);
    const bmiValue = (w / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);
    toast.success(`Your BMI is ${bmiValue}`);

    if (bmiValue < 18.5) {
      toast.warning('You are underweight. Consider seeking healthcare advice.');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      toast.success('You are normal. Keep your lifestyle healthy.');
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      toast.warning('You are overweight. Consider improving your diet and exercise.');
    } else {
      toast.error('You are in the Obese Range. Please consult a healthcare provider.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-center mb-10">BMI Calculator</h1>

      {/* Height Converter */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-8 w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-4">Convert Height to CM</h2>
        <div className="flex gap-4 mb-4">
          <input
            type="number"
            placeholder="Feet"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
            className="w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Inches"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
            className="w-1/2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={convertToCm}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Convert to CM
        </button>
        {height && (
          <p className="text-center text-gray-700 mt-2 font-medium">
            Height in CM: {height}
          </p>
        )}
      </div>

      {/* BMI Calculator */}
      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl bg-white p-6 rounded-xl shadow-lg">
        <div>
          <form onSubmit={calculatedBMI} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your height in cm"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your weight in kg"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Gender</label>
              <div className="flex gap-6 mt-1">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="Male"
                    name="gender"
                    checked={gender === 'Male'}
                    onChange={(e) => setGender(e.target.value)}
                    className="form-radio"
                  />
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="Female"
                    name="gender"
                    checked={gender === 'Female'}
                    onChange={(e) => setGender(e.target.value)}
                    className="form-radio"
                  />
                  Female
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Calculate BMI
            </button>

            {bmi && (
              <div className="mt-4 text-center font-semibold text-green-700">
                Your BMI is: {bmi}
              </div>
            )}
          </form>
        </div>

        {/* Right: Image */}
        <div className="flex items-center justify-center">
          <img
            src="bmi.jpg"
            alt="BMI"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
