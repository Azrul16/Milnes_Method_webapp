function solveProblem() {
    const problemSelect = document.getElementById('problemSelect').value;
    const stepSize = parseFloat(document.getElementById('stepSize').value); // Get the step size input
    const steps = parseInt(document.getElementById('steps').value); // Get the number of steps input
  
    let timeValues = [];
    let solutionValues = [];
    let iterationResults = [];
  
    const problemDescription = document.getElementById('problemDescription');
    const inputs = getInputs(problemSelect);
  
    let description = '';
  
    switch (problemSelect) {
      case 'populationGrowth':
        solvePopulationGrowth(timeValues, solutionValues, iterationResults, stepSize, steps, inputs.initialPopulation, inputs.growthRate);
        description = 'This problem models population growth over time using Milne’s Method.';
        break;
      case 'chemicalReaction':
        solveChemicalReaction(timeValues, solutionValues, iterationResults, stepSize, steps, inputs.initialConcentration, inputs.rateConstant);
        description = 'This problem models a chemical reaction rate over time using Milne’s Method.';
        break;
      case 'projectileMotion':
        solveProjectileMotion(timeValues, solutionValues, iterationResults, stepSize, steps, inputs.initialVelocity, inputs.initialAngle, inputs.gravity);
        description = 'This problem models the trajectory of a projectile over time using Milne’s Method.';
        break;
      case 'rcCircuit':
        solveRCCircuit(timeValues, solutionValues, iterationResults, stepSize, steps, inputs.initialCharge, inputs.resistance, inputs.capacitance);
        description = 'This problem models the charge decay in an RC circuit using Milne’s Method.';
        break;
      case 'thermalDynamics':
        solveThermalDynamics(timeValues, solutionValues, iterationResults, stepSize, steps, inputs.initialTemperature, inputs.ambientTemperature, inputs.k);
        description = 'This problem models the cooling process of an object over time using Milne’s Method.';
        break;
    }
  
    // Update problem description
    problemDescription.innerText = description;
  
    // Show iteration results
    showIterationResults(iterationResults);
  
    // Plot the graph
    plotGraph(timeValues, solutionValues);
  }
  
  function getInputs(problem) {
    let inputs = {};
  
    switch (problem) {
      case 'populationGrowth':
        inputs.initialPopulation = parseFloat(document.getElementById('initialPopulation').value);
        inputs.growthRate = parseFloat(document.getElementById('growthRate').value);
        break;
      case 'chemicalReaction':
        inputs.initialConcentration = parseFloat(document.getElementById('initialConcentration').value);
        inputs.rateConstant = parseFloat(document.getElementById('rateConstant').value);
        break;
      case 'projectileMotion':
        inputs.initialVelocity = parseFloat(document.getElementById('initialVelocity').value);
        inputs.initialAngle = parseFloat(document.getElementById('initialAngle').value);
        inputs.gravity = parseFloat(document.getElementById('gravity').value);
        break;
      case 'rcCircuit':
        inputs.initialCharge = parseFloat(document.getElementById('initialCharge').value);
        inputs.resistance = parseFloat(document.getElementById('resistance').value);
        inputs.capacitance = parseFloat(document.getElementById('capacitance').value);
        break;
      case 'thermalDynamics':
        inputs.initialTemperature = parseFloat(document.getElementById('initialTemperature').value);
        inputs.ambientTemperature = parseFloat(document.getElementById('ambientTemperature').value);
        inputs.k = parseFloat(document.getElementById('k').value);
        break;
    }
  
    return inputs;
  }
  
  function showIterationResults(iterationResults) {
    const iterationResultsDiv = document.getElementById('iterationResults');
    iterationResultsDiv.innerHTML = '';
    
    iterationResults.forEach((result, index) => {
      const div = document.createElement('div');
      div.innerText = `Iteration ${index}: Time = ${result.time}, Solution = ${result.solution}`;
      iterationResultsDiv.appendChild(div);
    });
  }
  
  function plotGraph(timeValues, solutionValues) {
    const ctx = document.getElementById('solutionGraph').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: timeValues,
        datasets: [{
          label: 'Solution Values',
          data: solutionValues,
          borderColor: 'blue',
          fill: false,
        }]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Time'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Solution Value'
            }
          }
        }
      }
    });
  }
  
  function solvePopulationGrowth(timeValues, solutionValues, iterationResults, stepSize, steps, initialPopulation, growthRate) {
    let population = initialPopulation;
  
    for (let t = 0; t <= steps; t++) {
      timeValues.push(t * stepSize);
      solutionValues.push(population);
      iterationResults.push({ time: t * stepSize, solution: population });
  
      population += stepSize * growthRate * population;
    }
  }
  
  function solveChemicalReaction(timeValues, solutionValues, iterationResults, stepSize, steps, initialConcentration, rateConstant) {
    let concentration = initialConcentration;
  
    for (let t = 0; t <= steps; t++) {
      timeValues.push(t * stepSize);
      solutionValues.push(concentration);
      iterationResults.push({ time: t * stepSize, solution: concentration });
  
      concentration -= stepSize * rateConstant * concentration;
    }
  }
  
  function solveProjectileMotion(timeValues, solutionValues, iterationResults, stepSize, steps, initialVelocity, initialAngle, gravity) {
    let velocity = initialVelocity;
    let angle = initialAngle;
    let position = 0;
  
    for (let t = 0; t <= steps; t++) {
      timeValues.push(t * stepSize);
      solutionValues.push(position);
      iterationResults.push({ time: t * stepSize, solution: position });
  
      position = velocity * t * Math.cos(angle) - 0.5 * gravity * Math.pow(t, 2);
    }
  }
  
  function solveRCCircuit(timeValues, solutionValues, iterationResults, stepSize, steps, initialCharge, resistance, capacitance) {
    let charge = initialCharge;
    const tau = resistance * capacitance;
  
    for (let t = 0; t <= steps; t++) {
      timeValues.push(t * stepSize);
      solutionValues.push(charge);
      iterationResults.push({ time: t * stepSize, solution: charge });
  
      charge = initialCharge * Math.exp(-t / tau);
    }
  }
  
  function solveThermalDynamics(timeValues, solutionValues, iterationResults, stepSize, steps, initialTemperature, ambientTemperature, k) {
    let temperature = initialTemperature;
  
    for (let t = 0; t <= steps; t++) {
      timeValues.push(t * stepSize);
      solutionValues.push(temperature);
      iterationResults.push({ time: t * stepSize, solution: temperature });
  
      temperature -= stepSize * k * (temperature - ambientTemperature);
    }
  }
  
  function updateInputFields() {
    const problemSelect = document.getElementById('problemSelect').value;
    const inputFieldsDiv = document.getElementById('inputFields');
  
    let fieldsHTML = '';
  
    switch (problemSelect) {
      case 'populationGrowth':
        fieldsHTML = `
          <label for="initialPopulation">Initial Population:</label>
          <input type="number" id="initialPopulation" value="1000">
          <label for="growthRate">Growth Rate:</label>
          <input type="number" id="growthRate" value="0.05">
        `;
        break;
      case 'chemicalReaction':
        fieldsHTML = `
          <label for="initialConcentration">Initial Concentration:</label>
          <input type="number" id="initialConcentration" value="1000">
          <label for="rateConstant">Rate Constant:</label>
          <input type="number" id="rateConstant" value="0.1">
        `;
        break;
      case 'projectileMotion':
        fieldsHTML = `
          <label for="initialVelocity">Initial Velocity:</label>
          <input type="number" id="initialVelocity" value="50">
          <label for="initialAngle">Initial Angle (degrees):</label>
          <input type="number" id="initialAngle" value="45">
          <label for="gravity">Gravity:</label>
          <input type="number" id="gravity" value="9.81">
        `;
        break;
      case 'rcCircuit':
        fieldsHTML = `
          <label for="initialCharge">Initial Charge:</label>
          <input type="number" id="initialCharge" value="100">
          <label for="resistance">Resistance (R):</label>
          <input type="number" id="resistance" value="1000">
          <label for="capacitance">Capacitance (C):</label>
          <input type="number" id="capacitance" value="0.01">
        `;
        break;
      case 'thermalDynamics':
        fieldsHTML = `
          <label for="initialTemperature">Initial Temperature:</label>
          <input type="number" id="initialTemperature" value="100">
          <label for="ambientTemperature">Ambient Temperature:</label>
          <input type="number" id="ambientTemperature" value="25">
          <label for="k">Thermal Constant (k):</label>
          <input type="number" id="k" value="0.02">
        `;
        break;
    }
  
    inputFieldsDiv.innerHTML = fieldsHTML;
  }
  
  // Update input fields whenever a problem is selected
  document.getElementById('problemSelect').addEventListener('change', updateInputFields);
  
  // Initialize input fields on page load
  updateInputFields();
  