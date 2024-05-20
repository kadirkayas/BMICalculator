export function Text(){

  return (
    <div  className="text-container">
      <h1 style={{ color: '#333' }}>What is Body Mass Index (BMI)?</h1>
      <p>Body Mass Index, commonly known as BMI, is a measure that uses a person's weight and height to estimate their body fat. BMI is calculated by dividing a person's weight in kilograms by the square of their height in meters. It is expressed with a simple mathematical formula:</p>
      <p><strong>BMI = Weight (kg) / Height (m)<sup>2</sup></strong></p>
      
      <h2>How to Calculate BMI?</h2>
      <p>For example, to calculate the BMI of a person who weighs 70 kilograms and is 1.75 meters tall, you can follow these steps:</p>
      <ol>
        <li>Square the height: 1.75<sup>2</sup> = 3.06</li>
        <li>Divide the weight by the squared height: 70 / 3.06 ≈ 22.9</li>
      </ol>
      <p>This person's BMI is approximately 22.9.</p>
      
      <h2>Interpretation of BMI Values</h2>
      <p>BMI values for adults are generally categorized as follows:</p>
      <ul>
        <li><strong>Below 18.5:</strong> Underweight</li>
        <li><strong>18.5 - 24.9:</strong> Normal weight</li>
        <li><strong>25.0 - 29.9:</strong> Overweight</li>
        <li><strong>30.0 - 34.9:</strong> Class 1 Obesity</li>
        <li><strong>35.0 - 39.9:</strong> Class 2 Obesity</li>
        <li><strong>40.0 and Above:</strong> Class 3 (Morbid) Obesity</li>
      </ul>
      <p>These categories provide a general guide to determine if an individual's body weight is healthy. However, BMI is just a starting point, and other factors should be considered to fully assess an individual's health status.</p>
      
      <h2>Limitations of BMI</h2>
      <p>Although BMI is a useful tool for assessing the general health of a broad population, it has certain limitations:</p>
      <ul>
        <li><strong>Muscle Mass:</strong> BMI does not directly measure body fat. Individuals with high muscle mass, such as athletes or bodybuilders, may have a high BMI despite having a low body fat percentage.</li>
        <li><strong>Age and Gender:</strong> Older adults and women typically have higher body fat percentages, which can affect BMI values.</li>
        <li><strong>Body Fat Distribution:</strong> BMI does not indicate where body fat is distributed. Fat stored around the abdomen poses higher health risks, but BMI does not reflect this difference.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Body Mass Index is a simple and widely used measure for assessing general health and potential health risks. However, more comprehensive and individualized health assessments require additional tests and evaluations by medical professionals. BMI can be a starting point for maintaining a healthy lifestyle, but individual differences and other health indicators should also be considered.</p>
    </div>
  );
};

