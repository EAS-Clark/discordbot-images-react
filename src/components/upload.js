import { useState } from 'react';

export default function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)
    fetch('/api/images', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'action': 'upload'
      },
      body: JSON.stringify(inputs),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter image HTML_URL:
        <input
          type="text"
          name="HTML_URL"
          value={inputs.HTML_URL || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter image name:
        <input
          type="text"
          name="Name_of_image"
          value={inputs.Name_of_image || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter image tag:
        <input
          type="text"
          name="tag"
          value={inputs.tag || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>

  )
}


