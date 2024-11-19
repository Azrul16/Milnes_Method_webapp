// Population Growth Solver using Milne's Method
function solvePopulationGrowth(timeValues, solutionValues, stepSize, steps, initialPopulation, growthRate) {
    let P0 = initialPopulation;
    let r = growthRate;
    
    // Initial conditions
    timeValues.push(0);
    solutionValues.push(P0);
    let P1 = P0 + stepSize * r * P0;  // Initial approximation
    
    timeValues.push(stepSize);
    solutionValues.push(P1);
  
    // Milne's method for subsequent time steps
    for (let n = 1; n < steps - 1; n++) {
      let f0 = r * solutionValues[n - 1];
      let f1 = r * solutionValues[n];
      let f2 = r * solutionValues[n - 1];
      
      // Milne's method formula
      let P_next = solutionValues[n] + (4 * stepSize / 3) * (2 * f1 - f0 + 2 * f2);
      
      timeValues.push((n + 1) * stepSize);
      solutionValues.push(P_next);
    }
  }
  
  // Chemical Reaction Solver using Milne's Method
  function solveChemicalReaction(timeValues, solutionValues, stepSize, steps, initialConcentration, rateConstant) {
    let k = rateConstant;
    let C0 = initialConcentration;
    
    // Initial conditions
    timeValues.push(0);
    solutionValues.push(C0);
    let C1 = C0 - stepSize * k * C0;  // Initial approximation
    
    timeValues.push(stepSize);
    solutionValues.push(C1);
  
    // Milne's method for subsequent time steps
    for (let n = 1; n < steps - 1; n++) {
      let f0 = -k * solutionValues[n - 1];
      let f1 = -k * solutionValues[n];
      let f2 = -k * solutionValues[n - 1];
      
      // Milne's method formula
      let C_next = solutionValues[n] + (4 * stepSize / 3) * (2 * f1 - f0 + 2 * f2);
      
      timeValues.push((n + 1) * stepSize);
      solutionValues.push(C_next);
    }
  }
  
  // RC Circuit Solver using Milne's Method
  function solveRCCircuit(timeValues, solutionValues, stepSize, steps, initialCharge, resistance, capacitance) {
    let Q0 = initialCharge;
    let R = resistance;
    let C = capacitance;
    
    // Initial conditions
    timeValues.push(0);
    solutionValues.push(Q0);
    let Q1 = Q0 * Math.exp(-stepSize / (R * C));  // Initial approximation
    
    timeValues.push(stepSize);
    solutionValues.push(Q1);
  
    // Milne's method for subsequent time steps
    for (let n = 1; n < steps - 1; n++) {
      let f0 = -solutionValues[n - 1] / (R * C);
      let f1 = -solutionValues[n] / (R * C);
      let f2 = -solutionValues[n - 1] / (R * C);
      
      // Milne's method formula
      let Q_next = solutionValues[n] + (4 * stepSize / 3) * (2 * f1 - f0 + 2 * f2);
      
      timeValues.push((n + 1) * stepSize);
      solutionValues.push(Q_next);
    }
  }
  
  // Add other solvers (Projectile Motion, Thermal Dynamics, etc.)
  