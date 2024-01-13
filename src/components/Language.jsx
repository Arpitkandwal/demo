import React, { useState } from 'react';

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const languages = [
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
    'Korean',
    'Arabic',
    'Russian',
    'Italian',
    'Portuguese',
    'Dutch',
    'Swedish',
    'Norwegian',
    'Danish',
    'Finnish',
    'Turkish',
    'Hindi',
    'Bengali',
    'Urdu',
    // Add more languages as needed
  ];

  return (
    <div className='flex justify-end'>
        <div className='p-1'>
      <select
        name="language"
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="border rounded-md bg-white text-sm"
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
      </div>
    </div>
  );
};

export default LanguageSelector;
