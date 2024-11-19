# Milne's Method Solver

This project allows you to solve various real-life problems using **Milne's Method**. The problems cover different domains, including population growth, chemical reactions, projectile motion, RC circuit dynamics, and thermal dynamics. The user can input values for step size and number of steps, and the solution is calculated and displayed in both iteration results and a graphical plot.

## Features

- **Interactive UI**: Users can select the problem type, input parameters, and view the results interactively.
- **Real-time Results**: For each problem, the solution is calculated step by step and displayed both as a list of iteration results and as a graph.
- **Graphical Representation**: The graph visualizes the solution's behavior over time for better understanding.
- **Customizable Inputs**: The user can define the initial conditions (e.g., population, chemical concentration, etc.) and adjust the step size and number of steps.

## Supported Problems

1. **Population Growth**: Models the growth of a population over time.
2. **Chemical Reaction**: Models the decay of a chemical concentration over time.
3. **Projectile Motion**: Simulates the trajectory of a projectile launched at a certain velocity and angle.
4. **RC Circuit**: Simulates the discharge of a capacitor in an RC circuit.
5. **Thermal Dynamics**: Models the cooling of an object over time according to Newton's Law of Cooling.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/milnes-method-solver.git
   cd milnes-method-solver
   ```
 
# Problem Solver

## How to Use

1. **Select a Problem**: Choose from the dropdown list of problems.
2. **Input Parameters**: Provide the necessary values (e.g., initial population, rate constant, etc.), step size, and number of steps.
3. **Click Solve**: Click the "Solve" button to calculate the solution.
4. **View Results**: The iteration results will be displayed first, followed by a graph showing the solution's behavior over time.

## Project Structure

- **index.html**: The main HTML file that structures the UI and links to the JavaScript files.
- **app.js**: Contains the logic for solving each problem, handling user inputs, and rendering results.
- **solver.js**: Contains the mathematical functions for solving each type of problem using Milne's Method.
- **style.css**: Styles for the webpage, including layout adjustments for graph and input fields.

## Example of Usage

### Example: Population Growth

1. Select **Population Growth** from the dropdown.
2. Enter the initial population (e.g., `1000`), growth rate (e.g., `0.05`), and the number of steps (e.g., `10`).
3. Set a step size (e.g., `0.1`).
4. Click **Solve** to see the iteration results and the graph.

## Technologies Used

- **HTML5**: For structuring the webpage.
- **CSS3**: For styling and layout adjustments.
- **JavaScript**: For problem-solving logic and UI interactivity.
- **Chart.js**: A library used to plot the graphs.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push to the branch.
5. Submit a pull request.
